import { useCallback, useRef, useState } from "react";
import type { CommandAction, EditorClassNames, EditorConfig } from "../types";
import { useEditorConfig } from "../context/editor-provider";
import { useEditorSelection } from "../hooks/use-editor-selection";
import { useEditorSerialization } from "../hooks/use-editor-serialization";
import { useToolbarMenus } from "../hooks/use-toolbar-menus";
import { useSlashCommands } from "../hooks/use-slash-commands";
import { useMediaSelection } from "../hooks/use-media-selection";
import { useMediaUpload } from "../hooks/use-media-upload";
import { useYoutubeEmbed } from "../hooks/use-youtube-embed";
import { useAppleMusicEmbed } from "../hooks/use-apple-music-embed";
import { useMarkdownInputRules } from "../hooks/use-markdown-input-rules";
import { mdxToHtml } from "../core/mdx-utils";
import { Toolbar } from "./toolbar";
import { SlashMenu } from "./slash-menu";
import { MediaMenu } from "./media-menu";
import { LinkPopover } from "./link-popover";
import { HeadingMenu } from "./heading-menu";
import { ListMenu } from "./list-menu";

export type WysiwygEditorProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  config?: EditorConfig;
  classNames?: EditorClassNames;
  className?: string;
  style?: React.CSSProperties;
};

