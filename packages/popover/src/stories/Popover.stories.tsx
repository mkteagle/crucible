import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "../index";
import type { PopoverPlacement, PopoverAlign } from "../index";

// ── Meta ──────────────────────────────────────────────────────────────────────

const meta: Meta<{ placement: PopoverPlacement; align: PopoverAlign }> = {
  title: "Primitives/Popover",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Style-agnostic Popover primitive built on the native Popover API. Zero imposed styles — bring your own. Supports `placement` (top | bottom | left | right) and `align` (start | center | end) with automatic flip when near the viewport edge. Click outside to light-dismiss.",
      },
    },
  },
  argTypes: {
    placement: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      description: "Which side of the trigger to render on",
      table: { defaultValue: { summary: "bottom" } },
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
      description: "Alignment along the cross-axis of the trigger",
      table: { defaultValue: { summary: "start" } },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<{ placement: PopoverPlacement; align: PopoverAlign }>;

// ── Shared panel wrapper ──────────────────────────────────────────────────────

function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-xl border border-black/[0.08] bg-white text-gray-800 shadow-[0_4px_24px_rgba(0,0,0,0.1),0_1px_4px_rgba(0,0,0,0.06)] font-sans text-[13px] overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

// Shared trigger button style
const triggerCls =
  "inline-flex items-center gap-[7px] px-4 py-2 rounded-[9px] bg-white text-gray-700 border border-black/[0.1] cursor-pointer text-[13.5px] tracking-[-0.01em] font-sans transition-[background,border-color,box-shadow] whitespace-nowrap hover:bg-gray-50 hover:border-black/[0.15] active:scale-[0.98]";

// ── Playground ────────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    placement: "bottom",
    align: "start",
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "Use the controls panel below to try every `placement` and `align` combination interactively.",
      },
    },
  },
  render: ({ placement, align }) => (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans">
      <div className="flex flex-col items-center gap-3">
        <div className="text-[11px] font-mono text-gray-400 tracking-[0.04em]">
          placement=<span className="text-indigo-500 font-semibold">{placement}</span>
          {" "}align=<span className="text-indigo-500 font-semibold">{align}</span>
        </div>
        <Popover placement={placement} align={align}>
          <PopoverTrigger>
            <button className={triggerCls}>
              <span className="text-indigo-500 text-[12px]">◈</span>
              Open popover
              <span className="text-gray-400 text-[10px]">▾</span>
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <Panel className="px-4 py-3 max-w-[240px]">
              <div className="text-[12.5px] font-semibold text-gray-900 mb-1 tracking-[-0.01em]">
                {placement}-{align}
              </div>
              <p className="text-[12px] text-gray-500 leading-[1.6] mb-0">
                Change <code className="font-mono text-indigo-600 text-[11px]">placement</code> and{" "}
                <code className="font-mono text-indigo-600 text-[11px]">align</code> in the controls panel below.
              </p>
            </Panel>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  ),
};

// ── Default ───────────────────────────────────────────────────────────────────

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Basic popover anchored below the trigger. Click outside to light-dismiss via the native Popover API.",
      },
    },
  },
  render: () => (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans">
      <Popover>
        <PopoverTrigger>
          <button className={triggerCls}>
            <span className="text-indigo-500 text-[12px]">◈</span>
            Options
            <span className="text-gray-400 text-[10px]">▾</span>
          </button>
        </PopoverTrigger>
        <PopoverContent>
          <Panel className="px-5 py-[18px] max-w-[280px] leading-none">
            <div className="text-[12.5px] font-semibold text-gray-900 tracking-[-0.01em] mb-2 flex items-center gap-[7px]">
              Native Popover API
              <span className="text-[9.5px] font-semibold uppercase tracking-[0.09em] text-indigo-600 font-mono bg-indigo-50 border border-indigo-100 rounded px-[6px] py-[2px]">
                Chrome 125+
              </span>
            </div>
            <p className="text-[12.5px] text-gray-500 leading-[1.6] mb-[14px]">
              Built on{" "}
              <code className="inline bg-gray-100 border border-black/[0.07] rounded-[5px] px-[5px] py-[1px] font-mono text-[11.5px] text-indigo-600">
                popover="auto"
              </code>
              . Keyboard-accessible and light-dismiss come for free — no JavaScript event listeners needed.
            </p>
            <p className="text-[12.5px] text-gray-500 leading-[1.6] mb-0">
              Positioned via CSS anchor positioning with automatic flip when near the viewport edge.
            </p>
            <div className="flex gap-3 border-t border-black/[0.06] pt-3 mt-3">
              {[["bundle", "0 deps"], ["a11y", "built-in"], ["dismiss", "light"]].map(([label, value]) => (
                <div key={label} className="flex flex-col gap-[3px]">
                  <span className="text-[9.5px] text-gray-400 uppercase tracking-[0.09em] font-mono font-semibold">{label}</span>
                  <span className="text-[13px] text-gray-700 font-medium tracking-[-0.01em]">{value}</span>
                </div>
              ))}
            </div>
          </Panel>
        </PopoverContent>
      </Popover>
    </div>
  ),
};

