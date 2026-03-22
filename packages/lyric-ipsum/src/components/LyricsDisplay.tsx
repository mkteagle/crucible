import { useState } from "react";
import ReactMarkdown from "react-markdown";

interface LyricsDisplayProps {
  lyrics: string | null;
}

export function LyricsDisplay({ lyrics }: LyricsDisplayProps) {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = async () => {
    if (!lyrics) return;
    try {
      const plain = lyrics
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

  return (
    <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-cyan-400/20 shadow-xl h-full flex flex-col">
      <div className="px-6 py-4 border-b border-cyan-400/20">
        <h3 className="font-semibold text-cyan-200 text-lg">🎤 Lyrics</h3>
      </div>
      <div
        className="flex-1 overflow-auto p-6 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {lyrics && (
          <button
            onClick={handleCopy}
            className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full shadow-lg transition-all duration-300 ${
              copied
                ? "bg-emerald-500 text-white scale-110"
                : "bg-cyan-500 hover:bg-cyan-600 text-white hover:scale-110"
            } ${
              isHovered || copied
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            }`}
            title={copied ? "Copied!" : "Copy lyrics as plain text"}
          >
            {copied ? (
              <svg className="w-5 h-5 m-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 m-auto" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
              </svg>
            )}
          </button>
        )}

        {lyrics ? (
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2 className="text-cyan-400 text-lg font-bold my-4 pb-2 border-b-2 border-cyan-400">
                  {children}
                </h2>
              ),
              p: ({ children }) => (
                <p className="my-2 leading-relaxed text-slate-200 font-serif">{children}</p>
              ),
            }}
          >
            {lyrics}
          </ReactMarkdown>
        ) : (
          <div className="text-center text-gray-400 py-8">
            <p>Loading lyrics...</p>
          </div>
        )}
      </div>
    </div>
  );
}
