import { useMemo, type RefObject } from "react";
import type { EditorClassNames } from "../types";

type ToolbarAction = {
  label: string;
  icon: string;
  onClick: () => void;
};

export interface ToolbarProps {
  toolbarRef: RefObject<HTMLDivElement | null>;
  execCommand: (command: string, value?: string) => void;
  clearFormatting: () => void;
  insertImage: () => void;
  showImageButton?: boolean;
  openHeadingMenu: () => void;
  openListMenu: () => void;
  openLinkMenu: () => void;
  classNames?: EditorClassNames;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function Toolbar({
  toolbarRef,
  execCommand,
  clearFormatting,
  insertImage,
  showImageButton = true,
  openHeadingMenu,
  openListMenu,
  openLinkMenu,
  classNames,
  className,
  style,
  children,
}: ToolbarProps) {
  const toolbarActions = useMemo(() => {
    return {
      textStyle: [
        { label: "Bold", icon: "/icons/editor/bold.svg", onClick: () => execCommand("bold") },
        { label: "Italic", icon: "/icons/editor/italic.svg", onClick: () => execCommand("italic") },
        { label: "Underline", icon: "/icons/editor/underline.svg", onClick: () => execCommand("underline") },
        { label: "Strikethrough", icon: "/icons/editor/strikethrough.svg", onClick: () => execCommand("strikeThrough") },
      ] as ToolbarAction[],
      blocks: [
        { label: "Headings", icon: "/icons/editor/heading.svg", onClick: openHeadingMenu },
        { label: "Quote", icon: "/icons/editor/quote.svg", onClick: () => execCommand("formatBlock", "blockquote") },
      ] as ToolbarAction[],
      lists: [
        { label: "Lists", icon: "/icons/editor/bulleted-list.svg", onClick: openListMenu },
      ] as ToolbarAction[],
      link: [
        { label: "Link", icon: "/icons/editor/link.svg", onClick: openLinkMenu },
      ] as ToolbarAction[],
      align: [
        { label: "Align Left", icon: "/icons/editor/left-align.svg", onClick: () => execCommand("justifyLeft") },
        { label: "Align Center", icon: "/icons/editor/center-align.svg", onClick: () => execCommand("justifyCenter") },
        { label: "Align Right", icon: "/icons/editor/right-align.svg", onClick: () => execCommand("justifyRight") },
        { label: "Justify", icon: "/icons/editor/justify.svg", onClick: () => execCommand("justifyFull") },
      ] as ToolbarAction[],
      clear: [
        { label: "Clear Formatting", icon: "/icons/editor/clear-formatting.svg", onClick: clearFormatting },
      ] as ToolbarAction[],
    };
  }, [execCommand, clearFormatting, openHeadingMenu, openListMenu, openLinkMenu]);

  const groups = [
    toolbarActions.textStyle,
    toolbarActions.blocks,
    toolbarActions.lists,
    toolbarActions.link,
    toolbarActions.align,
    toolbarActions.clear,
  ];

  return (
    <div
      className={className || classNames?.toolbar || "flex flex-wrap items-center justify-between gap-3 mb-3"}
      style={style}
    >
      <div className="flex items-center gap-3" ref={toolbarRef}>
        <div className="flex items-center gap-1">
          {groups.map((group, index) => (
            <div key={`toolbar-group-${index}`} className="flex items-center gap-1">
              {group.map((action) => (
                <button
                  key={action.label}
                  type="button"
                  className={classNames?.toolbarButton || "p-2 rounded-lg transition-colors"}
                  style={{ background: "var(--mdx-editor-toolbar-bg, var(--mist, #eef2f5))" }}
                  onClick={action.onClick}
                  onMouseDown={(event) => event.preventDefault()}
                  title={action.label}
                  data-link-button={action.label === "Link" ? "true" : undefined}
                  data-list-button={action.label === "Lists" ? "true" : undefined}
                  data-heading-button={action.label === "Headings" ? "true" : undefined}
                >
                  <img src={action.icon} alt={action.label} width={16} height={16} />
                </button>
              ))}
              {index < groups.length - 1 ? (
                <div
                  className={classNames?.toolbarSeparator || "h-6 w-px mx-1"}
                  style={{ background: "var(--mdx-editor-border, var(--cloud, #dde4ea))" }}
                />
              ) : null}
            </div>
          ))}
        </div>

        {showImageButton ? (
          <>
            <button
              type="button"
              className={classNames?.toolbarButton || "p-2 rounded-lg transition-colors"}
              style={{ background: "var(--mdx-editor-toolbar-bg, var(--mist, #eef2f5))" }}
              onClick={insertImage}
              title="Insert Image"
            >
              <img src="/icons/editor/add-image.svg" alt="Insert Image" width={16} height={16} />
            </button>
            <div
              className={classNames?.toolbarSeparator || "h-6 w-px"}
              style={{ background: "var(--mdx-editor-border, var(--cloud, #dde4ea))" }}
            />
          </>
        ) : null}

        {children}
      </div>
    </div>
  );
}
