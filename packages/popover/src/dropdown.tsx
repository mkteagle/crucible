import React, {
  createContext,
  useCallback,
  useContext,
  useId,
  useRef,
  useState,
  useEffect,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";

// ── Types ────────────────────────────────────────────────────────────

export type DropdownPlacement = "top" | "bottom" | "left" | "right";
export type DropdownAlign = "start" | "center" | "end";

interface DropdownContextValue {
  dropdownId: string;
  isOpen: boolean;
  show: () => void;
  hide: () => void;
  toggle: () => void;
  triggerRef: React.RefObject<HTMLElement | null>;
  placement: DropdownPlacement;
  align: DropdownAlign;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

function useDropdownContext() {
  const ctx = useContext(DropdownContext);
  if (!ctx) throw new Error("Dropdown compound components must be used within <Dropdown>");
  return ctx;
}

// ── Position helpers (same as Popover) ───────────────────────────────

function calcCross(
  start: number, end: number, size: number, align: DropdownAlign, max: number, margin = 8
): number {
  const triggerSize = end - start;
  let pos: number;
  if (align === "start") pos = start;
  else if (align === "end") pos = end - size;
  else pos = start + (triggerSize - size) / 2;
  return Math.max(margin, Math.min(pos, max - size - margin));
}

function computePos(
  trigger: DOMRect, popW: number, popH: number,
  placement: DropdownPlacement, align: DropdownAlign, gap: number
): { top: number; left: number } {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  let p = placement;
  if (p === "bottom" && vh - trigger.bottom < popH + gap && trigger.top > popH + gap) p = "top";
  else if (p === "top" && trigger.top < popH + gap && vh - trigger.bottom > popH + gap) p = "bottom";
  else if (p === "right" && vw - trigger.right < popW + gap && trigger.left > popW + gap) p = "left";
  else if (p === "left" && trigger.left < popW + gap && vw - trigger.right > popW + gap) p = "right";

  if (p === "bottom") return { top: trigger.bottom + gap, left: calcCross(trigger.left, trigger.right, popW, align, vw) };
  if (p === "top") return { top: trigger.top - popH - gap, left: calcCross(trigger.left, trigger.right, popW, align, vw) };
  if (p === "right") return { top: calcCross(trigger.top, trigger.bottom, popH, align, vh), left: trigger.right + gap };
  return { top: calcCross(trigger.top, trigger.bottom, popH, align, vh), left: trigger.left - popW - gap };
}

// ── Root ─────────────────────────────────────────────────────────────

export interface DropdownProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  placement?: DropdownPlacement;
  align?: DropdownAlign;
}

export function Dropdown({ children, onOpenChange, placement = "bottom", align = "start" }: DropdownProps) {
  const dropdownId = useId().replace(/:/g, "dd");
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);

  const show = useCallback(() => {
    const el = document.getElementById(dropdownId);
    (el as HTMLElement & { showPopover?: () => void })?.showPopover?.();
    setIsOpen(true);
    onOpenChange?.(true);
  }, [dropdownId, onOpenChange]);

  const hide = useCallback(() => {
    const el = document.getElementById(dropdownId);
    try { (el as HTMLElement & { hidePopover?: () => void })?.hidePopover?.(); } catch { /* already hidden */ }
    setIsOpen(false);
    onOpenChange?.(false);
  }, [dropdownId, onOpenChange]);

  const toggle = useCallback(() => {
    if (isOpen) hide(); else show();
  }, [isOpen, show, hide]);

  return (
    <DropdownContext.Provider value={{ dropdownId, isOpen, show, hide, toggle, triggerRef, placement, align }}>
      {children}
    </DropdownContext.Provider>
  );
}

// ── Trigger ──────────────────────────────────────────────────────────

export interface DropdownTriggerProps {
  children: React.ReactElement;
}

export function DropdownTrigger({ children }: DropdownTriggerProps) {
  const { toggle, triggerRef, isOpen, dropdownId } = useDropdownContext();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return React.cloneElement(children as any, {
    ref: triggerRef as React.Ref<HTMLElement>,
    onClick: toggle,
    "aria-expanded": isOpen,
    "aria-haspopup": true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    style: { ...(children.props as any).style, anchorName: `--dd-${dropdownId}` },
  });
}

// ── Content ──────────────────────────────────────────────────────────

