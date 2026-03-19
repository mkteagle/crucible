import { addons } from "storybook/manager-api";
import { create } from "storybook/theming/create";

const crucibleTheme = create({
  base: "light",

  brandTitle: "Crucible UI",
  brandUrl: "/",
  brandImage: "/crucible-logo.svg",
  brandTarget: "_self",

  colorPrimary: "#6366F1",
  colorSecondary: "#6366F1",

  appBg: "#f5f5f5",
  appContentBg: "#f5f5f5",
  appPreviewBg: "#f5f5f5",
  appBorderColor: "rgba(0,0,0,0.07)",
  appBorderRadius: 8,

  fontBase: '"DM Sans", system-ui, sans-serif',
  fontCode: '"DM Mono", "Fira Code", monospace',

  textColor: "#111111",
  textInverseColor: "#ffffff",
  textMutedColor: "#6b7280",

  barTextColor: "#6b7280",
  barHoverColor: "#111111",
  barSelectedColor: "#6366F1",
  barBg: "#ffffff",

  inputBg: "#ffffff",
  inputBorder: "rgba(0,0,0,0.12)",
  inputTextColor: "#111111",
  inputBorderRadius: 6,
});

addons.setConfig({ theme: crucibleTheme });