// ── ContextMenu ───────────────────────────────────────────────────────────────

export const ContextMenu: Story = {
  parameters: {
    docs: {
      description: {
        story: "Compact action menu triggered from a ··· button. The canonical dropdown pattern.",
      },
    },
  },
  render: () => (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans">
      <Popover>
        <PopoverTrigger>
          <button
            title="More options"
            className="w-[30px] h-[30px] rounded-[7px] bg-white border border-black/[0.1] text-gray-400 cursor-pointer flex items-center justify-center text-[17px] tracking-[0.1em] leading-none transition-[background,color,border-color] p-0 font-sans hover:bg-gray-50 hover:text-gray-600"
          >
            ···
          </button>
        </PopoverTrigger>
        <PopoverContent>
          <Panel className="min-w-[180px] p-[5px]">
            <div className="px-2.5 pt-1 pb-[3px] text-[9.5px] font-semibold text-gray-400 uppercase tracking-[0.1em] font-mono">
              Actions
            </div>
            {[
              { icon: "✏", label: "Edit", shortcut: "E" },
              { icon: "⎘", label: "Duplicate", shortcut: "⌘D" },
              { icon: "→", label: "Move to…", shortcut: null },
              { icon: "◻", label: "Copy link", shortcut: "⌘⇧C" },
            ].map(item => (
              <button
                key={item.label}
                className="flex items-center gap-2.5 w-full px-2.5 py-[7px] border-none bg-transparent text-gray-600 text-[13px] rounded-[7px] cursor-pointer text-left font-sans transition-[background,color] tracking-[-0.01em] hover:bg-gray-50 hover:text-gray-900"
              >
                <i className="not-italic w-4 text-center shrink-0 opacity-50 text-[12px]">{item.icon}</i>
                {item.label}
                {item.shortcut && (
                  <span className="ml-auto text-[10.5px] text-gray-400 font-mono">{item.shortcut}</span>
                )}
              </button>
            ))}
            <div className="h-px bg-black/[0.06] my-1 mx-1.5" />
            <button className="flex items-center gap-2.5 w-full px-2.5 py-[7px] border-none bg-transparent text-red-500 text-[13px] rounded-[7px] cursor-pointer text-left font-sans transition-[background,color] tracking-[-0.01em] hover:bg-red-50 hover:text-red-600">
              <i className="not-italic w-4 text-center shrink-0 opacity-60 text-[12px]">✕</i>
              Delete
              <span className="ml-auto text-[10.5px] text-red-400/60 font-mono">⌫</span>
            </button>
          </Panel>
        </PopoverContent>
      </Popover>
    </div>
  ),
};

// ── UserProfile ───────────────────────────────────────────────────────────────

export const UserProfile: Story = {
  parameters: {
    docs: {
      description: {
        story: "Avatar trigger revealing a user card with account info and navigation actions.",
      },
    },
  },
  render: () => (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans">
      <Popover>
        <PopoverTrigger>
          <button
            title="Your profile"
            className="w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-indigo-500 to-violet-500 text-white text-[13px] font-bold cursor-pointer flex items-center justify-center transition-[opacity,transform,box-shadow] font-sans tracking-[-0.02em] p-0 shadow-sm hover:opacity-90 hover:scale-[1.05]"
          >
            JD
          </button>
        </PopoverTrigger>
        <PopoverContent>
          <Panel className="w-[236px]">
            <div className="px-4 py-4 border-b border-black/[0.06] flex items-center gap-3">
              <div className="w-[42px] h-[42px] rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-[15px] font-bold shrink-0 tracking-[-0.02em] font-sans">
                JD
              </div>
              <div>
                <div className="text-[14px] font-semibold text-gray-900 mb-[3px] tracking-[-0.02em]">Jane Doe</div>
                <div className="text-[11.5px] text-gray-400 font-mono tracking-[-0.01em]">jane@example.com</div>
                <div className="mt-[5px] inline-flex items-center gap-1 text-[9.5px] font-semibold uppercase tracking-[0.09em] text-orange-600 font-mono bg-orange-50 border border-orange-100 rounded px-[6px] py-[2px]">
                  Pro
                </div>
              </div>
            </div>

            <div className="p-[5px]">
              {[
                { icon: "⚙", label: "Account settings" },
                { icon: "⌨", label: "Keyboard shortcuts" },
                { icon: "◑", label: "Appearance" },
                { icon: "?", label: "Help & support" },
              ].map(item => (
                <button
                  key={item.label}
                  className="flex items-center gap-2.5 w-full px-2.5 py-[7px] border-none bg-transparent text-gray-600 text-[13px] rounded-[7px] cursor-pointer text-left font-sans transition-[background,color] tracking-[-0.01em] hover:bg-gray-50 hover:text-gray-900"
                >
                  <i className="not-italic text-[12px] w-4 text-center opacity-50">{item.icon}</i>
                  {item.label}
                </button>
              ))}
              <div className="h-px bg-black/[0.06] my-1 mx-1.5" />
              <button className="flex items-center gap-2.5 w-full px-2.5 py-[7px] border-none bg-transparent text-red-500 text-[13px] rounded-[7px] cursor-pointer text-left font-sans transition-[background,color] tracking-[-0.01em] hover:bg-red-50 hover:text-red-600">
                <i className="not-italic text-[12px] w-4 text-center opacity-50">↩</i>
                Sign out
              </button>
            </div>

            <div className="px-4 py-2 border-t border-black/[0.05] bg-gray-50 flex items-center justify-between">
              {[["Tasks", "142"], ["Projects", "8"], ["Done today", "6"]].map(([label, value]) => (
                <div key={label} className="flex flex-col gap-[2px]">
                  <span className="text-[9.5px] text-gray-400 uppercase tracking-[0.08em] font-mono">{label}</span>
                  <span className="text-[10.5px] text-gray-600 font-mono">{value}</span>
                </div>
              ))}
            </div>
          </Panel>
        </PopoverContent>
      </Popover>
    </div>
  ),
};

