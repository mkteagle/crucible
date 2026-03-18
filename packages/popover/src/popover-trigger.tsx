import React from "react";
import { usePopoverContext } from "./popover";

export interface PopoverTriggerProps {
  children: React.ReactElement;
}

export function PopoverTrigger({ children }: PopoverTriggerProps) {
  const { popoverId, toggle } = usePopoverContext();
  return React.cloneElement(children, {
    popovertarget: popoverId,
    onClick: toggle,
  });
}
