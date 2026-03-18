import type { MediaAlign, MediaSize, MediaAspect, EditorPlugin, DeserializeHelpers } from "../types";
import { alignStyle, youtubeWrapperStyle } from "./media-utils";
import { appleMusicWrapperStyle } from "./apple-music-utils";

export function markdownInlineToHtml(text: string): string {
  let html = text;
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/_(.+?)_/g, "<em>$1</em>");
  html = html.replace(/~~(.+?)~~/g, "<s>$1</s>");
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  return html;
}

export function htmlToMarkdownInline(html: string): string {
  const container = document.createElement("div");
  container.innerHTML = html;
  const walk = (node: Node): string => {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent ?? "";
    }
    if (node.nodeType !== Node.ELEMENT_NODE) {
      return "";
    }
    const element = node as HTMLElement;
    const tag = element.tagName.toLowerCase();
    const children = Array.from(element.childNodes).map(walk).join("");
    if (tag === "strong" || tag === "b") {
      return `**${children}**`;
    }
    if (tag === "em" || tag === "i") {
      return `_${children}_`;
    }
    if (tag === "s" || tag === "del" || tag === "strike") {
      return `~~${children}~~`;
    }
    if (tag === "a") {
      const href = element.getAttribute("href") ?? "";
      return href ? `[${children}](${href})` : children;
    }
    if (tag === "br") {
      return "\n";
    }
    return children;
  };
  return walk(container);
}

