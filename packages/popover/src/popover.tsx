import React, { createContext, useCallback, useContext, useId, useRef, useState } from "react";

export type PopoverPlacement = "top" | "bottom" | "left" | "right";
export type PopoverAlign = "start" | "center" | "end";

interface PopoverContextValue {
  popoverId: string;
  isOpen: boolean;
  show: () => void;
  hide: () => void;
  toggle: () => void;
  triggerRef: React.RefObject<HTMLElement | null>;
  placement: PopoverPlacement;
  align: PopoverAlign;
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
  /** Which side of the trigger to render on. Flips automatically if there's not enough space. @default "bottom" */
  placement?: PopoverPlacement;
  /** Alignment along the cross-axis. @default "start" */
  align?: PopoverAlign;
}

export function Popover({ children, onOpenChange, placement = "bottom", align = "start" }: PopoverProps) {
  const popoverId = useId().replace(/:/g, "popover");
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);

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
    <PopoverContext.Provider value={{ popoverId, isOpen, show, hide, toggle, triggerRef, placement, align }}>
      {children}
    </PopoverContext.Provider>
  );
}
