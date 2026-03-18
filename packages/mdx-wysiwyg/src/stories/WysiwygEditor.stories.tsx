import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { WysiwygEditor } from "../components/wysiwyg-editor";
import { EditorProvider } from "../context/editor-provider";
import { youtubePlugin } from "../plugins/youtube-plugin";
import { imagePlugin } from "../plugins/image-plugin";

const meta: Meta<typeof WysiwygEditor> = {
  title: "Editor/WysiwygEditor",
  component: WysiwygEditor,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A contentEditable-based WYSIWYG editor that serializes to MDX. Includes a formatting toolbar, slash commands, media embedding, and a plugin system.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof WysiwygEditor>;

function WysiwygEditorControlled(
  props: Partial<React.ComponentProps<typeof WysiwygEditor>>
) {
  const [value, setValue] = useState(props.value ?? "");
  return (
    <div>
      <WysiwygEditor
        value={value}
        onChange={setValue}
        placeholder={props.placeholder ?? "Start writing..."}
        config={props.config}
        classNames={props.classNames}
        className={props.className}
        style={props.style}
      />
      <details style={{ marginTop: "1rem" }}>
        <summary
          style={{
            cursor: "pointer",
            fontSize: "0.875rem",
            color: "#64748b",
          }}
        >
          MDX Output
        </summary>
        <pre
          style={{
            padding: "1rem",
            background: "#f1f5f9",
            borderRadius: "0.5rem",
            fontSize: "0.75rem",
            overflow: "auto",
            maxHeight: "300px",
          }}
        >
          {value || "(empty)"}
        </pre>
      </details>
    </div>
  );
}

export const Default: Story = {
  render: () => <WysiwygEditorControlled />,
};

export const WithPlaceholder: Story = {
  render: () => (
    <WysiwygEditorControlled placeholder="Write something amazing..." />
  ),
};

export const WithInitialContent: Story = {
  render: () => (
    <WysiwygEditorControlled
      value={
        "## Hello World\n\nThis is a **bold** statement with some *italic* text.\n\n> A blockquote for emphasis\n\n- First item\n- Second item\n- Third item"
      }
    />
  ),
};

export const WithPlugins: Story = {
  render: () => (
    <EditorProvider config={{ plugins: [youtubePlugin, imagePlugin] }}>
      <WysiwygEditorControlled placeholder="Try /youtube or /image slash commands..." />
    </EditorProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Editor configured with YouTube and Image plugins. Type / to see additional slash commands for embedding media.",
      },
    },
  },
};

export const CustomStyling: Story = {
  render: () => (
    <div
      style={
        {
          "--mdx-editor-heading-color": "#1e3a5f",
          "--mdx-editor-primary": "#8b5cf6",
          "--mdx-editor-bg-primary": "#fefce8",
          "--mdx-editor-border": "#d4d4d8",
        } as React.CSSProperties
      }
    >
      <WysiwygEditorControlled placeholder="Custom themed editor..." />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates theming via CSS custom properties (--mdx-editor-*).",
      },
    },
  },
};
