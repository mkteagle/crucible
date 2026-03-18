import type { EditorPlugin } from "../types";
import { extractYoutubeVideoId, createYoutubeEmbed, hydrateYoutubeNode } from "../core/media-utils";

export const youtubePlugin: EditorPlugin = {
  name: "youtube",

  commands: [
    { label: "YouTube Video", icon: "/icons/editor/play.svg", action: "youtube" },
  ],

  handlePaste(text, context) {
    const videoId = extractYoutubeVideoId(text);
    if (videoId) {
      const root = context.editorRef.current;
      if (!root) return false;
      root.focus();
      const embed = createYoutubeEmbed(videoId);
      context.insertNodeAtSelection(embed);
      const spacer = document.createElement("p");
      spacer.innerHTML = "<br />";
      embed.insertAdjacentElement("afterend", spacer);
      context.serializeNow();
      return true;
    }
    return false;
  },

  async hydrateNodes(root) {
    const embeds = Array.from(root.querySelectorAll("div[data-youtube-id]"));
    embeds.forEach((embed) => {
      hydrateYoutubeNode(embed as HTMLElement);
    });
  },
};
