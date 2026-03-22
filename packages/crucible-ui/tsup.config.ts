import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    dialog: "src/dialog.ts",
    popover: "src/popover.ts",
    gridular: "src/gridular.ts",
    mdx: "src/mdx.ts",
    "lyric-ipsum": "src/lyric-ipsum.ts",
    "lyric-ipsum-api": "src/lyric-ipsum-api.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  splitting: true,
  treeshake: true,
  clean: true,
  external: [
    "react",
    "react-dom",
    "react/jsx-runtime",
    "@tanstack/react-virtual",
    "@radix-ui/react-checkbox",
    "@radix-ui/react-context-menu",
    "@radix-ui/react-select",
    "@radix-ui/react-slot",
    "class-variance-authority",
    "clsx",
    "lucide-react",
    "tailwind-merge",
    "react-markdown",
    "@mdx-js/mdx",
    "@mdx-js/react",
    "cheerio",
  ],
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
});
