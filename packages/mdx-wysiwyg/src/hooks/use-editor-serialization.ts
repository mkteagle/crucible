import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import { serializeDom, mdxToHtml, isEditorEmpty, ensureTrailingSpacer } from "../core/mdx-utils";
import { hydrateMediaNode, hydrateYoutubeNode } from "../core/media-utils";
import { hydrateAppleMusicNode } from "../core/apple-music-utils";
import type { EditorPlugin, MediaAdapter } from "../types";

export interface UseEditorSerializationOptions {
  mediaAdapter?: MediaAdapter;
  plugins?: EditorPlugin[];
}

export function useEditorSerialization(
  editorRef: RefObject<HTMLDivElement | null>,
  value: string,
  onChange: (value: string) => void,
  options: UseEditorSerializationOptions = {}
) {
  const { mediaAdapter, plugins = [] } = options;
  const lastValueRef = useRef<string | null>(null);
  const serializeTimerRef = useRef<number | null>(null);
  const [isEmpty, setIsEmpty] = useState(true);

  const checkIsEmpty = useCallback(() => {
    const root = editorRef.current;
    if (root) {
      setIsEmpty(isEditorEmpty(root));
    }
  }, [editorRef]);

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

  const hydrateYoutubeNodes = useCallback(() => {
    const root = editorRef.current;
    if (!root) return;
    const embeds = Array.from(root.querySelectorAll("div[data-youtube-id]"));
    embeds.forEach((embed) => {
      hydrateYoutubeNode(embed as HTMLElement);
    });
  }, [editorRef]);

  const hydrateAppleMusicNodes = useCallback(() => {
    const root = editorRef.current;
    if (!root) return;
    const embeds = Array.from(root.querySelectorAll("div[data-apple-music-id],div[data-applemusic-id]"));
    embeds.forEach((embed) => {
      hydrateAppleMusicNode(embed as HTMLElement);
    });
  }, [editorRef]);

  const hydratePluginNodes = useCallback(async () => {
    const root = editorRef.current;
    if (!root) return;
    const adapters = { media: mediaAdapter };
    for (const plugin of plugins) {
      if (plugin.hydrateNodes) {
        await plugin.hydrateNodes(root, adapters);
      }
    }
  }, [editorRef, plugins, mediaAdapter]);

  const serializeNow = useCallback(() => {
    const root = editorRef.current;
    if (!root) return;
    if (root.querySelector("figure[data-uploading=\"true\"]")) {
      return;
    }
    const nextValue = serializeDom(root, plugins);
    lastValueRef.current = nextValue;
    onChange(nextValue);
    setIsEmpty(isEditorEmpty(root));
  }, [editorRef, onChange, plugins]);

  const scheduleSerialize = useCallback(() => {
    if (serializeTimerRef.current) {
      window.clearTimeout(serializeTimerRef.current);
    }
    serializeTimerRef.current = window.setTimeout(() => {
      serializeNow();
    }, 250);
  }, [serializeNow]);

  useEffect(() => {
    const root = editorRef.current;
    if (!root) return;
    if (value === lastValueRef.current) return;
    lastValueRef.current = value;
    root.innerHTML = mdxToHtml(value, plugins) || "<p><br /></p>";
    const cleanupNodes = root.querySelectorAll(
      "[data-youtube-dropzone],[data-youtube-input],[data-youtube-preview],[data-youtube-error],[data-dropzone],input[data-youtube-input]"
    );
    if (cleanupNodes.length > 0) {
      cleanupNodes.forEach((node) => node.remove());
      scheduleSerialize();
    }
    setIsEmpty(isEditorEmpty(root));
    hydrateMediaNodes();
    hydrateYoutubeNodes();
    hydrateAppleMusicNodes();
    hydratePluginNodes();
    ensureTrailingSpacer(root);
  }, [value, editorRef, hydrateMediaNodes, hydrateYoutubeNodes, hydrateAppleMusicNodes, hydratePluginNodes, scheduleSerialize, plugins]);

  return {
    isEmpty,
    serializeNow,
    scheduleSerialize,
    lastValueRef,
    checkIsEmpty,
    hydrateMediaNodes,
    hydrateYoutubeNodes,
    hydrateAppleMusicNodes,
    hydratePluginNodes,
  };
}
