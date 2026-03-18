import React from "react";
import { usePopoverContext } from "./popover";

export interface PopoverTriggerProps {
  children: React.ReactElement<{ onClick?: React.MouseEventHandler; popovertarget?: string }>;
}

export function PopoverTrigger({ children }: PopoverTriggerProps) {
  const { popoverId, toggle } = usePopoverContext();
  return React.cloneElement(children, {
    popovertarget: popoverId,
    onClick: toggle,
  });
}
