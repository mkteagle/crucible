import type { Plugin } from "vite";

/**
 * Vite plugin that serves /api/random-lyrics during Storybook dev.
 * Uses the lyric-ipsum handler directly — no external backend or API keys needed.
 */
export function lyricIpsumApiPlugin(): Plugin {
  return {
    name: "lyric-ipsum-api",
    configureServer(server) {
      server.middlewares.use("/api/random-lyrics", async (req, res) => {
        const url = new URL(req.url ?? "/", `http://${req.headers.host}`);
        const search = url.searchParams.get("search") || undefined;
        const passages = url.searchParams.get("passages");
        const plain = url.searchParams.get("plain") === "true";

        try {
          const { createLyricIpsumStream, LYRIC_IPSUM_STREAM_HEADERS } =
            await import(
              "../packages/lyric-ipsum/src/api/handler"
            );

          const stream = createLyricIpsumStream(
            {
              search,
              passages: passages ? parseInt(passages, 10) : undefined,
              plain,
            },
            {
              proxyUrl: process.env.LYRICS_PROXY_URL,
            }
          );

          res.writeHead(200, LYRIC_IPSUM_STREAM_HEADERS);

          const reader = stream.getReader();
          const push = async () => {
            try {
              while (true) {
                const { done, value } = await reader.read();
                if (done) {
                  res.end();
                  return;
                }
                res.write(value);
              }
            } catch (err) {
              console.error("[lyric-ipsum-api]", err);
              res.end();
            }
          };

          push();
        } catch (err) {
          console.error("[lyric-ipsum-api]", err);
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              error: err instanceof Error ? err.message : "Unknown error",
            })
          );
        }
      });
    },
  };
}
