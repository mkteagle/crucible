import { useCallback, useRef, useState, type RefObject } from "react";
import { alignStyle, compressImage, hydrateMediaNode } from "../core/media-utils";
import { ensureTrailingSpacer } from "../core/mdx-utils";
import { insertNodeAtSelection } from "../core/selection-utils";
import type { MediaSelection, UploadAdapter, MediaAdapter } from "../types";

type UseMediaUploadOptions = {
  editorRef: RefObject<HTMLDivElement | null>;
  scheduleSerialize: () => void;
  onMediaSelect: (media: MediaSelection) => void;
  openMediaMenu: (element: HTMLElement) => void;
  uploadAdapter?: UploadAdapter;
  mediaAdapter?: MediaAdapter;
};

export function useMediaUpload({
  editorRef,
  scheduleSerialize,
  onMediaSelect,
  openMediaMenu,
  uploadAdapter,
  mediaAdapter,
}: UseMediaUploadOptions) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropzoneRef = useRef<HTMLElement | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const hydrateMediaNodes = useCallback(async () => {
    const root = editorRef.current;
    if (!root || !mediaAdapter) return;
    const figures = Array.from(root.querySelectorAll("figure[data-media-id]"));
    await Promise.all(
      figures.map(async (figure) => {
        await hydrateMediaNode(figure as HTMLElement, mediaAdapter.fetchMedia);
      })
    );
    ensureTrailingSpacer(root);
  }, [editorRef, mediaAdapter]);

  const insertNodeAtSelectionCb = useCallback((node: Node) => {
    insertNodeAtSelection(node);
  }, []);

  const insertMediaFigure = useCallback(async (file: File, target?: HTMLElement | null) => {
    if (!uploadAdapter) {
      console.error("[mdx-wysiwyg] No upload adapter configured");
      return;
    }

    const tempId = `uploading-${Date.now()}`;
    const figure = document.createElement("figure");
    figure.contentEditable = "false";
    figure.dataset.mediaId = tempId;
    figure.dataset.caption = "";
    figure.dataset.align = "full";
    figure.dataset.size = "full";
    figure.dataset.aspect = "original";
    figure.dataset.uploading = "true";
    figure.style.cssText = alignStyle("full", "full");
    const previewUrl = URL.createObjectURL(file);
    figure.innerHTML = `
      <img src="${previewUrl}" alt="" style="width:100%;border-radius:16px;opacity:0.6;" />
      <div style="margin-top:8px;font-size:0.875rem;color:var(--mdx-editor-text-muted, var(--slate, #64748b));">Uploading image...</div>
    `;

    if (target && target.parentNode) {
      target.parentNode.replaceChild(figure, target);
    } else {
      insertNodeAtSelectionCb(figure);
    }
    const spacer = document.createElement("p");
    spacer.innerHTML = "<br />";
    figure.insertAdjacentElement("afterend", spacer);

    setIsUploading(true);
    setUploadError(null);

    try {
      // Compress if needed
      let fileToUpload = file;
      if (uploadAdapter.mediaLimits && file.size > uploadAdapter.mediaLimits.maxSizeBytes) {
        const compressFn = uploadAdapter.compressImage ?? compressImage;
        const targetBytes = Math.min(2 * 1024 * 1024, uploadAdapter.mediaLimits.maxSizeBytes);
        fileToUpload = await compressFn(file, {
          maxBytes: uploadAdapter.mediaLimits.maxSizeBytes,
          targetBytes,
          maxDimension: uploadAdapter.mediaLimits.maxWidth,
          minQuality: 0.75,
        });
      }

      const mediaId = await uploadAdapter.uploadImage(fileToUpload);
      figure.dataset.mediaId = mediaId;
      figure.removeAttribute("data-uploading");
      figure.dataset.hydrated = "false";
      await hydrateMediaNodes();
      URL.revokeObjectURL(previewUrl);
      onMediaSelect({ id: mediaId, caption: "", align: "full", size: "full", aspect: "original" });
      openMediaMenu(figure);
      scheduleSerialize();
    } catch (err) {
      figure.remove();
      URL.revokeObjectURL(previewUrl);
      setUploadError(err instanceof Error ? err.message : "Upload failed");
      console.error("[mdx-wysiwyg] upload failed", err);
    } finally {
      setIsUploading(false);
    }
  }, [uploadAdapter, insertNodeAtSelectionCb, hydrateMediaNodes, onMediaSelect, openMediaMenu, scheduleSerialize]);

  const handleFiles = useCallback(async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    await insertMediaFigure(files[0], dropzoneRef.current);
    dropzoneRef.current = null;
  }, [insertMediaFigure]);

  const insertDropzoneAtSelection = useCallback(() => {
    const dropzone = document.createElement("div");
    dropzone.contentEditable = "false";
    dropzone.dataset.dropzone = "true";
    dropzone.style.cssText =
      "padding:24px;border-radius:18px;border:2px dashed var(--mdx-editor-border, var(--cloud, #dde4ea));background:var(--mdx-editor-bg-primary, var(--pearl, #f8f6f3));text-align:center;color:var(--mdx-editor-text-muted, var(--slate, #64748b));max-width:520px;margin:12px auto;min-height:140px;display:flex;flex-direction:column;justify-content:center;gap:6px;";
    dropzone.innerHTML = "<div style=\"font-weight:600;color:var(--mdx-editor-text-primary, var(--abyss, #1a2830));\">Drop image here</div><div style=\"font-size:0.8rem;\">or click to browse</div>";
    insertNodeAtSelectionCb(dropzone);
    const spacer = document.createElement("p");
    spacer.innerHTML = "<br />";
    dropzone.insertAdjacentElement("afterend", spacer);
    dropzoneRef.current = dropzone;
  }, [insertNodeAtSelectionCb]);

  const handleDropzoneClick = useCallback((target: HTMLElement) => {
    const dropzone = target.closest("[data-dropzone]") as HTMLElement | null;
    if (dropzone) {
      dropzoneRef.current = dropzone;
      fileInputRef.current?.click();
      return true;
    }
    return false;
  }, []);

  const handleDrop = useCallback(async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const target = event.target as HTMLElement;
    const dropzone = target.closest("[data-dropzone]") as HTMLElement | null;
    dropzoneRef.current = dropzone;
    await handleFiles(event.dataTransfer.files);
  }, [handleFiles]);

  const handlePasteFiles = useCallback(async (files: FileList, target: HTMLElement) => {
    const dropzone = target.closest("[data-dropzone]") as HTMLElement | null;
    dropzoneRef.current = dropzone || dropzoneRef.current;
    await handleFiles(files);
  }, [handleFiles]);

  return {
    fileInputRef,
    dropzoneRef,
    handleFiles,
    insertDropzoneAtSelection,
    handleDropzoneClick,
    handleDrop,
    handlePasteFiles,
    insertNodeAtSelection: insertNodeAtSelectionCb,
    isUploading,
    uploadError,
  };
}
