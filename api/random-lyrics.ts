import type { VercelRequest, VercelResponse } from "@vercel/node";
import * as cheerio from "cheerio";

const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const RANDOM_TERMS = [
  "love", "heart", "night", "day", "time", "life", "world", "way", "eyes",
  "light", "dream", "fire", "water", "home", "soul", "mind", "dance", "music",
  "baby", "girl", "boy", "woman", "man", "feel", "never", "always", "forever",
  "tonight", "yesterday", "tomorrow", "crazy", "wild", "free", "fly", "run",
  "walk", "talk", "sing", "play", "rock", "roll", "blue", "red", "black",
  "white", "gold", "silver", "shine", "star", "moon", "sun", "rain", "wind",
];

const BROWSER_HEADERS = {
  "User-Agent": USER_AGENT,
  "Accept-Language": "en-US,en;q=0.9",
  "Accept-Encoding": "gzip, deflate, br",
  "Cache-Control": "no-cache",
  Pragma: "no-cache",
  "Sec-Fetch-Dest": "document",
  "Sec-Fetch-Mode": "navigate",
  "Sec-Fetch-Site": "none",
  "Sec-Fetch-User": "?1",
  "Upgrade-Insecure-Requests": "1",
};

async function fetchViaProxy(url: string): Promise<string> {
  const proxies = [
    { url: `https://corsproxy.io/?${encodeURIComponent(url)}`, raw: true },
    { url: `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`, raw: false },
  ];

  for (const proxy of proxies) {
    try {
      const res = await fetch(proxy.url, {
        headers: { ...BROWSER_HEADERS, Accept: "*/*" },
      });
      if (!res.ok) continue;
      if (proxy.raw) return res.text();
      const data = (await res.json()) as { contents?: string };
      if (data.contents) return data.contents;
    } catch { continue; }
  }

  throw new Error("All proxies failed");
}

async function fetchJson(url: string) {
  try {
    const res = await fetch(url, {
      headers: { ...BROWSER_HEADERS, Accept: "application/json, text/plain, */*" },
    });
    if (res.ok) return res.json();
  } catch { /* fall through to proxy */ }

  const text = await fetchViaProxy(url);
  return JSON.parse(text);
}

