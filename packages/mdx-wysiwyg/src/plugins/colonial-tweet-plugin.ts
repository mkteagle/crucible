import type { EditorPlugin, MediaAlign } from "../types";

const ALIGN_STYLES: Record<MediaAlign, string> = {
  full: "margin:16px auto;max-width:520px;",
  center: "margin:16px auto;max-width:480px;",
  left: "margin:16px 24px 16px 0;max-width:420px;float:left;clear:left;",
  right: "margin:16px 0 16px 24px;max-width:420px;float:right;clear:right;",
};

function getAlignStyle(align: MediaAlign): string {
  return ALIGN_STYLES[align] || ALIGN_STYLES.center;
}

function createColonialTweetEmbed(
  author: string,
  handle: string,
  body: string,
  date: string,
  align: MediaAlign = "center",
): HTMLDivElement {
  const wrapper = document.createElement("div");
  wrapper.contentEditable = "false";
  wrapper.dataset.colonialTweet = "true";
  wrapper.dataset.author = author;
  wrapper.dataset.handle = handle;
  wrapper.dataset.date = date;
  wrapper.dataset.body = body;
  wrapper.dataset.align = align;
  wrapper.style.cssText =
    getAlignStyle(align) +
    "border-radius:12px;overflow:hidden;" +
    "background:linear-gradient(168deg, #f5eed6 0%, #ece3c8 40%, #e8dbb8 100%);" +
    "border:2px solid #b8a474;" +
    "box-shadow:0 6px 28px rgba(120,100,60,0.22), 0 2px 6px rgba(120,100,60,0.12), inset 0 1px 0 rgba(255,255,255,0.6);" +
    "font-family:Georgia, 'Times New Roman', serif;cursor:default;user-select:none;position:relative;";

  // Decorative top banner
  const banner = document.createElement("div");
  banner.style.cssText =
    "height:6px;background:linear-gradient(90deg, #8b1a1a 0%, #c0504d 30%, #d4a853 50%, #c0504d 70%, #8b1a1a 100%);" +
    "border-bottom:1px solid #a08050;";
  wrapper.appendChild(banner);

  // Parchment texture
  const texture = document.createElement("div");
  texture.style.cssText =
    "position:absolute;inset:0;pointer-events:none;opacity:0.06;" +
    'background-image:url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'200\' height=\'200\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E");';
  wrapper.appendChild(texture);

  // Wax seal
  const seal = document.createElement("div");
  seal.style.cssText =
    "position:absolute;top:10px;right:12px;width:56px;height:56px;border-radius:50%;" +
    "background:radial-gradient(circle at 38% 32%, #d4605d 0%, #b83a3a 40%, #8b1a1a 70%, #5a0e0e 100%);" +
    "box-shadow:0 3px 12px rgba(100,20,20,0.4), inset 0 -2px 4px rgba(0,0,0,0.25), inset 0 2px 3px rgba(255,180,180,0.3);" +
    "display:flex;align-items:center;justify-content:center;z-index:1;" +
    "border:1.5px solid #6a1212;";
  seal.innerHTML =
    '<div style="text-align:center;line-height:1.1;">' +
    '<span style="color:#f5d0d0;font-size:8px;font-weight:bold;letter-spacing:0.12em;display:block;text-transform:uppercase;">Anno</span>' +
    '<span style="color:#fce0d8;font-size:12px;font-weight:bold;letter-spacing:0.05em;">1776</span>' +
    '</div>';
  wrapper.appendChild(seal);

  const inner = document.createElement("div");
  inner.style.cssText = "padding:20px 20px 12px;position:relative;";

  // Header
  const header = document.createElement("div");
  header.style.cssText = "display:flex;align-items:center;gap:10px;margin-bottom:12px;";

  const avatar = document.createElement("div");
  avatar.style.cssText =
    "width:48px;height:48px;border-radius:50%;flex-shrink:0;" +
    "background:linear-gradient(135deg, #e8dcc0 0%, #cdbf98 50%, #b8a87a 100%);" +
    "border:2px solid #a08850;display:flex;align-items:center;justify-content:center;" +
    "box-shadow:0 2px 6px rgba(100,80,40,0.2), inset 0 1px 2px rgba(255,255,255,0.3);";
  avatar.innerHTML =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6a5830" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M17 3l-12 17"/><path d="M5 20c0 0 1-2 2-3s2.5-1 3.5-1.5c1-.5 1.5-1.5 1.5-1.5"/>' +
    '<path d="M17 3c.5-.5 2-1 3 0s0 2.5-.5 3l-2 2"/>' +
    '<circle cx="5" cy="20" r="0.5" fill="#6a5830"/></svg>';

  const nameBlock = document.createElement("div");
  nameBlock.style.cssText = "flex:1;min-width:0;";

  // Editable author
  const authorEl = document.createElement("div");
  authorEl.dataset.field = "author";
  authorEl.contentEditable = "true";
  authorEl.style.cssText =
    "font-weight:bold;font-size:15px;color:#2a1e0a;outline:none;cursor:text;" +
    "border-bottom:1px dashed transparent;padding:1px 2px;border-radius:2px;" +
    "letter-spacing:0.02em;";
  authorEl.textContent = author || "";
  if (!author) {
    authorEl.dataset.placeholder = "Author name...";
    authorEl.style.cssText += "color:#b0a080;font-style:italic;";
  }

  // Editable handle
  const handleEl = document.createElement("div");
  handleEl.dataset.field = "handle";
  handleEl.contentEditable = "true";
  handleEl.style.cssText =
    "font-size:12px;color:#8a7d60;margin-top:-2px;outline:none;cursor:text;" +
    "border-bottom:1px dashed transparent;padding:1px 2px;border-radius:2px;";
  handleEl.textContent = handle || "";
  if (!handle) {
    handleEl.dataset.placeholder = "@handle";
    handleEl.style.cssText += "font-style:italic;";
  }

  nameBlock.appendChild(authorEl);
  nameBlock.appendChild(handleEl);

  // Crown verified badge
  const badge = document.createElement("span");
  badge.title = "Verified by the Crown (revoked)";
  badge.innerHTML =
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="#9a8a60">' +
    '<path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.3L12 14.1l-4.8 2.5.9-5.3L4.3 7.6l5.3-.8L12 2z"/>' +
    '<line x1="4" y1="4" x2="20" y2="20" stroke="#f5eed6" stroke-width="2.5"/>' +
    '<line x1="4" y1="4" x2="20" y2="20" stroke="#c0504d" stroke-width="1.5"/>' +
    '</svg>';

  header.appendChild(avatar);
  header.appendChild(nameBlock);
  header.appendChild(badge);

  // Editable body
  const bodyEl = document.createElement("div");
  bodyEl.dataset.field = "body";
  bodyEl.contentEditable = "true";
  bodyEl.style.cssText =
    "font-size:16px;line-height:1.6;color:#2a1e0a;white-space:pre-wrap;margin-bottom:14px;" +
    "letter-spacing:0.015em;outline:none;cursor:text;padding:6px 4px;border-radius:4px;" +
    "min-height:44px;border:1px dashed transparent;" +
    "font-family:Georgia, 'Times New Roman', 'Palatino Linotype', serif;";
  bodyEl.textContent = body || "";
  if (!body) {
    bodyEl.dataset.placeholder = "Hear ye, hear ye! Write thy proclamation here...";
    bodyEl.style.cssText += "color:#b0a080;font-style:italic;";
  }

  // Editable date
  const footer = document.createElement("div");
  footer.style.cssText =
    "display:flex;align-items:center;gap:4px;font-size:11.5px;color:#8a7d60;padding-top:10px;" +
    "border-top:1.5px solid #cdbf98;";

  const dateEl = document.createElement("span");
  dateEl.dataset.field = "date";
  dateEl.contentEditable = "true";
  dateEl.style.cssText =
    "outline:none;cursor:text;border-bottom:1px dashed transparent;padding:1px 2px;border-radius:2px;";
  dateEl.textContent = date || "";
  if (!date) {
    dateEl.dataset.placeholder = "Date...";
    dateEl.style.cssText += "font-style:italic;color:#b0a080;";
  }

  const via = document.createElement("span");
  via.style.cssText = "font-style:italic;";
  via.textContent = " \u00b7 posted via Carrier Pigeon";

  footer.appendChild(dateEl);
  footer.appendChild(via);

  // Engagement stats
  const engagement = document.createElement("div");
  engagement.style.cssText =
    "display:flex;align-items:center;gap:18px;font-size:12px;color:#7a6d50;padding:8px 0 4px;margin-top:4px;";
  engagement.innerHTML =
    '<span style="display:flex;align-items:center;gap:5px;" title="Town Criers (Retweets)">' +
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8b6914" stroke-width="1.8" stroke-linecap="round"><path d="M7 16l-4-4 4-4"/><path d="M3 12h14a4 4 0 010 8h-1"/></svg>' +
    '<strong style="color:#6a5520;">XIII</strong> town criers</span>' +
    '<span style="display:flex;align-items:center;gap:5px;" title="Hear, Hear! (Likes)">' +
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="#c0504d" stroke="#9e2a2a" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/></svg>' +
    '<strong style="color:#9e2a2a;">1,776</strong> hear, hear!</span>' +
    '<span style="display:flex;align-items:center;gap:5px;" title="Pamphlets (Shares)">' +
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6a5520" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>' +
    '<strong style="color:#6a5520;">LXXVI</strong> pamphlets</span>';

  // Bottom branding bar
  const branding = document.createElement("div");
  branding.style.cssText =
    "text-align:center;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#a09070;" +
    "padding:6px 0 8px;margin-top:6px;font-weight:bold;";
  branding.textContent = "\u2014 The Colonial Gazette \u2014";

  inner.appendChild(header);
  inner.appendChild(bodyEl);
  inner.appendChild(footer);
  inner.appendChild(engagement);
  inner.appendChild(branding);
  wrapper.appendChild(inner);

  // Add focus/blur handlers for placeholder behavior
  const editableFields = [authorEl, handleEl, bodyEl, dateEl];
  editableFields.forEach((field) => {
    field.addEventListener("focus", () => {
      field.style.borderBottomColor = "#c9b88a";
      if (field.dataset.placeholder && field.textContent === "") {
        field.textContent = "";
        field.style.color = field.dataset.field === "body" ? "#2e2516" : (
          field.dataset.field === "author" ? "#3a2e1a" : "#8a7d60"
        );
        field.style.fontStyle = "normal";
      }
    });
    field.addEventListener("blur", () => {
      field.style.borderBottomColor = "transparent";
      const text = field.textContent?.trim() ?? "";
      // Update the wrapper's data attributes
      if (field.dataset.field) {
        wrapper.dataset[field.dataset.field] = text;
      }
      if (!text && field.dataset.placeholder) {
        field.style.color = "#b0a080";
        field.style.fontStyle = "italic";
      }
    });
    field.addEventListener("input", () => {
      const text = field.textContent?.trim() ?? "";
      if (field.dataset.field) {
        wrapper.dataset[field.dataset.field] = text;
      }
    });
    // Prevent enter key from creating new divs in single-line fields
    if (field.dataset.field !== "body") {
      field.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
        }
      });
    }
    // Stop events from bubbling to the contentEditable=false wrapper
    field.addEventListener("mousedown", (e) => e.stopPropagation());
    field.addEventListener("click", (e) => e.stopPropagation());
  });

  return wrapper;
}

