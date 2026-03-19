import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../packages/*/src/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-docs", "@storybook/addon-controls"],
  staticDirs: ["../public"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  managerHead: (head) =>
    `${head}
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta property="og:title" content="Crucible UI — Component Library">
<meta property="og:description" content="Headless, style-agnostic UI primitives for React. MDX editor, Dialog, Popover and more.">
<meta property="og:site_name" content="Crucible UI">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="Crucible UI">
<meta name="twitter:description" content="Headless, style-agnostic UI primitives for React.">
`,
  viteFinal(config) {
    config.plugins = config.plugins ?? [];
    config.plugins.push(tailwindcss());
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@crucible-ui/mdx": path.resolve(__dirname, "../packages/mdx-wysiwyg/src/index.ts"),
      "@crucible-ui/dialog": path.resolve(__dirname, "../packages/dialog/src/index.ts"),
      "@crucible-ui/popover": path.resolve(__dirname, "../packages/popover/src/index.ts"),
      "@crucible-ui/gridular": path.resolve(__dirname, "../packages/gridular/src/index.ts"),
    };
    return config;
  },
};

export default config;
