import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: ["../packages/*/src/stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-controls"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal(config) {
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@crucible-ui/mdx": path.resolve(__dirname, "../packages/mdx-wysiwyg/src/index.ts"),
      "@crucible-ui/dialog": path.resolve(__dirname, "../packages/dialog/src/index.ts"),
      "@crucible-ui/popover": path.resolve(__dirname, "../packages/popover/src/index.ts"),
    };
    return config;
  },
};

export default config;
