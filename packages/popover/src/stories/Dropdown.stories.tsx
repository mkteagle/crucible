import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownCheckboxItem,
  DropdownSeparator,
  DropdownLabel,
} from "../index";

const meta: Meta = {
  title: "Primitives/Dropdown",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Style-agnostic Dropdown menu built on the native Popover API. Keyboard-navigable (arrow keys, Home/End, Escape), auto-positioned with flip, light-dismiss. Supports items, checkbox items, separators, and labels. Zero dependencies.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

// ── Shared styles ────────────────────────────────────────────────────────────

const panelCls =
  "rounded-xl border border-black/[0.08] bg-white text-gray-800 shadow-[0_4px_24px_rgba(0,0,0,0.1),0_1px_4px_rgba(0,0,0,0.06)] font-sans text-[13px] overflow-hidden";

const itemCls =
  "flex items-center gap-2.5 w-full px-3 py-[7px] border-none bg-transparent text-gray-600 text-[13px] rounded-[7px] cursor-pointer text-left font-sans transition-[background,color] tracking-[-0.01em] outline-none hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900";

const checkCls =
  "flex items-center gap-2.5 w-full px-3 py-[7px] border-none bg-transparent text-gray-600 text-[13px] rounded-[7px] cursor-pointer text-left font-sans transition-[background,color] tracking-[-0.01em] outline-none hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900";

const triggerCls =
  "inline-flex items-center gap-[7px] px-4 py-2 rounded-[9px] bg-white text-gray-700 border border-black/[0.1] cursor-pointer text-[13.5px] tracking-[-0.01em] font-sans transition-[background,border-color] whitespace-nowrap hover:bg-gray-50 hover:border-black/[0.15] active:scale-[0.98]";

function Check() {
  return (
    <svg className="w-3 h-3 text-indigo-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

// ── Default ──────────────────────────────────────────────────────────────────

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Basic action menu. Click the trigger to open, click an item or press Escape to close. Arrow keys navigate between items.",
      },
    },
  },
  render: () => (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans">
      <Dropdown>
        <DropdownTrigger>
          <button className={triggerCls}>
            Actions
            <span className="text-gray-400 text-[10px]">{"\u25BE"}</span>
          </button>
        </DropdownTrigger>
        <DropdownContent className={`${panelCls} min-w-[180px] p-[5px]`}>
          <DropdownLabel className="px-3 pt-2 pb-1 text-[10px] font-semibold text-gray-400 uppercase tracking-[0.1em] font-mono">
            Actions
          </DropdownLabel>
          {[
            { icon: "\u270F\uFE0F", label: "Edit" },
            { icon: "\u2398", label: "Duplicate" },
            { icon: "\u2192", label: "Move to\u2026" },
            { icon: "\u25FB", label: "Copy link" },
          ].map((item) => (
            <DropdownItem
              key={item.label}
              onSelect={() => console.log(item.label)}
              className={itemCls}
            >
              <i className="not-italic w-4 text-center shrink-0 opacity-50 text-[12px]">{item.icon}</i>
              {item.label}
            </DropdownItem>
          ))}
          <DropdownSeparator className="h-px bg-black/[0.06] my-1 mx-1.5" />
          <DropdownItem
            onSelect={() => console.log("Delete")}
            className={`${itemCls} text-red-500 hover:bg-red-50 hover:text-red-600 focus:bg-red-50 focus:text-red-600`}
          >
            <i className="not-italic w-4 text-center shrink-0 opacity-60 text-[12px]">{"\u2715"}</i>
            Delete
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
    </div>
  ),
};

// ── With Checkboxes ──────────────────────────────────────────────────────────

