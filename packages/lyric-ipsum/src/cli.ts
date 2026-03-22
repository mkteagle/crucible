/**
 * Lyric Ipsum CLI — fetch random or specific song lyrics from Genius.
 *
 * Usage:
 *   npx tsx packages/lyric-ipsum/src/cli.ts                    # random song
 *   npx tsx packages/lyric-ipsum/src/cli.ts "bohemian rhapsody" # search
 *   npx tsx packages/lyric-ipsum/src/cli.ts --passages 2        # limit to 2 passages
 *   npx tsx packages/lyric-ipsum/src/cli.ts "radiohead - creep" --passages 3 --plain
 *   npx tsx packages/lyric-ipsum/src/cli.ts --json              # output as JSON
 */

import { createLyricIpsumStream } from "./api/handler";

const args = process.argv.slice(2);

let search: string | undefined;
let passages = 0;
let plain = false;
let jsonOutput = false;

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === "--passages" || arg === "-p") {
    passages = parseInt(args[++i] ?? "0", 10);
  } else if (arg === "--plain") {
    plain = true;
  } else if (arg === "--json" || arg === "-j") {
    jsonOutput = true;
  } else if (arg === "--help" || arg === "-h") {
    console.log(`
Lyric Ipsum — fetch song lyrics from Genius

Usage:
  lyric-ipsum [search]           Search for a specific song/artist
  lyric-ipsum                    Get a random song (1990-2010)

Options:
  --passages, -p <n>    Limit to n passages/sections
  --plain               Strip markdown formatting
  --json, -j            Output as JSON (title, artist, album, lyrics, etc.)
  --help, -h            Show this help
    `.trim());
    process.exit(0);
  } else if (!arg.startsWith("-")) {
    search = arg;
  }
}

// Format "artist - song" searches
if (search) {
  const cleaned = search.replace(/[\[\]]/g, "");
  const parts = cleaned.split(/\s*-\s*/);
  if (parts.length === 2 && parts[0].trim() && parts[1].trim()) {
    search = `[${parts[0].trim()}]-[${parts[1].trim()}]`;
  }
}

const stream = createLyricIpsumStream(
  { search, passages: passages || undefined, plain },
  {}
);

const reader = stream.getReader();
const decoder = new TextDecoder();

interface SongResult {
  title?: string;
  artist?: string;
  album?: string;
  release_date?: string;
  url?: string;
  lyrics?: string | null;
}

const result: SongResult = {};

(async () => {
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const text = decoder.decode(value, { stream: true });
      const lines = text.split("\n");

      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;
        try {
          const message = JSON.parse(line.slice(6)) as {
            type: string;
            data: Record<string, unknown>;
          };

          switch (message.type) {
            case "status":
              if (!jsonOutput) {
                process.stderr.write(
                  `\x1b[2m${(message.data as { message: string }).message}\x1b[0m\n`
                );
              }
              break;
            case "metadata":
              result.title = message.data.title as string;
              result.artist = message.data.artist as string;
              result.album = message.data.album as string;
              result.release_date = message.data.release_date as string;
              result.url = message.data.url as string;
              break;
            case "lyrics":
              result.lyrics = message.data.lyrics as string | null;
              break;
            case "error":
              console.error(
                `Error: ${(message.data as { message: string }).message}`
              );
              process.exit(1);
          }
        } catch {
          // ignore parse errors
        }
      }
    }

    if (jsonOutput) {
      console.log(JSON.stringify(result, null, 2));
    } else {
      if (result.title) {
        console.log(`\n\x1b[1m${result.title}\x1b[0m`);
        console.log(`\x1b[2m${result.artist}\x1b[0m`);
        if (result.album && result.album !== "Unknown album") {
          console.log(`\x1b[2m${result.album} · ${result.release_date}\x1b[0m`);
        }
        console.log("");
      }
      if (result.lyrics) {
        // Clean up markdown for terminal output
        const display = result.lyrics
          .replace(/^## (.+)$/gm, "\x1b[2m[$1]\x1b[0m")
          .trim();
        console.log(display);
      } else {
        console.log("Lyrics unavailable for this track.");
      }
      console.log("");
    }
  } catch (err) {
    console.error(err instanceof Error ? err.message : "Unknown error");
    process.exit(1);
  }
})();
