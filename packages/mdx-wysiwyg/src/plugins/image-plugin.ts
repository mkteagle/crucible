import type { EditorPlugin } from "../types";
import { hydrateMediaNode } from "../core/media-utils";

export const imagePlugin: EditorPlugin = {
  name: "image",

  commands: [
    { label: "Image", icon: "/icons/editor/add-image.svg", action: "image" },
  ],

  async hydrateNodes(root, adapters) {
    if (!adapters.media) return;
    const figures = Array.from(root.querySelectorAll("figure[data-media-id]"));
    await Promise.all(
      figures.map(async (figure) => {
        await hydrateMediaNode(figure as HTMLElement, adapters.media!.fetchMedia);
      })
    );
  },
};
