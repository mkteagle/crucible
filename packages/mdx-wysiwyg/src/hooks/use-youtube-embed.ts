import { useCallback, useEffect, type RefObject } from "react";
import { extractYoutubeVideoId, createYoutubeEmbed } from "../core/media-utils";

type UseYoutubeEmbedOptions = {
  editorRef: RefObject<HTMLDivElement | null>;
  serializeNow: () => void;
  insertNodeAtSelection: (node: Node) => void;
};

export function useYoutubeEmbed({
  editorRef,
  serializeNow,
  insertNodeAtSelection,
}: UseYoutubeEmbedOptions) {

  useEffect(() => {
    const root = editorRef.current;
    if (!root) return;

    const handleYoutubeInput = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (!input.dataset.youtubeInput) return;

      const dropzone = input.closest("[data-youtube-dropzone]") as HTMLElement | null;
      if (!dropzone) return;

      const url = input.value.trim();
      const videoId = extractYoutubeVideoId(url);
      const previewEl = dropzone.querySelector("[data-youtube-preview]") as HTMLElement | null;
      const errorEl = dropzone.querySelector("[data-youtube-error]") as HTMLElement | null;

      if (!url) {
        if (previewEl) {
          previewEl.style.display = "none";
          previewEl.innerHTML = "";
        }
        if (errorEl) errorEl.style.display = "none";
        return;
      }

      if (!videoId) {
        if (previewEl) {
          previewEl.style.display = "none";
          previewEl.innerHTML = "";
        }
        if (errorEl) {
          errorEl.style.display = "block";
          errorEl.textContent = "Please enter a valid YouTube URL";
        }
        return;
      }

      if (errorEl) errorEl.style.display = "none";
      if (previewEl) {
        previewEl.style.display = "block";
        previewEl.innerHTML = `
          <div style="position:relative;width:100%;padding-bottom:56.25%;border-radius:12px;overflow:hidden;background:#000;">
            <iframe src="https://www.youtube.com/embed/${videoId}" style="position:absolute;inset:0;width:100%;height:100%;border:none;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <button type="button" data-youtube-confirm style="margin-top:12px;padding:10px 20px;border-radius:12px;background:var(--mdx-editor-primary, var(--ocean, #2563eb));color:white;font-size:14px;font-weight:500;border:none;cursor:pointer;">
            Embed Video
          </button>
        `;
      }
    };

    const handleYoutubeKeydown = (event: KeyboardEvent) => {
      const input = event.target as HTMLInputElement;
      if (!input.dataset.youtubeInput) return;

      if (event.key === "Enter") {
        event.preventDefault();
        const dropzone = input.closest("[data-youtube-dropzone]") as HTMLElement | null;
        if (!dropzone) return;

        const url = input.value.trim();
        const videoId = extractYoutubeVideoId(url);
        if (videoId) {
          const embed = createYoutubeEmbed(videoId);

          if (dropzone.parentNode) {
            dropzone.parentNode.replaceChild(embed, dropzone);
          }
          serializeNow();
        }
      }

      if (event.key === "Escape") {
        const dropzone = input.closest("[data-youtube-dropzone]") as HTMLElement | null;
        if (dropzone) {
          dropzone.remove();
          serializeNow();
        }
      }
    };

    const handleYoutubeConfirm = (event: MouseEvent) => {
      const button = event.target as HTMLElement;
      if (!("youtubeConfirm" in button.dataset)) return;

      const dropzone = button.closest("[data-youtube-dropzone]") as HTMLElement | null;
      if (!dropzone) return;

      const input = dropzone.querySelector<HTMLInputElement>("input[data-youtube-input]");
      if (!input) return;

      const url = input.value.trim();
      const videoId = extractYoutubeVideoId(url);
      if (videoId) {
        const embed = createYoutubeEmbed(videoId);

        if (dropzone.parentNode) {
          dropzone.parentNode.replaceChild(embed, dropzone);
        }
        serializeNow();
      }
    };

    const handleYoutubePaste = (event: ClipboardEvent) => {
      const input = event.target as HTMLInputElement;
      if (!input.dataset.youtubeInput) return;

      const pastedText = event.clipboardData?.getData("text/plain")?.trim();
      if (!pastedText) return;

      setTimeout(() => {
        const inputEvent = new Event("input", { bubbles: true });
        input.dispatchEvent(inputEvent);
      }, 0);
    };

    root.addEventListener("input", handleYoutubeInput);
    root.addEventListener("keydown", handleYoutubeKeydown);
    root.addEventListener("click", handleYoutubeConfirm);
    root.addEventListener("paste", handleYoutubePaste);

    return () => {
      root.removeEventListener("input", handleYoutubeInput);
      root.removeEventListener("keydown", handleYoutubeKeydown);
      root.removeEventListener("click", handleYoutubeConfirm);
      root.removeEventListener("paste", handleYoutubePaste);
    };
  }, [editorRef, serializeNow]);

  const insertYoutubeDropzone = useCallback(() => {
    const dropzone = document.createElement("div");
    dropzone.contentEditable = "false";
    dropzone.dataset.youtubeDropzone = "true";
    dropzone.style.cssText =
      "padding:24px;border-radius:18px;border:2px dashed var(--mdx-editor-border, var(--cloud, #dde4ea));background:var(--mdx-editor-bg-primary, var(--pearl, #f8f6f3));text-align:center;color:var(--mdx-editor-text-muted, var(--slate, #64748b));max-width:520px;margin:12px auto;";
    dropzone.innerHTML = `
      <div style="font-weight:600;color:var(--mdx-editor-text-primary, var(--abyss, #1a2830));margin-bottom:8px;">
        <svg viewBox="0 0 1200 1200" aria-hidden="true" style="width:32px;height:32px;margin:0 auto 8px;color:#ff0000;">
          <path
            d="m876.61 274.92c-182.63-25.312-370.55-25.312-553.22 0-75.375 10.453-134.06 67.781-145.92 142.69-9.4688 60.141-14.297 121.55-14.297 182.39s4.7812 122.86 14.531 183.37c11.625 73.219 71.531 131.39 145.69 141.71 91.312 12.703 184.45 19.078 276.61 19.078 92.16 0 185.29-6.375 276.61-19.078 75.234-10.453 133.78-67.312 145.69-141.71 9.7031-60.469 14.531-122.16 14.531-183.37s-4.7812-122.86-14.531-183.37c-11.625-73.219-71.531-131.39-145.69-141.71zm-120.37 345.84-250.08 144.37c-3.7031 2.1562-7.7812 3.2344-12 3.2344s-8.2969-1.0781-12-3.2344c-7.4531-4.2188-12-12.141-12-20.766v-288.71c0-8.625 4.5469-16.547 12-20.766 7.4531-4.3125 16.547-4.3125 24 0l250.08 144.37c7.4531 4.2188 12 12.234 12 20.766s-4.5469 16.547-12 20.766z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0"
          />
        </svg>
        Embed YouTube Video
      </div>
      <input type="text" placeholder="Paste YouTube URL..." data-youtube-input="true" style="width:100%;padding:12px 16px;border-radius:12px;border:1px solid var(--mdx-editor-border, var(--cloud, #dde4ea));background:white;font-size:14px;color:var(--mdx-editor-text-secondary, var(--storm, #4a5568));outline:none;" />
      <div data-youtube-preview style="margin-top:12px;display:none;"></div>
      <div data-youtube-error style="margin-top:8px;font-size:12px;color:var(--mdx-editor-error, var(--coral, #e07b67));display:none;"></div>
    `;
    insertNodeAtSelection(dropzone);
    const spacer = document.createElement("p");
    spacer.innerHTML = "<br />";
    dropzone.insertAdjacentElement("afterend", spacer);

    setTimeout(() => {
      const input = dropzone.querySelector<HTMLInputElement>("input[data-youtube-input]");
      input?.focus();
    }, 0);
  }, [insertNodeAtSelection]);

  const handlePasteYoutube = useCallback((text: string): boolean => {
    const videoId = extractYoutubeVideoId(text);
    if (videoId) {
      const root = editorRef.current;
      if (!root) return false;
      root.focus();
      const embed = createYoutubeEmbed(videoId);
      insertNodeAtSelection(embed);
      const spacer = document.createElement("p");
      spacer.innerHTML = "<br />";
      embed.insertAdjacentElement("afterend", spacer);
      serializeNow();
      return true;
    }
    return false;
  }, [editorRef, insertNodeAtSelection, serializeNow]);

  return {
    insertYoutubeDropzone,
    handlePasteYoutube,
    createYoutubeEmbed,
  };
}
