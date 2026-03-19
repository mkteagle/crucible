import React, { useEffect } from "react";
import { usePopoverContext } from "./popover";
import type { PopoverPlacement, PopoverAlign } from "./popover";

export interface PopoverContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const baseStyle: React.CSSProperties = {
  position: "fixed",
  inset: "unset",
};

function calcCrossAxis(
  start: number,
  end: number,
  size: number,
  align: PopoverAlign,
  max: number,
  margin = 8,
): number {
  const triggerSize = end - start;
  let pos: number;
  if (align === "start") pos = start;
  else if (align === "end") pos = end - size;
  else pos = start + (triggerSize - size) / 2; // center
  return Math.max(margin, Math.min(pos, max - size - margin));
}

function computePosition(
  trigger: DOMRect,
  popW: number,
  popH: number,
  placement: PopoverPlacement,
  align: PopoverAlign,
  gap: number,
): { top: number; left: number } {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  // Auto-flip when there's not enough space on the preferred side
  let p = placement;
  if (p === "bottom" && vh - trigger.bottom < popH + gap && trigger.top > popH + gap) p = "top";
  else if (p === "top" && trigger.top < popH + gap && vh - trigger.bottom > popH + gap) p = "bottom";
  else if (p === "right" && vw - trigger.right < popW + gap && trigger.left > popW + gap) p = "left";
  else if (p === "left" && trigger.left < popW + gap && vw - trigger.right > popW + gap) p = "right";

  if (p === "bottom") {
    return {
      top: trigger.bottom + gap,
      left: calcCrossAxis(trigger.left, trigger.right, popW, align, vw),
    };
  }
  if (p === "top") {
    return {
      top: trigger.top - popH - gap,
      left: calcCrossAxis(trigger.left, trigger.right, popW, align, vw),
    };
  }
  if (p === "right") {
    return {
      top: calcCrossAxis(trigger.top, trigger.bottom, popH, align, vh),
      left: trigger.right + gap,
    };
  }
  // left
  return {
    top: calcCrossAxis(trigger.top, trigger.bottom, popH, align, vh),
    left: trigger.left - popW - gap,
  };
}

export function PopoverContent({ children, style, ...props }: PopoverContentProps) {
  const { popoverId, hide, triggerRef, placement, align } = usePopoverContext();

  useEffect(() => {
    const el = document.getElementById(popoverId) as HTMLElement | null;
    if (!el) return;

    let open = false;

    const position = () => {
      if (!open) return;
      const trigger = triggerRef.current;
      if (!trigger) return;
      const tr = trigger.getBoundingClientRect();
      const popH = el.offsetHeight || 200;
      const popW = el.offsetWidth || 240;
      const { top, left } = computePosition(tr, popW, popH, placement, align, 6);
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
        requestAnimationFrame(position);
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
  }, [popoverId, hide, triggerRef, placement, align]);

  return (
    <div
      id={popoverId}
      popover="auto"
      style={{ ...baseStyle, ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
