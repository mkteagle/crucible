import type { MediaAlign, MediaSize, MediaAspect, CompressOptions } from "../types";

export function extractYoutubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export function alignStyle(align: MediaAlign, size: MediaSize): string {
  const widthMap: Record<MediaSize, string> = {
    small: "30%",
    medium: "50%",
    large: "70%",
    full: "100%",
  };
  const width = widthMap[size];
  if (align === "left") return `max-width:${width};margin-right:auto;`;
  if (align === "right") return `max-width:${width};margin-left:auto;`;
  if (align === "center") return `max-width:${width};margin-left:auto;margin-right:auto;`;
  return `max-width:${width};`;
}

export async function compressImage(
  file: File,
  options: CompressOptions
): Promise<File> {
  const dataUrl = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error("Failed to read image"));
    reader.readAsDataURL(file);
  });

  const img = await new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Failed to load image"));
    image.src = dataUrl;
  });

  const scale = Math.min(1, options.maxDimension / Math.max(img.width, img.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(img.width * scale);
  canvas.height = Math.round(img.height * scale);
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Failed to create canvas context");
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  let quality = 0.9;
  let blob: Blob | null = null;
  const target = Math.min(options.targetBytes, options.maxBytes);

  while (quality >= options.minQuality) {
    blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, file.type, quality));
    if (blob && blob.size <= target) break;
    quality -= 0.05;
  }

  if (!blob) {
    throw new Error("Failed to compress image");
  }

  if (blob.size > options.maxBytes) {
    throw new Error("Image exceeds the maximum size limit.");
  }

  return new File([blob], file.name, { type: blob.type });
}

export function youtubeWrapperStyle(align: MediaAlign, size: MediaSize): string {
  const widthMap: Record<MediaSize, string> = {
    small: "30%",
    medium: "50%",
    large: "70%",
    full: "100%",
  };
  const width = widthMap[size];
  let style = `max-width:${width};margin:12px 0;`;
  if (align === "left") style += "margin-right:auto;";
  else if (align === "right") style += "margin-left:auto;";
  else if (align === "center") style += "margin-left:auto;margin-right:auto;";
  return style;
}

export function createYoutubeEmbed(videoId: string, align: MediaAlign = "full", size: MediaSize = "full"): HTMLDivElement {
  const wrapper = document.createElement("div");
  wrapper.contentEditable = "false";
  wrapper.dataset.youtubeId = videoId;
  wrapper.dataset.align = align;
  wrapper.dataset.size = size;
  wrapper.style.cssText = youtubeWrapperStyle(align, size);
  wrapper.innerHTML = `
    <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:16px;overflow:hidden;background:#000;">
      <iframe src="https://www.youtube.com/embed/${videoId}" style="position:absolute;inset:0;width:100%;height:100%;border:none;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <span data-youtube-overlay="true" style="position:absolute;inset:0;cursor:pointer;background:transparent;display:block;"></span>
    </div>
  `;
  return wrapper;
}

export function hydrateYoutubeNode(el: HTMLElement): void {
  const align = (el.dataset.align as MediaAlign) || "full";
  const size = (el.dataset.size as MediaSize) || "full";
  const videoId = el.dataset.youtubeId;

  el.style.cssText = youtubeWrapperStyle(align, size);

  if (!el.querySelector("div > iframe")) {
    el.innerHTML = `
      <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:16px;overflow:hidden;background:#000;">
        <iframe src="https://www.youtube.com/embed/${videoId}" style="position:absolute;inset:0;width:100%;height:100%;border:none;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <span data-youtube-overlay="true" style="position:absolute;inset:0;cursor:pointer;background:transparent;display:block;"></span>
      </div>
    `;
  }
  if (!el.querySelector("iframe")) {
    const vid = el.dataset.youtubeId;
    if (vid) {
      el.innerHTML = `<iframe src="https://www.youtube.com/embed/${vid}" style="position:absolute;inset:0;width:100%;height:100%;border:none;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
  }
  if (!el.querySelector("[data-youtube-overlay]")) {
    const overlay = document.createElement("span");
    overlay.dataset.youtubeOverlay = "true";
    overlay.style.cssText = "position:absolute;inset:0;cursor:pointer;background:transparent;display:block;";
    el.appendChild(overlay);
  }
}

export async function hydrateMediaNode(
  el: HTMLElement,
  fetchMediaFn: (id: string) => Promise<{ url: string | null; thumbnailUrl?: string | null }>
): Promise<void> {
  if (el.dataset.hydrated === "true") return;
  try {
    const data = await fetchMediaFn(el.dataset.mediaId!);
    if (!data.url) return;
    const caption = el.dataset.caption ?? "";
    const align = (el.dataset.align as MediaAlign) || "full";
    const size = (el.dataset.size as MediaSize) || "full";
    const aspect = (el.dataset.aspect as MediaAspect) || "original";
    el.dataset.hydrated = "true";
    el.style.cssText = alignStyle(align, size);
    const imgHtml = `<img src="${data.url}" alt="${caption}" style="width:100%;border-radius:16px;" />`;
    const captionHtml = caption
      ? `<figcaption style="margin-top:8px;font-size:0.875rem;color:var(--mdx-editor-caption-color, var(--slate, #64748b));">${caption}</figcaption>`
      : "";
    if (aspect !== "original") {
      const ratio =
        aspect === "square"
          ? "100%"
          : aspect === "4:3"
          ? "75%"
          : "56.25%";
      el.innerHTML = `
        <div style="position:relative;width:100%;padding-bottom:${ratio};overflow:hidden;border-radius:16px;">
          <img src="${data.url}" alt="${caption}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" />
        </div>
        ${captionHtml}
      `;
    } else {
      el.innerHTML = `${imgHtml}${captionHtml}`;
    }
  } catch {
    // ignore
  }
}
