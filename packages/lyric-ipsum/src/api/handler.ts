import * as cheerio from "cheerio";
import { RANDOM_SEARCH_TERMS } from "../lib/searchTerms";

export interface LyricIpsumHandlerOptions {
  /**
   * Optional proxy URL template for scraping Genius pages.
   * Use `{{url}}` as a placeholder for the target URL.
   * Example: `"https://my-proxy.example.com/fetch?url={{url}}"`
   * If omitted, fetches Genius pages directly (works server-side).
   */
  proxyUrl?: string;
}

export interface LyricIpsumRequestParams {
  /** Pre-formatted search: "[Artist]-[Song]" or plain query */
  search?: string | null;
  /** Limit lyrics to N passages/sections */
  passages?: number;
  /** Strip markdown formatting from output */
  plain?: boolean;
}

const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const HEADERS = {
  "User-Agent": USER_AGENT,
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
};

const JSON_HEADERS = {
  "User-Agent": USER_AGENT,
  Accept: "application/json, text/plain, */*",
};

/** Fetch a URL, trying direct first, then optional proxy, then AllOrigins as last resort. */
async function fetchWithFallback(
  url: string,
  options: { proxyUrl?: string; headers?: Record<string, string> }
): Promise<string> {
  const fetchAttempts: Array<{
    fetchUrl: string;
    description: string;
    extractBody?: (res: Response) => Promise<string>;
  }> = [
    { fetchUrl: url, description: "Direct" },
  ];

  if (options.proxyUrl) {
    fetchAttempts.push({
      fetchUrl: options.proxyUrl.replace("{{url}}", encodeURIComponent(url)),
      description: "Custom proxy",
    });
  }

  fetchAttempts.push({
    fetchUrl: `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
    description: "AllOrigins",
    extractBody: async (res: Response) => {
      const data = (await res.json()) as { contents?: string };
      return data.contents ?? "";
    },
  });

  let lastError = "";

  for (const attempt of fetchAttempts) {
    try {
      const res = await fetch(attempt.fetchUrl, {
        method: "GET",
        redirect: "follow",
        headers: options.headers ?? HEADERS,
      });

      if (!res.ok) {
        lastError = `${attempt.description}: ${res.status} ${res.statusText}`;
        continue;
      }

      const body = attempt.extractBody
        ? await attempt.extractBody(res)
        : await res.text();

      if (body && body.length > 50) return body;
      lastError = `${attempt.description}: empty response`;
    } catch (err) {
      lastError = `${attempt.description}: ${err instanceof Error ? err.message : "Unknown error"}`;
    }
  }

  throw new Error(`All fetch attempts failed for ${url}: ${lastError}`);
}

/** Search Genius using their public internal API (no auth required). */
async function searchGenius(
  query: string,
  proxyUrl?: string
): Promise<
  Array<{
    id: number;
    title: string;
    artist: string;
    url: string;
    fullTitle: string;
    releaseDate?: string;
    thumbnailUrl?: string;
  }>
> {
  const searchUrl = `https://genius.com/api/search/song?q=${encodeURIComponent(query)}&per_page=10`;

  const body = await fetchWithFallback(searchUrl, {
    proxyUrl,
    headers: JSON_HEADERS,
  });

  let data: {
    response?: {
      sections?: Array<{
        hits?: Array<{
          result?: {
            id?: number;
            title?: string;
            url?: string;
            full_title?: string;
            artist_names?: string;
            primary_artist_names?: string;
            release_date_for_display?: string;
            song_art_image_thumbnail_url?: string;
          };
        }>;
      }>;
    };
  };

  try {
    data = JSON.parse(body);
  } catch {
    throw new Error("Failed to parse Genius search response");
  }

  const hits =
    data.response?.sections?.flatMap((s) => s.hits ?? []) ?? [];

  return hits
    .filter((h) => h.result?.id && h.result?.url)
    .map((h) => ({
      id: h.result!.id!,
      title: h.result!.title ?? "Unknown",
      artist: h.result!.primary_artist_names ?? h.result!.artist_names ?? "Unknown",
      url: h.result!.url!,
      fullTitle: h.result!.full_title ?? h.result!.title ?? "Unknown",
      releaseDate: h.result!.release_date_for_display,
      thumbnailUrl: h.result!.song_art_image_thumbnail_url,
    }));
}

/** Get song details from Genius's public JSON API (no auth needed). */
async function getSongDetails(
  songId: number,
  proxyUrl?: string
): Promise<{
  title: string;
  artist: string;
  album: string;
  releaseDate: string;
  description: string;
  lyricsState: string;
  annotationCount: number;
  url: string;
}> {
  const apiUrl = `https://genius.com/api/songs/${songId}`;
  const body = await fetchWithFallback(apiUrl, {
    proxyUrl,
    headers: JSON_HEADERS,
  });

  const data = JSON.parse(body) as {
    response?: {
      song?: {
        title?: string;
        artist_names?: string;
        primary_artist_names?: string;
        lyrics_state?: string;
        annotation_count?: number;
        release_date_for_display?: string;
        description_preview?: string;
        url?: string;
        album?: {
          name?: string;
        } | null;
      };
    };
  };

  const song = data.response?.song;
  if (!song) throw new Error("Song not found");

  return {
    title: song.title ?? "Unknown",
    artist: song.primary_artist_names ?? song.artist_names ?? "Unknown",
    album: song.album?.name ?? "Unknown album",
    releaseDate: song.release_date_for_display ?? "Unknown release date",
    description: song.description_preview ?? "No description available",
    lyricsState: song.lyrics_state ?? "unknown",
    annotationCount: song.annotation_count ?? 0,
    url: song.url ?? "",
  };
}

/** Scrape lyrics from a Genius song page. */
async function scrapeLyrics(
  url: string,
  proxyUrl?: string
): Promise<string> {
  const html = await fetchWithFallback(url, { proxyUrl });
  const $ = cheerio.load(html);

  let lyrics = "";

  const lyricSelectors = [
    '[data-lyrics-container="true"]',
    '[class*="Lyrics__Container"]',
    ".lyrics",
    ".song_body-lyrics",
  ];

  for (const selector of lyricSelectors) {
    const elements = $(selector);
    if (elements.length > 0) {
      elements.each((_i, elem) => {
        const htmlContent = $(elem).html();
        if (htmlContent) {
          const text = htmlContent
            .replace(/<br\s*\/?>/gi, "\n")
            .replace(/<\/p>/gi, "\n\n")
            .replace(/<p[^>]*>/gi, "")
            .replace(/<\/div>/gi, "\n")
            .replace(/<div[^>]*>/gi, "")
            .replace(/<[^>]*>/g, "")
            .replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'");
          lyrics += text + "\n";
        }
      });
      if (lyrics.trim()) break;
    }
  }

  // Fallback: embedded JSON data
  if (!lyrics.trim()) {
    $("script:not([src])").each((_i, elem) => {
      const content = $(elem).html() || "";
      if (content.includes("lyrics") && content.includes("{")) {
        const matches = content.match(/"lyrics":\s*"([^"]*?)"/g);
        if (matches) {
          const extracted = matches
            .map((m) => {
              const r = m.match(/"lyrics":\s*"([^"]*?)"/);
              return r
                ? r[1].replace(/\\n/g, "\n").replace(/\\"/g, '"')
                : "";
            })
            .join("\n");
          if (extracted.length > 50) {
            lyrics = extracted;
            return false;
          }
        }
      }
    });
  }

  if (!lyrics.trim()) return "";

  // Clean up
  lyrics = lyrics
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => {
      if (!l) return false;
      if (l.match(/^\d+\s*(Contributors?|Translations?)/i)) return false;
      if (l.match(/Read More|Show More|View|About|Producer|Writer/i))
        return false;
      if (l.includes("genius.com")) return false;
      if (l.match(/^\d+\s*(Views?|Embed)/i)) return false;
      if (l.length > 200) return false;
      return true;
    })
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  // Find first section marker
  const lines = lyrics.split("\n");
  let startIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim().toLowerCase();
    if (
      line.match(
        /^\[(verse|chorus|bridge|pre-chorus|outro|intro|break)/i
      ) ||
      line.match(
        /^(verse|chorus|bridge|pre-chorus|outro|intro|break)\s*\d*/i
      ) ||
      (line.length < 30 &&
        line.match(
          /^(verse|chorus|intro|bridge|outro|hook|refrain)/i
        ))
    ) {
      startIndex = i;
      break;
    }
  }
  if (startIndex > 0) {
    lyrics = lines.slice(startIndex).join("\n").trim();
  }

  // Format section headers as markdown
  lyrics = lyrics.replace(
    /^\[(Verse|Chorus|Bridge|Pre-Chorus|Outro|Intro|Break)([^\]]*)\]/gm,
    "\n## $1$2\n"
  );

  return lyrics;
}