export const WithCheckboxes: Story = {
  parameters: {
    docs: {
      description: {
        story: "Checkbox items that toggle state without closing the menu. Useful for visibility toggles, column pickers, and multi-select filters.",
      },
    },
  },
  render: () => {
    const [visible, setVisible] = useState<Record<string, boolean>>({
      name: true, email: true, department: true, role: false, joined: false,
    });

    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans">
        <Dropdown>
          <DropdownTrigger>
            <button className={triggerCls}>
              <span className="text-indigo-500 text-[12px]">{"\u2699"}</span>
              Columns
              <span className="bg-indigo-50 text-indigo-600 text-[10px] font-bold px-[6px] py-[1px] rounded-full font-mono">
                {Object.values(visible).filter(Boolean).length}
              </span>
            </button>
          </DropdownTrigger>
          <DropdownContent className={`${panelCls} w-56 p-2`}>
            <DropdownLabel className="px-3 pt-1 pb-2 text-[10px] font-semibold text-gray-400 uppercase tracking-[0.1em] font-mono">
              Toggle columns
            </DropdownLabel>
            {Object.entries(visible).map(([key, checked]) => (
              <DropdownCheckboxItem
                key={key}
                checked={checked}
                onCheckedChange={(v) => setVisible((s) => ({ ...s, [key]: v }))}
                className={checkCls}
              >
                <span className="w-4 h-4 flex items-center justify-center border border-indigo-300 rounded shrink-0">
                  {checked && <Check />}
                </span>
                <span className="font-medium capitalize">{key}</span>
              </DropdownCheckboxItem>
            ))}
            <DropdownSeparator className="h-px bg-black/[0.06] my-1.5 mx-1.5" />
            <DropdownItem
              onSelect={() => setVisible(Object.fromEntries(Object.keys(visible).map((k) => [k, true])))}
              className={`${itemCls} text-indigo-600 font-medium`}
            >
              Show all
            </DropdownItem>
          </DropdownContent>
        </Dropdown>
      </div>
    );
  },
};

// ── Placement ────────────────────────────────────────────────────────────────

export const Placement: Story = {
  parameters: {
    docs: {
      description: {
        story: "Dropdown supports the same `placement` and `align` props as Popover. Auto-flips when near the viewport edge.",
      },
    },
  },
  render: () => {
    const placements = [
      { placement: "bottom" as const, align: "start" as const },
      { placement: "bottom" as const, align: "end" as const },
      { placement: "top" as const, align: "start" as const },
      { placement: "right" as const, align: "start" as const },
    ];

    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans">
        <div className="grid grid-cols-2 gap-4">
          {placements.map(({ placement, align }) => (
            <Dropdown key={`${placement}-${align}`} placement={placement} align={align}>
              <DropdownTrigger>
                <button className={`${triggerCls} w-full justify-center`}>
                  {placement}-{align}
                </button>
              </DropdownTrigger>
              <DropdownContent className={`${panelCls} min-w-[160px] p-[5px]`}>
                <DropdownItem className={itemCls} onSelect={() => {}}>Item one</DropdownItem>
                <DropdownItem className={itemCls} onSelect={() => {}}>Item two</DropdownItem>
                <DropdownItem className={itemCls} onSelect={() => {}}>Item three</DropdownItem>
              </DropdownContent>
            </Dropdown>
          ))}
        </div>
      </div>
    );
  },
};

// ── User Menu ────────────────────────────────────────────────────────────────

export const UserMenu: Story = {
  parameters: {
    docs: {
      description: {
        story: "Avatar trigger revealing account actions. A common pattern for user menus and profile dropdowns.",
      },
    },
  },
  render: () => (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans">
      <Dropdown placement="bottom" align="end">
        <DropdownTrigger>
          <button
            className="w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-indigo-500 to-violet-500 text-white text-[13px] font-bold cursor-pointer flex items-center justify-center transition-[opacity,transform] font-sans p-0 shadow-sm hover:opacity-90 hover:scale-[1.05]"
          >
            JD
          </button>
        </DropdownTrigger>
        <DropdownContent className={`${panelCls} w-[220px]`}>
          <div className="px-4 py-3 border-b border-black/[0.06]">
            <div className="text-[13px] font-semibold text-gray-900">Jane Doe</div>
            <div className="text-[11px] text-gray-400 font-mono mt-0.5">jane@example.com</div>
          </div>
          <div className="p-[5px]">
            {["Account settings", "Keyboard shortcuts", "Appearance", "Help & support"].map((label) => (
              <DropdownItem key={label} onSelect={() => console.log(label)} className={itemCls}>
                {label}
              </DropdownItem>
            ))}
            <DropdownSeparator className="h-px bg-black/[0.06] my-1 mx-1.5" />
            <DropdownItem
              onSelect={() => console.log("Sign out")}
              className={`${itemCls} text-red-500 hover:bg-red-50 hover:text-red-600 focus:bg-red-50 focus:text-red-600`}
            >
              Sign out
            </DropdownItem>
          </div>
        </DropdownContent>
      </Dropdown>
    </div>
  ),
};
