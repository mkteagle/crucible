import type { ComponentType } from "react";

// ── Media types ──

export type MediaAlign = "full" | "center" | "left" | "right";
export type MediaSize = "small" | "medium" | "large" | "full";
export type MediaAspect = "original" | "square" | "4:3" | "16:9";

// ── Command types ──

export type CommandAction =
  | "h1"
  | "h2"
  | "h3"
  | "blockquote"
  | "ul"
  | "ol"
  | "image"
  | "divider"
  | "youtube"
  | "applemusic"
  | (string & {});

export type Command = {
  label: string;
  icon: string;
  action: CommandAction;
};

export type SlashCommand = Command;

// ── Selection types ──

export type MediaSelection = {
  id: string;
  caption: string;
  align: MediaAlign;
  size: MediaSize;
  aspect: MediaAspect;
};

export type YoutubeSelection = {
  videoId: string;
  align: MediaAlign;
  size: MediaSize;
};

export type AppleMusicSelection = {
  trackId: string;
  type: "song" | "album";
  align: MediaAlign;
  size: MediaSize;
};

export type MediaMenuPosition = { top: number; left: number } | null;
export type MenuPosition = { top: number; left: number } | null;
export type SlashMenuPosition = { top: number; left: number } | null;

// ── Adapter interfaces ──

export interface CompressOptions {
  maxBytes: number;
  targetBytes: number;
  maxDimension: number;
  minQuality: number;
}

export interface UploadAdapter {
  uploadImage: (file: File, metadata?: Record<string, unknown>) => Promise<string>;
  compressImage?: (file: File, options: CompressOptions) => Promise<File>;
  mediaLimits?: { maxSizeBytes: number; maxWidth: number };
}

export interface MediaAdapter {
  fetchMedia: (id: string) => Promise<{ url: string | null; thumbnailUrl?: string | null }>;
  deleteMedia?: (id: string) => Promise<void>;
}

export interface EditorAdapters {
  upload?: UploadAdapter;
  media?: MediaAdapter;
}

// ── Plugin interface ──

export interface PasteContext {
  editorRef: React.RefObject<HTMLDivElement | null>;
  insertNodeAtSelection: (node: Node) => void;
  serializeNow: () => void;
}

export interface PluginCommandContext {
  editorRef: React.RefObject<HTMLDivElement | null>;
  insertNodeAtSelection: (node: Node) => void;
  serializeNow: () => void;
}

export interface PluginPickerProps {
  onInsert: (node: Node) => void;
  onClose: () => void;
  serializeNow: () => void;
}

export interface EditorPlugin {
  name: string;
  commands?: SlashCommand[];
  onCommand?: (action: string, context: PluginCommandContext) => boolean;
  picker?: ComponentType<PluginPickerProps>;
  serializeNode?: (el: HTMLElement) => string | null;
  deserializeLine?: (line: string, helpers: DeserializeHelpers) => string | null;
  hydrateNodes?: (root: HTMLElement, adapters: EditorAdapters) => Promise<void>;
  handlePaste?: (text: string, context: PasteContext) => boolean;
}

export interface DeserializeHelpers {
  markdownInlineToHtml: (text: string) => string;
}

// ── Slot types ──

export interface EmojiPickerSlotProps {
  onSelect: (emoji: string) => void;
}

export interface AppleMusicPickerSlotProps {
  onSelect: (item: { id: string; type: "song" | "album"; name?: string; artistName?: string; artworkUrl?: string }) => void;
  onClose: () => void;
}

// ── Editor config ──

export interface EditorClassNames {
  root?: string;
  toolbar?: string;
  toolbarButton?: string;
  toolbarSeparator?: string;
  editor?: string;
  placeholder?: string;
  slashMenu?: string;
  slashMenuItem?: string;
  mediaMenu?: string;
  linkPopover?: string;
  listMenu?: string;
  headingMenu?: string;
}

export interface EditorConfig {
  adapters?: EditorAdapters;
  plugins?: EditorPlugin[];
  slots?: {
    emojiPicker?: ComponentType<EmojiPickerSlotProps>;
    appleMusicPicker?: ComponentType<AppleMusicPickerSlotProps>;
  };
  classNames?: EditorClassNames;
  commands?: SlashCommand[];
  excludeCommands?: string[];
}

// ── Apple Music ──

export interface AppleMusicParseResult {
  id: string;
  type: "song" | "album";
}