export function WysiwygEditor({
  value,
  onChange,
  placeholder,
  config: propConfig,
  classNames: propClassNames,
  className,
  style,
}: WysiwygEditorProps) {
  const contextConfig = useEditorConfig();
  const adapters = propConfig?.adapters ?? contextConfig.adapters;
  const plugins = propConfig?.plugins ?? contextConfig.plugins;
  const slots = propConfig?.slots ?? contextConfig.slots;
  const classNames = propClassNames ?? propConfig?.classNames ?? contextConfig.classNames;
  const excludeCommands = propConfig?.excludeCommands ?? contextConfig.excludeCommands;

  const containerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const toolbarRef = useRef<HTMLDivElement>(null);
  const [showAppleMusicPicker, setShowAppleMusicPicker] = useState(false);
  const [activePluginPicker, setActivePluginPicker] = useState<string | null>(null);

  const { restoreSelection, saveCurrentSelection } = useEditorSelection(editorRef);
  const { isEmpty, serializeNow, scheduleSerialize, checkIsEmpty } = useEditorSerialization(
    editorRef,
    value,
    onChange,
    { mediaAdapter: adapters.media, plugins }
  );
  const toolbarMenus = useToolbarMenus(toolbarRef);

  const appleMusicAvailable = plugins.some((p) => p.name === "apple-music");

  const slashCommands = useSlashCommands(containerRef, {
    excludeActions: [
      ...excludeCommands,
      ...(!appleMusicAvailable ? ["applemusic"] : []),
    ],
    extraCommands: plugins.flatMap((p) => p.commands ?? []),
  });

  const mediaSelection = useMediaSelection(editorRef, containerRef, scheduleSerialize, {
    mediaAdapter: adapters.media,
  });

  const mediaUpload = useMediaUpload({
    editorRef,
    scheduleSerialize,
    onMediaSelect: mediaSelection.setSelectedMedia,
    openMediaMenu: mediaSelection.openMediaMenu,
    uploadAdapter: adapters.upload,
    mediaAdapter: adapters.media,
  });

  const youtubeEmbed = useYoutubeEmbed({
    editorRef,
    serializeNow,
    insertNodeAtSelection: mediaUpload.insertNodeAtSelection,
  });

  const appleMusicEmbed = useAppleMusicEmbed({
    editorRef,
    serializeNow,
    insertNodeAtSelection: mediaUpload.insertNodeAtSelection,
    available: appleMusicAvailable,
  });

  const { processInputRules } = useMarkdownInputRules();

  const handleInput = useCallback(() => {
    checkIsEmpty();
    if (editorRef.current && processInputRules(editorRef.current)) {
      serializeNow();
      return;
    }
    scheduleSerialize();
  }, [checkIsEmpty, processInputRules, serializeNow, scheduleSerialize]);

  // Direct DOM block-type change — avoids execCommand("formatBlock") which adds spurious newlines
  const applyBlockType = useCallback((tag: string) => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
    const range = selection.getRangeAt(0);
    const node = range.startContainer;
    const block = (node instanceof HTMLElement ? node : node.parentElement)
      ?.closest("p,div,blockquote,h1,h2,h3,h4,h5,h6");
    if (!block || !block.parentNode) return;
    const newBlock = document.createElement(tag);
    newBlock.innerHTML = block.innerHTML || "<br />";
    block.parentNode.replaceChild(newBlock, block);
    // Restore cursor to end of new block
    const newRange = document.createRange();
    const last = newBlock.lastChild;
    if (last?.nodeType === Node.TEXT_NODE) {
      newRange.setStart(last, (last as Text).length);
    } else if (last) {
      newRange.setStartAfter(last);
    } else {
      newRange.setStart(newBlock, 0);
    }
    newRange.collapse(true);
    selection.removeAllRanges();
    selection.addRange(newRange);
  }, []);

  const execCommandWithSelection = useCallback((command: string, commandValue?: string) => {
    editorRef.current?.focus();
    restoreSelection();
    if (command === "formatBlock" && commandValue) {
      applyBlockType(commandValue);
      handleInput();
      return;
    }
    document.execCommand(command, false, commandValue);
    handleInput();
  }, [restoreSelection, handleInput, applyBlockType]);

  const clearFormatting = useCallback(() => {
    editorRef.current?.focus();
    restoreSelection();
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const node = range.startContainer;
      const block = (node instanceof HTMLElement ? node : node.parentElement)?.closest("h1,h2,h3,h4,h5,h6,blockquote");
      if (block) {
        applyBlockType("p");
      }
    }
    document.execCommand("removeFormat");
    handleInput();
  }, [restoreSelection, handleInput, applyBlockType]);

  const applySlashCommand = useCallback((action: CommandAction) => {
    editorRef.current?.focus();
    // Do not call restoreSelection() here — removeTriggerSlash already set the cursor
    // correctly, and restoreSelection() would undo that by reverting to a stale range.
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const node = range.startContainer;
      const block = (node instanceof HTMLElement ? node : node.parentElement)?.closest("p,div,blockquote,h1,h2,h3,li");
      if (!block && editorRef.current) {
        const placeholderEl = document.createElement("p");
        placeholderEl.innerHTML = "<br />";
        editorRef.current.appendChild(placeholderEl);
        const nextRange = document.createRange();
        nextRange.setStart(placeholderEl, 0);
        nextRange.collapse(true);
        selection.removeAllRanges();
        selection.addRange(nextRange);
      }
    }

    // Check plugin command handlers first
    for (const plugin of plugins) {
      if (plugin.onCommand) {
        const handled = plugin.onCommand(action, {
          editorRef,
          insertNodeAtSelection: mediaUpload.insertNodeAtSelection,
          serializeNow,
        });
        if (handled) {
          serializeNow();
          return;
        }
      }
      // If plugin has a picker and one of its commands matches, open the picker
      if (plugin.picker && plugin.commands?.some((cmd) => cmd.action === action)) {
        setActivePluginPicker(plugin.name);
        return;
      }
    }

    if (action === "ul") {
      document.execCommand("insertUnorderedList");
    } else if (action === "ol") {
      document.execCommand("insertOrderedList");
    } else if (action === "image") {
      mediaUpload.insertDropzoneAtSelection();
    } else if (action === "divider") {
      document.execCommand("insertHorizontalRule");
    } else if (action === "youtube") {
      youtubeEmbed.insertYoutubeDropzone();
    } else if (action === "applemusic") {
      if (slots.appleMusicPicker) {
        setShowAppleMusicPicker(true);
      } else {
        appleMusicEmbed.insertAppleMusicDropzone();
      }
    } else {
      applyBlockType(action);
    }
    serializeNow();
  }, [restoreSelection, mediaUpload, youtubeEmbed, appleMusicEmbed, serializeNow, slots, plugins, applyBlockType]);

  const handleAppleMusicSelect = useCallback((item: { id: string; type: "song" | "album"; name?: string; artistName?: string; artworkUrl?: string }) => {
    setShowAppleMusicPicker(false);
    editorRef.current?.focus();
    const embed = appleMusicEmbed.createAppleMusicEmbed(
      item.id,
      item.type,
      "full",
      "full",
      item.name,
      item.artistName,
      item.artworkUrl
    );
    mediaUpload.insertNodeAtSelection(embed);
    const spacer = document.createElement("p");
    spacer.innerHTML = "<br />";
    embed.insertAdjacentElement("afterend", spacer);
    serializeNow();
  }, [appleMusicEmbed, mediaUpload, serializeNow]);

  const insertEmoji = useCallback((emoji: string) => {
    editorRef.current?.focus();
    restoreSelection();
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
    const range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(document.createTextNode(emoji));
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
    scheduleSerialize();
  }, [restoreSelection, scheduleSerialize]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    // Always block Enter when slash menu is open — prevents carriage return regardless of stale closures
    if (event.key === "Enter" && slashCommands.slashOpen) {
      event.preventDefault();
    }

    const handled = slashCommands.handleSlashKeyDown(event, applySlashCommand);
    if (handled) return;

    if (event.key === "Enter" && !event.shiftKey) {
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) return;
      const range = selection.getRangeAt(0);
      const node = range.startContainer;
      const block = (node instanceof HTMLElement ? node : node.parentElement)?.closest("h1,h2,h3,h4,h5,h6,blockquote");
      if (block) {
        // If the block is empty, convert to paragraph instead of inserting after
        const text = block.textContent || "";
        if (!text.trim()) {
          event.preventDefault();
          const paragraph = document.createElement("p");
          paragraph.innerHTML = "<br />";
          block.parentNode?.replaceChild(paragraph, block);
          const nextRange = document.createRange();
          nextRange.setStart(paragraph, 0);
          nextRange.collapse(true);
          selection.removeAllRanges();
          selection.addRange(nextRange);
          scheduleSerialize();
          return;
        }
        event.preventDefault();
        const paragraph = document.createElement("p");
        paragraph.innerHTML = "<br />";
        if (block.parentNode) {
          block.parentNode.insertBefore(paragraph, block.nextSibling);
        }
        const nextRange = document.createRange();
        nextRange.setStart(paragraph, 0);
        nextRange.collapse(true);
        selection.removeAllRanges();
        selection.addRange(nextRange);
        scheduleSerialize();
      }
    }

    // Backspace: delete figure/dropzone before cursor
    if (event.key === "Backspace") {
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) return;
      const range = selection.getRangeAt(0);
      if (!range.collapsed) return;

      const node = range.startContainer;
      const curBlock = (node instanceof HTMLElement ? node : node.parentElement)?.closest("p,div,li");
      if (curBlock && range.startOffset === 0 && !(curBlock.textContent || "").trim()) {
        const prevEl = curBlock.previousElementSibling as HTMLElement | null;
        if (prevEl && (prevEl.tagName === "FIGURE" || prevEl.dataset.dropzone || prevEl.tagName === "HR")) {
          event.preventDefault();
          prevEl.remove();
          scheduleSerialize();
          return;
        }
      }
    }

    // Backspace at start of blockquote/heading: convert to paragraph
    if (event.key === "Backspace") {
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) return;
      const range = selection.getRangeAt(0);
      if (!range.collapsed) return; // let default handle selection deletion

      const node = range.startContainer;
      const block = (node instanceof HTMLElement ? node : node.parentElement)?.closest("blockquote,h1,h2,h3,h4,h5,h6");
      if (!block) return;

      const blockText = (block.textContent || "").trim();

      // If block is empty, always convert to paragraph
      if (!blockText) {
        event.preventDefault();
        const paragraph = document.createElement("p");
        paragraph.innerHTML = "<br />";
        block.parentNode?.replaceChild(paragraph, block);
        const newRange = document.createRange();
        newRange.setStart(paragraph, 0);
        newRange.collapse(true);
        selection.removeAllRanges();
        selection.addRange(newRange);
        scheduleSerialize();
        return;
      }

      // Check if cursor is at the very start of the block
      let atStart = false;
      if (range.startOffset === 0) {
        let current: Node | null = node;
        atStart = true;
        while (current && current !== block) {
          if (current.previousSibling) {
            atStart = false;
            break;
          }
          current = current.parentNode;
        }
      }

      if (atStart) {
        // Check if previous sibling is a media figure or dropzone — delete it instead
        const prevEl = block.previousElementSibling as HTMLElement | null;
        if (prevEl && (prevEl.tagName === "FIGURE" || prevEl.dataset.dropzone || prevEl.tagName === "HR")) {
          event.preventDefault();
          prevEl.remove();
          scheduleSerialize();
          return;
        }
        event.preventDefault();
        const paragraph = document.createElement("p");
        paragraph.innerHTML = block.innerHTML || "<br />";
        block.parentNode?.replaceChild(paragraph, block);
        const newRange = document.createRange();
        newRange.setStart(paragraph, 0);
        newRange.collapse(true);
        selection.removeAllRanges();
        selection.addRange(newRange);
        scheduleSerialize();
      }
    }

    // Delete key: remove figure/dropzone after cursor
    if (event.key === "Delete") {
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) return;
      const range = selection.getRangeAt(0);
      if (!range.collapsed) return;
      const node = range.startContainer;
      const block = (node instanceof HTMLElement ? node : node.parentElement)?.closest("p,div,li");
      if (!block) return;
      const blockText = (block.textContent || "").trim();
      const atEnd = range.startOffset === (node.nodeType === Node.TEXT_NODE ? (node as Text).length : (node as Element).childNodes.length);
      if ((blockText === "" || atEnd) && block.nextElementSibling) {
        const nextEl = block.nextElementSibling as HTMLElement;
        if (nextEl.tagName === "FIGURE" || nextEl.dataset.dropzone || nextEl.tagName === "HR") {
          event.preventDefault();
          nextEl.remove();
          scheduleSerialize();
          return;
        }
      }
    }
  }, [slashCommands, applySlashCommand, scheduleSerialize]);

  const handlePaste = useCallback(async (event: React.ClipboardEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;

    if (target instanceof HTMLInputElement && (target.dataset.youtubeInput || target.dataset.applemusicInput)) {
      return;
    }

    const files = event.clipboardData.files;
    if (files && files.length > 0) {
      event.preventDefault();
      await mediaUpload.handlePasteFiles(files, target);
      return;
    }

    const text = event.clipboardData.getData("text/plain").trim();

    // Try plugin paste handlers
    for (const plugin of plugins) {
      if (plugin.handlePaste) {
        const handled = plugin.handlePaste(text, {
          editorRef,
          insertNodeAtSelection: mediaUpload.insertNodeAtSelection,
          serializeNow,
        });
        if (handled) {
          event.preventDefault();
          return;
        }
      }
    }

    if (text && youtubeEmbed.handlePasteYoutube(text)) {
      event.preventDefault();
      return;
    }
    if (text && appleMusicEmbed.handlePasteAppleMusic(text)) {
      event.preventDefault();
      return;
    }

    // For all other pastes, intercept and paste as clean markdown-converted HTML
    // This prevents styled HTML from external sources (black backgrounds, wrong fonts, etc.)
    if (text) {
      event.preventDefault();
      const html = mdxToHtml(text, plugins);
      if (html) {
        // Insert the converted HTML at the current selection
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          range.deleteContents();
          const temp = document.createElement("div");
          temp.innerHTML = html;
          const frag = document.createDocumentFragment();
          let lastNode: Node | null = null;
          while (temp.firstChild) {
            lastNode = frag.appendChild(temp.firstChild);
          }
          range.insertNode(frag);
          // Move cursor to end of pasted content
          if (lastNode) {
            const newRange = document.createRange();
            newRange.setStartAfter(lastNode);
            newRange.collapse(true);
            selection.removeAllRanges();
            selection.addRange(newRange);
          }
        }
        serializeNow();
      }
    }
  }, [mediaUpload, youtubeEmbed, appleMusicEmbed, plugins, serializeNow]);

  const handleEditorClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    const target = event.target as HTMLElement;

    if (mediaUpload.handleDropzoneClick(target)) {
      return;
    }

    const figure = target.closest("figure[data-media-id]") as HTMLElement | null;
    if (figure?.dataset.mediaId) {
      mediaSelection.selectMediaElement(figure);
      return;
    }

    const youtube = target.closest("div[data-youtube-id]") as HTMLElement | null;
    if (youtube?.dataset.youtubeId) {
      mediaSelection.selectYoutubeElement(youtube);
      return;
    }

    const appleMusic = target.closest("div[data-apple-music-id],div[data-applemusic-id]") as HTMLElement | null;
    if (appleMusic?.dataset.appleMusicId || appleMusic?.dataset.applemusicId) {
      mediaSelection.selectAppleMusicElement(appleMusic);
      return;
    }

    mediaSelection.clearSelection();
  }, [mediaUpload, mediaSelection]);

  const handleContainerClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (
      target.closest("figure[data-media-id]") ||
      target.closest("div[data-youtube-id]") ||
      target.closest("div[data-apple-music-id],div[data-applemusic-id]")
    ) {
      return;
    }
    mediaSelection.clearSelection();
  }, [mediaSelection]);

  const EmojiPickerSlot = slots.emojiPicker;
  const AppleMusicPickerSlot = slots.appleMusicPicker;

  return (
    <div className={className || classNames?.root || "relative"} style={style}>
      <Toolbar
        toolbarRef={toolbarRef}
        execCommand={execCommandWithSelection}
        clearFormatting={clearFormatting}
        insertImage={() => mediaUpload.insertDropzoneAtSelection()}
        showImageButton={Boolean(adapters.upload)}
        openHeadingMenu={() => toolbarMenus.heading.openMenu()}
        openListMenu={() => toolbarMenus.list.openMenu()}
        openLinkMenu={() => toolbarMenus.link.openMenu()}
        classNames={classNames}
      >
        <input
          ref={mediaUpload.fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(event) => mediaUpload.handleFiles(event.target.files)}
        />
        {EmojiPickerSlot ? <EmojiPickerSlot onSelect={insertEmoji} /> : null}
      </Toolbar>

      <div
        ref={containerRef}
        className="relative rounded-xl min-h-105"
        style={{
          minHeight: "560px",
          overflowX: "hidden",
          background: "var(--mdx-editor-bg-primary, var(--pearl, #f8f6f3))",
          border: "1px solid var(--mdx-editor-border, var(--cloud, #dde4ea))",
          boxShadow: "var(--mdx-editor-shadow-sm, var(--shadow-sm, 0 1px 2px rgba(0,0,0,.05)))",
        }}
        onDrop={(event) => mediaUpload.handleDrop(event)}
        onDragOver={(event) => event.preventDefault()}
        onPaste={handlePaste}
        onClick={handleContainerClick}
      >
        {isEmpty ? (
          <p
            className={classNames?.placeholder || "absolute top-2 left-2 m-0 text-base pointer-events-none"}
            style={{ color: "var(--mdx-editor-text-muted, var(--slate, #64748b))" }}
          >
            {placeholder || "Start writing your story..."}
          </p>
        ) : null}
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          className={classNames?.editor || "min-h-90 focus:outline-none wysiwyg-editor"}
          style={{ padding: "8px", minHeight: "500px", width: "100%", overflowWrap: "break-word", wordBreak: "break-word", minWidth: 0, maxWidth: "100%", color: "var(--mdx-editor-text-secondary, #333)" }}
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          onKeyUp={saveCurrentSelection}
          onMouseUp={slashCommands.closeSlashMenu}
          onClick={handleEditorClick}
        />

        <MediaMenu
          selectedMedia={mediaSelection.selectedMedia}
          selectedYoutube={mediaSelection.selectedYoutube}
          selectedAppleMusic={mediaSelection.selectedAppleMusic}
          mediaMenuPos={mediaSelection.mediaMenuPos}
          captionDraft={mediaSelection.captionDraft}
          onCaptionChange={mediaSelection.setCaptionDraft}
          onUpdateMedia={mediaSelection.updateSelectedMedia}
          onUpdateYoutube={mediaSelection.updateSelectedYoutube}
          onUpdateAppleMusic={mediaSelection.updateSelectedAppleMusic}
          onRemoveMedia={mediaSelection.removeSelectedMedia}
          onRemoveYoutube={mediaSelection.removeSelectedYoutube}
          onRemoveAppleMusic={mediaSelection.removeSelectedAppleMusic}
          classNames={classNames}
        />

        <SlashMenu
          open={slashCommands.slashOpen}
          position={slashCommands.slashMenuPos}
          filter={slashCommands.slashFilter}
          selectedIndex={slashCommands.slashIndex}
          commands={slashCommands.filteredCommands}
          onSelectIndex={slashCommands.setSlashIndex}
          onSelectCommand={slashCommands.selectCommand}
          applyCommand={applySlashCommand}
          classNames={classNames}
        />

        <LinkPopover
          open={toolbarMenus.link.open}
          position={toolbarMenus.link.pos}
          value={toolbarMenus.link.value}
          onValueChange={toolbarMenus.link.setValue}
          onApply={() => {
            if (toolbarMenus.link.value.trim()) {
              execCommandWithSelection("createLink", toolbarMenus.link.value.trim());
            }
            toolbarMenus.link.closeMenu();
          }}
          classNames={classNames}
        />

        <ListMenu
          open={toolbarMenus.list.open}
          position={toolbarMenus.list.pos}
          onSelectBulleted={() => execCommandWithSelection("insertUnorderedList")}
          onSelectNumbered={() => execCommandWithSelection("insertOrderedList")}
          onClose={toolbarMenus.list.closeMenu}
          classNames={classNames}
        />

        <HeadingMenu
          open={toolbarMenus.heading.open}
          position={toolbarMenus.heading.pos}
          onSelect={(tag) => execCommandWithSelection("formatBlock", tag)}
          onClose={toolbarMenus.heading.closeMenu}
          classNames={classNames}
        />
      </div>

      {showAppleMusicPicker && AppleMusicPickerSlot ? (
        <AppleMusicPickerSlot
          onSelect={handleAppleMusicSelect}
          onClose={() => setShowAppleMusicPicker(false)}
        />
      ) : null}

      {activePluginPicker != null && (() => {
        const plugin = plugins.find((p) => p.name === activePluginPicker);
        if (!plugin?.picker) return null;
        const PickerComponent = plugin.picker;
        return (
          <PickerComponent
            onInsert={(node: Node) => {
              setActivePluginPicker(null);
              editorRef.current?.focus();
              mediaUpload.insertNodeAtSelection(node);
              const spacer = document.createElement("p");
              spacer.innerHTML = "<br />";
              if (node instanceof HTMLElement) {
                node.insertAdjacentElement("afterend", spacer);
              }
              serializeNow();
            }}
            onClose={() => setActivePluginPicker(null)}
            serializeNow={serializeNow}
          />
        );
      })()}
    </div>
  );
}
