import { defineConfig } from "tsup";

export default defineConfig([
  // Library builds (React components + API)
  {
    entry: {
      index: "src/index.ts",
      api: "src/api/index.ts",
    },
    format: ["esm", "cjs"],
    dts: true,
    splitting: true,
    treeshake: true,
    clean: true,
    external: [
      "react",
      "react-dom",
      "react-markdown",
      "cheerio",
      "@radix-ui/react-slot",
      "class-variance-authority",
      "clsx",
      "tailwind-merge",
    ],
    esbuildOptions(options) {
      options.jsx = "automatic";
    },
  },
  // CLI — standalone, bundles all deps except node builtins
  {
    entry: { cli: "src/cli.ts" },
    format: ["cjs"],
    platform: "node",
    target: "node18",
    banner: { js: "#!/usr/bin/env node" },
    noExternal: [/.*/],
    treeshake: true,
  },
]);
