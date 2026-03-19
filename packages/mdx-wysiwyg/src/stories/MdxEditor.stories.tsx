import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { MdxEditor } from "../components/mdx-editor";
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

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function countLines(text: string): number {
  return text.split("\n").length;
}

function EditorShell({ badge, value, children }: { badge: string; value: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-start justify-center px-6 py-12 bg-[#f5f5f5] font-sans">
      <div className="w-full max-w-[760px] rounded-xl border border-black/[0.08] bg-white shadow-sm overflow-hidden">
        <div className="px-4 py-2.5 border-b border-black/[0.07] bg-gray-50 flex items-center gap-2">
          <span className="text-[10.5px] uppercase tracking-[0.1em] font-semibold font-mono text-gray-400">MDX</span>
          <span className="w-[3px] h-[3px] rounded-full bg-black/10 shrink-0" />
          <span className="text-[10.5px] font-mono text-orange-500">{badge}</span>
          <span className="ml-auto text-[10.5px] font-mono text-gray-300">@crucible-ui/mdx</span>
        </div>
        <div>{children}</div>
        <div className="flex items-center justify-between px-4 py-2 border-t border-black/[0.06] bg-gray-50">
          <div className="flex items-center gap-4 text-[10.5px] font-mono text-gray-400">
            <span>words <span className="text-gray-500">{countWords(value)}</span></span>
            <span>lines <span className="text-gray-500">{countLines(value)}</span></span>
            <span>chars <span className="text-gray-500">{value.length}</span></span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-gray-300 font-mono">
            <span>/ commands</span>
            <span>·</span>
            <span>⌘B bold</span>
            <span>·</span>
            <span>⌘Z undo</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Meta ──────────────────────────────────────────────────────────────────────

const meta: Meta<typeof MdxEditor> = {
  title: "Editor/MdxEditor",
  component: MdxEditor,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A raw MDX textarea editor with slash commands, inline formatting toolbar, undo/redo, and selection-based formatting. Type `/` for block commands, or select text for inline formatting. Ideal when you want direct markdown control rather than a WYSIWYG surface.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MdxEditor>;

// ── Default ───────────────────────────────────────────────────────────────────

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Blank editor. Type `/` to open the slash command menu, or select text for the inline formatting toolbar.",
      },
    },
  },
  render: () => {
    const [value, setValue] = useState("");
    return (
      <EditorShell badge="empty state" value={value}>
        <MdxEditor value={value} onChange={setValue} style={{ minHeight: 420, ...lightVars }} />
      </EditorShell>
    );
  },
};

// ── CodeFirst ─────────────────────────────────────────────────────────────────

export const CodeFirst: Story = {
  parameters: {
    docs: {
      description: {
        story: "Technical writing with code blocks, inline code, and MDX component syntax.",
      },
    },
  },
  render: () => {
    const [value, setValue] = useState(`## Building a type-safe API client

The pattern below gives you full end-to-end type safety from your Zod schema to the call site, with zero generated code.

### Define your schema once

\`\`\`ts
import { z } from "zod";

export const TaskSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1).max(280),
  status: z.enum(["todo", "in_progress", "done"]),
  priority: z.enum(["low", "medium", "high", "urgent"]),
  dueAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
});

export type Task = z.infer<typeof TaskSchema>;
\`\`\`

### The client wrapper

\`\`\`ts
async function apiFetch<T>(
  schema: z.ZodType<T>,
  input: RequestInfo,
  init?: RequestInit,
): Promise<T> {
  const res = await fetch(input, {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });

  if (!res.ok) {
    throw new ApiError(res.status, await res.text());
  }

  return schema.parse(await res.json());
}

// Usage — fully typed, no casting
const task = await apiFetch(TaskSchema, "/api/tasks/abc-123");
task.status; // "todo" | "in_progress" | "done"  ✓
\`\`\`
`);
    return (
      <EditorShell badge="code-first" value={value}>
        <MdxEditor value={value} onChange={setValue} style={{ minHeight: 420, ...lightVars }} />
      </EditorShell>
    );
  },
};

// ── Notes ─────────────────────────────────────────────────────────────────────

export const Notes: Story = {
  parameters: {
    docs: {
      description: {
        story: "Meeting notes — decisions, action items, and open questions.",
      },
    },
  },
  render: () => {
    const [value, setValue] = useState(`## Design sync — March 18

**Attendees:** Sarah, Marcus, Priya, Devon
**Duration:** 45 min

---

### Decisions

1. New onboarding flow ships with the March 24 release — no slip
2. Drop the AI-generated avatars; use initials fallback with deterministic color
3. Sidebar redesign is gated behind \`sidebar_v2\` feature flag for the first two weeks

### Action items

- [ ] **Marcus** — Finalize component specs, share in Figma by EOD Thursday
- [ ] **Sarah** — Send Figma link to the iOS team + schedule handoff call
- [ ] **Priya** — Update the flag config in staging and verify rollout targeting
- [ ] **Devon** — Draft usability session recruitment email

### Open questions

> Should the new sidebar be opt-in or opt-out for existing users?
> Lean toward opt-out (new is default) but need a data point on how many users have customized their current sidebar.
`);
    return (
      <EditorShell badge="meeting notes" value={value}>
        <MdxEditor value={value} onChange={setValue} style={{ minHeight: 420, ...lightVars }} />
      </EditorShell>
    );
  },
};