/**
 * Core streaming handler for the Lyric Ipsum API.
 * Returns a ReadableStream of SSE messages.
 * No API keys required — scrapes Genius directly.
 */
export function createLyricIpsumStream(
  params: LyricIpsumRequestParams,
  options: LyricIpsumHandlerOptions = {}
): ReadableStream {
  const { proxyUrl } = options;
  const {
    search: customSearch,
    passages: passageCount = 0,
    plain: plainText = false,
  } = params;

  return new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder();
      const send = (type: string, data: unknown) => {
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ type, data })}\n\n`)
        );
      };

      (async () => {
        try {
          send("status", { message: "Starting search..." });

          let searchQuery = "";
          let shouldFilterByYear = true;

          if (customSearch) {
            shouldFilterByYear = false;
            const match = customSearch.match(
              /^\[([^\]]+)\]-\[([^\]]+)\]$/
            );
            searchQuery = match
              ? `${match[1].trim()} ${match[2].trim()}`
              : customSearch;
          } else {
            searchQuery =
              RANDOM_SEARCH_TERMS[
                Math.floor(Math.random() * RANDOM_SEARCH_TERMS.length)
              ];
          }

          send("status", { message: `Searching for: ${searchQuery}` });

          let results = await searchGenius(searchQuery, proxyUrl);

          if (!results.length) {
            send("error", { message: "No songs found" });
            controller.close();
            return;
          }

          // Filter by year for random searches
          if (shouldFilterByYear) {
            send("status", {
              message: "Filtering songs by year (1990-2010)...",
            });
            const filtered = results.filter((r) => {
              return (
                r.releaseDate &&
                /(19(9[0-9])|20(0[0-9])|2010)/.test(r.releaseDate)
              );
            });

            if (filtered.length) {
              results = filtered;
            } else {
              // Retry with different search terms
              for (let i = 0; i < 3; i++) {
                const q =
                  RANDOM_SEARCH_TERMS[
                    Math.floor(
                      Math.random() * RANDOM_SEARCH_TERMS.length
                    )
                  ];
                const retryResults = await searchGenius(q, proxyUrl);
                const retryFiltered = retryResults.filter((r) => {
                  return (
                    r.releaseDate &&
                    /(19(9[0-9])|20(0[0-9])|2010)/.test(
                      r.releaseDate
                    )
                  );
                });
                if (retryFiltered.length) {
                  results = retryFiltered;
                  searchQuery = q;
                  break;
                }
              }
            }
          }

          if (!results.length) {
            send("error", { message: "No matching songs found" });
            controller.close();
            return;
          }

          // Sort by release date ascending — prefer earlier/original releases
          const sorted = [...results].sort((a, b) => {
            if (!a.releaseDate && !b.releaseDate) return 0;
            if (!a.releaseDate) return 1;
            if (!b.releaseDate) return -1;
            return new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime();
          });

          const selected = customSearch
            ? sorted[0]
            : sorted[Math.floor(Math.random() * Math.min(3, sorted.length))];

          send("status", {
            message: `Found: ${selected.fullTitle}`,
          });

          // Get song details from Genius JSON API (album, description, etc.)
          send("status", { message: "Getting song details..." });
          const song = await getSongDetails(selected.id, proxyUrl);

          const formattedTerm =
            customSearch ??
            `[${song.artist}]-[${song.title}]`;

          send("metadata", {
            title: song.title,
            artist: song.artist,
            url: song.url || selected.url,
            description: song.description,
            album: song.album,
            release_date: song.releaseDate,
            lyrics_state: song.lyricsState,
            annotation_count: song.annotationCount,
            original_search_term: formattedTerm,
            custom_search: !!customSearch,
          });

          // Scrape lyrics from the song page
          send("status", { message: "Scraping lyrics..." });
          const lyrics = await scrapeLyrics(
            song.url || selected.url,
            proxyUrl
          );

          if (lyrics.trim()) {
            let processed = lyrics;

            if (passageCount > 0 || plainText) {
              const sections = lyrics
                .split(/\n## /)
                .filter((s) => s.trim());
              const withHeaders = sections.map((s, i) =>
                i === 0 ? s : `## ${s}`
              );
              if (passageCount > 0)
                processed = withHeaders
                  .slice(0, passageCount)
                  .join("\n\n")
                  .trim();
              if (plainText) {
                processed = processed
                  .replace(/## /g, "")
                  .replace(/\*\*/g, "")
                  .replace(/\*/g, "")
                  .replace(/\n{3,}/g, "\n\n")
                  .trim();
              }
            }

            send("lyrics", { lyrics: processed });
          } else {
            send("lyrics", {
              lyrics: null,
              message: "Lyrics could not be scraped from this page",
            });
          }

          send("complete", { message: "Stream complete" });
          controller.close();
        } catch (err: unknown) {
          send("error", {
            message: `Server error: ${err instanceof Error ? err.message : "Unknown error"}`,
          });
          controller.close();
        }
      })();
    },
  });
}

/** Shared response headers for the streaming endpoint */
export const LYRIC_IPSUM_STREAM_HEADERS = {
  "Content-Type": "text/plain; charset=utf-8",
  "Cache-Control": "no-cache",
  Connection: "keep-alive",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET",
  "Access-Control-Allow-Headers": "Content-Type",
};
