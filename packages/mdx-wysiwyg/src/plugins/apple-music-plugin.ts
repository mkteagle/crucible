import type { EditorPlugin } from "../types";
import { extractAppleMusicId, createAppleMusicEmbed, hydrateAppleMusicNode } from "../core/apple-music-utils";

export const appleMusicPlugin: EditorPlugin = {
  name: "apple-music",

  commands: [
    { label: "Apple Music", icon: "/icons/editor/music.svg", action: "applemusic" },
  ],

  handlePaste(text, context) {
    const result = extractAppleMusicId(text);
    if (result) {
      const root = context.editorRef.current;
      if (!root) return false;
      root.focus();
      const embed = createAppleMusicEmbed(result.id, result.type);
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
    const embeds = Array.from(root.querySelectorAll("div[data-apple-music-id],div[data-applemusic-id]"));
    embeds.forEach((embed) => {
      hydrateAppleMusicNode(embed as HTMLElement);
    });
  },
};
