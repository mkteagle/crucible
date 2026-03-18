import { createContext, useContext, useMemo, type ReactNode } from "react";
import type { EditorConfig, EditorAdapters, EditorPlugin, EditorClassNames, SlashCommand } from "../types";
import type { ComponentType } from "react";
import type { EmojiPickerSlotProps, AppleMusicPickerSlotProps } from "../types";

interface EditorContextValue {
  adapters: EditorAdapters;
  plugins: EditorPlugin[];
  slots: {
    emojiPicker?: ComponentType<EmojiPickerSlotProps>;
    appleMusicPicker?: ComponentType<AppleMusicPickerSlotProps>;
  };
  classNames: EditorClassNames;
  commands: SlashCommand[];
  excludeCommands: string[];
}

const EditorContext = createContext<EditorContextValue | null>(null);

export interface EditorProviderProps {
  config?: EditorConfig;
  children: ReactNode;
}

export function EditorProvider({ config, children }: EditorProviderProps) {
  const value = useMemo<EditorContextValue>(() => ({
    adapters: config?.adapters ?? {},
    plugins: config?.plugins ?? [],
    slots: config?.slots ?? {},
    classNames: config?.classNames ?? {},
    commands: config?.commands ?? [],
    excludeCommands: config?.excludeCommands ?? [],
  }), [config]);

  return (
    <EditorContext.Provider value={value}>
      {children}
    </EditorContext.Provider>
  );
}

export function useEditorConfig(): EditorContextValue {
  const ctx = useContext(EditorContext);
  if (!ctx) {
    return {
      adapters: {},
      plugins: [],
      slots: {},
      classNames: {},
      commands: [],
      excludeCommands: [],
    };
  }
  return ctx;
}
