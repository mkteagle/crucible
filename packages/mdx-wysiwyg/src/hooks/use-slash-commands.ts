import { useCallback, useMemo, useState, type RefObject } from "react";
import { COMMANDS } from "../core/constants";
import type { Command, CommandAction, SlashCommand, SlashMenuPosition } from "../types";

export type UseSlashCommandsOptions = {
  excludeActions?: string[];
  extraCommands?: SlashCommand[];
};

export function useSlashCommands(
  containerRef: RefObject<HTMLDivElement | null>,
  options: UseSlashCommandsOptions = {}
) {
  const { excludeActions = [], extraCommands = [] } = options;
  const [slashOpen, setSlashOpen] = useState(false);
  const [slashIndex, setSlashIndex] = useState(0);
  const [slashFilter, setSlashFilter] = useState("");
  const [slashMenuPos, setSlashMenuPos] = useState<SlashMenuPosition>(null);

  const availableCommands = useMemo(() => {
    const base = excludeActions.length === 0 ? COMMANDS : COMMANDS.filter((cmd) => !excludeActions.includes(cmd.action));
    // Deduplicate: extra commands (from plugins) override built-in commands with the same action
    const merged = [...base];
    for (const extra of extraCommands) {
      const existingIdx = merged.findIndex((cmd) => cmd.action === extra.action);
      if (existingIdx !== -1) {
        merged[existingIdx] = extra; // plugin version wins
      } else {
        merged.push(extra);
      }
    }
    return merged;
  }, [excludeActions, extraCommands]);

  const filteredCommands = useMemo(() => {
    if (!slashFilter) return availableCommands;
    return availableCommands.filter((cmd) =>
      cmd.label.toLowerCase().includes(slashFilter) ||
      cmd.action.toLowerCase().includes(slashFilter)
    );
  }, [slashFilter, availableCommands]);

  const getCaretPosition = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return null;
    const range = selection.getRangeAt(0).cloneRange();
    const marker = document.createElement("span");
    marker.textContent = "\u200B";
    range.insertNode(marker);
    const rect = marker.getBoundingClientRect();
    const container = containerRef.current;
    if (!container) {
      marker.remove();
      return null;
    }
    const containerRect = container.getBoundingClientRect();
    const pos = {
      top: rect.bottom - containerRect.top + 4,
      left: rect.left - containerRect.left,
    };
    marker.remove();
    selection.removeAllRanges();
    selection.addRange(range);
    return pos;
  }, [containerRef]);

  const getSlashFilterText = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return "";
    const range = selection.getRangeAt(0);
    const node = range.startContainer;
    if (node.nodeType !== Node.TEXT_NODE) return "";
    const text = node.textContent ?? "";
    const offset = range.startOffset;
    const textBefore = text.slice(0, offset);
    const slashIdx = textBefore.lastIndexOf("/");
    if (slashIdx === -1) return "";
    return textBefore.slice(slashIdx + 1).toLowerCase();
  }, []);

  const removeTriggerSlash = useCallback((filterText: string = slashFilter) => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
    const range = selection.getRangeAt(0);
    const node = range.startContainer;
    const block = (node instanceof HTMLElement ? node : node.parentElement)?.closest("p,div,blockquote,h2,h3,li");
    if (!block) return;

    const blockText = block.textContent ?? "";
    const slashPattern = "/" + filterText;
    const slashIdx = blockText.lastIndexOf(slashPattern);

    if (slashIdx === -1) {
      const justSlashIndex = blockText.lastIndexOf("/");
      if (justSlashIndex === -1) return;

      if (blockText.trim() === "/") {
        block.innerHTML = "<br />";
        const nextRange = document.createRange();
        nextRange.setStart(block, 0);
        nextRange.collapse(true);
        selection.removeAllRanges();
        selection.addRange(nextRange);
        return;
      }
    }

    if (blockText.trim() === slashPattern) {
      block.innerHTML = "<br />";
      const nextRange = document.createRange();
      nextRange.setStart(block, 0);
      nextRange.collapse(true);
      selection.removeAllRanges();
      selection.addRange(nextRange);
      return;
    }

    const walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT, null);
    let currentNode: Text | null = null;
    let accumulatedLength = 0;

    while ((currentNode = walker.nextNode() as Text | null)) {
      const nodeText = currentNode.textContent ?? "";
      const nodeStart = accumulatedLength;
      const nodeEnd = accumulatedLength + nodeText.length;

      if (slashIdx >= nodeStart && slashIdx < nodeEnd) {
        const localSlashIndex = slashIdx - nodeStart;
        const patternEnd = localSlashIndex + slashPattern.length;

        currentNode.textContent = nodeText.slice(0, localSlashIndex) + nodeText.slice(patternEnd);

        const nextRange = document.createRange();
        nextRange.setStart(currentNode, localSlashIndex);
        nextRange.collapse(true);
        selection.removeAllRanges();
        selection.addRange(nextRange);
        return;
      }

      accumulatedLength = nodeEnd;
    }
  }, [slashFilter]);

  const openSlashMenu = useCallback(() => {
    setTimeout(() => {
      const pos = getCaretPosition();
      if (pos) {
        setSlashMenuPos(pos);
      }
      setSlashOpen(true);
      setSlashIndex(0);
      setSlashFilter("");
    }, 0);
  }, [getCaretPosition]);

  const closeSlashMenu = useCallback(() => {
    setSlashOpen(false);
    setSlashMenuPos(null);
    setSlashFilter("");
  }, []);

  const handleSlashKeyDown = useCallback((
    event: React.KeyboardEvent<HTMLDivElement>,
    applyCommand: (action: CommandAction) => void
  ) => {
    if (event.key === "/") {
      openSlashMenu();
      return false;
    }
    if (slashOpen && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      setSlashIndex((prev) => (prev + direction + filteredCommands.length) % filteredCommands.length);
      return true;
    }
    if (slashOpen && event.key === "Enter") {
      event.preventDefault();
      const command = filteredCommands[slashIndex];
      if (command) {
        removeTriggerSlash(slashFilter);
        applyCommand(command.action);
        closeSlashMenu();
      }
      return true;
    }
    if (event.key === "Escape") {
      closeSlashMenu();
      return true;
    }
    if (slashOpen && event.key === "Backspace") {
      setTimeout(() => {
        const filterText = getSlashFilterText();
        if (filterText === "" && !getSlashFilterText().length) {
          const sel = window.getSelection();
          if (!sel || sel.rangeCount === 0) return;
          const r = sel.getRangeAt(0);
          const n = r.startContainer;
          if (n.nodeType === Node.TEXT_NODE) {
            const t = n.textContent ?? "";
            const o = r.startOffset;
            const tb = t.slice(0, o);
            if (!tb.includes("/")) {
              closeSlashMenu();
              return;
            }
          } else {
            closeSlashMenu();
            return;
          }
        }
        setSlashFilter(filterText);
        setSlashIndex(0);
      }, 0);
      return false;
    }
    if (slashOpen && event.key.length === 1 && !event.ctrlKey && !event.metaKey) {
      setTimeout(() => {
        const filterText = getSlashFilterText();
        setSlashFilter(filterText);
        setSlashIndex(0);
      }, 0);
    }
    return false;
  }, [slashOpen, filteredCommands, slashIndex, slashFilter, openSlashMenu, closeSlashMenu, removeTriggerSlash, getSlashFilterText]);

  const selectCommand = useCallback((command: Command, applyCommand: (action: CommandAction) => void) => {
    removeTriggerSlash(slashFilter);
    applyCommand(command.action);
    closeSlashMenu();
  }, [slashFilter, removeTriggerSlash, closeSlashMenu]);

  return {
    slashOpen,
    slashIndex,
    slashFilter,
    slashMenuPos,
    filteredCommands,
    setSlashIndex,
    handleSlashKeyDown,
    closeSlashMenu,
    selectCommand,
    removeTriggerSlash,
  };
}
