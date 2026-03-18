import type { Meta, StoryObj } from "@storybook/react-vite";
import { Popover, PopoverTrigger, PopoverContent } from "../index";

const meta: Meta = {
  title: "Primitives/Popover",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Style-agnostic Popover primitive built on the native Popover API. Bring your own styles.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

const popoverStyle: React.CSSProperties = {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #2a2a2a",
  background: "#161616",
  color: "#e6e6e6",
  minWidth: "200px",
  inset: "unset",
  top: "calc(anchor(bottom) + 6px)",
  left: "anchor(left)",
};

const basePopoverCSS = `
  [popover] {
    margin: 0;
    padding: 12px;
    border-radius: 10px;
    border: 1px solid #2a2a2a;
    background: #161616;
    color: #e6e6e6;
    min-width: 200px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.5);
  }
  [popover]:popover-open {
    display: block;
  }
`;

export const Default: Story = {
  render: () => (
    <>
      <style>{basePopoverCSS}</style>
      <Popover>
        <PopoverTrigger>
          <button style={{ padding: "8px 16px", borderRadius: "8px", background: "#1f1f1f", color: "#e6e6e6", border: "1px solid #2a2a2a", cursor: "pointer" }}>
            Open popover
          </button>
        </PopoverTrigger>
        <PopoverContent style={{ position: "fixed", top: "50%", left: "50%" }}>
          <p style={{ margin: 0, fontSize: "14px" }}>
            This is a native Popover API element. Click outside to dismiss.
          </p>
        </PopoverContent>
      </Popover>
    </>
  ),
};

export const MenuPopover: Story = {
  render: () => (
    <>
      <style>{`
        ${basePopoverCSS}
        [popover] { min-width: 160px; padding: 4px; }
        .menu-item {
          display: flex; align-items: center; gap: 8px;
          width: 100%; padding: 8px 12px; border: none; background: transparent;
          color: #7a7a7a; font-size: 13px; border-radius: 6px; cursor: pointer;
          text-align: left;
        }
        .menu-item:hover { background: #1f1f1f; color: #e6e6e6; }
        .menu-item.danger { color: #ef4444; }
        .menu-item.danger:hover { background: rgba(239,68,68,0.1); }
        .menu-divider { height: 1px; background: #2a2a2a; margin: 4px 0; }
      `}</style>
      <Popover>
        <PopoverTrigger>
          <button style={{ padding: "6px 8px", borderRadius: "6px", background: "#1f1f1f", color: "#7a7a7a", border: "1px solid #2a2a2a", cursor: "pointer", fontSize: "18px", lineHeight: 1 }}>
            ···
          </button>
        </PopoverTrigger>
        <PopoverContent style={{ position: "fixed", top: "50%", left: "50%" }}>
          <button className="menu-item">✏️ Edit</button>
          <button className="menu-item">📋 Duplicate</button>
          <button className="menu-item">🔗 Copy link</button>
          <div className="menu-divider" />
          <button className="menu-item danger">🗑️ Delete</button>
        </PopoverContent>
      </Popover>
    </>
  ),
};

export const InfoPopover: Story = {
  render: () => (
    <>
      <style>{`
        ${basePopoverCSS}
        [popover] { max-width: 240px; }
      `}</style>
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <span style={{ color: "#e6e6e6", fontSize: "14px" }}>API key</span>
        <Popover>
          <PopoverTrigger>
            <button style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#1f1f1f", border: "1px solid #2a2a2a", color: "#7a7a7a", fontSize: "11px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              ?
            </button>
          </PopoverTrigger>
          <PopoverContent style={{ position: "fixed", top: "50%", left: "50%" }}>
            <p style={{ margin: 0, fontSize: "13px", color: "#7a7a7a", lineHeight: "1.5" }}>
              Your API key is used to authenticate requests. Keep it secret — treat it like a password.
            </p>
          </PopoverContent>
        </Popover>
      </div>
    </>
  ),
};
