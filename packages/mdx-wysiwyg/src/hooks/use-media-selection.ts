import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import type { MediaAlign, MediaSize, MediaAspect, MediaSelection, YoutubeSelection, AppleMusicSelection, MediaMenuPosition, MediaAdapter } from "../types";
import { alignStyle, hydrateMediaNode, youtubeWrapperStyle } from "../core/media-utils";
import { appleMusicWrapperStyle } from "../core/apple-music-utils";

export interface UseMediaSelectionOptions {
  mediaAdapter?: MediaAdapter;
}

export function useMediaSelection(
  editorRef: RefObject<HTMLDivElement | null>,
  containerRef: RefObject<HTMLDivElement | null>,
  scheduleSerialize: () => void,
  options: UseMediaSelectionOptions = {}
) {
  const { mediaAdapter } = options;
  const [selectedMedia, setSelectedMedia] = useState<MediaSelection | null>(null);
  const [selectedYoutube, setSelectedYoutube] = useState<YoutubeSelection | null>(null);
  const [selectedAppleMusic, setSelectedAppleMusic] = useState<AppleMusicSelection | null>(null);
  const [mediaMenuPos, setMediaMenuPos] = useState<MediaMenuPosition>(null);
  const [captionDraft, setCaptionDraft] = useState("");
  const captionTimerRef = useRef<number | null>(null);

  const openMediaMenu = useCallback((element: HTMLElement) => {
    const container = containerRef.current;
    if (!container) return;
    const elementRect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const left = elementRect.left - containerRect.left;
    const top = elementRect.top - containerRect.top - 48;
    setMediaMenuPos({ top: Math.max(top, 8), left: Math.max(left, 8) });
  }, [containerRef]);

  const hydrateMediaNodes = useCallback(async () => {
    const root = editorRef.current;
    if (!root || !mediaAdapter) return;
    const figures = Array.from(root.querySelectorAll("figure[data-media-id]"));
    await Promise.all(
      figures.map(async (figure) => {
        await hydrateMediaNode(figure as HTMLElement, mediaAdapter.fetchMedia);
      })
    );
  }, [editorRef, mediaAdapter]);

  const updateSelectedMedia = useCallback((updates: Partial<{ caption: string; align: MediaAlign; size: MediaSize; aspect: MediaAspect }>) => {
    if (!selectedMedia) return;
    const root = editorRef.current;
    if (!root) return;
    const figure = root.querySelector(`figure[data-media-id="${selectedMedia.id}"]`) as HTMLElement | null;
    if (!figure) return;
    if (updates.caption !== undefined) {
      figure.dataset.caption = updates.caption;
      const figcaption = figure.querySelector("figcaption");
      if (figcaption) {
        figcaption.textContent = updates.caption;
      } else if (updates.caption) {
        const nextCaption = document.createElement("figcaption");
        nextCaption.style.cssText = "margin-top:8px;font-size:0.875rem;color:var(--mdx-editor-caption-color, var(--slate, #64748b));";
        nextCaption.textContent = updates.caption;
        figure.appendChild(nextCaption);
      }
    }
    if (updates.align) {
      const nextSize = updates.size ?? selectedMedia.size;
      figure.dataset.align = updates.align;
      figure.style.cssText = alignStyle(updates.align, nextSize);
    }
    if (updates.size) {
      const nextAlign = updates.align ?? selectedMedia.align;
      figure.dataset.size = updates.size;
      figure.style.cssText = alignStyle(nextAlign, updates.size);
    }
    if (updates.aspect) {
      figure.dataset.aspect = updates.aspect;
      figure.dataset.hydrated = "false";
      hydrateMediaNodes();
    }
    setSelectedMedia({ ...selectedMedia, ...updates });
    scheduleSerialize();
  }, [selectedMedia, editorRef, scheduleSerialize, hydrateMediaNodes]);

  const updateSelectedYoutube = useCallback((updates: Partial<{ align: MediaAlign; size: MediaSize }>) => {
    if (!selectedYoutube) return;
    const root = editorRef.current;
    if (!root) return;
    const embed = root.querySelector(`div[data-youtube-id="${selectedYoutube.videoId}"]`) as HTMLElement | null;
    if (!embed) return;

    const nextAlign = updates.align ?? selectedYoutube.align;
    const nextSize = updates.size ?? selectedYoutube.size;

    embed.dataset.align = nextAlign;
    embed.dataset.size = nextSize;
    embed.style.cssText = youtubeWrapperStyle(nextAlign, nextSize);

    setSelectedYoutube({ ...selectedYoutube, align: nextAlign, size: nextSize });
    scheduleSerialize();
  }, [selectedYoutube, editorRef, scheduleSerialize]);

  const removeSelectedMedia = useCallback(() => {
    if (!selectedMedia) return;
    const root = editorRef.current;
    if (!root) return;
    const figure = root.querySelector(`figure[data-media-id="${selectedMedia.id}"]`) as HTMLElement | null;
    if (!figure) return;
    const mediaId = selectedMedia.id;
    figure.remove();
    setSelectedMedia(null);
    setMediaMenuPos(null);
    scheduleSerialize();
    // Clean up the remote file if the adapter supports deletion
    if (mediaAdapter?.deleteMedia) {
      mediaAdapter.deleteMedia(mediaId).catch((err) => {
        console.error("[mdx-wysiwyg] Failed to delete media:", err);
      });
    }
  }, [selectedMedia, editorRef, scheduleSerialize, mediaAdapter]);

  const removeSelectedYoutube = useCallback(() => {
    if (!selectedYoutube) return;
    const root = editorRef.current;
    if (!root) return;
    const embed = root.querySelector(`div[data-youtube-id="${selectedYoutube.videoId}"]`) as HTMLElement | null;
    if (!embed) return;
    embed.remove();
    setSelectedYoutube(null);
    setMediaMenuPos(null);
    scheduleSerialize();
  }, [selectedYoutube, editorRef, scheduleSerialize]);

  const updateSelectedAppleMusic = useCallback((updates: Partial<{ align: MediaAlign; size: MediaSize }>) => {
    if (!selectedAppleMusic) return;
    const root = editorRef.current;
    if (!root) return;
    const embed = (root.querySelector(`div[data-apple-music-id="${selectedAppleMusic.trackId}"]`) ??
      root.querySelector(`div[data-applemusic-id="${selectedAppleMusic.trackId}"]`)) as HTMLElement | null;
    if (!embed) return;

    const nextAlign = updates.align ?? selectedAppleMusic.align;
    const nextSize = updates.size ?? selectedAppleMusic.size;

    embed.dataset.align = nextAlign;
    embed.dataset.size = nextSize;
    embed.style.cssText = appleMusicWrapperStyle(nextAlign, nextSize);

    setSelectedAppleMusic({ ...selectedAppleMusic, align: nextAlign, size: nextSize });
    scheduleSerialize();
  }, [selectedAppleMusic, editorRef, scheduleSerialize]);

  const removeSelectedAppleMusic = useCallback(() => {
    if (!selectedAppleMusic) return;
    const root = editorRef.current;
    if (!root) return;
    const embed = (root.querySelector(`div[data-apple-music-id="${selectedAppleMusic.trackId}"]`) ??
      root.querySelector(`div[data-applemusic-id="${selectedAppleMusic.trackId}"]`)) as HTMLElement | null;
    if (!embed) return;
    embed.remove();
    setSelectedAppleMusic(null);
    setMediaMenuPos(null);
    scheduleSerialize();
  }, [selectedAppleMusic, editorRef, scheduleSerialize]);

  const clearSelection = useCallback(() => {
    setSelectedMedia(null);
    setSelectedYoutube(null);
    setSelectedAppleMusic(null);
    setMediaMenuPos(null);
  }, []);

  const selectMediaElement = useCallback((figure: HTMLElement) => {
    const align = (figure.dataset.align as MediaAlign) || "full";
    const size = (figure.dataset.size as MediaSize) || "full";
    const aspect = (figure.dataset.aspect as MediaAspect) || "original";
    setSelectedMedia({
      id: figure.dataset.mediaId!,
      caption: figure.dataset.caption ?? "",
      align,
      size,
      aspect,
    });
    setSelectedYoutube(null);
    setSelectedAppleMusic(null);
    openMediaMenu(figure);
  }, [openMediaMenu]);

  const selectYoutubeElement = useCallback((youtube: HTMLElement) => {
    const align = (youtube.dataset.align as MediaAlign) || "full";
    const size = (youtube.dataset.size as MediaSize) || "full";
    setSelectedYoutube({
      videoId: youtube.dataset.youtubeId!,
      align,
      size,
    });
    setSelectedMedia(null);
    setSelectedAppleMusic(null);
    openMediaMenu(youtube);
  }, [openMediaMenu]);

  const selectAppleMusicElement = useCallback((element: HTMLElement) => {
    const align = (element.dataset.align as MediaAlign) || "full";
    const size = (element.dataset.size as MediaSize) || "full";
    const type = (element.dataset.appleMusicType ?? element.dataset.applemusicType) as "song" | "album" | undefined;
    const resolvedType = type || "song";
    setSelectedAppleMusic({
      trackId: (element.dataset.appleMusicId ?? element.dataset.applemusicId)!,
      type: resolvedType,
      align,
      size,
    });
    setSelectedMedia(null);
    setSelectedYoutube(null);
    openMediaMenu(element);
  }, [openMediaMenu]);

  useEffect(() => {
    if (!selectedMedia) {
      setCaptionDraft("");
      return;
    }
    setCaptionDraft(selectedMedia.caption);
  }, [selectedMedia]);

  useEffect(() => {
    if (!selectedMedia) return;
    if (captionTimerRef.current) {
      window.clearTimeout(captionTimerRef.current);
    }
    captionTimerRef.current = window.setTimeout(() => {
      updateSelectedMedia({ caption: captionDraft });
    }, 250);
  }, [captionDraft, selectedMedia?.id, updateSelectedMedia]);

  useEffect(() => {
    return () => {
      if (captionTimerRef.current) {
        window.clearTimeout(captionTimerRef.current);
      }
    };
  }, []);

  return {
    selectedMedia,
    selectedYoutube,
    selectedAppleMusic,
    mediaMenuPos,
    captionDraft,
    setSelectedMedia,
    setSelectedYoutube,
    setSelectedAppleMusic,
    setCaptionDraft,
    openMediaMenu,
    updateSelectedMedia,
    updateSelectedYoutube,
    updateSelectedAppleMusic,
    removeSelectedMedia,
    removeSelectedYoutube,
    removeSelectedAppleMusic,
    clearSelection,
    selectMediaElement,
    selectYoutubeElement,
    selectAppleMusicElement,
  };
}
