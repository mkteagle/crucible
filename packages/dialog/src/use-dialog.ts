import { useCallback, useRef, useState } from "react";

export interface UseDialogReturn {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export function useDialog(): UseDialogReturn {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    dialogRef.current?.showModal();
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    dialogRef.current?.close();
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    if (isOpen) close();
    else open();
  }, [isOpen, open, close]);

  return { dialogRef, isOpen, open, close, toggle };
}
