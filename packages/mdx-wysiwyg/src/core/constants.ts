import type { Command, CommandAction, MediaAlign, MediaSize, MediaAspect } from "../types";

export type { MediaAlign, MediaSize, MediaAspect, CommandAction, Command };

export const COMMANDS: Command[] = [
  { label: "Heading 1", icon: "/icons/editor/h1.svg", action: "h1" },
  { label: "Heading 2", icon: "/icons/editor/heading.svg", action: "h2" },
  { label: "Heading 3", icon: "/icons/editor/h4.svg", action: "h3" },
  { label: "Quote", icon: "/icons/editor/quote.svg", action: "blockquote" },
  { label: "Bulleted List", icon: "/icons/editor/bulleted-list.svg", action: "ul" },
  { label: "Numbered List", icon: "/icons/editor/numbered-list.svg", action: "ol" },
  { label: "Image", icon: "/icons/editor/add-image.svg", action: "image" },
  { label: "YouTube Video", icon: "/icons/editor/play.svg", action: "youtube" },
  { label: "Apple Music", icon: "/icons/editor/music.svg", action: "applemusic" },
  { label: "Divider", icon: "/icons/editor/clear-formatting.svg", action: "divider" },
];

export const ALIGN_OPTIONS: { value: MediaAlign; label: string }[] = [
  { value: "full", label: "Full" },
  { value: "center", label: "Center" },
  { value: "left", label: "Left" },
  { value: "right", label: "Right" },
];

export const SIZE_OPTIONS: { value: MediaSize; label: string }[] = [
  { value: "small", label: "S" },
  { value: "medium", label: "M" },
  { value: "large", label: "L" },
  { value: "full", label: "Full" },
];

export const ASPECT_OPTIONS: { value: MediaAspect; label: string }[] = [
  { value: "original", label: "Original" },
  { value: "square", label: "1:1" },
  { value: "4:3", label: "4:3" },
  { value: "16:9", label: "16:9" },
];
