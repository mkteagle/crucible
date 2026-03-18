import React, { createContext, useCallback, useContext, useRef, useState } from "react";

interface DialogContextValue {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const DialogContext = createContext<DialogContextValue | null>(null);

export function useDialogContext() {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error("useDialogContext must be used within <Dialog>");
  return ctx;
}

export interface DialogProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Dialog({ children, defaultOpen = false, onOpenChange }: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const open = useCallback(() => {
    dialogRef.current?.showModal();
    setIsOpen(true);
    onOpenChange?.(true);
  }, [onOpenChange]);

  const close = useCallback(() => {
    dialogRef.current?.close();
    setIsOpen(false);
    onOpenChange?.(false);
  }, [onOpenChange]);

  return (
    <DialogContext.Provider value={{ dialogRef, isOpen, open, close }}>
      {children}
    </DialogContext.Provider>
  );
}
