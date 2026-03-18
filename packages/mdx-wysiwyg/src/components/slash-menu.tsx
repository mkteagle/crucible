import type { Command, CommandAction, EditorClassNames, SlashMenuPosition } from "../types";

export interface SlashMenuProps {
  open: boolean;
  position: SlashMenuPosition;
  filter: string;
  selectedIndex: number;
  commands: Command[];
  onSelectIndex: (index: number) => void;
  onSelectCommand: (command: Command, applyCommand: (action: CommandAction) => void) => void;
  applyCommand: (action: CommandAction) => void;
  classNames?: EditorClassNames;
  className?: string;
  style?: React.CSSProperties;
}

export function SlashMenu({
  open,
  position,
  filter,
  selectedIndex,
  commands,
  onSelectIndex,
  onSelectCommand,
  applyCommand,
  classNames,
  className,
  style,
}: SlashMenuProps) {
  if (!open || !position) return null;

  return (
    <div
      className={className || classNames?.slashMenu || "absolute z-20 w-48 rounded-xl overflow-hidden py-1"}
      style={{
        top: position.top,
        left: position.left,
        background: "var(--mdx-editor-bg-primary, var(--pearl, #f8f6f3))",
        boxShadow: "var(--mdx-editor-shadow, var(--shadow-lg, 0 10px 15px -3px rgba(0,0,0,.1)))",
        border: "1px solid var(--mdx-editor-border, var(--cloud, #dde4ea))",
        ...style,
      }}
    >
      <div className="px-3 py-1.5 text-xs font-medium" style={{ color: "var(--mdx-editor-text-muted, var(--slate, #64748b))" }}>
        {filter ? `/${filter}` : "Insert block"}
      </div>
      {commands.length === 0 ? (
        <div className="px-3 py-2 text-sm" style={{ color: "var(--mdx-editor-text-muted, var(--slate, #64748b))" }}>
          No matches found
        </div>
      ) : (
        commands.map((command, index) => (
          <button
            key={command.action}
            className={classNames?.slashMenuItem || "w-full text-left px-3 py-2 text-sm transition-colors flex items-center gap-2"}
            style={{
              color: "var(--mdx-editor-text-primary, var(--abyss, #1a2830))",
              background: index === selectedIndex ? "var(--mdx-editor-bg-secondary, var(--mist, #eef2f5))" : "transparent",
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.background = "var(--mdx-editor-bg-secondary, var(--mist, #eef2f5))";
              onSelectIndex(index);
            }}
            onMouseLeave={(event) => (event.currentTarget.style.background = index === selectedIndex ? "var(--mdx-editor-bg-secondary, var(--mist, #eef2f5))" : "transparent")}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => onSelectCommand(command, applyCommand)}
          >
            <img src={command.icon} alt="" width={16} height={16} className="opacity-60" />
            {command.label}
          </button>
        ))
      )}
    </div>
  );
}
