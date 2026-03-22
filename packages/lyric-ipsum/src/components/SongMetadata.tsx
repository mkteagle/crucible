import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import type { LyricData } from "../types";

interface SongMetadataProps {
  lyricData: LyricData;
}

export function SongMetadata({ lyricData }: SongMetadataProps) {
  return (
    <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-cyan-400/20 shadow-xl">
      <div className="px-6 py-4 border-b border-cyan-400/20">
        <h3 className="font-semibold text-cyan-200 text-lg">🎵 Song Info</h3>
      </div>
      <div className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">"{lyricData.title}"</h3>
          <p className="text-lg text-slate-300 mb-4">by {lyricData.artist}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-black/30 p-4 rounded-lg backdrop-blur-sm">
              <p className="text-sm font-medium text-gray-400">Album</p>
              <p className="text-white font-semibold">{lyricData.album}</p>
            </div>
            <div className="bg-black/30 p-4 rounded-lg backdrop-blur-sm">
              <p className="text-sm font-medium text-gray-400">Release Date</p>
              <p className="text-white font-semibold">{lyricData.release_date}</p>
            </div>
          </div>

          {lyricData.description && lyricData.description !== "No description available" && (
            <div className="bg-blue-900/30 backdrop-blur-sm p-4 rounded-lg border-l-4 border-blue-400 mb-6">
              <p className="text-sm font-medium text-blue-300 mb-2">About this song</p>
              <p className="text-gray-200 leading-relaxed text-sm">{lyricData.description}</p>
            </div>
          )}

          <div className="flex gap-3 justify-center flex-wrap mb-6">
            <Badge
              variant={lyricData.lyrics_state === "complete" ? "default" : "secondary"}
              className={`px-4 py-2 text-sm font-medium ${
                lyricData.lyrics_state === "complete"
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-yellow-500 hover:bg-yellow-600 text-white"
              }`}
            >
              Lyrics: {lyricData.lyrics_state}
            </Badge>
            <Badge
              variant="outline"
              className="px-4 py-2 text-sm font-medium border-2 border-gray-300 text-white"
            >
              {lyricData.annotation_count} annotations
            </Badge>
          </div>

          <Button
            asChild
            className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href={lyricData.url} target="_blank" rel="noopener noreferrer">
              🎤 View on Genius
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
