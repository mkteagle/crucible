import React from "react";
import { useDialogContext } from "./dialog";

export interface DialogTriggerProps {
  children: React.ReactElement<{ onClick?: React.MouseEventHandler }>;
}

export function DialogTrigger({ children }: DialogTriggerProps) {
  const { open } = useDialogContext();
  return React.cloneElement(children, { onClick: open });
}