async function fetchHtml(url: string) {
  try {
    const res = await fetch(url, {
      headers: { ...BROWSER_HEADERS, Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" },
      redirect: "follow",
    });
    if (res.ok) return res.text();
  } catch { /* fall through to proxy */ }

  return fetchViaProxy(url);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const search = (req.query.search as string) || undefined;
  const passageCount = req.query.passages ? parseInt(req.query.passages as string, 10) : 0;
  const plain = req.query.plain === "true";

  res.writeHead(200, {
    "Content-Type": "text/plain; charset=utf-8",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
    "Access-Control-Allow-Origin": "*",
  });

  const send = (type: string, data: unknown) => {
    res.write(`data: ${JSON.stringify({ type, data })}\n\n`);
  };

  try {
    send("status", { message: "Starting search..." });

    let query = "";
    let filterByYear = true;

    if (search) {
      filterByYear = false;
      const match = search.match(/^\[([^\]]+)\]-\[([^\]]+)\]$/);
      query = match ? `${match[1].trim()} ${match[2].trim()}` : search;
    } else {
      query = RANDOM_TERMS[Math.floor(Math.random() * RANDOM_TERMS.length)];
    }

    send("status", { message: `Searching for: ${query}` });

    // Search
    const searchData = await fetchJson(
      `https://genius.com/api/search/song?q=${encodeURIComponent(query)}&per_page=10`
    ) as { response?: { sections?: Array<{ hits?: Array<{ result?: Record<string, unknown> }> }> } };

    let hits = searchData.response?.sections?.flatMap((s) => s.hits ?? []) ?? [];
    if (!hits.length) { send("error", { message: "No songs found" }); res.end(); return; }

    let results = hits
      .filter((h) => h.result?.id && h.result?.url)
      .map((h) => ({
        id: h.result!.id as number,
        title: (h.result!.title as string) ?? "Unknown",
        artist: (h.result!.primary_artist_names as string) ?? (h.result!.artist_names as string) ?? "Unknown",
        url: h.result!.url as string,
        fullTitle: (h.result!.full_title as string) ?? "Unknown",
        releaseDate: h.result!.release_date_for_display as string | undefined,
      }));

    if (filterByYear) {
      const filtered = results.filter((r) => r.releaseDate && /(19(9[0-9])|20(0[0-9])|2010)/.test(r.releaseDate));
      if (filtered.length) results = filtered;
    }

    // Sort oldest first
    results.sort((a, b) => {
      if (!a.releaseDate && !b.releaseDate) return 0;
      if (!a.releaseDate) return 1;
      if (!b.releaseDate) return -1;
      return new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime();
    });

    const selected = search ? results[0] : results[Math.floor(Math.random() * Math.min(3, results.length))];
    if (!selected) { send("error", { message: "No matching songs found" }); res.end(); return; }

    send("status", { message: `Found: ${selected.fullTitle}` });

    // Get song details
    send("status", { message: "Getting song details..." });
    const songData = await fetchJson(`https://genius.com/api/songs/${selected.id}`) as {
      response?: { song?: Record<string, unknown> };
    };
    const song = songData.response?.song;

    const title = (song?.title as string) ?? selected.title;
    const artist = (song?.primary_artist_names as string) ?? (song?.artist_names as string) ?? selected.artist;
    const album = (song?.album as Record<string, unknown> | null)?.name as string ?? "Unknown album";
    const releaseDate = (song?.release_date_for_display as string) ?? "Unknown release date";
    const description = (song?.description_preview as string) ?? "No description available";
    const songUrl = (song?.url as string) ?? selected.url;

    send("metadata", {
      title, artist, url: songUrl, description, album,
      release_date: releaseDate,
      lyrics_state: song?.lyrics_state ?? "unknown",
      annotation_count: song?.annotation_count ?? 0,
      original_search_term: search ?? `[${artist}]-[${title}]`,
      custom_search: !!search,
    });

    // Scrape lyrics
    send("status", { message: "Scraping lyrics..." });
    try {
      const html = await fetchHtml(songUrl);
      const $ = cheerio.load(html);
      let lyrics = "";

      for (const sel of ['[data-lyrics-container="true"]', '[class*="Lyrics__Container"]', ".lyrics"]) {
        const els = $(sel);
        if (els.length) {
          els.each((_i, el) => {
            const h = $(el).html();
            if (h) {
              lyrics += h
                .replace(/<br\s*\/?>/gi, "\n")
                .replace(/<\/?(p|div)[^>]*>/gi, "\n")
                .replace(/<[^>]*>/g, "")
                .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
                .replace(/&quot;/g, '"').replace(/&#39;/g, "'") + "\n";
            }
          });
          if (lyrics.trim()) break;
        }
      }

      if (lyrics.trim()) {
        lyrics = lyrics.split("\n").map((l) => l.trim())
          .filter((l) => l && !l.match(/^\d+\s*(Contributors?|Translations?|Views?|Embed)/i)
            && !l.match(/Read More|Show More/i) && !l.includes("genius.com") && l.length <= 200)
          .join("\n").replace(/\n{3,}/g, "\n\n").trim();

        // Find first section marker
        const lines = lyrics.split("\n");
        const idx = lines.findIndex((l) =>
          /^\[(verse|chorus|bridge|pre-chorus|outro|intro|break)/i.test(l.trim())
        );
        if (idx > 0) lyrics = lines.slice(idx).join("\n").trim();

        lyrics = lyrics.replace(/^\[(Verse|Chorus|Bridge|Pre-Chorus|Outro|Intro|Break)([^\]]*)\]/gm, "\n## $1$2\n");

        if (passageCount > 0 || plain) {
          const sections = lyrics.split(/\n## /).filter((s) => s.trim());
          const withH = sections.map((s, i) => (i === 0 ? s : `## ${s}`));
          if (passageCount > 0) lyrics = withH.slice(0, passageCount).join("\n\n").trim();
          if (plain) lyrics = lyrics.replace(/## /g, "").replace(/\*\*/g, "").replace(/\*/g, "").replace(/\n{3,}/g, "\n\n").trim();
        }

        send("lyrics", { lyrics });
      } else {
        send("lyrics", { lyrics: null, message: "Lyrics unavailable" });
      }
    } catch {
      send("lyrics", { lyrics: null, message: "Error scraping lyrics" });
    }

    send("complete", { message: "Stream complete" });
    res.end();
  } catch (err: unknown) {
    send("error", { message: `Server error: ${err instanceof Error ? err.message : "Unknown error"}` });
    res.end();
  }
}
