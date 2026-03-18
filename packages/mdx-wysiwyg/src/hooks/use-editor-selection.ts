import { useCallback, useEffect, useRef, type RefObject } from "react";

export function useEditorSelection(editorRef: RefObject<HTMLDivElement | null>) {
  const selectionRef = useRef<Range | null>(null);

  useEffect(() => {
    const handleSelectionChange = () => {
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) return;
      const range = selection.getRangeAt(0);
      const root = editorRef.current;
      if (root && range.commonAncestorContainer && root.contains(range.commonAncestorContainer)) {
        selectionRef.current = range;
      }
    };
    document.addEventListener("selectionchange", handleSelectionChange);
    return () => document.removeEventListener("selectionchange", handleSelectionChange);
  }, [editorRef]);

  const restoreSelection = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || !selectionRef.current) return;
    selection.removeAllRanges();
    selection.addRange(selectionRef.current);
  }, []);

  const saveCurrentSelection = useCallback(() => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      selectionRef.current = selection.getRangeAt(0);
    }
  }, []);

  return { selectionRef, restoreSelection, saveCurrentSelection };
}
