import React from "react";
import { usePopoverContext } from "./popover";

export interface PopoverTriggerProps {
  children: React.ReactElement<{ onClick?: React.MouseEventHandler; style?: React.CSSProperties }>;
}

export function PopoverTrigger({ children }: PopoverTriggerProps) {
  const { popoverId, toggle, triggerRef } = usePopoverContext();
  return React.cloneElement(children, {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: triggerRef as any,
    onClick: toggle,
    style: {
      ...(children.props.style ?? {}),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...(({ anchorName: `--popover-${popoverId}` } as any) as React.CSSProperties),
    },
  });
}
