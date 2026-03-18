import React, { createContext, useCallback, useContext, useId, useRef, useState } from "react";

interface PopoverContextValue {
  popoverId: string;
  isOpen: boolean;
  show: () => void;
  hide: () => void;
  toggle: () => void;
}

const PopoverContext = createContext<PopoverContextValue | null>(null);

export function usePopoverContext() {
  const ctx = useContext(PopoverContext);
  if (!ctx) throw new Error("usePopoverContext must be used within <Popover>");
  return ctx;
}

export interface PopoverProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
}

export function Popover({ children, onOpenChange }: PopoverProps) {
  const popoverId = useId().replace(/:/g, "popover");
  const [isOpen, setIsOpen] = useState(false);

  const show = useCallback(() => {
    const el = document.getElementById(popoverId);
    (el as HTMLElement & { showPopover?: () => void })?.showPopover?.();
    setIsOpen(true);
    onOpenChange?.(true);
  }, [popoverId, onOpenChange]);

  const hide = useCallback(() => {
    const el = document.getElementById(popoverId);
    (el as HTMLElement & { hidePopover?: () => void })?.hidePopover?.();
    setIsOpen(false);
    onOpenChange?.(false);
  }, [popoverId, onOpenChange]);

  const toggle = useCallback(() => {
    if (isOpen) hide();
    else show();
  }, [isOpen, show, hide]);

  return (
    <PopoverContext.Provider value={{ popoverId, isOpen, show, hide, toggle }}>
      {children}
    </PopoverContext.Provider>
  );
}
