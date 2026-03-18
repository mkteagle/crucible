import React from "react";
import { useDialogContext } from "./dialog";

export interface DialogCloseProps {
  children: React.ReactElement;
}

export function DialogClose({ children }: DialogCloseProps) {
  const { close } = useDialogContext();
  return React.cloneElement(children, { onClick: close });
}
