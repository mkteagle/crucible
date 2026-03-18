import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import type { EditorClassNames, EmojiPickerSlotProps } from "../types";
import { useEditorConfig } from "../context/editor-provider";
import type { ComponentType } from "react";

type MdxEditorCommand = {
  label: string;
  insert: string;
};

const MDX_COMMANDS: MdxEditorCommand[] = [
  { label: "Audio", insert: '<Audio src="" title=""/>\n' },
  { label: "Video", insert: '<Video src="" title=""/>\n' },
  { label: "Embed", insert: '<Embed src="" title=""/>\n' },
  { label: "Image", insert: '![Caption](url)\n' },
  { label: "Link", insert: '[Text](url)\n' },
  { label: "Link Card", insert: '<LinkCard href="">Title</LinkCard>\n' },
  { label: "Bulleted List", insert: '- Item one\n- Item two\n- Item three\n' },
  { label: "Numbered List", insert: '1. First item\n2. Second item\n3. Third item\n' },
  { label: "Table", insert: '| Column | Column |\n| --- | --- |\n| Value | Value |\n' },
  { label: "Quote", insert: '> Quote\n' },
];

function getCaretCoordinates(textarea: HTMLTextAreaElement, position: number) {
  const div = document.createElement("div");
  const style = window.getComputedStyle(textarea);
  const properties = [
    "boxSizing", "width", "height", "overflowX", "overflowY",
    "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth",
    "paddingTop", "paddingRight", "paddingBottom", "paddingLeft",
    "fontStyle", "fontVariant", "fontWeight", "fontStretch", "fontSize",
    "fontSizeAdjust", "lineHeight", "fontFamily", "textAlign", "textTransform",
    "textIndent", "textDecoration", "letterSpacing", "wordSpacing",
  ] as const;

  properties.forEach((prop) => {
    div.style.setProperty(prop.replace(/([A-Z])/g, '-$1').toLowerCase(), style[prop]);
  });

  div.style.position = "absolute";
  div.style.visibility = "hidden";
  div.style.whiteSpace = "pre-wrap";
  div.style.wordWrap = "break-word";
  div.style.top = "0";
  div.style.left = "-9999px";

  const text = textarea.value.substring(0, position);
  div.textContent = text;

  const span = document.createElement("span");
  span.textContent = textarea.value.substring(position) || ".";
  div.appendChild(span);
  document.body.appendChild(div);

  const spanRect = span.getBoundingClientRect();
  const divRect = div.getBoundingClientRect();
  document.body.removeChild(div);

  return {
    top: spanRect.top - divRect.top,
    left: spanRect.left - divRect.left,
  };
}

export type MdxEditorProps = {
  value: string;
  onChange: (value: string) => void;
  emojiPicker?: ComponentType<EmojiPickerSlotProps>;
  classNames?: EditorClassNames;
  className?: string;
  style?: React.CSSProperties;
};

