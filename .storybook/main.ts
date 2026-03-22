// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/vite";
import path, { dirname } from "path";
import { lyricIpsumApiPlugin } from "./lyric-ipsum-api-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../packages/*/src/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y"
  ],
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
    config.plugins.push(lyricIpsumApiPlugin());
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@crucible-ui/mdx": path.resolve(__dirname, "../packages/mdx-wysiwyg/src/index.ts"),
      "@crucible-ui/dialog": path.resolve(__dirname, "../packages/dialog/src/index.ts"),
      "@crucible-ui/popover": path.resolve(__dirname, "../packages/popover/src/index.ts"),
      "@crucible-ui/gridular": path.resolve(__dirname, "../packages/gridular/src/index.ts"),
      "@crucible-ui/lyric-ipsum": path.resolve(__dirname, "../packages/lyric-ipsum/src/index.ts"),
      "@crucible-ui/lyric-ipsum/api": path.resolve(__dirname, "../packages/lyric-ipsum/src/api/index.ts"),
    };
    return config;
  },
};

export default config;
