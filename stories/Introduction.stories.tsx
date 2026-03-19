import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Introduction",
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "white" },
    docs: { disable: true },
    controls: { disable: true },
  },
};

export default meta;

const packages = [
  {
    name: "@crucible-ui/gridular",
    version: "4.0.0",
    description: "High-performance virtualized React data grid with grouping, sorting, filtering, column management, and 100k+ row virtualization",
    status: "stable",
  },
  {
    name: "@crucible-ui/mdx",
    version: "1.1.0",
    description: "Headless WYSIWYG editor with MDX serialization, plugin system, and composable React components",
    status: "stable",
  },
  {
    name: "@crucible-ui/popover",
    version: "0.3.0",
    description: "Style-agnostic Popover primitive built on the native Popover API with JS anchor positioning, placement, and alignment control",
    status: "stable",
  },
  {
    name: "@crucible-ui/dialog",
    version: "0.1.1",
    description: "Style-agnostic Dialog primitive built on the native <dialog> API",
    status: "stable",
  },
];

const Badge = ({ status }: { status: string }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      padding: "2px 8px",
      borderRadius: 99,
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "0.03em",
      background: status === "stable" ? "#f0fdf4" : "#fef9c3",
      color: status === "stable" ? "#16a34a" : "#854d0e",
      border: `1px solid ${status === "stable" ? "rgba(22,163,74,0.2)" : "rgba(133,77,14,0.2)"}`,
    }}
  >
    {status}
  </span>
);

function IntroductionPage() {
  return (
    <div
      style={{
        fontFamily: '"IBM Plex Sans", system-ui, -apple-system, sans-serif',
        minHeight: "100vh",
        background: "#ffffff",
        padding: "64px 48px",
        maxWidth: 900,
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
        <svg width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g" x1="20" y1="10" x2="180" y2="190" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#8B5CF6"/>
              <stop offset="0.5" stopColor="#6366F1"/>
              <stop offset="1" stopColor="#06B6D4"/>
            </linearGradient>
          </defs>
          <path d="M40 24H160C160 24 154 70 136 106L108 164C102 176 91 184 79 184H121C109 184 98 176 92 164L64 106C46 70 40 24 40 24Z" fill="url(#g)"/>
          <path d="M52 46H148C148 46 143 78 130 104L110 146C106 154 100 158 94 158H106C100 158 94 154 90 146L70 104C57 78 52 46 52 46Z" fill="#0F172A" fillOpacity="0.2"/>
          <rect x="65" y="65" width="38" height="7" rx="3.5" fill="white" fillOpacity="0.9"/>
          <rect x="65" y="80" width="56" height="7" rx="3.5" fill="white" fillOpacity="0.78"/>
          <rect x="65" y="95" width="30" height="7" rx="3.5" fill="white" fillOpacity="0.68"/>
        </svg>
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "-0.5px",
              color: "#111111",
              lineHeight: 1.2,
            }}
          >
            Crucible{" "}
            <span style={{ color: "#8B5CF6" }}>UI</span>
          </h1>
          <p style={{ margin: "4px 0 0", fontSize: 13, color: "#6b7280", fontWeight: 400 }}>
            Headless UI primitives for React
          </p>
        </div>
      </div>

      {/* Description */}
      <div
        style={{
          padding: "24px 28px",
          background: "#f8f9fa",
          borderRadius: 12,
          border: "1px solid rgba(0,0,0,0.06)",
          marginBottom: 48,
        }}
      >
        <p style={{ margin: 0, fontSize: 15, color: "#374151", lineHeight: 1.65 }}>
          Crucible UI is a set of unstyled, composable React primitives designed to be
          dropped into any design system. Components handle logic and accessibility —
          you own the styles.
        </p>
      </div>

      {/* Packages */}
      <h2
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: "#9ca3af",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          margin: "0 0 16px",
        }}
      >
        Packages
      </h2>

      <div
        style={{
          border: "1px solid rgba(0,0,0,0.08)",
          borderRadius: 12,
          overflow: "hidden",
          marginBottom: 48,
        }}
      >
        {packages.map((pkg, i) => (
          <div
            key={pkg.name}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 16,
              padding: "20px 24px",
              borderBottom: i < packages.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
              background: "#ffffff",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <span
                  style={{
                    fontFamily: '"IBM Plex Mono", "Fira Code", monospace',
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#111111",
                  }}
                >
                  {pkg.name}
                </span>
                <Badge status={pkg.status} />
              </div>
              <p style={{ margin: 0, fontSize: 13, color: "#6b7280", lineHeight: 1.5 }}>
                {pkg.description}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                paddingTop: 2,
              }}
            >
              <span
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#6366F1",
                  background: "rgba(99,102,241,0.06)",
                  border: "1px solid rgba(99,102,241,0.15)",
                  borderRadius: 6,
                  padding: "3px 10px",
                  whiteSpace: "nowrap",
                }}
              >
                v{pkg.version}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Install */}
      <h2
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: "#9ca3af",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          margin: "0 0 16px",
        }}
      >
        Installation
      </h2>

      <div
        style={{
          background: "#0f172a",
          borderRadius: 10,
          padding: "18px 24px",
          marginBottom: 48,
        }}
      >
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            style={{
              fontFamily: '"IBM Plex Mono", "Fira Code", monospace',
              fontSize: 13,
              color: "#94a3b8",
              lineHeight: 1.8,
            }}
          >
            <span style={{ color: "#64748b" }}>$ </span>
            <span style={{ color: "#e2e8f0" }}>pnpm add </span>
            <span style={{ color: "#818cf8" }}>{pkg.name}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 32,
          borderTop: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <span style={{ fontSize: 12, color: "#9ca3af" }}>
          MIT License · Built for React 18+
        </span>
        <span style={{ fontSize: 12, color: "#9ca3af" }}>
          Last updated March 2026
        </span>
      </div>
    </div>
  );
}

export const Welcome: StoryObj = {
  name: "Welcome",
  render: () => <IntroductionPage />,
};