export function MdxEditor({ value, onChange, emojiPicker: EmojiPickerProp, classNames: propClassNames, className, style }: MdxEditorProps) {
  const contextConfig = useEditorConfig();
  const EmojiPickerSlot = EmojiPickerProp ?? contextConfig.slots.emojiPicker;
  const classNames = propClassNames ?? contextConfig.classNames;

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [slashOpen, setSlashOpen] = useState(false);
  const [slashPos, setSlashPos] = useState({ top: 0, left: 0 });
  const [slashIndex, setSlashIndex] = useState(0);
  const [selectionPos, setSelectionPos] = useState({ top: 0, left: 0 });
  const [selectionOpen, setSelectionOpen] = useState(false);
  const [selectionRange, setSelectionRange] = useState({ start: 0, end: 0 });
  const [history, setHistory] = useState<string[]>([]);
  const [future, setFuture] = useState<string[]>([]);

  const insertAtCursor = (insert: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    let start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    if (slashOpen && start > 0 && value[start - 1] === "/") {
      start -= 1;
    }
    const nextValue = `${value.slice(0, start)}${insert}${value.slice(end)}`;
    setHistory((prev) => [...prev, value]);
    setFuture([]);
    onChange(nextValue);
    const nextPos = start + insert.length;
    requestAnimationFrame(() => {
      textarea.focus();
      textarea.setSelectionRange(nextPos, nextPos);
    });
  };

  const wrapSelection = (before: string, after: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    if (start === end) return;
    const selected = value.slice(start, end);
    const nextValue = `${value.slice(0, start)}${before}${selected}${after}${value.slice(end)}`;
    setHistory((prev) => [...prev, value]);
    setFuture([]);
    onChange(nextValue);
    requestAnimationFrame(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, end + before.length);
    });
  };

  const isWordChar = (char: string | undefined) => {
    if (!char) return false;
    return /[A-Za-z0-9]/.test(char);
  };

  const isTokenBoundary = (index: number, token: string, before: boolean) => {
    const sideIndex = before ? index - 1 : index + token.length;
    const adjacent = value[sideIndex];
    return !isWordChar(adjacent);
  };

  const findWrapPositions = (token: string, maxDistance: number) => {
    const { start, end } = selectionRange;
    if (start === end) return null;
    let leftIndex = -1;
    for (let i = start - 1; i >= Math.max(0, start - maxDistance); i -= 1) {
      const sliceStart = i - token.length + 1;
      if (sliceStart >= 0 && value.slice(sliceStart, i + 1) === token && isTokenBoundary(sliceStart, token, true)) {
        leftIndex = sliceStart;
        break;
      }
    }
    let rightIndex = -1;
    for (let i = end; i <= Math.min(value.length - token.length, end + maxDistance); i += 1) {
      if (value.slice(i, i + token.length) === token && isTokenBoundary(i, token, false)) {
        rightIndex = i;
        break;
      }
    }
    if (leftIndex === -1 || rightIndex === -1) return null;
    return { beforeStart: leftIndex, afterStart: rightIndex };
  };

  const toggleWrap = (token: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    if (start === end) return;
    const maxDistance = token === "**" || token === "_" ? 3 : token.length;
    const positions = findWrapPositions(token, maxDistance);
    const hasWrap = Boolean(positions);

    if (hasWrap) {
      const beforeStart = positions!.beforeStart;
      const afterStart = positions!.afterStart;
      const nextValue = `${value.slice(0, beforeStart)}${value.slice(start, end)}${value.slice(afterStart + token.length)}`;
      setHistory((prev) => [...prev, value]);
      setFuture([]);
      onChange(nextValue);
      requestAnimationFrame(() => {
        textarea.focus();
        textarea.setSelectionRange(beforeStart, end - token.length);
      });
      return;
    }

    wrapSelection(token, token);
  };

  const toggleLink = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    if (start === end) return;
    const left = start - 1;
    if (left >= 0 && value[left] === "[" && value[end] === "]" && value[end + 1] === "(") {
      const closingParen = value.indexOf(")", end + 2);
      if (closingParen !== -1) {
        const nextValue = `${value.slice(0, left)}${value.slice(start, end)}${value.slice(closingParen + 1)}`;
        setHistory((prev) => [...prev, value]);
        setFuture([]);
        onChange(nextValue);
        requestAnimationFrame(() => {
          textarea.focus();
          textarea.setSelectionRange(left, end - 1);
        });
        return;
      }
    }
    wrapSelection("[", "](url)");
  };

  const toggleLinePrefix = (prefix: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    if (start === end) return;
    const before = value.slice(0, start);
    const selected = value.slice(start, end);
    const after = value.slice(end);
    const lines = selected.split("\n");
    const allPrefixed = lines.every((line) => line.startsWith(prefix));
    const nextLines = lines.map((line) => allPrefixed ? line.slice(prefix.length) : `${prefix}${line}`);
    const nextValue = `${before}${nextLines.join("\n")}${after}`;
    setHistory((prev) => [...prev, value]);
    setFuture([]);
    onChange(nextValue);
    requestAnimationFrame(() => {
      textarea.focus();
      textarea.setSelectionRange(start, start + nextLines.join("\n").length);
    });
  };

  const isLinePrefixed = (prefix: string) => {
    const { start, end } = selectionRange;
    if (start === end) return false;
    return value.slice(start, end).split("\n").every((line) => line.startsWith(prefix));
  };

  const clearFormatting = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    if (start === end) return;
    const selected = value.slice(start, end);
    const stripped = selected
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/__(.*?)__/g, "$1")
      .replace(/_(.*?)_/g, "$1")
      .replace(/`(.*?)`/g, "$1")
      .replace(/~~(.*?)~~/g, "$1")
      .replace(/!\[(.*?)\]\((.*?)\)/g, "$1")
      .replace(/\[(.*?)\]\((.*?)\)/g, "$1")
      .replace(/^#{1,6}\s+/gm, "")
      .replace(/^>\s+/gm, "")
      .replace(/^-\s+/gm, "")
      .replace(/^\d+\.\s+/gm, "");
    const nextValue = `${value.slice(0, start)}${stripped}${value.slice(end)}`;
    setHistory((prev) => [...prev, value]);
    setFuture([]);
    onChange(nextValue);
    requestAnimationFrame(() => {
      textarea.focus();
      textarea.setSelectionRange(start, start + stripped.length);
    });
  };

  const handleChange = (nextValue: string) => {
    if (nextValue === value) return;
    setHistory((prev) => [...prev, value]);
    setFuture([]);
    onChange(nextValue);
  };

  const handleUndo = () => {
    if (!history.length) return;
    const previous = history[history.length - 1];
    setHistory((prev) => prev.slice(0, -1));
    setFuture((prev) => [value, ...prev]);
    onChange(previous);
  };

  const handleRedo = () => {
    if (!future.length) return;
    const next = future[0];
    setFuture((prev) => prev.slice(1));
    setHistory((prev) => [...prev, value]);
    onChange(next);
  };

  const handleEmojiInsert = useCallback((emoji: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const nextValue = `${value.slice(0, start)}${emoji}${value.slice(end)}`;
    setHistory((prev) => [...prev, value]);
    setFuture([]);
    onChange(nextValue);
    const nextPos = start + emoji.length;
    requestAnimationFrame(() => {
      textarea.focus();
      textarea.setSelectionRange(nextPos, nextPos);
    });
  }, [value, onChange]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "/") {
      requestAnimationFrame(() => {
        const textarea = textareaRef.current;
        if (!textarea) return;
        const coords = getCaretCoordinates(textarea, textarea.selectionStart);
        setSlashPos(coords);
        setSlashOpen(true);
        setSlashIndex(0);
      });
    } else if (slashOpen && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      setSlashIndex((prev) => (prev + direction + MDX_COMMANDS.length) % MDX_COMMANDS.length);
    } else if (slashOpen && event.key === "Enter") {
      event.preventDefault();
      const command = MDX_COMMANDS[slashIndex];
      if (command) {
        insertAtCursor(command.insert);
        setSlashOpen(false);
      }
    } else if (event.key === "Backspace" || event.key === "Delete") {
      if (slashOpen) setSlashOpen(false);
    } else if (event.key === "Escape") {
      setSlashOpen(false);
      setSelectionOpen(false);
    }
  };

  const handleSelectionChange = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    if (start === end) {
      setSelectionOpen(false);
      return;
    }
    const coords = getCaretCoordinates(textarea, end);
    setSelectionPos(coords);
    setSelectionRange({ start, end });
    setSelectionOpen(true);
  };

  const isWrapped = (token: string) => {
    const { start, end } = selectionRange;
    if (start === end) return false;
    const maxDistance = token === "**" || token === "_" ? 3 : token.length;
    return Boolean(findWrapPositions(token, maxDistance));
  };

  const isLinked = () => {
    const { start, end } = selectionRange;
    const left = start - 1;
    if (start === end || left < 0) return false;
    if (value[left] !== "[" || value[end] !== "]" || value[end + 1] !== "(") return false;
    return value.indexOf(")", end + 2) !== -1;
  };

  const bubbleActions = useMemo(
    () => [
      { label: "Bold", icon: "/icons/editor/bold.svg", onClick: () => toggleWrap("**"), active: isWrapped("**") },
      { label: "Italic", icon: "/icons/editor/italic.svg", onClick: () => toggleWrap("_"), active: isWrapped("_") },
      { label: "Strikethrough", icon: "/icons/editor/strikethrough.svg", onClick: () => toggleWrap("~~"), active: isWrapped("~~") },
      { label: "Link", icon: "/icons/editor/link.svg", onClick: () => toggleLink(), active: isLinked() },
      { label: "H2", icon: "/icons/editor/h2.svg", onClick: () => toggleLinePrefix("## "), active: isLinePrefixed("## ") },
      { label: "H3", icon: "/icons/editor/h3.svg", onClick: () => toggleLinePrefix("### "), active: isLinePrefixed("### ") },
      { label: "Quote", icon: "/icons/editor/quote.svg", onClick: () => toggleLinePrefix("> "), active: isLinePrefixed("> ") },
      { label: "Clear Formatting", icon: "/icons/editor/clear-formatting.svg", onClick: () => clearFormatting(), active: false },
    ],
    [value, selectionRange]
  );

  return (
    <div className={className || classNames?.root || "relative"} style={style}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <p className="text-xs font-medium" style={{ color: "var(--mdx-editor-text-muted, var(--slate, #64748b))" }}>
            Type / to insert blocks
          </p>
          {EmojiPickerSlot ? <EmojiPickerSlot onSelect={handleEmojiInsert} /> : null}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="px-2 py-1 rounded-md text-xs font-medium"
            style={{ background: "var(--mdx-editor-bg-secondary, var(--mist, #eef2f5))", color: "var(--mdx-editor-text-secondary, var(--storm, #4a5568))" }}
            onClick={handleUndo}
            disabled={!history.length}
          >
            Undo
          </button>
          <button
            type="button"
            className="px-2 py-1 rounded-md text-xs font-medium"
            style={{ background: "var(--mdx-editor-bg-secondary, var(--mist, #eef2f5))", color: "var(--mdx-editor-text-secondary, var(--storm, #4a5568))" }}
            onClick={handleRedo}
            disabled={!future.length}
          >
            Redo
          </button>
        </div>
      </div>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={handleKeyDown}
        onMouseUp={handleSelectionChange}
        onKeyUp={handleSelectionChange}
        className="w-full p-4 rounded-xl text-sm leading-relaxed"
        style={{
          background: "var(--mdx-editor-bg-secondary, var(--mist, #eef2f5))",
          border: "1px solid var(--mdx-editor-border, var(--cloud, #dde4ea))",
          minHeight: "420px",
        }}
      />

      {slashOpen ? (
        <div
          className={classNames?.slashMenu || "absolute z-20 w-56 rounded-xl overflow-hidden"}
          style={{
            top: slashPos.top + 32,
            left: slashPos.left + 12,
            background: "var(--mdx-editor-bg-primary, var(--pearl, #f8f6f3))",
            boxShadow: "var(--mdx-editor-shadow, var(--shadow-lg, 0 10px 15px -3px rgba(0,0,0,.1)))",
            border: "1px solid var(--mdx-editor-border, var(--cloud, #dde4ea))",
          }}
        >
          {MDX_COMMANDS.map((command, index) => (
            <button
              key={command.label}
              className={classNames?.slashMenuItem || "w-full text-left px-4 py-2 text-sm transition-colors"}
              style={{
                color: "var(--mdx-editor-text-primary, var(--abyss, #1a2830))",
                background: index === slashIndex ? "var(--mdx-editor-bg-secondary, var(--mist, #eef2f5))" : "transparent",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--mdx-editor-bg-secondary, var(--mist, #eef2f5))")}
              onMouseLeave={(e) => (e.currentTarget.style.background = index === slashIndex ? "var(--mdx-editor-bg-secondary, var(--mist, #eef2f5))" : "transparent")}
              onClick={() => {
                insertAtCursor(command.insert);
                setSlashOpen(false);
              }}
            >
              {command.label}
            </button>
          ))}
        </div>
      ) : null}

      {selectionOpen ? (
        <div
          className="absolute z-20 flex items-center gap-2 px-2 py-1 rounded-lg"
          style={{
            top: selectionPos.top - 44,
            left: selectionPos.left,
            background: "var(--mdx-editor-bg-primary, var(--pearl, #f8f6f3))",
            boxShadow: "var(--mdx-editor-shadow, var(--shadow-lg, 0 10px 15px -3px rgba(0,0,0,.1)))",
            border: "1px solid var(--mdx-editor-border, var(--cloud, #dde4ea))",
          }}
        >
          {bubbleActions.map((action) => (
            <button
              key={action.label}
              className="text-xs font-medium px-2 py-1 rounded-md transition-colors"
              style={{
                color: "var(--mdx-editor-text-secondary, var(--storm, #4a5568))",
                background: action.active ? "var(--mdx-editor-primary-light, var(--ocean-light, rgba(37,99,235,.1)))" : "transparent",
                border: action.active ? "1px solid var(--mdx-editor-primary, var(--ocean, #2563eb))" : "1px solid transparent",
              }}
              aria-pressed={action.active}
              onClick={action.onClick}
              title={action.label}
            >
              <img src={action.icon} alt={action.label} className="w-4 h-4" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
