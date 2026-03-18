import { useCallback, useEffect, type RefObject } from "react";
import {
  extractAppleMusicId,
  createAppleMusicEmbed,
} from "../core/apple-music-utils";

type UseAppleMusicEmbedOptions = {
  editorRef: RefObject<HTMLDivElement | null>;
  serializeNow: () => void;
  insertNodeAtSelection: (node: Node) => void;
  available: boolean;
};

export function useAppleMusicEmbed({
  editorRef,
  serializeNow,
  insertNodeAtSelection,
  available,
}: UseAppleMusicEmbedOptions) {
  useEffect(() => {
    const root = editorRef.current;
    if (!root || !available) return;

    const handleAppleMusicInput = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (!input.dataset.applemusicInput) return;

      const dropzone = input.closest(
        "[data-applemusic-dropzone]"
      ) as HTMLElement | null;
      if (!dropzone) return;

      const url = input.value.trim();
      const result = extractAppleMusicId(url);
      const previewEl = dropzone.querySelector(
        "[data-applemusic-preview]"
      ) as HTMLElement | null;
      const errorEl = dropzone.querySelector(
        "[data-applemusic-error]"
      ) as HTMLElement | null;

      if (!url) {
        if (previewEl) {
          previewEl.style.display = "none";
          previewEl.innerHTML = "";
        }
        if (errorEl) errorEl.style.display = "none";
        return;
      }

      if (!result) {
        if (previewEl) {
          previewEl.style.display = "none";
          previewEl.innerHTML = "";
        }
        if (errorEl) {
          errorEl.style.display = "block";
          errorEl.textContent = "Please enter a valid Apple Music URL";
        }
        return;
      }

      if (errorEl) errorEl.style.display = "none";
      if (previewEl) {
        const embedHeight = result.type === "album" ? 200 : 100;
        const embedUrl = `https://embed.music.apple.com/us/${result.type}/${result.id}?app=music`;
        previewEl.style.display = "block";
        previewEl.innerHTML = `
          <div style="position:relative;border-radius:12px;overflow:hidden;background:var(--mdx-editor-bg-secondary, var(--mist, #eef2f5));">
            <iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="${embedHeight}" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="${embedUrl}" style="width:100%;border:none;border-radius:12px;"></iframe>
          </div>
          <button type="button" data-applemusic-confirm style="margin-top:12px;padding:10px 20px;border-radius:12px;background:var(--mdx-editor-primary, var(--ocean, #2563eb));color:white;font-size:14px;font-weight:500;border:none;cursor:pointer;">
            Embed ${result.type === "album" ? "Album" : "Song"}
          </button>
        `;
      }
    };

    const handleAppleMusicKeydown = (event: KeyboardEvent) => {
      const input = event.target as HTMLInputElement;
      if (!input.dataset.applemusicInput) return;

      if (event.key === "Enter") {
        event.preventDefault();
        const dropzone = input.closest(
          "[data-applemusic-dropzone]"
        ) as HTMLElement | null;
        if (!dropzone) return;

        const url = input.value.trim();
        const result = extractAppleMusicId(url);
        if (result) {
          const embed = createAppleMusicEmbed(result.id, result.type);

          if (dropzone.parentNode) {
            dropzone.parentNode.replaceChild(embed, dropzone);
          }
          serializeNow();
        }
      }

      if (event.key === "Escape") {
        const dropzone = input.closest(
          "[data-applemusic-dropzone]"
        ) as HTMLElement | null;
        if (dropzone) {
          dropzone.remove();
          serializeNow();
        }
      }
    };

    const handleAppleMusicConfirm = (event: MouseEvent) => {
      const button = event.target as HTMLElement;
      if (!("applemusicConfirm" in button.dataset)) return;

      const dropzone = button.closest(
        "[data-applemusic-dropzone]"
      ) as HTMLElement | null;
      if (!dropzone) return;

      const input = dropzone.querySelector<HTMLInputElement>(
        "input[data-applemusic-input]"
      );
      if (!input) return;

      const url = input.value.trim();
      const result = extractAppleMusicId(url);
      if (result) {
        const embed = createAppleMusicEmbed(result.id, result.type);

        if (dropzone.parentNode) {
          dropzone.parentNode.replaceChild(embed, dropzone);
        }
        serializeNow();
      }
    };

    const handleAppleMusicPaste = (event: ClipboardEvent) => {
      const input = event.target as HTMLInputElement;
      if (!input.dataset.applemusicInput) return;

      const pastedText = event.clipboardData?.getData("text/plain")?.trim();
      if (!pastedText) return;

      setTimeout(() => {
        const inputEvent = new Event("input", { bubbles: true });
        input.dispatchEvent(inputEvent);
      }, 0);
    };

    root.addEventListener("input", handleAppleMusicInput);
    root.addEventListener("keydown", handleAppleMusicKeydown);
    root.addEventListener("click", handleAppleMusicConfirm);
    root.addEventListener("paste", handleAppleMusicPaste);

    return () => {
      root.removeEventListener("input", handleAppleMusicInput);
      root.removeEventListener("keydown", handleAppleMusicKeydown);
      root.removeEventListener("click", handleAppleMusicConfirm);
      root.removeEventListener("paste", handleAppleMusicPaste);
    };
  }, [editorRef, serializeNow, available]);

  const insertAppleMusicDropzone = useCallback(() => {
    if (!available) return;

    const dropzone = document.createElement("div");
    dropzone.contentEditable = "false";
    dropzone.dataset.applemusicDropzone = "true";
    dropzone.style.cssText =
      "padding:24px;border-radius:18px;border:2px dashed var(--mdx-editor-border, var(--cloud, #dde4ea));background:linear-gradient(165deg, var(--mdx-editor-bg-primary, var(--pearl, #f8f6f3)) 0%, var(--mdx-editor-bg-secondary, var(--mist, #eef2f5)) 50%, var(--mdx-editor-bg-warm, var(--sand, #e8ddd0)) 100%);text-align:center;color:var(--mdx-editor-text-muted, var(--slate, #64748b));max-width:520px;margin:12px auto;";
    dropzone.innerHTML = `
      <div style="font-weight:600;color:var(--mdx-editor-text-primary, var(--abyss, #1a2830));margin-bottom:8px;">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="width:32px;height:32px;margin:0 auto 8px;color:var(--mdx-editor-error, var(--coral, #e07b67));">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        Embed Apple Music
      </div>
      <input type="text" placeholder="Paste Apple Music URL..." data-applemusic-input="true" style="width:100%;padding:12px 16px;border-radius:12px;border:1px solid var(--mdx-editor-border, var(--cloud, #dde4ea));background:white;font-size:14px;color:var(--mdx-editor-text-secondary, var(--storm, #4a5568));outline:none;" />
      <div data-applemusic-preview style="margin-top:12px;display:none;"></div>
      <div data-applemusic-error style="margin-top:8px;font-size:12px;color:var(--mdx-editor-error, var(--coral, #e07b67));display:none;"></div>
    `;
    insertNodeAtSelection(dropzone);
    const spacer = document.createElement("p");
    spacer.innerHTML = "<br />";
    dropzone.insertAdjacentElement("afterend", spacer);

    setTimeout(() => {
      const input = dropzone.querySelector<HTMLInputElement>(
        "input[data-applemusic-input]"
      );
      input?.focus();
    }, 0);
  }, [insertNodeAtSelection, available]);

  const handlePasteAppleMusic = useCallback(
    (text: string): boolean => {
      if (!available) return false;

      const result = extractAppleMusicId(text);
      if (result) {
        const root = editorRef.current;
        if (!root) return false;
        root.focus();
        const embed = createAppleMusicEmbed(result.id, result.type);
        insertNodeAtSelection(embed);
        const spacer = document.createElement("p");
        spacer.innerHTML = "<br />";
        embed.insertAdjacentElement("afterend", spacer);
        serializeNow();
        return true;
      }
      return false;
    },
    [editorRef, insertNodeAtSelection, serializeNow, available]
  );

  return {
    insertAppleMusicDropzone,
    handlePasteAppleMusic,
    createAppleMusicEmbed,
  };
}
