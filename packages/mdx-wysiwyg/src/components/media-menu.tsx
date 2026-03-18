import { ALIGN_OPTIONS, SIZE_OPTIONS, ASPECT_OPTIONS } from "../core/constants";
import type { MediaSelection, YoutubeSelection, AppleMusicSelection, MediaMenuPosition, MediaAlign, MediaSize, MediaAspect, EditorClassNames } from "../types";

export interface MediaMenuProps {
  selectedMedia: MediaSelection | null;
  selectedYoutube: YoutubeSelection | null;
  selectedAppleMusic: AppleMusicSelection | null;
  mediaMenuPos: MediaMenuPosition;
  captionDraft: string;
  onCaptionChange: (caption: string) => void;
  onUpdateMedia: (updates: Partial<{ caption: string; align: MediaAlign; size: MediaSize; aspect: MediaAspect }>) => void;
  onUpdateYoutube: (updates: Partial<{ align: MediaAlign; size: MediaSize }>) => void;
  onUpdateAppleMusic: (updates: Partial<{ align: MediaAlign; size: MediaSize }>) => void;
  onRemoveMedia: () => void;
  onRemoveYoutube: () => void;
  onRemoveAppleMusic: () => void;
  classNames?: EditorClassNames;
  className?: string;
  style?: React.CSSProperties;
}

export function MediaMenu({
  selectedMedia,
  selectedYoutube,
  selectedAppleMusic,
  mediaMenuPos,
  captionDraft,
  onCaptionChange,
  onUpdateMedia,
  onUpdateYoutube,
  onUpdateAppleMusic,
  onRemoveMedia,
  onRemoveYoutube,
  onRemoveAppleMusic,
  classNames,
  className,
  style,
}: MediaMenuProps) {
  if (!(selectedMedia || selectedYoutube || selectedAppleMusic) || !mediaMenuPos) return null;

  return (
    <div
      className={className || classNames?.mediaMenu || "absolute z-20 flex flex-wrap items-center gap-2 px-2 py-2 rounded-lg"}
      style={{
        top: mediaMenuPos.top,
        left: mediaMenuPos.left,
        background: "var(--mdx-editor-bg-primary, var(--pearl, #f8f6f3))",
        boxShadow: "var(--mdx-editor-shadow, var(--shadow-lg, 0 10px 15px -3px rgba(0,0,0,.1)))",
        border: "1px solid var(--mdx-editor-border, var(--cloud, #dde4ea))",
        ...style,
      }}
      onClick={(event) => event.stopPropagation()}
    >
      <div className="inline-flex rounded-lg overflow-hidden" style={{ border: "1px solid var(--mdx-editor-border, var(--cloud, #dde4ea))" }}>
        {ALIGN_OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            className="px-3 py-1.5 text-xs font-medium"
            style={{
              background:
                selectedMedia?.align === option.value ||
                selectedYoutube?.align === option.value ||
                selectedAppleMusic?.align === option.value
                  ? "var(--mdx-editor-primary, var(--ocean, #2563eb))"
                  : "transparent",
              color:
                selectedMedia?.align === option.value ||
                selectedYoutube?.align === option.value ||
                selectedAppleMusic?.align === option.value
                  ? "white"
                  : "var(--mdx-editor-text-secondary, var(--storm, #4a5568))",
            }}
            onClick={() => {
              if (selectedMedia) onUpdateMedia({ align: option.value });
              if (selectedYoutube) onUpdateYoutube({ align: option.value });
              if (selectedAppleMusic) onUpdateAppleMusic({ align: option.value });
            }}
            title={`Align ${option.label}`}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="inline-flex rounded-lg overflow-hidden" style={{ border: "1px solid var(--mdx-editor-border, var(--cloud, #dde4ea))" }}>
        {SIZE_OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            className="px-3 py-1.5 text-xs font-medium"
            style={{
              background:
                selectedMedia?.size === option.value ||
                selectedYoutube?.size === option.value ||
                selectedAppleMusic?.size === option.value
                  ? "var(--mdx-editor-primary, var(--ocean, #2563eb))"
                  : "transparent",
              color:
                selectedMedia?.size === option.value ||
                selectedYoutube?.size === option.value ||
                selectedAppleMusic?.size === option.value
                  ? "white"
                  : "var(--mdx-editor-text-secondary, var(--storm, #4a5568))",
            }}
            onClick={() => {
              if (selectedMedia) onUpdateMedia({ size: option.value });
              if (selectedYoutube) onUpdateYoutube({ size: option.value });
              if (selectedAppleMusic) onUpdateAppleMusic({ size: option.value });
            }}
            title={`Size ${option.label}`}
          >
            {option.label}
          </button>
        ))}
      </div>
      {selectedMedia ? (
        <div className="inline-flex rounded-lg overflow-hidden" style={{ border: "1px solid var(--mdx-editor-border, var(--cloud, #dde4ea))" }}>
          {ASPECT_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              className="px-3 py-1.5 text-xs font-medium"
              style={{
                background: selectedMedia?.aspect === option.value ? "var(--mdx-editor-primary, var(--ocean, #2563eb))" : "transparent",
                color: selectedMedia?.aspect === option.value ? "white" : "var(--mdx-editor-text-secondary, var(--storm, #4a5568))",
              }}
              onClick={() => onUpdateMedia({ aspect: option.value })}
              title={`Aspect ${option.label}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      ) : null}
      {selectedMedia ? (
        <input
          type="text"
          value={captionDraft}
          onChange={(event) => onCaptionChange(event.target.value)}
          placeholder="Caption..."
          className="px-2 py-1 text-xs rounded-lg"
          style={{
            background: "var(--mdx-editor-bg-secondary, var(--mist, #eef2f5))",
            border: "1px solid var(--mdx-editor-border, var(--cloud, #dde4ea))",
            color: "var(--mdx-editor-text-secondary, var(--storm, #4a5568))",
          }}
        />
      ) : null}
      <button
        type="button"
        className="px-2 py-1 text-xs rounded-lg font-medium"
        style={{ background: "rgba(224, 123, 103, 0.12)", color: "var(--mdx-editor-error, var(--coral, #e07b67))" }}
        onClick={() => {
          if (selectedMedia) onRemoveMedia();
          if (selectedYoutube) onRemoveYoutube();
          if (selectedAppleMusic) onRemoveAppleMusic();
        }}
        title={selectedMedia ? "Remove image" : selectedYoutube ? "Remove video" : "Remove music"}
      >
        Remove
      </button>
    </div>
  );
}
