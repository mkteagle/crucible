import React, { useEffect } from "react";
import { usePopoverContext } from "./popover";

export interface PopoverContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function PopoverContent({ children, ...props }: PopoverContentProps) {
  const { popoverId, hide } = usePopoverContext();

  // Sync native toggle event back to state
  useEffect(() => {
    const el = document.getElementById(popoverId);
    if (!el) return;
    const handler = (e: Event) => {
      const te = e as ToggleEvent;
      if (te.newState === "closed") hide();
    };
    el.addEventListener("toggle", handler);
    return () => el.removeEventListener("toggle", handler);
  }, [popoverId, hide]);

  return (
    <div
      id={popoverId}
      popover="auto"
      {...props}
    >
      {children}
    </div>
  );
}
