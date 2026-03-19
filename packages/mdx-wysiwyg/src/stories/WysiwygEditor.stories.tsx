import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { WysiwygEditor } from "../components/wysiwyg-editor";
import { EditorProvider } from "../context/editor-provider";
import { youtubePlugin } from "../plugins/youtube-plugin";
import { imagePlugin } from "../plugins/image-plugin";
import "../styles/editor.css";

// ── Theme vars ────────────────────────────────────────────────────────────────

const lightVars = {
  "--mdx-editor-bg-primary": "#ffffff",
  "--mdx-editor-bg-secondary": "#f5f5f5",
  "--mdx-editor-toolbar-bg": "#fafafa",
  "--mdx-editor-border": "rgba(0,0,0,0.08)",
  "--mdx-editor-heading-color": "#111111",
  "--mdx-editor-text-secondary": "#333333",
  "--mdx-editor-text-muted": "#999999",
  "--mdx-editor-primary": "#ea580c",
  "--mdx-editor-shadow-sm": "0 1px 3px rgba(0,0,0,0.06)",
} as React.CSSProperties;

// ── Shared wrapper ────────────────────────────────────────────────────────────

function EditorShell({ badge, children }: { badge?: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-start justify-center px-6 py-12 bg-gray-100 font-sans">
      <div className="w-full max-w-[760px] rounded-xl border border-black/[0.08] bg-white shadow-sm overflow-hidden">
        <div className="px-4 py-2.5 border-b border-black/[0.07] bg-gray-50 flex items-center gap-2">
          <span className="text-[10.5px] uppercase tracking-[0.1em] font-semibold font-mono text-gray-400">
            WYSIWYG
          </span>
          <span className="w-[3px] h-[3px] rounded-full bg-black/10 shrink-0" />
          {badge && (
            <span className="text-[10.5px] font-mono text-orange-500">{badge}</span>
          )}
          <span className="ml-auto text-[10.5px] font-mono text-gray-300">@crucible-ui/mdx</span>
        </div>
        {children}
      </div>
    </div>
  );
}

// ── Meta ──────────────────────────────────────────────────────────────────────

const meta: Meta<typeof WysiwygEditor> = {
  title: "Editor/WysiwygEditor",
  component: WysiwygEditor,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A `contentEditable`-based WYSIWYG editor that serializes to MDX. Includes a formatting toolbar, slash commands (`/`), media embedding, and a plugin system. Zero runtime dependencies beyond React — theme entirely via CSS variables.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof WysiwygEditor>;

// ── Default ───────────────────────────────────────────────────────────────────

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Blank WYSIWYG surface. Click to focus, type `/` for block commands, select text for the inline toolbar.",
      },
    },
  },
  render: () => {
    const [value, setValue] = useState("");
    return (
      <EditorShell badge="empty state">
        <div className="p-6">
          <WysiwygEditor
            value={value}
            onChange={setValue}
            placeholder="Start writing…  Type / for commands"
            style={lightVars}
          />
        </div>
      </EditorShell>
    );
  },
};

// ── Writing ───────────────────────────────────────────────────────────────────

export const Writing: Story = {
  parameters: {
    docs: {
      description: {
        story: "Pre-loaded with a product announcement — showcases editorial typography and rich formatting.",
      },
    },
  },
  render: () => {
    const [value, setValue] = useState(`## Introducing Meridian 2.0

We've been building toward this for eighteen months. Today it ships.

Meridian started as an internal tool — a way for our team to think in public, link ideas across codebases, and write with some measure of permanence. The 1.x series solved the core problem well enough. But it was brittle in places we couldn't ignore.

### What changed

The architecture is completely new. We moved the collaboration layer off a custom WebSocket server and onto a conflict-free replicated data type (CRDT) engine. The result: **real-time sync with no server round-trips on the hot path**, and branching/merging of document history as a first-class primitive.

A few things that come along with that:

- **Offline-first** — changes you make offline merge cleanly when you reconnect
- **Version history** — every edit is addressable; revert to any point
- **Multiplayer cursors** — presence built in, not bolted on

### On the writing experience

The editor itself is unchanged in one respect: it stays out of your way. No toolbars unless you ask for them. No autosave spinners interrupting thought. The slash command menu is still the primary entry point for structure.

> The goal was never to write *for* you. It was to reduce the friction between having a thought and getting it down.

### Availability

Meridian 2.0 is available today on all paid plans. Existing workspaces will migrate automatically over the next 48 hours.
`);
    return (
      <EditorShell badge="writing">
        <div className="p-6">
          <WysiwygEditor value={value} onChange={setValue} style={lightVars} />
        </div>
      </EditorShell>
    );
  },
};

// ── TaskPlan ──────────────────────────────────────────────────────────────────

export const TaskPlan: Story = {
  parameters: {
    docs: {
      description: {
        story: "Structured task plan with headings, checklist, code blocks, and blockquotes.",
      },
    },
  },
  render: () => {
    const [value, setValue] = useState(`## Auth refactor — Phase 2

Migrate session tokens from \`localStorage\` to \`HttpOnly\` cookies. Scope is the web client only; the mobile app is unaffected.

### Context

The current implementation stores the JWT in \`localStorage\`, which is accessible to any JavaScript running on the page. Moving to \`HttpOnly\` cookies eliminates the XSS attack surface for token theft.

### Steps

- [x] Audit all \`localStorage.getItem('session')\` call sites
- [x] Add a \`Set-Cookie\` header to \`POST /auth/login\` and \`POST /auth/refresh\`
- [ ] Update middleware to read from cookie instead of Authorization header
- [ ] Keep \`localStorage\` read as a fallback during the two-week transition window
- [ ] Remove the fallback and the old storage key after cutover

### Notes

> The refresh endpoint must remain CORS-safe. Make sure \`SameSite=Lax\` is set — \`Strict\` will break OAuth redirects.

Coordinate with the iOS team before removing the Authorization header support — they have a 3-week release cycle.
`);
    return (
      <EditorShell badge="task plan">
        <div className="p-6">
          <WysiwygEditor value={value} onChange={setValue} style={lightVars} />
        </div>
      </EditorShell>
    );
  },
};

// ── WithPlugins ───────────────────────────────────────────────────────────────

export const WithPlugins: Story = {
  parameters: {
    docs: {
      description: {
        story: "YouTube and Image plugins enabled. Type `/youtube` to embed a video or `/image` to upload media.",
      },
    },
  },
  render: () => {
    const [value, setValue] = useState("");
    return (
      <EditorShell badge="plugins">
        <div className="p-6">
          <EditorProvider config={{ plugins: [youtubePlugin, imagePlugin] }}>
            <WysiwygEditor
              value={value}
              onChange={setValue}
              placeholder="Type /youtube to embed a video, or /image to upload…"
              style={lightVars}
            />
          </EditorProvider>
        </div>
      </EditorShell>
    );
  },
};
