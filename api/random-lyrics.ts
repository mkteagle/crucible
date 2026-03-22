import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  createLyricIpsumStream,
  LYRIC_IPSUM_STREAM_HEADERS,
} from "../packages/lyric-ipsum/src/api/handler";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const search = (req.query.search as string) || undefined;
  const passages = req.query.passages ? parseInt(req.query.passages as string, 10) : undefined;
  const plain = req.query.plain === "true";

  try {
    const stream = createLyricIpsumStream(
      { search, passages, plain },
      { proxyUrl: process.env.LYRICS_PROXY_URL }
    );

    res.writeHead(200, LYRIC_IPSUM_STREAM_HEADERS);

    const reader = stream.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(value);
    }
    res.end();
  } catch (err) {
    res.status(500).json({
      error: err instanceof Error ? err.message : "Unknown error",
    });
  }
}
