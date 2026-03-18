import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#0d0d0d" },
        { name: "light", value: "#fafafa" },
      ],
    },
  },
};

export default preview;
