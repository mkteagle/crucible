import { useCallback } from "react";

type InlineRule = {
  pattern: RegExp;
  tag: string;
};

const inlineRules: InlineRule[] = [
  { pattern: /\*\*(.+?)\*\*/, tag: "strong" },
  { pattern: /~~(.+?)~~/, tag: "s" },
  { pattern: /(?<![*\w])_(.+?)_(?![*\w])/, tag: "em" },
];

const DIVIDER_PATTERN = /^---$/;

export function useMarkdownInputRules() {
  const processInputRules = useCallback((editor: HTMLDivElement): boolean => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || !selection.isCollapsed) return false;

    const range = selection.getRangeAt(0);
    const textNode = range.startContainer;
    if (textNode.nodeType !== Node.TEXT_NODE) return false;

    const text = textNode.textContent ?? "";
    const cursorOffset = range.startOffset;
    const textUpToCursor = text.slice(0, cursorOffset);

    // Check for divider: --- on its own line
    const block = (textNode.parentElement)?.closest("p,div,h2,h3,blockquote,li");
    if (block && DIVIDER_PATTERN.test(textUpToCursor.trim())) {
      // Make sure the block only contains "---"
      const blockText = block.textContent?.trim() ?? "";
      if (blockText === "---") {
        const hr = document.createElement("hr");
        hr.style.cssText = "border:none;border-top:2px solid var(--mdx-editor-border, var(--cloud, #dde4ea));margin:24px 0;";
        const spacer = document.createElement("p");
        spacer.innerHTML = "<br />";
        block.parentNode?.insertBefore(hr, block);
        block.parentNode?.insertBefore(spacer, block);
        block.parentNode?.removeChild(block);

        // Place cursor in the new paragraph
        const newRange = document.createRange();
        newRange.setStart(spacer, 0);
        newRange.collapse(true);
        selection.removeAllRanges();
        selection.addRange(newRange);
        return true;
      }
    }

    // Check inline rules
    for (const rule of inlineRules) {
      const match = rule.pattern.exec(textUpToCursor);
      if (!match) continue;

      const fullMatch = match[0];
      const innerText = match[1];
      const matchStart = match.index;
      const matchEnd = matchStart + fullMatch.length;

      // Split the text node and insert the formatted element
      const before = text.slice(0, matchStart);
      const after = text.slice(matchEnd);

      const parent = textNode.parentNode;
      if (!parent) continue;

      const formatted = document.createElement(rule.tag);
      formatted.textContent = innerText;

      const frag = document.createDocumentFragment();
      if (before) frag.appendChild(document.createTextNode(before));
      frag.appendChild(formatted);
      // Add a zero-width space after to allow continued typing outside the tag
      const afterNode = document.createTextNode(after || "\u200B");
      frag.appendChild(afterNode);

      parent.replaceChild(frag, textNode);

      // Place cursor after the formatted element
      const newRange = document.createRange();
      newRange.setStart(afterNode, after ? 0 : 1);
      newRange.collapse(true);
      selection.removeAllRanges();
      selection.addRange(newRange);
      return true;
    }

    return false;
  }, []);

  return { processInputRules };
}
