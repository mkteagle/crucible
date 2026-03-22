export interface LyricData {
  title: string;
  artist: string;
  url: string;
  description: string;
  album: string;
  release_date: string;
  lyrics_state: string;
  annotation_count: number;
  lyrics: string | null;
  original_search_term?: string;
  raw_response?: unknown;
}

export interface StreamMessage {
  type: "status" | "metadata" | "lyrics" | "complete" | "error";
  data: Record<string, unknown>;
}
