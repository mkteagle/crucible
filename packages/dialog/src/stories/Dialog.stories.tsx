import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "../index";

const meta: Meta = {
  title: "Primitives/Dialog",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Style-agnostic Dialog primitive built on the native `<dialog>` element. Bring your own styles.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

const dialogStyle: React.CSSProperties = {
  padding: "2rem",
  borderRadius: "12px",
  border: "1px solid #2a2a2a",
  background: "#161616",
  color: "#e6e6e6",
  minWidth: "360px",
  maxWidth: "480px",
};

const overlayStyle = `
  dialog::backdrop {
    background: rgba(0,0,0,0.7);
    backdrop-filter: blur(4px);
  }
`;

export const Default: Story = {
  render: () => (
    <>
      <style>{overlayStyle}</style>
      <Dialog>
        <DialogTrigger>
          <button style={{ padding: "8px 16px", borderRadius: "8px", background: "#f97316", color: "#fff", border: "none", cursor: "pointer" }}>
            Open Dialog
          </button>
        </DialogTrigger>
        <DialogContent style={dialogStyle}>
          <h2 style={{ margin: "0 0 8px", fontSize: "18px", fontWeight: 600 }}>Dialog title</h2>
          <p style={{ margin: "0 0 24px", color: "#7a7a7a", fontSize: "14px" }}>
            This is a native <code>&lt;dialog&gt;</code> element with no imposed styles. Press Escape or click the backdrop to close.
          </p>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
            <DialogClose>
              <button style={{ padding: "8px 16px", borderRadius: "8px", background: "#1f1f1f", color: "#e6e6e6", border: "1px solid #2a2a2a", cursor: "pointer" }}>
                Cancel
              </button>
            </DialogClose>
            <DialogClose>
              <button style={{ padding: "8px 16px", borderRadius: "8px", background: "#f97316", color: "#fff", border: "none", cursor: "pointer" }}>
                Confirm
              </button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  ),
};

export const Destructive: Story = {
  render: () => (
    <>
      <style>{overlayStyle}</style>
      <Dialog>
        <DialogTrigger>
          <button style={{ padding: "8px 16px", borderRadius: "8px", background: "#ef4444", color: "#fff", border: "none", cursor: "pointer" }}>
            Delete item
          </button>
        </DialogTrigger>
        <DialogContent style={dialogStyle}>
          <h2 style={{ margin: "0 0 8px", fontSize: "18px", fontWeight: 600 }}>Delete item?</h2>
          <p style={{ margin: "0 0 24px", color: "#7a7a7a", fontSize: "14px" }}>
            This action cannot be undone. The item will be permanently removed.
          </p>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
            <DialogClose>
              <button style={{ padding: "8px 16px", borderRadius: "8px", background: "#1f1f1f", color: "#e6e6e6", border: "1px solid #2a2a2a", cursor: "pointer" }}>
                Cancel
              </button>
            </DialogClose>
            <DialogClose>
              <button style={{ padding: "8px 16px", borderRadius: "8px", background: "#ef4444", color: "#fff", border: "none", cursor: "pointer" }}>
                Delete
              </button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  ),
};

export const WithForm: Story = {
  render: () => (
    <>
      <style>{overlayStyle}</style>
      <Dialog>
        <DialogTrigger>
          <button style={{ padding: "8px 16px", borderRadius: "8px", background: "#1f1f1f", color: "#e6e6e6", border: "1px solid #2a2a2a", cursor: "pointer" }}>
            Edit profile
          </button>
        </DialogTrigger>
        <DialogContent style={dialogStyle}>
          <h2 style={{ margin: "0 0 20px", fontSize: "18px", fontWeight: 600 }}>Edit profile</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
            <div>
              <label style={{ display: "block", fontSize: "12px", color: "#7a7a7a", marginBottom: "4px" }}>Name</label>
              <input defaultValue="Jane Smith" style={{ width: "100%", padding: "8px 12px", borderRadius: "8px", background: "#0d0d0d", border: "1px solid #2a2a2a", color: "#e6e6e6", fontSize: "14px", boxSizing: "border-box" }} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "12px", color: "#7a7a7a", marginBottom: "4px" }}>Email</label>
              <input defaultValue="jane@example.com" style={{ width: "100%", padding: "8px 12px", borderRadius: "8px", background: "#0d0d0d", border: "1px solid #2a2a2a", color: "#e6e6e6", fontSize: "14px", boxSizing: "border-box" }} />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
            <DialogClose>
              <button style={{ padding: "8px 16px", borderRadius: "8px", background: "#1f1f1f", color: "#e6e6e6", border: "1px solid #2a2a2a", cursor: "pointer" }}>
                Cancel
              </button>
            </DialogClose>
            <DialogClose>
              <button style={{ padding: "8px 16px", borderRadius: "8px", background: "#f97316", color: "#fff", border: "none", cursor: "pointer" }}>
                Save changes
              </button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  ),
};
