import type React from "react";

// Inline SVG icon components for the MDX editor toolbar.
// All icons use currentColor so they inherit text color from their container.

const svg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  width: 16,
  height: 16,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function BoldIcon() {
  return (
    <svg {...svg}>
      <path d="M5 3v10" />
      <path d="M5 3h4a2.5 2.5 0 0 1 0 5H5" />
      <path d="M5 8h4.5a2.5 2.5 0 0 1 0 5H5" />
    </svg>
  );
}

export function ItalicIcon() {
  return (
    <svg {...svg}>
      <path d="M7 3h4" />
      <path d="M5 13h4" />
      <path d="M9.5 3l-3 10" />
    </svg>
  );
}

export function UnderlineIcon() {
  return (
    <svg {...svg}>
      <path d="M4 3v5a4 4 0 0 0 8 0V3" />
      <path d="M3 13h10" />
    </svg>
  );
}

export function StrikethroughIcon() {
  return (
    <svg {...svg}>
      <path d="M3 8h10" />
      <path d="M10.5 5.5C10.2 4.4 9.2 3.5 8 3.5 6.1 3.5 4.5 4.6 4.5 6.3c0 .8.4 1.4.9 1.8" />
      <path d="M5.5 9.8C5.8 11 6.8 12 8 12c1.9 0 3.5-1.2 3.5-2.8 0-.8-.4-1.4-.9-1.8" />
    </svg>
  );
}

export function HeadingIcon() {
  return (
    <svg {...svg}>
      <path d="M3 3v10" />
      <path d="M13 3v10" />
      <path d="M3 8h10" />
    </svg>
  );
}

export function H2Icon() {
  return (
    <svg {...svg}>
      <path d="M2 4v8" />
      <path d="M7 4v8" />
      <path d="M2 8h5" />
      <path d="M10 9h3l-3.5 4H14" />
    </svg>
  );
}

export function H3Icon() {
  return (
    <svg {...svg}>
      <path d="M2 4v8" />
      <path d="M7 4v8" />
      <path d="M2 8h5" />
      <path d="M10 8.5c2 0 3.5.6 3.5 1.5S12 11.5 12 11.5 14 12 14 13s-2 1.5-4 1.5" />
    </svg>
  );
}

export function QuoteIcon() {
  return (
    <svg {...svg}>
      <path d="M4 3v10" strokeWidth={2.5} />
      <path d="M7 5h7" />
      <path d="M7 8h5" />
      <path d="M7 11h6" />
    </svg>
  );
}

export function BulletedListIcon() {
  return (
    <svg {...svg}>
      <circle cx="3" cy="5" r="1" fill="currentColor" stroke="none" />
      <path d="M6 5h8" />
      <circle cx="3" cy="9" r="1" fill="currentColor" stroke="none" />
      <path d="M6 9h8" />
      <circle cx="3" cy="13" r="1" fill="currentColor" stroke="none" />
      <path d="M6 13h8" />
    </svg>
  );
}

export function NumberedListIcon() {
  return (
    <svg {...svg}>
      <path d="M4 3v4" />
      <path d="M3.5 3H5" />
      <path d="M3.5 7H5.5" />
      <path d="M3.5 9.5H5a1 1 0 0 1 0 2H4a1 1 0 0 0 0 2H5.5" />
      <path d="M7 5h7" />
      <path d="M7 9h7" />
      <path d="M7 13h7" />
    </svg>
  );
}

export function LinkIcon() {
  return (
    <svg {...svg}>
      <path d="M6.5 9.5a4 4 0 0 0 5.66 0l1.5-1.5a4 4 0 0 0-5.66-5.66l-.76.76" />
      <path d="M9.5 6.5a4 4 0 0 0-5.66 0l-1.5 1.5a4 4 0 0 0 5.66 5.66l.76-.76" />
    </svg>
  );
}

export function AlignLeftIcon() {
  return (
    <svg {...svg}>
      <path d="M2 4h12" />
      <path d="M2 8h8" />
      <path d="M2 12h10" />
    </svg>
  );
}

export function AlignCenterIcon() {
  return (
    <svg {...svg}>
      <path d="M2 4h12" />
      <path d="M4 8h8" />
      <path d="M3 12h10" />
    </svg>
  );
}

export function AlignRightIcon() {
  return (
    <svg {...svg}>
      <path d="M2 4h12" />
      <path d="M6 8h8" />
      <path d="M4 12h10" />
    </svg>
  );
}

export function AlignJustifyIcon() {
  return (
    <svg {...svg}>
      <path d="M2 4h12" />
      <path d="M2 8h12" />
      <path d="M2 12h12" />
    </svg>
  );
}

export function ClearFormattingIcon() {
  return (
    <svg {...svg}>
      <path d="M4 3h8" />
      <path d="M8 3v7" />
      <path d="M5 13l6-3" />
      <path d="M5 10l6 3" />
    </svg>
  );
}

export function AddImageIcon() {
  return (
    <svg {...svg}>
      <rect x="2" y="2" width="12" height="10" rx="1.5" />
      <circle cx="5.5" cy="5.5" r="1.5" />
      <path d="M14 9l-3.5-3.5L7 9.5 5 7 2 10" />
    </svg>
  );
}

export function H1Icon() {
  return (
    <svg {...svg}>
      <path d="M2 4v8" />
      <path d="M7 4v8" />
      <path d="M2 8h5" />
      <path d="M12 4v8" />
    </svg>
  );
}

export function PlayIcon() {
  return (
    <svg {...svg} fill="currentColor" stroke="none">
      <polygon points="4,2 14,8 4,14" />
    </svg>
  );
}

export function MusicIcon() {
  return (
    <svg {...svg}>
      <circle cx="5" cy="13" r="1.5" />
      <circle cx="11" cy="11" r="1.5" />
      <path d="M6.5 13V5l6-1.5v9" />
    </svg>
  );
}

export function HrIcon() {
  return (
    <svg {...svg}>
      <path d="M2 8h12" strokeWidth={2} />
    </svg>
  );
}

export function QuillIcon() {
  return (
    <svg {...svg}>
      <path d="M13 2C7 3 3 7 3 14" />
      <path d="M3 14c1-4 4-6 7-7" />
      <path d="M10 7L7 14" />
    </svg>
  );
}

// Map from slash command action → icon component
export const COMMAND_ICONS: Record<string, React.ComponentType> = {
  h1: H1Icon,
  h2: H2Icon,
  h3: H3Icon,
  blockquote: QuoteIcon,
  ul: BulletedListIcon,
  ol: NumberedListIcon,
  image: AddImageIcon,
  youtube: PlayIcon,
  applemusic: MusicIcon,
  divider: HrIcon,
  "colonial-tweet": QuillIcon,
};