// ── FilterPanel ───────────────────────────────────────────────────────────────

export const FilterPanel: Story = {
  parameters: {
    docs: {
      description: {
        story: "Richer popover with stateful form controls — demonstrates how to build a task filter panel.",
      },
    },
  },
  render: () => {
    const [status, setStatus] = useState("all");
    const [priority, setPriority] = useState("all");
    const [assignee, setAssignee] = useState("all");
    const [dateRange, setDateRange] = useState("all");

    const activeCount = [status, priority, assignee, dateRange].filter(v => v !== "all").length;
    const isFiltered = activeCount > 0;

    function clearAll() {
      setStatus("all");
      setPriority("all");
      setAssignee("all");
      setDateRange("all");
    }

    const filterSelectCls =
      "w-full px-2.5 py-[7px] rounded-lg bg-white border border-black/[0.1] text-gray-700 text-[12.5px] cursor-pointer appearance-none font-sans tracking-[-0.01em] transition-[border-color] focus:outline-none focus:border-orange-400";

    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans">
        <Popover>
          <PopoverTrigger>
            <button
              className={`inline-flex items-center gap-[7px] px-[14px] py-[7.5px] rounded-[9px] border cursor-pointer text-[13px] tracking-[-0.01em] font-sans transition-[background,border-color] ${
                isFiltered
                  ? "text-orange-600 border-orange-200 bg-orange-50 hover:bg-orange-100"
                  : "bg-white text-gray-600 border-black/[0.1] hover:bg-gray-50"
              }`}
            >
              <span className="text-[11px]">⊞</span>
              Filters
              {isFiltered && (
                <span className="w-[17px] h-[17px] rounded-full bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center font-mono">
                  {activeCount}
                </span>
              )}
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <Panel className="w-64">
              <div className="px-4 py-[14px] border-b border-black/[0.06] flex items-center justify-between">
                <span className="text-[12px] font-semibold text-gray-400 uppercase tracking-[0.08em] font-mono">
                  Filter tasks
                </span>
                <button
                  onClick={clearAll}
                  className={`text-[11px] bg-transparent border-none cursor-pointer font-sans p-0 transition-[color] ${
                    isFiltered ? "text-orange-500 hover:text-orange-600" : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {isFiltered ? "Clear all" : "No filters"}
                </button>
              </div>

              {isFiltered && (
                <div className="px-4 pt-3 pb-0 flex flex-wrap gap-1.5">
                  {status !== "all" && (
                    <span className="inline-flex items-center gap-[5px] px-2 py-[3px] rounded-[5px] bg-orange-50 border border-orange-100 text-[11px] text-orange-600 font-mono tracking-[-0.01em]">
                      status: {status}
                    </span>
                  )}
                  {priority !== "all" && (
                    <span className="inline-flex items-center gap-[5px] px-2 py-[3px] rounded-[5px] bg-orange-50 border border-orange-100 text-[11px] text-orange-600 font-mono tracking-[-0.01em]">
                      priority: {priority}
                    </span>
                  )}
                  {assignee !== "all" && (
                    <span className="inline-flex items-center gap-[5px] px-2 py-[3px] rounded-[5px] bg-orange-50 border border-orange-100 text-[11px] text-orange-600 font-mono tracking-[-0.01em]">
                      assignee: {assignee}
                    </span>
                  )}
                  {dateRange !== "all" && (
                    <span className="inline-flex items-center gap-[5px] px-2 py-[3px] rounded-[5px] bg-orange-50 border border-orange-100 text-[11px] text-orange-600 font-mono tracking-[-0.01em]">
                      due: {dateRange}
                    </span>
                  )}
                </div>
              )}

              <div className="px-4 py-[14px] space-y-[14px]">
                {[
                  { label: "Status", value: status, setter: setStatus, options: [["all", "All statuses"], ["todo", "To do"], ["in_progress", "In progress"], ["done", "Done"]] },
                  { label: "Priority", value: priority, setter: setPriority, options: [["all", "All priorities"], ["urgent", "Urgent"], ["high", "High"], ["medium", "Medium"], ["low", "Low"]] },
                  { label: "Assignee", value: assignee, setter: setAssignee, options: [["all", "Anyone"], ["me", "Me"], ["claude", "Claude"], ["unassigned", "Unassigned"]] },
                  { label: "Due date", value: dateRange, setter: setDateRange, options: [["all", "Any time"], ["today", "Today"], ["week", "This week"], ["overdue", "Overdue"], ["none", "No due date"]] },
                ].map(({ label, value, setter, options }) => (
                  <div key={label}>
                    <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-[0.09em] mb-[7px] font-mono">
                      {label}
                    </label>
                    <select className={filterSelectCls} value={value} onChange={e => setter(e.target.value)}>
                      {options.map(([val, text]) => (
                        <option key={val} value={val}>{text}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>

              <div className="px-4 pb-[14px] pt-2.5 border-t border-black/[0.06] flex gap-2">
                <button
                  onClick={clearAll}
                  className="flex-1 py-[7.5px] rounded-lg bg-gray-100 text-gray-600 border border-black/[0.08] text-[12.5px] cursor-pointer font-sans transition-[background,color] tracking-[-0.01em] hover:bg-gray-200"
                >
                  Reset
                </button>
                <button className="flex-1 py-[7.5px] rounded-lg bg-orange-500 text-white border-none text-[12.5px] font-medium cursor-pointer font-sans transition-[opacity] tracking-[-0.01em] hover:opacity-90">
                  Apply
                </button>
              </div>
            </Panel>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
};

// ── Placement ─────────────────────────────────────────────────────────────────

const placements: { placement: PopoverPlacement; align: PopoverAlign; label: string }[] = [
  { placement: "top", align: "start", label: "top-start" },
  { placement: "top", align: "center", label: "top-center" },
  { placement: "top", align: "end", label: "top-end" },
  { placement: "bottom", align: "start", label: "bottom-start" },
  { placement: "bottom", align: "center", label: "bottom-center" },
  { placement: "bottom", align: "end", label: "bottom-end" },
  { placement: "left", align: "start", label: "left-start" },
  { placement: "left", align: "center", label: "left-center" },
  { placement: "left", align: "end", label: "left-end" },
  { placement: "right", align: "start", label: "right-start" },
  { placement: "right", align: "center", label: "right-center" },
  { placement: "right", align: "end", label: "right-end" },
];

function PlacementTip({ label }: { label: string }) {
  return (
    <Panel className="px-3 py-2 whitespace-nowrap">
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-mono font-semibold text-indigo-500 uppercase tracking-[0.08em]">placement</span>
        <code className="text-[12px] font-mono text-gray-700">{label}</code>
      </div>
    </Panel>
  );
}

export const Placement: Story = {
  parameters: {
    docs: {
      description: {
        story: "All 12 placement combinations: `top | bottom | left | right` × `start | center | end`. Hover over the grid for demos. Each popover auto-flips if there's not enough space on the preferred side.",
      },
    },
    layout: "fullscreen",
  },
  render: () => (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans p-16">
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-[13px] font-semibold text-gray-400 uppercase tracking-[0.1em] font-mono mb-2">
            Placement × Alignment
          </h3>
          <p className="text-[13px] text-gray-500">Click any trigger to see placement</p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {placements.map(({ placement, align, label }) => (
            <Popover key={label} placement={placement} align={align}>
              <PopoverTrigger>
                <button
                  className={`w-full px-3 py-2 rounded-[8px] bg-white border border-black/[0.1] cursor-pointer text-[11.5px] tracking-[-0.01em] font-mono text-gray-500 transition-[background,color,border-color] hover:bg-gray-50 hover:text-indigo-600 hover:border-indigo-200`}
                >
                  {label}
                </button>
              </PopoverTrigger>
              <PopoverContent>
                <PlacementTip label={label} />
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </div>
    </div>
  ),
};
