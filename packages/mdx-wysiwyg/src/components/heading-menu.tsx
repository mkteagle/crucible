import type { MenuPosition, EditorClassNames } from "../types";

export interface HeadingMenuProps {
  open: boolean;
  position: MenuPosition;
  onSelect: (tag: string) => void;
  onClose: () => void;
  classNames?: EditorClassNames;
}

export function HeadingMenu({
  open,
  position,
  onSelect,
  onClose,
  classNames,
}: HeadingMenuProps) {
  if (!open || !position) return null;

  return (
    <div
      className={classNames?.headingMenu || "fixed z-50 flex flex-col gap-1 px-2 py-2 rounded-lg"}
      style={{
        top: position.top,
        left: position.left,
        background: "var(--mdx-editor-bg-primary, var(--pearl, #f8f6f3))",
        boxShadow: "var(--mdx-editor-shadow, var(--shadow-lg, 0 10px 15px -3px rgba(0,0,0,.1)))",
        border: "1px solid var(--mdx-editor-border, var(--cloud, #dde4ea))",
      }}
      onMouseDown={(event: { stopPropagation: () => any; }) => event.stopPropagation()}
      onClick={(event) => event.stopPropagation()}
    >
      {(["h1", "h2", "h3", "h4", "h5", "h6"] as const).map((tag) => (
        <button
          key={tag}
          type="button"
          className="flex items-center gap-2 px-2 py-1 text-xs rounded-md transition-colors"
          style={{ color: "var(--mdx-editor-text-secondary, var(--storm, #4a5568))" }}
          onClick={() => {
            onSelect(tag);
            onClose();
          }}
        >
          <span className="text-xs font-semibold" style={{ color: "var(--mdx-editor-text-primary, var(--abyss, #1a2830))" }}>
            {tag.toUpperCase()}
          </span>
          {tag === "h1" ? "Heading 1" : `Heading ${tag.slice(1)}`}
        </button>
      ))}
    </div>
  );
}
