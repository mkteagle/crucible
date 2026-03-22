import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export interface FilterPaneProps {
  onSearch: (query: string, passages?: number, plainText?: boolean) => void;
  onRandom: (passages?: number, plainText?: boolean) => void;
  loading: boolean;
  isRolling: boolean;
  currentSearch?: string;
  currentPassages?: number;
  currentPlainText?: boolean;
}

export function FilterPane({
  onSearch,
  onRandom,
  loading,
  isRolling,
  currentSearch = "",
  currentPassages,
  currentPlainText = false,
}: FilterPaneProps) {
  const [searchQuery, setSearchQuery] = useState(currentSearch);
  const [passageCount, setPassageCount] = useState(currentPassages?.toString() || "");
  const [plainText, setPlainText] = useState(currentPlainText);

  useEffect(() => {
    setSearchQuery(currentSearch);
    setPassageCount(currentPassages?.toString() || "");
    setPlainText(currentPlainText);
  }, [currentSearch, currentPassages, currentPlainText]);

  const formatSearchQuery = (value: string): string => {
    const cleaned = value.replace(/[\[\]]/g, "");
    if (cleaned.includes(" - ") || cleaned.includes("-")) {
      const parts = cleaned.split(/\s*-\s*/);
      if (parts.length === 2 && parts[0].trim() && parts[1].trim()) {
        return `[${parts[0].trim()}]-[${parts[1].trim()}]`;
      }
    }
    return cleaned;
  };

  const handlePassageCountBlur = () => {
    const passages = passageCount ? parseInt(passageCount) : undefined;
    if (currentSearch) {
      onSearch(formatSearchQuery(currentSearch), passages, plainText);
    } else {
      onRandom(passages, plainText);
    }
  };

  const handlePlainTextToggle = (checked: boolean) => {
    setPlainText(checked);
    const passages = passageCount ? parseInt(passageCount) : undefined;
    if (currentSearch) {
      onSearch(formatSearchQuery(currentSearch), passages, checked);
    } else {
      onRandom(passages, checked);
    }
  };

  const handleCustomSearch = () => {
    const passages = passageCount ? parseInt(passageCount) : undefined;
    onSearch(formatSearchQuery(searchQuery), passages, plainText);
  };

  const handleRandomSearch = () => {
    onRandom(passageCount ? parseInt(passageCount) : undefined, plainText);
  };

  const getSearchPreview = (): string => {
    if (!searchQuery) return "";
    const formatted = formatSearchQuery(searchQuery);
    return formatted !== searchQuery ? `Will search: "${formatted}"` : "";
  };

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-cyan-200 border-b border-cyan-400/20 pb-2">
          Quick Actions
        </h4>
        <Button
          onClick={handleRandomSearch}
          disabled={loading}
          className={`w-full py-3 text-sm font-bold rounded-lg transition-all duration-300 ${
            loading
              ? "bg-gray-600 cursor-not-allowed text-gray-400"
              : "bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 hover:from-cyan-600 hover:via-teal-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
          }`}
        >
          <span className="flex items-center gap-2 justify-center">
            <span className={isRolling ? "animate-roll-dice" : ""}>🎲</span>
            {loading ? "Getting Song..." : "Random Song"}
          </span>
        </Button>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-white border-b border-white/10 pb-2">
          Custom Search
        </h4>
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-2">
              Search for specific song or artist
            </label>
            <div className="relative">
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Artist - Song"
                className="bg-slate-800/50 border-cyan-400/30 text-white placeholder-slate-400 focus:border-cyan-400 text-sm pr-10"
                onKeyDown={(e) => e.key === "Enter" && handleCustomSearch()}
              />
              <button
                onClick={handleCustomSearch}
                disabled={loading || !searchQuery.trim()}
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 rounded-md transition-colors ${
                  loading || !searchQuery.trim()
                    ? "text-gray-500 cursor-not-allowed"
                    : "text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/20"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            {getSearchPreview() && (
              <p className="text-xs text-cyan-300 mt-1 italic">{getSearchPreview()}</p>
            )}
            <p className="text-xs text-gray-500 mt-1">Use "Artist - Song" for specific songs</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-cyan-200 border-b border-cyan-400/20 pb-2">
          Options
        </h4>
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-2">
              Number of passages
            </label>
            <Input
              type="number"
              min="1"
              max="10"
              value={passageCount}
              onChange={(e) => setPassageCount(e.target.value)}
              onBlur={handlePassageCountBlur}
              placeholder="All"
              className="bg-slate-800/50 border-cyan-400/30 text-white placeholder-slate-400 focus:border-cyan-400 text-sm"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="plainText"
              checked={plainText}
              onChange={(e) => handlePlainTextToggle(e.target.checked)}
              className="w-4 h-4 text-cyan-500 bg-slate-800/50 border-cyan-400/30 rounded focus:ring-cyan-400"
            />
            <label htmlFor="plainText" className="text-xs font-medium text-slate-300">
              Plain text format
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