export function mdxToHtml(source: string, plugins: EditorPlugin[] = []): string {
  let normalized = source;
  normalized = normalized.replace(
    /<figure[^>]*data-media-id="([^"]+)"[^>]*?(?:data-caption="([^"]*)")?[^>]*?(?:data-align="([^"]*)")?[^>]*?(?:data-size="([^"]*)")?[^>]*?(?:data-aspect="([^"]*)")?[^>]*>[\s\S]*?<\/figure>/g,
    (_match, mediaId, caption, align, size, aspect) => {
      const safeCaption = (caption || "").replace(/"/g, '\\"');
      const alignAttr = align ? ` align="${align}"` : "";
      const sizeAttr = size ? ` size="${size}"` : "";
      const aspectAttr = aspect ? ` aspect="${aspect}"` : "";
      return `<Media id="${mediaId}" kind="PHOTO" caption="${safeCaption}"${alignAttr}${sizeAttr}${aspectAttr} />`;
    }
  );
  const lines = normalized.split("\n");
  const blocks: string[] = [];
  let i = 0;

  const helpers: DeserializeHelpers = { markdownInlineToHtml };

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i += 1;
      continue;
    }

    // Try plugin deserializeLine first
    let pluginHandled = false;
    for (const plugin of plugins) {
      if (plugin.deserializeLine) {
        const result = plugin.deserializeLine(trimmed, helpers);
        if (result !== null) {
          blocks.push(result);
          pluginHandled = true;
          break;
        }
      }
    }
    if (pluginHandled) {
      i += 1;
      continue;
    }

    if (trimmed === "---") {
      blocks.push('<hr style="border:none;border-top:2px solid var(--mdx-editor-border, var(--cloud, #dde4ea));margin:24px 0;" />');
      i += 1;
      continue;
    }

    const headingMatch = trimmed.match(/^(#{2,3})\s+(.+)$/);
    if (headingMatch) {
      const tag = headingMatch[1].length === 2 ? "h2" : "h3";
      blocks.push(`<${tag}>${markdownInlineToHtml(headingMatch[2])}</${tag}>`);
      i += 1;
      continue;
    }

    if (trimmed.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("> ")) {
        quoteLines.push(lines[i].trim().slice(2));
        i += 1;
      }
      blocks.push(`<blockquote>${markdownInlineToHtml(quoteLines.join("\n"))}</blockquote>`);
      continue;
    }

    if (trimmed.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(`<li>${markdownInlineToHtml(lines[i].trim().slice(2))}</li>`);
        i += 1;
      }
      blocks.push(`<ul>${items.join("")}</ul>`);
      continue;
    }

    const orderedMatch = trimmed.match(/^\d+\.\s+(.+)$/);
    if (orderedMatch) {
      const items: string[] = [];
      while (i < lines.length) {
        const listMatch = lines[i].trim().match(/^\d+\.\s+(.+)$/);
        if (!listMatch) break;
        items.push(`<li>${markdownInlineToHtml(listMatch[1])}</li>`);
        i += 1;
      }
      blocks.push(`<ol>${items.join("")}</ol>`);
      continue;
    }

    const mediaMatch = trimmed.match(/<Media\s+id="([^"]*)"\s+kind="([^"]*)"(?:\s+caption="([^"]*)")?(?:\s+align="([^"]*)")?(?:\s+size="([^"]*)")?(?:\s+aspect="([^"]*)")?\s*\/>/);
    if (mediaMatch) {
      const caption = mediaMatch[3] || "";
      const align = (mediaMatch[4] as MediaAlign) || "full";
      const size = (mediaMatch[5] as MediaSize) || "full";
      const aspect = (mediaMatch[6] as MediaAspect) || "original";
      blocks.push(
        `<figure contenteditable="false" data-media-id="${mediaMatch[1]}" data-caption="${caption}" data-align="${align}" data-size="${size}" data-aspect="${aspect}" style="${alignStyle(align, size)}">
          <div data-media-loading="true">Loading image...</div>
        </figure>`
      );
      i += 1;
      continue;
    }

    const youtubeMatch = trimmed.match(/<YouTube\s+videoId="([^"]+)"(?:\s+align="([^"]*)")?(?:\s+size="([^"]*)")?\s*\/>/);
    if (youtubeMatch) {
      const videoId = youtubeMatch[1];
      const align = (youtubeMatch[2] as MediaAlign) || "full";
      const size = (youtubeMatch[3] as MediaSize) || "full";
      blocks.push(
        `<div contenteditable="false" data-youtube-id="${videoId}" data-align="${align}" data-size="${size}" style="${youtubeWrapperStyle(align, size)}">
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:16px;overflow:hidden;background:#000;">
            <iframe src="https://www.youtube.com/embed/${videoId}" style="position:absolute;inset:0;width:100%;height:100%;border:none;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <span data-youtube-overlay="true" style="position:absolute;inset:0;cursor:pointer;background:transparent;display:block;"></span>
          </div>
        </div>`
      );
      i += 1;
      continue;
    }

    const appleMusicMatch = trimmed.match(/<AppleMusic\s+([^>]+?)\s*\/>/);
    if (appleMusicMatch) {
      const attrs = appleMusicMatch[1];
      const trackIdMatch = attrs.match(/trackId="([^"]+)"/);
      const idMatch = attrs.match(/(?<!\w)id="([^"]+)"/);
      const trackId = trackIdMatch?.[1] || idMatch?.[1];
      if (!trackId) {
        i += 1;
        continue;
      }
      const typeMatch = attrs.match(/type="([^"]+)"/);
      const alignMatch = attrs.match(/align="([^"]+)"/);
      const sizeMatch = attrs.match(/size="([^"]+)"/);
      const type = (typeMatch?.[1] as "song" | "album") || "song";
      const align = (alignMatch?.[1] as MediaAlign) || "full";
      const size = (sizeMatch?.[1] as MediaSize) || "full";
      const embedHeight = type === "album" ? 450 : 175;
      const embedUrl = `https://embed.music.apple.com/us/${type}/${trackId}?app=music`;
      blocks.push(
        `<div contenteditable="false" data-apple-music-id="${trackId}" data-apple-music-type="${type}" data-align="${align}" data-size="${size}" style="${appleMusicWrapperStyle(align, size)}">
          <div style="position:relative;border-radius:20px;overflow:hidden;background:linear-gradient(165deg, var(--mdx-editor-bg-primary, var(--pearl, #f8f6f3)) 0%, var(--mdx-editor-bg-secondary, var(--mist, #eef2f5)) 50%, var(--mdx-editor-bg-warm, var(--sand, #e8ddd0)) 100%);box-shadow:0 4px 20px rgba(26, 40, 48, 0.12), 0 8px 40px rgba(212, 165, 116, 0.15);">
            <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="${embedHeight}" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="${embedUrl}" style="width:100%;border:none;border-radius:20px;background:transparent;" title="Apple Music ${type === "album" ? "Album" : "Song"}"></iframe>
            <span data-applemusic-overlay="true" style="position:absolute;inset:0;cursor:pointer;background:transparent;display:block;pointer-events:none;"></span>
          </div>
        </div>`
      );
      i += 1;
      continue;
    }

    const imgMatch = trimmed.match(/^<img\s+[^>]*src="([^"]+)"[^>]*?(?:alt="([^"]*)")?[^>]*\/?>$/);
    if (imgMatch) {
      const src = imgMatch[1];
      const alt = imgMatch[2] || "";
      blocks.push(`<img src="${src}" alt="${alt}" style="width:100%;border-radius:16px;" />`);
      i += 1;
      continue;
    }

    const legacyYoutubeMatch = trimmed.match(/data-youtube-id="([^"]+)"/);
    if (legacyYoutubeMatch) {
      const videoId = legacyYoutubeMatch[1];
      const alignMatch = trimmed.match(/data-align="([^"]+)"/);
      const sizeMatch = trimmed.match(/data-size="([^"]+)"/);
      const align = (alignMatch?.[1] as MediaAlign) || "full";
      const size = (sizeMatch?.[1] as MediaSize) || "full";
      blocks.push(
        `<div contenteditable="false" data-youtube-id="${videoId}" data-align="${align}" data-size="${size}" style="${youtubeWrapperStyle(align, size)}">
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:16px;overflow:hidden;background:#000;">
            <iframe src="https://www.youtube.com/embed/${videoId}" style="position:absolute;inset:0;width:100%;height:100%;border:none;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <span data-youtube-overlay="true" style="position:absolute;inset:0;cursor:pointer;background:transparent;display:block;"></span>
          </div>
        </div>`
      );
      i += 1;
      continue;
    }

    if (
      trimmed.includes("data-youtube-dropzone") ||
      trimmed.includes("data-youtube-input") ||
      trimmed.includes("data-youtube-preview") ||
      trimmed.includes("data-youtube-error") ||
      trimmed.includes("data-applemusic-dropzone") ||
      trimmed.includes("data-applemusic-input") ||
      trimmed.includes("data-applemusic-preview") ||
      trimmed.includes("data-applemusic-error") ||
      trimmed.includes("data-dropzone") ||
      trimmed.startsWith("<input")
    ) {
      i += 1;
      continue;
    }

    // ColonialTweet multi-line component
    const colonialMatch = trimmed.match(/^<ColonialTweet\s+([^>]*)>/);
    if (colonialMatch) {
      const openTag = trimmed;
      const bodyLines: string[] = [];
      i += 1;
      while (i < lines.length && !lines[i].trim().startsWith("</ColonialTweet>")) {
        bodyLines.push(lines[i]);
        i += 1;
      }
      if (i < lines.length) i += 1; // skip closing tag

      const authorM = openTag.match(/author="([^"]+)"/);
      const handleM = openTag.match(/handle="([^"]+)"/);
      const dateM = openTag.match(/date="([^"]+)"/);
      const author = authorM?.[1] ?? "Unknown Patriot";
      const handle = handleM?.[1] ?? "";
      const date = dateM?.[1] ?? "Anno Domini";
      const body = bodyLines.map((l) => l.trim()).filter(Boolean).join("\n");
      const safeBody = body.replace(/"/g, '\\"');

      blocks.push(
        `<div contenteditable="false" data-colonial-tweet="true" ` +
        `data-author="${author}" data-handle="${handle}" data-date="${date}" ` +
        `data-body="${safeBody}" ` +
        `style="margin:16px auto;max-width:480px;border-radius:16px;overflow:hidden;` +
        `background:linear-gradient(168deg, #f5eed6 0%, #ece3c8 40%, #e8dbb8 100%);` +
        `border:1.5px solid #c9b88a;` +
        `box-shadow:0 4px 24px rgba(120,100,60,0.15), inset 0 1px 0 rgba(255,255,255,0.6);` +
        `font-family:Georgia, 'Times New Roman', serif;cursor:default;user-select:none;">` +
        `<div style="padding:20px 20px 12px;">Loading colonial dispatch...</div></div>`
      );
      continue;
    }

    if (trimmed.startsWith("<") && trimmed.endsWith(">")) {
      blocks.push(trimmed);
      i += 1;
      continue;
    }

    blocks.push(`<p>${markdownInlineToHtml(trimmed)}</p>`);
    i += 1;
  }

  return blocks.join("");
}

