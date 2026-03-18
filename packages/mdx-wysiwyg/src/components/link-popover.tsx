import type { MenuPosition, EditorClassNames } from "../types";

export interface LinkPopoverProps {
  open: boolean;
  position: MenuPosition;
  value: string;
  onValueChange: (value: string) => void;
  onApply: () => void;
  classNames?: EditorClassNames;
}

export function LinkPopover({
  open,
  position,
  value,
  onValueChange,
  onApply,
  classNames,
}: LinkPopoverProps) {
  if (!open || !position) return null;

  return (
    <div
      className={classNames?.linkPopover || "absolute z-50 flex items-center gap-2 px-2 py-2 rounded-lg"}
      style={{
        top: position.top,
        left: position.left,
        background: "var(--mdx-editor-bg-primary, var(--pearl, #f8f6f3))",
        boxShadow: "var(--mdx-editor-shadow, var(--shadow-lg, 0 10px 15px -3px rgba(0,0,0,.1)))",
        border: "1px solid var(--mdx-editor-border, var(--cloud, #dde4ea))",
      }}
      onMouseDown={(event) => event.stopPropagation()}
      onClick={(event) => event.stopPropagation()}
    >
      <input
        value={value}
        onChange={(event) => onValueChange(event.target.value)}
        placeholder="https://..."
        className="px-2 py-1 text-xs rounded-lg w-48"
        style={{
          background: "var(--mdx-editor-bg-secondary, var(--mist, #eef2f5))",
          border: "1px solid var(--mdx-editor-border, var(--cloud, #dde4ea))",
          color: "var(--mdx-editor-text-secondary, var(--storm, #4a5568))",
        }}
      />
      <button
        type="button"
        className="px-2 py-1 text-xs rounded-lg font-medium"
        style={{ background: "var(--mdx-editor-primary, var(--ocean, #2563eb))", color: "white" }}
        onClick={onApply}
      >
        Apply
      </button>
    </div>
  );
}
