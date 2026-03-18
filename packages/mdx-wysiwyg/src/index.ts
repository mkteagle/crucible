// ── Types ──
export type {
  MediaAlign,
  MediaSize,
  MediaAspect,
  CommandAction,
  Command,
  SlashCommand,
  MediaSelection,
  YoutubeSelection,
  AppleMusicSelection,
  MediaMenuPosition,
  MenuPosition,
  SlashMenuPosition,
  CompressOptions,
  UploadAdapter,
  MediaAdapter,
  EditorAdapters,
  PasteContext,
  PluginCommandContext,
  PluginPickerProps,
  EditorPlugin,
  DeserializeHelpers,
  EmojiPickerSlotProps,
  AppleMusicPickerSlotProps,
  EditorClassNames,
  EditorConfig,
  AppleMusicParseResult,
} from "./types";

// ── Core utilities ──
export {
  COMMANDS,
  ALIGN_OPTIONS,
  SIZE_OPTIONS,
  ASPECT_OPTIONS,
} from "./core/constants";

export {
  extractYoutubeVideoId,
  alignStyle,
  compressImage,
  youtubeWrapperStyle,
  createYoutubeEmbed,
  hydrateYoutubeNode,
  hydrateMediaNode,
} from "./core/media-utils";

export {
  extractAppleMusicId,
  appleMusicWrapperStyle,
  createAppleMusicEmbed,
  hydrateAppleMusicNode,
} from "./core/apple-music-utils";

export {
  markdownInlineToHtml,
  htmlToMarkdownInline,
  mdxToHtml,
  serializeDom,
  isEditorEmpty,
  ensureTrailingSpacer,
} from "./core/mdx-utils";

export { insertNodeAtSelection } from "./core/selection-utils";

// ── Context ──
export { EditorProvider, useEditorConfig } from "./context/editor-provider";
export type { EditorProviderProps } from "./context/editor-provider";

// ── Plugins ──
export { youtubePlugin } from "./plugins/youtube-plugin";
export { appleMusicPlugin } from "./plugins/apple-music-plugin";
export { imagePlugin } from "./plugins/image-plugin";
export { colonialTweetPlugin } from "./plugins/colonial-tweet-plugin";

// ── Hooks ──
export { useEditorSelection } from "./hooks/use-editor-selection";
export { useEditorSerialization } from "./hooks/use-editor-serialization";
export { useSlashCommands } from "./hooks/use-slash-commands";
export { useToolbarMenus } from "./hooks/use-toolbar-menus";
export { useMediaSelection } from "./hooks/use-media-selection";
export { useMediaUpload } from "./hooks/use-media-upload";
export { useYoutubeEmbed } from "./hooks/use-youtube-embed";
export { useAppleMusicEmbed } from "./hooks/use-apple-music-embed";

// ── Components ──
export { WysiwygEditor } from "./components/wysiwyg-editor";
export type { WysiwygEditorProps } from "./components/wysiwyg-editor";
export { MdxEditor } from "./components/mdx-editor";
export type { MdxEditorProps } from "./components/mdx-editor";
export { MdxPreview } from "./components/mdx-preview";
export { Toolbar } from "./components/toolbar";
export type { ToolbarProps } from "./components/toolbar";
export { SlashMenu } from "./components/slash-menu";
export type { SlashMenuProps } from "./components/slash-menu";
export { MediaMenu } from "./components/media-menu";
export type { MediaMenuProps } from "./components/media-menu";
export { LinkPopover } from "./components/link-popover";
export type { LinkPopoverProps } from "./components/link-popover";
export { HeadingMenu } from "./components/heading-menu";
export type { HeadingMenuProps } from "./components/heading-menu";
export { ListMenu } from "./components/list-menu";
export type { ListMenuProps } from "./components/list-menu";