export function serializeDom(root: HTMLElement, plugins: EditorPlugin[] = []): string {
  const lines: string[] = [];
  const blockTags = new Set(["figure", "h2", "h3", "blockquote", "ul", "ol", "img", "hr"]);
  const inlineTags = new Set(["strong", "b", "em", "i", "a", "br", "span"]);

  const hasBlockChildren = (element: HTMLElement) => {
    return Array.from(element.childNodes).some((child) => {
      if (child.nodeType !== Node.ELEMENT_NODE) return false;
      const childEl = child as HTMLElement;
      if (childEl.dataset.youtubeId) return true;
      if (childEl.dataset.applemusicId || childEl.dataset.appleMusicId) return true;
      return blockTags.has(childEl.tagName.toLowerCase());
    });
  };

  const hasNonInlineElements = (element: HTMLElement) => {
    const elements = Array.from(element.querySelectorAll("*"));
    return elements.some((el) => !inlineTags.has(el.tagName.toLowerCase()));
  };

  const serializeNode = (node: Node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent?.trim();
      if (text) lines.push(text);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const el = node as HTMLElement;
    const tag = el.tagName.toLowerCase();
    if (el.dataset.youtubeDropzone || el.dataset.applemusicDropzone || el.dataset.dropzone) {
      return;
    }
    if (tag === "input") {
      return;
    }

    // Try plugin serializeNode first
    for (const plugin of plugins) {
      if (plugin.serializeNode) {
        const result = plugin.serializeNode(el);
        if (result !== null) {
          lines.push(result);
          return;
        }
      }
    }

    if (tag === "hr") {
      lines.push("---");
      return;
    }
    if (tag === "h2" || tag === "h3") {
      const hashes = tag === "h2" ? "##" : "###";
      lines.push(`${hashes} ${htmlToMarkdownInline(el.innerHTML).trim()}`);
      return;
    }
    if (tag === "blockquote") {
      const text = htmlToMarkdownInline(el.innerHTML).trim();
      lines.push(text.split("\n").map((line) => `> ${line}`).join("\n"));
      return;
    }
    if (tag === "ul" || tag === "ol") {
      const items = Array.from(el.querySelectorAll("li"));
      items.forEach((item, index) => {
        const content = htmlToMarkdownInline(item.innerHTML).trim();
        lines.push(tag === "ol" ? `${index + 1}. ${content}` : `- ${content}`);
      });
      return;
    }
    if (tag === "figure" && el.dataset.mediaId) {
      if (el.dataset.uploading === "true") {
        return;
      }
      const caption = (el.dataset.caption ?? "").replace(/"/g, '\\"');
      const align = el.dataset.align && el.dataset.align !== "full" ? ` align="${el.dataset.align}"` : "";
      const size = el.dataset.size && el.dataset.size !== "full" ? ` size="${el.dataset.size}"` : "";
      const aspect = el.dataset.aspect && el.dataset.aspect !== "original" ? ` aspect="${el.dataset.aspect}"` : "";
      lines.push(`<Media id="${el.dataset.mediaId}" kind="PHOTO" caption="${caption}"${align}${size}${aspect} />`);
      return;
    }
    if (tag === "img") {
      const src = el.getAttribute("src") ?? "";
      if (!src) return;
      const alt = el.getAttribute("alt") ?? "";
      lines.push(`<img src="${src}" alt="${alt}" />`);
      return;
    }
    if (tag === "div" && el.dataset.youtubeId) {
      const align = el.dataset.align && el.dataset.align !== "full" ? ` align="${el.dataset.align}"` : "";
      const size = el.dataset.size && el.dataset.size !== "full" ? ` size="${el.dataset.size}"` : "";
      lines.push(`<YouTube videoId="${el.dataset.youtubeId}"${align}${size} />`);
      return;
    }
    if (tag === "div" && (el.dataset.applemusicId || el.dataset.appleMusicId)) {
      const appleMusicId = el.dataset.applemusicId ?? el.dataset.appleMusicId ?? "";
      const appleMusicType = el.dataset.applemusicType ?? el.dataset.appleMusicType;
      const type = appleMusicType && appleMusicType !== "song" ? ` type="${appleMusicType}"` : "";
      const align = el.dataset.align && el.dataset.align !== "full" ? ` align="${el.dataset.align}"` : "";
      const size = el.dataset.size && el.dataset.size !== "full" ? ` size="${el.dataset.size}"` : "";
      lines.push(`<AppleMusic trackId="${appleMusicId}"${type}${align}${size} />`);
      return;
    }
    if (tag === "p") {
      if (hasBlockChildren(el)) {
        Array.from(el.childNodes).forEach(serializeNode);
        return;
      }
      if (hasNonInlineElements(el)) {
        lines.push(el.outerHTML.trim());
        return;
      }
      const raw = htmlToMarkdownInline(el.innerHTML);
      const text = raw.trim();
      if (!text && el.innerHTML.includes("<br")) {
        lines.push("");
        return;
      }
      if (text) lines.push(text);
      return;
    }

    if (tag === "div") {
      if (hasBlockChildren(el)) {
        Array.from(el.childNodes).forEach(serializeNode);
        return;
      }
      if (hasNonInlineElements(el)) {
        lines.push(el.outerHTML.trim());
        return;
      }
      const raw = htmlToMarkdownInline(el.innerHTML);
      const text = raw.trim();
      if (!text && el.innerHTML.includes("<br")) {
        lines.push("");
        return;
      }
      if (text) lines.push(text);
      return;
    }

    const fallback = el.outerHTML?.trim() || htmlToMarkdownInline(el.innerHTML).trim();
    if (fallback) lines.push(fallback);
  };

  const children = Array.from(root.childNodes).filter((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      return (node.textContent ?? "").trim().length > 0;
    }
    return true;
  });

  children.forEach(serializeNode);

  return lines.join("\n\n");
}

export function isEditorEmpty(root: HTMLElement): boolean {
  if (root.innerText.trim().length > 0) return false;
  if (root.querySelector("figure[data-media-id]")) return false;
  if (root.querySelector("ul,ol,blockquote,h2,h3,hr")) return false;
  if (root.querySelector("div[data-youtube-id],div[data-youtube-dropzone]")) return false;
  if (root.querySelector("div[data-applemusic-id],div[data-apple-music-id],div[data-applemusic-dropzone]")) return false;
  return true;
}

export function ensureTrailingSpacer(root: HTMLElement): void {
  const last = root.lastElementChild;
  if (!last || (last.tagName.toLowerCase() !== "p" && last.tagName.toLowerCase() !== "div")) {
    const spacer = document.createElement("p");
    spacer.innerHTML = "<br />";
    root.appendChild(spacer);
    return;
  }
  if (last.innerHTML.trim() === "") {
    last.innerHTML = "<br />";
  }
}