export const colonialTweetPlugin: EditorPlugin = {
  name: "colonial-tweet",

  commands: [
    { label: "Colonial Tweet", icon: "/icons/editor/quill.svg", action: "colonial-tweet" },
  ],

  onCommand(action, context) {
    if (action !== "colonial-tweet") return false;

    const root = context.editorRef.current;
    if (!root) return false;
    root.focus();

    const embed = createColonialTweetEmbed("", "", "", "");

    context.insertNodeAtSelection(embed);
    const spacer = document.createElement("p");
    spacer.innerHTML = "<br />";
    embed.insertAdjacentElement("afterend", spacer);
    context.serializeNow();
    return true;
  },

  serializeNode(el: HTMLElement): string | null {
    if (el.dataset.colonialTweet !== "true") return null;

    const author = el.dataset.author ?? "";
    const handle = el.dataset.handle ?? "";
    const date = el.dataset.date ?? "";
    const body = el.dataset.body ?? "";
    const align = el.dataset.align ?? "center";

    const attrs = [
      `author="${author}"`,
      handle ? `handle="${handle}"` : "",
      date ? `date="${date}"` : "",
      align !== "center" ? `align="${align}"` : "",
    ].filter(Boolean).join(" ");

    return `<ColonialTweet ${attrs}>\n${body}\n</ColonialTweet>`;
  },

  async hydrateNodes(root) {
    const embeds = Array.from(root.querySelectorAll("div[data-colonial-tweet]"));
    embeds.forEach((node) => {
      const el = node as HTMLElement;
      const author = el.dataset.author ?? "";
      const handle = el.dataset.handle ?? "";
      const date = el.dataset.date ?? "";
      const body = el.dataset.body ?? "";
      const align = (el.dataset.align as MediaAlign) ?? "center";

      const fresh = createColonialTweetEmbed(author, handle, body, date, align);
      el.replaceWith(fresh);
    });
  },
};
