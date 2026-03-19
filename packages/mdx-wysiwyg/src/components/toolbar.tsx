import { useMemo, type RefObject } from "react";
import type { EditorClassNames } from "../types";
import {
  BoldIcon, ItalicIcon, UnderlineIcon, StrikethroughIcon,
  HeadingIcon, QuoteIcon, BulletedListIcon, LinkIcon,
  AlignLeftIcon, AlignCenterIcon, AlignRightIcon, AlignJustifyIcon,
  ClearFormattingIcon, AddImageIcon,
} from "./icons";

type ToolbarAction = {
  label: string;
  icon: React.ReactNode;
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
        { label: "Bold", icon: <BoldIcon />, onClick: () => execCommand("bold") },
        { label: "Italic", icon: <ItalicIcon />, onClick: () => execCommand("italic") },
        { label: "Underline", icon: <UnderlineIcon />, onClick: () => execCommand("underline") },
        { label: "Strikethrough", icon: <StrikethroughIcon />, onClick: () => execCommand("strikeThrough") },
      ] as ToolbarAction[],
      blocks: [
        { label: "Headings", icon: <HeadingIcon />, onClick: openHeadingMenu },
        { label: "Quote", icon: <QuoteIcon />, onClick: () => execCommand("formatBlock", "blockquote") },
      ] as ToolbarAction[],
      lists: [
        { label: "Lists", icon: <BulletedListIcon />, onClick: openListMenu },
      ] as ToolbarAction[],
      link: [
        { label: "Link", icon: <LinkIcon />, onClick: openLinkMenu },
      ] as ToolbarAction[],
      align: [
        { label: "Align Left", icon: <AlignLeftIcon />, onClick: () => execCommand("justifyLeft") },
        { label: "Align Center", icon: <AlignCenterIcon />, onClick: () => execCommand("justifyCenter") },
        { label: "Align Right", icon: <AlignRightIcon />, onClick: () => execCommand("justifyRight") },
        { label: "Justify", icon: <AlignJustifyIcon />, onClick: () => execCommand("justifyFull") },
      ] as ToolbarAction[],
      clear: [
        { label: "Clear Formatting", icon: <ClearFormattingIcon />, onClick: clearFormatting },
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

  const btnStyle = {
    background: "var(--mdx-editor-toolbar-bg, var(--mist, #eef2f5))",
    color: "var(--mdx-editor-text-secondary, #666)",
  };

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
                  className={classNames?.toolbarButton || "p-2 rounded-lg transition-colors hover:opacity-70"}
                  style={btnStyle}
                  onClick={action.onClick}
                  onMouseDown={(event) => event.preventDefault()}
                  title={action.label}
                  data-link-button={action.label === "Link" ? "true" : undefined}
                  data-list-button={action.label === "Lists" ? "true" : undefined}
                  data-heading-button={action.label === "Headings" ? "true" : undefined}
                >
                  {action.icon}
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
              className={classNames?.toolbarButton || "p-2 rounded-lg transition-colors hover:opacity-70"}
              style={btnStyle}
              onClick={insertImage}
              title="Insert Image"
            >
              <AddImageIcon />
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
