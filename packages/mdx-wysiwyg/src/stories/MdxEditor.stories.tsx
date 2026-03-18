import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { MdxEditor } from "../components/mdx-editor";

const meta: Meta<typeof MdxEditor> = {
  title: "Editor/MdxEditor",
  component: MdxEditor,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A raw MDX textarea editor with slash commands, inline formatting toolbar, undo/redo, and selection-based formatting. Useful when you want direct markdown editing rather than WYSIWYG.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MdxEditor>;

function MdxEditorControlled(
  props: Partial<React.ComponentProps<typeof MdxEditor>>
) {
  const [value, setValue] = useState(props.value ?? "");
  return (
    <MdxEditor
      value={value}
      onChange={setValue}
      className={props.className}
      style={{ minHeight: "400px", ...props.style }}
      classNames={props.classNames}
    />
  );
}

export const Default: Story = {
  render: () => <MdxEditorControlled />,
};

export const WithInitialContent: Story = {
  render: () => (
    <MdxEditorControlled
      value={`## Getting Started

This is a **markdown** editor with _inline formatting_.

- Item one
- Item two
- Item three

> A blockquote for emphasis

\`\`\`js
const greeting = "Hello, world!";
console.log(greeting);
\`\`\`
`}
    />
  ),
};
