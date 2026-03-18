import type { MenuPosition, EditorClassNames } from "../types";

export interface ListMenuProps {
  open: boolean;
  position: MenuPosition;
  onSelectBulleted: () => void;
  onSelectNumbered: () => void;
  onClose: () => void;
  classNames?: EditorClassNames;
}

export function ListMenu({
  open,
  position,
  onSelectBulleted,
  onSelectNumbered,
  onClose,
  classNames,
}: ListMenuProps) {
  if (!open || !position) return null;

  return (
    <div
      className={classNames?.listMenu || "absolute z-50 flex flex-col gap-1 px-2 py-2 rounded-lg"}
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
      <button
        type="button"
        className="flex items-center gap-2 px-2 py-1 text-xs rounded-md transition-colors"
        style={{ color: "var(--mdx-editor-text-secondary, var(--storm, #4a5568))" }}
        onClick={() => {
          onSelectBulleted();
          onClose();
        }}
      >
        <img src="/icons/editor/bulleted-list.svg" alt="" width={16} height={16} />
        Bulleted list
      </button>
      <button
        type="button"
        className="flex items-center gap-2 px-2 py-1 text-xs rounded-md transition-colors"
        style={{ color: "var(--mdx-editor-text-secondary, var(--storm, #4a5568))" }}
        onClick={() => {
          onSelectNumbered();
          onClose();
        }}
      >
        <img src="/icons/editor/numbered-list.svg" alt="" width={16} height={16} />
        Numbered list
      </button>
    </div>
  );
}