export interface DropdownContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const contentBase: React.CSSProperties = {
  position: "fixed",
  inset: "unset",
  border: "none",
  padding: 0,
  background: "transparent",
  margin: 0,
  outline: "none",
};

export function DropdownContent({ children, style, onKeyDown, ...props }: DropdownContentProps) {
  const { dropdownId, hide, triggerRef, placement, align } = useDropdownContext();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = document.getElementById(dropdownId) as HTMLElement | null;
    if (!el) return;

    let open = false;

    const position = () => {
      if (!open) return;
      const trigger = triggerRef.current;
      if (!trigger) return;
      const tr = trigger.getBoundingClientRect();
      const popH = el.offsetHeight || 200;
      const popW = el.offsetWidth || 240;
      const { top, left } = computePos(tr, popW, popH, placement, align, 6);
      el.style.top = `${top}px`;
      el.style.left = `${left}px`;
    };

    const onScroll = () => position();
    const onResize = () => position();

    const onToggle = (e: Event) => {
      const te = e as ToggleEvent;
      if (te.newState === "open") {
        open = true;
        position();
        requestAnimationFrame(() => {
          position();
          // Focus first focusable item
          const first = el.querySelector<HTMLElement>('[role="menuitem"]:not([aria-disabled="true"])');
          first?.focus();
        });
        window.addEventListener("scroll", onScroll, { capture: true, passive: true });
        window.addEventListener("resize", onResize, { passive: true });
      } else {
        open = false;
        hide();
        window.removeEventListener("scroll", onScroll, { capture: true } as EventListenerOptions);
        window.removeEventListener("resize", onResize);
        el.style.top = "";
        el.style.left = "";
      }
    };

    el.addEventListener("toggle", onToggle);
    return () => {
      el.removeEventListener("toggle", onToggle);
      window.removeEventListener("scroll", onScroll, { capture: true } as EventListenerOptions);
      window.removeEventListener("resize", onResize);
    };
  }, [dropdownId, hide, triggerRef, placement, align]);

  const handleKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(e);
    if (e.defaultPrevented) return;

    const el = contentRef.current ?? document.getElementById(dropdownId);
    if (!el) return;

    const items = Array.from(el.querySelectorAll<HTMLElement>('[role="menuitem"]:not([aria-disabled="true"]), [role="menuitemcheckbox"]:not([aria-disabled="true"])'));
    const currentIdx = items.indexOf(document.activeElement as HTMLElement);

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = currentIdx < items.length - 1 ? currentIdx + 1 : 0;
      items[next]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = currentIdx > 0 ? currentIdx - 1 : items.length - 1;
      items[prev]?.focus();
    } else if (e.key === "Escape") {
      e.preventDefault();
      hide();
      triggerRef.current?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      items[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      items[items.length - 1]?.focus();
    }
  };

  return (
    <div
      ref={contentRef}
      id={dropdownId}
      popover="auto"
      role="menu"
      style={{ ...contentBase, ...style }}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </div>
  );
}

// ── Item ─────────────────────────────────────────────────────────────

export interface DropdownItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  disabled?: boolean;
  onSelect?: () => void;
}

export function DropdownItem({ children, disabled, onSelect, onClick, ...props }: DropdownItemProps) {
  const { hide } = useDropdownContext();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    onClick?.(e);
    onSelect?.();
    hide();
  };

  const handleKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect?.();
      hide();
    }
  };

  return (
    <div
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled || undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </div>
  );
}

// ── CheckboxItem ─────────────────────────────────────────────────────

export interface DropdownCheckboxItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export function DropdownCheckboxItem({
  children, checked, onCheckedChange, disabled, onClick, ...props
}: DropdownCheckboxItemProps) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    onClick?.(e);
    onCheckedChange?.(!checked);
  };

  const handleKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onCheckedChange?.(!checked);
    }
  };

  return (
    <div
      role="menuitemcheckbox"
      tabIndex={disabled ? -1 : 0}
      aria-checked={checked}
      aria-disabled={disabled || undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </div>
  );
}

// ── Separator ────────────────────────────────────────────────────────

export interface DropdownSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DropdownSeparator(props: DropdownSeparatorProps) {
  return <div role="separator" {...props} />;
}

// ── Label ────────────────────────────────────────────────────────────

export interface DropdownLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function DropdownLabel(props: DropdownLabelProps) {
  return <div role="group" {...props} />;
}
