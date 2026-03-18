import React, { useEffect } from "react";
import { useDialogContext } from "./dialog";

export interface DialogContentProps
  extends React.DialogHTMLAttributes<HTMLDialogElement> {
  children: React.ReactNode;
  closeOnBackdrop?: boolean;
}

export function DialogContent({
  children,
  closeOnBackdrop = true,
  onClick,
  ...props
}: DialogContentProps) {
  const { dialogRef, close } = useDialogContext();

  // Sync native close (Escape key) back to state
  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    const handler = () => close();
    el.addEventListener("close", handler);
    return () => el.removeEventListener("close", handler);
  }, [dialogRef, close]);

  function handleClick(e: React.MouseEvent<HTMLDialogElement>) {
    if (closeOnBackdrop && e.target === dialogRef.current) close();
    onClick?.(e);
  }

  return (
    <dialog ref={dialogRef} onClick={handleClick} {...props}>
      {children}
    </dialog>
  );
}
