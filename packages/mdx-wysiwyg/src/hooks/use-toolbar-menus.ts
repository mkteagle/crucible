import { useCallback, useEffect, useState, type RefObject } from "react";
import type { MenuPosition } from "../types";

export function useToolbarMenus(toolbarRef: RefObject<HTMLDivElement | null>) {
  const [linkMenuOpen, setLinkMenuOpen] = useState(false);
  const [linkMenuPos, setLinkMenuPos] = useState<MenuPosition>(null);
  const [linkValue, setLinkValue] = useState("");

  const [listMenuOpen, setListMenuOpen] = useState(false);
  const [listMenuPos, setListMenuPos] = useState<MenuPosition>(null);

  const [headingMenuOpen, setHeadingMenuOpen] = useState(false);
  const [headingMenuPos, setHeadingMenuPos] = useState<MenuPosition>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const toolbar = toolbarRef.current;
      if (toolbar && toolbar.contains(target)) {
        return;
      }
      setLinkMenuOpen(false);
      setListMenuOpen(false);
      setHeadingMenuOpen(false);
    };
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [toolbarRef]);

  const openLinkMenu = useCallback(() => {
    const toolbar = toolbarRef.current;
    if (!toolbar) return;
    const button = toolbar.querySelector<HTMLButtonElement>("button[data-link-button='true']");
    if (!button) return;
    const rect = button.getBoundingClientRect();
    setLinkMenuPos({ top: rect.bottom + 4, left: rect.left });
    setLinkMenuOpen((prev) => !prev);
    setLinkValue("");
  }, [toolbarRef]);

  const openListMenu = useCallback(() => {
    const toolbar = toolbarRef.current;
    if (!toolbar) return;
    const button = toolbar.querySelector<HTMLButtonElement>("button[data-list-button='true']");
    if (!button) return;
    const rect = button.getBoundingClientRect();
    setListMenuPos({ top: rect.bottom + 4, left: rect.left });
    setListMenuOpen((prev) => !prev);
  }, [toolbarRef]);

  const openHeadingMenu = useCallback(() => {
    const toolbar = toolbarRef.current;
    if (!toolbar) return;
    const button = toolbar.querySelector<HTMLButtonElement>("button[data-heading-button='true']");
    if (!button) return;
    const rect = button.getBoundingClientRect();
    setHeadingMenuPos({ top: rect.bottom + 4, left: rect.left });
    setHeadingMenuOpen((prev) => !prev);
  }, [toolbarRef]);

  const closeAllMenus = useCallback(() => {
    setLinkMenuOpen(false);
    setListMenuOpen(false);
    setHeadingMenuOpen(false);
  }, []);

  const closeLinkMenu = useCallback(() => {
    setLinkMenuOpen(false);
    setLinkValue("");
  }, []);

  return {
    link: {
      open: linkMenuOpen,
      pos: linkMenuPos,
      value: linkValue,
      setValue: setLinkValue,
      openMenu: openLinkMenu,
      closeMenu: closeLinkMenu,
    },
    list: {
      open: listMenuOpen,
      pos: listMenuPos,
      openMenu: openListMenu,
      closeMenu: () => setListMenuOpen(false),
    },
    heading: {
      open: headingMenuOpen,
      pos: headingMenuPos,
      openMenu: openHeadingMenu,
      closeMenu: () => setHeadingMenuOpen(false),
    },
    closeAllMenus,
  };
}
