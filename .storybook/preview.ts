import type { Preview } from "@storybook/react-vite";
import "./storybook.css";

const preview: Preview = {
  parameters: {
    layout: "padded",
    backgrounds: {
      options: {
        light: { name: "light", value: "#f5f5f5" },
        white: { name: "white", value: "#ffffff" }
      }
    },
  },

  initialGlobals: {
    backgrounds: {
      value: "light"
    }
  }
};

export default preview;
