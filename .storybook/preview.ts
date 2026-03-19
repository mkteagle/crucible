import type { Preview } from "@storybook/react-vite";
import "./storybook.css";

const preview: Preview = {
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#f3f4f6" },
        { name: "white", value: "#ffffff" },
      ],
    },
  },
};

export default preview;
