import { useCallback, useId, useRef, useState } from "react";

export interface UsePopoverReturn {
  popoverId: string;
  triggerRef: React.RefObject<HTMLElement | null>;
  isOpen: boolean;
  show: () => void;
  hide: () => void;
  toggle: () => void;
}

export function usePopover(): UsePopoverReturn {
  const popoverId = useId();
  const triggerRef = useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const show = useCallback(() => {
    const el = document.getElementById(popoverId);
    (el as HTMLElement & { showPopover?: () => void })?.showPopover?.();
    setIsOpen(true);
  }, [popoverId]);

  const hide = useCallback(() => {
    const el = document.getElementById(popoverId);
    (el as HTMLElement & { hidePopover?: () => void })?.hidePopover?.();
    setIsOpen(false);
  }, [popoverId]);

  const toggle = useCallback(() => {
    const el = document.getElementById(popoverId);
    (el as HTMLElement & { togglePopover?: () => void })?.togglePopover?.();
    setIsOpen((v) => !v);
  }, [popoverId]);

  return { popoverId, triggerRef, isOpen, show, hide, toggle };
}
