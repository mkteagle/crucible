import type { MediaAlign, MediaSize, AppleMusicParseResult } from "../types";

export function extractAppleMusicId(url: string): AppleMusicParseResult | null {
  try {
    const parsed = new URL(url);

    if (!parsed.hostname.includes("music.apple.com")) {
      return null;
    }

    const pathParts = parsed.pathname.split("/").filter(Boolean);

    const songId = parsed.searchParams.get("i");
    if (songId) {
      return { id: songId, type: "song" };
    }

    if (pathParts.length >= 4) {
      const type = pathParts[1];
      const id = pathParts[3];

      if ((type === "album" || type === "song") && /^\d+$/.test(id)) {
        return { id, type: type as "song" | "album" };
      }
    }

    return null;
  } catch {
    return null;
  }
}

export function appleMusicWrapperStyle(align: MediaAlign, size: MediaSize): string {
  const widthMap: Record<MediaSize, string> = {
    small: "280px",
    medium: "380px",
    large: "520px",
    full: "100%",
  };
  const width = widthMap[size];
  let style = `max-width:${width};margin:12px 0;`;
  if (align === "left") style += "margin-right:auto;";
  else if (align === "right") style += "margin-left:auto;";
  else if (align === "center") style += "margin-left:auto;margin-right:auto;";
  return style;
}

export function createAppleMusicEmbed(
  trackId: string,
  type: "song" | "album" = "song",
  align: MediaAlign = "full",
  size: MediaSize = "full",
  trackName?: string,
  artistName?: string,
  artworkUrl?: string
): HTMLDivElement {
  const wrapper = document.createElement("div");
  wrapper.contentEditable = "false";
  wrapper.dataset.appleMusicId = trackId;
  wrapper.dataset.appleMusicType = type;
  wrapper.dataset.align = align;
  wrapper.dataset.size = size;
  wrapper.style.cssText = appleMusicWrapperStyle(align, size);

  const hasInfo = trackName && artistName && artworkUrl;

  wrapper.innerHTML = `
    <div style="position:relative;border-radius:20px;overflow:hidden;background:linear-gradient(165deg, var(--mdx-editor-bg-primary, var(--pearl, #f8f6f3)) 0%, var(--mdx-editor-bg-secondary, var(--mist, #eef2f5)) 50%, var(--mdx-editor-bg-warm, var(--sand, #e8ddd0)) 100%);box-shadow:0 4px 20px rgba(26, 40, 48, 0.12), 0 8px 40px rgba(212, 165, 116, 0.15);">
      <div style="display:flex;gap:20px;padding:20px;align-items:flex-start;">
        <div style="position:relative;flex-shrink:0;width:120px;height:120px;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0, 0, 0, 0.15);background:var(--mdx-editor-bg-tertiary, var(--cloud, #dde4ea));">
          ${hasInfo
            ? `<img src="${artworkUrl}" alt="${trackName}" style="width:100%;height:100%;object-fit:cover;" />`
            : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:40px;height:40px;color:var(--mdx-editor-text-muted, var(--slate, #64748b));">
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
              </div>`
          }
          <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);">
            <svg viewBox="0 0 24 24" fill="white" style="width:48px;height:48px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
              <path d="M8 5.14v14l11-7-11-7z"></path>
            </svg>
          </div>
        </div>
        <div style="flex:1;min-width:0;">
          <h3 style="margin:0 0 4px 0;font-size:18px;font-weight:600;color:var(--mdx-editor-text-primary, var(--abyss, #1a2830));overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
            ${hasInfo ? trackName : "Apple Music Track"}
          </h3>
          <p style="margin:0 0 2px 0;font-size:14px;font-weight:500;color:var(--mdx-editor-text-secondary, var(--storm, #4a5568));">
            ${hasInfo ? artistName : "Loading..."}
          </p>
          <p style="margin:0 0 12px 0;font-size:13px;color:var(--mdx-editor-text-muted, var(--slate, #64748b));">
            ${type === "album" ? "Album" : "Song"}
          </p>
          <div style="display:inline-flex;align-items:center;gap:6px;padding:8px 14px;background:rgba(0,0,0,0.05);border-radius:20px;font-size:12px;font-weight:500;color:var(--mdx-editor-text-secondary, var(--storm, #4a5568));">
            <svg viewBox="0 0 24 24" fill="currentColor" style="width:14px;height:14px;">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path>
            </svg>
            Apple Music
          </div>
        </div>
      </div>
      <span data-applemusic-overlay="true" style="position:absolute;inset:0;cursor:pointer;background:transparent;display:block;"></span>
    </div>
  `;

  return wrapper;
}

export function hydrateAppleMusicNode(el: HTMLElement): void {
  const align = (el.dataset.align as MediaAlign) || "full";
  const size = (el.dataset.size as MediaSize) || "full";
  const trackId = el.dataset.appleMusicId;
  const type = (el.dataset.appleMusicType as "song" | "album") || "song";

  el.style.cssText = appleMusicWrapperStyle(align, size);

  if (!el.querySelector("[data-applemusic-overlay]")) {
    el.innerHTML = `
      <div style="position:relative;border-radius:20px;overflow:hidden;background:linear-gradient(165deg, var(--mdx-editor-bg-primary, var(--pearl, #f8f6f3)) 0%, var(--mdx-editor-bg-secondary, var(--mist, #eef2f5)) 50%, var(--mdx-editor-bg-warm, var(--sand, #e8ddd0)) 100%);box-shadow:0 4px 20px rgba(26, 40, 48, 0.12), 0 8px 40px rgba(212, 165, 116, 0.15);">
        <div style="display:flex;gap:20px;padding:20px;align-items:flex-start;">
          <div style="position:relative;flex-shrink:0;width:120px;height:120px;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0, 0, 0, 0.15);background:var(--mdx-editor-bg-tertiary, var(--cloud, #dde4ea));">
            <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:40px;height:40px;color:var(--mdx-editor-text-muted, var(--slate, #64748b));">
                <path d="M9 18V5l12-2v13"></path>
                <circle cx="6" cy="18" r="3"></circle>
                <circle cx="18" cy="16" r="3"></circle>
              </svg>
            </div>
            <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);">
              <svg viewBox="0 0 24 24" fill="white" style="width:48px;height:48px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                <path d="M8 5.14v14l11-7-11-7z"></path>
              </svg>
            </div>
          </div>
          <div style="flex:1;min-width:0;">
            <h3 style="margin:0 0 4px 0;font-size:18px;font-weight:600;color:var(--mdx-editor-text-primary, var(--abyss, #1a2830));overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
              Apple Music Track
            </h3>
            <p style="margin:0 0 2px 0;font-size:14px;font-weight:500;color:var(--mdx-editor-text-secondary, var(--storm, #4a5568));">
              ID: ${trackId}
            </p>
            <p style="margin:0 0 12px 0;font-size:13px;color:var(--mdx-editor-text-muted, var(--slate, #64748b));">
              ${type === "album" ? "Album" : "Song"}
            </p>
            <div style="display:inline-flex;align-items:center;gap:6px;padding:8px 14px;background:rgba(0,0,0,0.05);border-radius:20px;font-size:12px;font-weight:500;color:var(--mdx-editor-text-secondary, var(--storm, #4a5568));">
              <svg viewBox="0 0 24 24" fill="currentColor" style="width:14px;height:14px;">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path>
              </svg>
              Apple Music
            </div>
          </div>
        </div>
        <span data-applemusic-overlay="true" style="position:absolute;inset:0;cursor:pointer;background:transparent;display:block;"></span>
      </div>
    `;
  }
}
