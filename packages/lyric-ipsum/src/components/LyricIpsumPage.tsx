import { useState, useEffect } from "react";
import type { LyricData } from "../types";
import ReactMarkdown from "react-markdown";

export interface LyricIpsumPageProps {
  /** URL of the streaming API endpoint. Defaults to /api/random-lyrics */
  apiEndpoint?: string;
  /** Pre-load with data, skipping the initial fetch (useful for stories/testing) */
  initialData?: LyricData | null;
}

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,300;1,6..72,400&family=Instrument+Sans:wght@400;500;600;700&display=swap');

  @keyframes lyric-ipsum-fade-up {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes lyric-ipsum-pulse-bar {
    0%, 100% { transform: scaleY(0.3); }
    50% { transform: scaleY(1); }
  }
  .lyric-ipsum-fade-up {
    animation: lyric-ipsum-fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
  }
  .lyric-ipsum-loader span {
    display: inline-block;
    width: 3px;
    height: 18px;
    margin: 0 2px;
    background: currentColor;
    border-radius: 2px;
    animation: lyric-ipsum-pulse-bar 1s ease-in-out infinite;
  }
  .lyric-ipsum-loader span:nth-child(2) { animation-delay: 0.15s; }
  .lyric-ipsum-loader span:nth-child(3) { animation-delay: 0.3s; }
  .lyric-ipsum-loader span:nth-child(4) { animation-delay: 0.45s; }
  .lyric-ipsum-loader span:nth-child(5) { animation-delay: 0.6s; }
`;

function Loader() {
  return (
    <span className="lyric-ipsum-loader inline-flex items-end">
      <span /><span /><span /><span /><span />
    </span>
  );
}

export function LyricIpsumPage({
  apiEndpoint = "/api/random-lyrics",
  initialData = undefined,
}: LyricIpsumPageProps) {
  const [lyricData, setLyricData] = useState<LyricData | null>(initialData ?? null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [streamStatus, setStreamStatus] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [passages, setPassages] = useState(0);
  const [copied, setCopied] = useState(false);

  const fetchLyrics = async (customSearch?: string) => {
    setLoading(true);
    setError(null);
    setLyricData(null);

    try {
      const params = new URLSearchParams();
      if (customSearch) params.append("search", customSearch);
      if (passages > 0) params.append("passages", passages.toString());

      const url = params.toString() ? `${apiEndpoint}?${params}` : apiEndpoint;
      const response = await fetch(url);

      if (!response.ok) throw new Error(await response.text());
      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let tempLyricData: LyricData | null = null;

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            if (!line.startsWith("data: ")) continue;
            try {
              const message = JSON.parse(line.slice(6));
              switch (message.type) {
                case "status":
                  setStreamStatus((message.data as { message: string }).message);
                  break;
                case "metadata": {
                  const data = message.data as LyricData & { original_search_term?: string };
                  tempLyricData = { ...data, lyrics: null };
                  setLyricData(tempLyricData);
                  break;
                }
                case "lyrics":
                  if (tempLyricData) {
                    const updated: LyricData = {
                      ...tempLyricData,
                      lyrics: (message.data as { lyrics: string }).lyrics,
                    };
                    setLyricData(updated);
                    tempLyricData = updated;
                  }
                  break;
                case "complete":
                  setStreamStatus("");
                  break;
                case "error":
                  throw new Error((message.data as { message: string }).message);
              }
            } catch {
              // ignore parse errors
            }
          }
        }
      } finally {
        reader.releaseLock();
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to fetch lyrics");
      setStreamStatus("");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    const cleaned = searchQuery.replace(/[\[\]]/g, "");
    const parts = cleaned.split(/\s*-\s*/);
    const formatted =
      parts.length === 2 && parts[0].trim() && parts[1].trim()
        ? `[${parts[0].trim()}]-[${parts[1].trim()}]`
        : cleaned;
    fetchLyrics(formatted);
  };

  const handleCopy = async () => {
    if (!lyricData?.lyrics) return;
    try {
      const plain = lyricData.lyrics
        .replace(/## /g, "")
        .replace(/\*\*/g, "")
        .replace(/\*/g, "")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
      await navigator.clipboard.writeText(plain);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available
    }
  };

  useEffect(() => {
    if (initialData === undefined) {
      fetchLyrics();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hasLyrics = lyricData?.lyrics && lyricData.lyrics.trim();

  return (
    <div
      className="min-h-screen text-white"
      style={{
        fontFamily: "'Instrument Sans', system-ui, sans-serif",
        background: "#0a0a0c",
      }}
    >
      <style>{STYLES}</style>

      {/* ── Search bar ─────────────────────────────────────── */}
      <div
        className="sticky top-0 z-30 border-b"
        style={{
          background: "rgba(10,10,12,0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderColor: "rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-2xl mx-auto px-5 py-4 flex items-center gap-2">
          <div className="relative flex-1">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search artist or song..."
              disabled={loading}
              className="w-full bg-white/[0.06] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-white/20 focus:bg-white/[0.08] disabled:opacity-40"
              style={{ fontFamily: "inherit" }}
            />
            {searchQuery.trim() && !loading && (
              <button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors p-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            )}
          </div>

          {/* Passages selector */}
          <div
            className="shrink-0 flex items-center rounded-lg overflow-hidden border border-white/[0.08]"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <span
              className="text-[10px] font-semibold uppercase tracking-[0.08em] px-2.5 text-white/25 select-none"
              style={{ fontFamily: "inherit" }}
            >
              &para;
            </span>
            <div className="flex items-center">
              {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                <button
                  key={n}
                  onClick={() => setPassages(n)}
                  className="px-2 py-2 text-xs transition-colors cursor-pointer"
                  style={{
                    fontFamily: "inherit",
                    fontVariantNumeric: "tabular-nums",
                    color: passages === n ? "#fff" : "rgba(255,255,255,0.25)",
                    background: passages === n ? "rgba(255,255,255,0.1)" : "transparent",
                  }}
                  title={n === 0 ? "All passages" : `${n} passage${n > 1 ? "s" : ""}`}
                >
                  {n === 0 ? "All" : n}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => fetchLyrics()}
            disabled={loading}
            className="shrink-0 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all disabled:opacity-40"
            style={{
              background: loading ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.08)",
              color: loading ? "rgba(255,255,255,0.4)" : "#fff",
            }}
            onMouseEnter={(e) => {
              if (!loading) (e.target as HTMLElement).style.background = "rgba(255,255,255,0.14)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = loading
                ? "rgba(255,255,255,0.04)"
                : "rgba(255,255,255,0.08)";
            }}
          >
            {loading ? <Loader /> : "Shuffle"}
          </button>
        </div>

        {/* Status line */}
        {streamStatus && (
          <div className="max-w-2xl mx-auto px-5 pb-3">
            <p className="text-xs text-white/30 truncate" style={{ fontFamily: "inherit" }}>
              {streamStatus}
            </p>
          </div>
        )}
      </div>

      {/* ── Error ──────────────────────────────────────────── */}
      {error && (
        <div className="max-w-2xl mx-auto px-5 pt-6">
          <div
            className="rounded-lg px-4 py-3 text-sm"
            style={{ background: "rgba(220,38,38,0.12)", color: "#fca5a5" }}
          >
            {error}
          </div>
        </div>
      )}

      {/* ── Content ────────────────────────────────────────── */}
      <div className="max-w-2xl mx-auto px-5 py-10">
        {/* Empty state */}
        {!lyricData && !loading && !error && (
          <div className="text-center py-24">
            <p className="text-white/20 text-sm" style={{ fontFamily: "inherit" }}>
              Hit shuffle or search for a song
            </p>
          </div>
        )}

        {/* Loading skeleton */}
        {loading && !lyricData && (
          <div className="py-24 flex justify-center text-white/20">
            <Loader />
          </div>
        )}

        {/* Song content */}
        {lyricData && (
          <div className="lyric-ipsum-fade-up">
            {/* ── Song header ─── */}
            <header className="mb-10 pb-8" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <h1
                className="text-3xl font-medium tracking-tight text-white mb-2"
                style={{ fontFamily: "'Newsreader', Georgia, serif", fontWeight: 400 }}
              >
                {lyricData.title}
              </h1>
              <p className="text-base text-white/50 mb-5" style={{ fontFamily: "inherit" }}>
                {lyricData.artist}
              </p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-white/25" style={{ fontFamily: "inherit" }}>
                {lyricData.album && lyricData.album !== "Unknown album" && (
                  <span>{lyricData.album}</span>
                )}
                {lyricData.release_date && lyricData.release_date !== "Unknown release date" && (
                  <span>{lyricData.release_date}</span>
                )}
                {lyricData.url && lyricData.url !== "Unknown" && (
                  <a
                    href={lyricData.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white/50 transition-colors"
                  >
                    Genius {"\u2197"}
                  </a>
                )}
              </div>
            </header>

            {/* ── Lyrics ─── */}
            {hasLyrics ? (
              <div className="relative">
                <button
                  onClick={handleCopy}
                  className="absolute -top-1 right-0 text-xs transition-colors"
                  style={{
                    fontFamily: "inherit",
                    color: copied ? "rgba(74,222,128,0.7)" : "rgba(255,255,255,0.25)",
                  }}
                  onMouseEnter={(e) => {
                    if (!copied) (e.target as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    if (!copied) (e.target as HTMLElement).style.color = "rgba(255,255,255,0.25)";
                  }}
                >
                  {copied ? "Copied" : "Copy"}
                </button>
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => (
                      <h2
                        className="text-xs font-semibold uppercase tracking-[0.15em] text-white/25 mt-10 mb-4 first:mt-0"
                        style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                      >
                        {children}
                      </h2>
                    ),
                    p: ({ children }) => (
                      <p
                        className="my-3 leading-[1.8] text-white/70"
                        style={{
                          fontFamily: "'Newsreader', Georgia, serif",
                          fontSize: "1.05rem",
                          fontWeight: 300,
                        }}
                      >
                        {children}
                      </p>
                    ),
                  }}
                >
                  {lyricData.lyrics!}
                </ReactMarkdown>
              </div>
            ) : loading ? (
              <div className="py-12 flex justify-center text-white/20">
                <Loader />
              </div>
            ) : (
              <p className="text-white/20 text-sm py-12 text-center" style={{ fontFamily: "inherit" }}>
                Lyrics unavailable for this track
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
