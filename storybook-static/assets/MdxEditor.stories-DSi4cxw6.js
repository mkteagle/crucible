import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-CR-0IFbH.js";import{u as ke,B as je,I as ve,S as Ce,L as Te,H as Ee,a as Ae,Q as De,C as ze}from"./editor-DRZjIeto.js";import"./preload-helper-Dp1pzeXC.js";const T=[{label:"Audio",insert:`<Audio src="" title=""/>
`},{label:"Video",insert:`<Video src="" title=""/>
`},{label:"Embed",insert:`<Embed src="" title=""/>
`},{label:"Image",insert:`![Caption](url)
`},{label:"Link",insert:`[Text](url)
`},{label:"Link Card",insert:`<LinkCard href="">Title</LinkCard>
`},{label:"Bulleted List",insert:`- Item one
- Item two
- Item three
`},{label:"Numbered List",insert:`1. First item
2. Second item
3. Third item
`},{label:"Table",insert:`| Column | Column |
| --- | --- |
| Value | Value |
`},{label:"Quote",insert:`> Quote
`}];function G(n,a){const d=document.createElement("div"),z=window.getComputedStyle(n);["boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing"].forEach(m=>{d.style.setProperty(m.replace(/([A-Z])/g,"-$1").toLowerCase(),z[m])}),d.style.position="absolute",d.style.visibility="hidden",d.style.whiteSpace="pre-wrap",d.style.wordWrap="break-word",d.style.top="0",d.style.left="-9999px";const I=n.value.substring(0,a);d.textContent=I;const x=document.createElement("span");x.textContent=n.value.substring(a)||".",d.appendChild(x),document.body.appendChild(d);const y=x.getBoundingClientRect(),p=d.getBoundingClientRect();return document.body.removeChild(d),{top:y.top-p.top,left:y.left-p.left}}function j({value:n,onChange:a,emojiPicker:d,classNames:z,className:W,style:I}){const x=ke(),y=d??x.slots.emojiPicker,p=z??x.classNames,m=u.useRef(null),[S,w]=u.useState(!1),[H,ce]=u.useState({top:0,left:0}),[$,O]=u.useState(0),[U,le]=u.useState({top:0,left:0}),[de,N]=u.useState(!1),[k,ue]=u.useState({start:0,end:0}),[v,h]=u.useState([]),[M,g]=u.useState([]),Z=e=>{const t=m.current;if(!t)return;let s=t.selectionStart;const o=t.selectionEnd;S&&s>0&&n[s-1]==="/"&&(s-=1);const i=`${n.slice(0,s)}${e}${n.slice(o)}`;h(c=>[...c,n]),g([]),a(i);const l=s+e.length;requestAnimationFrame(()=>{t.focus(),t.setSelectionRange(l,l)})},X=(e,t)=>{const s=m.current;if(!s)return;const o=s.selectionStart,i=s.selectionEnd;if(o===i)return;const l=n.slice(o,i),c=`${n.slice(0,o)}${e}${l}${t}${n.slice(i)}`;h(f=>[...f,n]),g([]),a(c),requestAnimationFrame(()=>{s.focus(),s.setSelectionRange(o+e.length,i+e.length)})},me=e=>e?/[A-Za-z0-9]/.test(e):!1,Q=(e,t,s)=>{const o=s?e-1:e+t.length,i=n[o];return!me(i)},K=(e,t)=>{const{start:s,end:o}=k;if(s===o)return null;let i=-1;for(let c=s-1;c>=Math.max(0,s-t);c-=1){const f=c-e.length+1;if(f>=0&&n.slice(f,c+1)===e&&Q(f,e,!0)){i=f;break}}let l=-1;for(let c=o;c<=Math.min(n.length-e.length,o+t);c+=1)if(n.slice(c,c+e.length)===e&&Q(c,e,!1)){l=c;break}return i===-1||l===-1?null:{beforeStart:i,afterStart:l}},P=e=>{const t=m.current;if(!t)return;const s=t.selectionStart,o=t.selectionEnd;if(s===o)return;const i=e==="**"||e==="_"?3:e.length,l=K(e,i);if(!!l){const f=l.beforeStart,q=l.afterStart,C=`${n.slice(0,f)}${n.slice(s,o)}${n.slice(q+e.length)}`;h(L=>[...L,n]),g([]),a(C),requestAnimationFrame(()=>{t.focus(),t.setSelectionRange(f,o-e.length)});return}X(e,e)},pe=()=>{const e=m.current;if(!e)return;const t=e.selectionStart,s=e.selectionEnd;if(t===s)return;const o=t-1;if(o>=0&&n[o]==="["&&n[s]==="]"&&n[s+1]==="("){const i=n.indexOf(")",s+2);if(i!==-1){const l=`${n.slice(0,o)}${n.slice(t,s)}${n.slice(i+1)}`;h(c=>[...c,n]),g([]),a(l),requestAnimationFrame(()=>{e.focus(),e.setSelectionRange(o,s-1)});return}}X("[","](url)")},F=e=>{const t=m.current;if(!t)return;const s=t.selectionStart,o=t.selectionEnd;if(s===o)return;const i=n.slice(0,s),l=n.slice(s,o),c=n.slice(o),f=l.split(`
`),q=f.every(b=>b.startsWith(e)),C=f.map(b=>q?b.slice(e.length):`${e}${b}`),L=`${i}${C.join(`
`)}${c}`;h(b=>[...b,n]),g([]),a(L),requestAnimationFrame(()=>{t.focus(),t.setSelectionRange(s,s+C.join(`
`).length)})},R=e=>{const{start:t,end:s}=k;return t===s?!1:n.slice(t,s).split(`
`).every(o=>o.startsWith(e))},fe=()=>{const e=m.current;if(!e)return;const t=e.selectionStart,s=e.selectionEnd;if(t===s)return;const i=n.slice(t,s).replace(/\*\*(.*?)\*\*/g,"$1").replace(/__(.*?)__/g,"$1").replace(/_(.*?)_/g,"$1").replace(/`(.*?)`/g,"$1").replace(/~~(.*?)~~/g,"$1").replace(/!\[(.*?)\]\((.*?)\)/g,"$1").replace(/\[(.*?)\]\((.*?)\)/g,"$1").replace(/^#{1,6}\s+/gm,"").replace(/^>\s+/gm,"").replace(/^-\s+/gm,"").replace(/^\d+\.\s+/gm,""),l=`${n.slice(0,t)}${i}${n.slice(s)}`;h(c=>[...c,n]),g([]),a(l),requestAnimationFrame(()=>{e.focus(),e.setSelectionRange(t,t+i.length)})},he=e=>{e!==n&&(h(t=>[...t,n]),g([]),a(e))},ge=()=>{if(!v.length)return;const e=v[v.length-1];h(t=>t.slice(0,-1)),g(t=>[n,...t]),a(e)},xe=()=>{if(!M.length)return;const e=M[0];g(t=>t.slice(1)),h(t=>[...t,n]),a(e)},be=u.useCallback(e=>{const t=m.current;if(!t)return;const s=t.selectionStart,o=t.selectionEnd,i=`${n.slice(0,s)}${e}${n.slice(o)}`;h(c=>[...c,n]),g([]),a(i);const l=s+e.length;requestAnimationFrame(()=>{t.focus(),t.setSelectionRange(l,l)})},[n,a]),ye=e=>{if(e.key==="/")requestAnimationFrame(()=>{const t=m.current;if(!t)return;const s=G(t,t.selectionStart);ce(s),w(!0),O(0)});else if(S&&(e.key==="ArrowDown"||e.key==="ArrowUp")){e.preventDefault();const t=e.key==="ArrowDown"?1:-1;O(s=>(s+t+T.length)%T.length)}else if(S&&e.key==="Enter"){e.preventDefault();const t=T[$];t&&(Z(t.insert),w(!1))}else e.key==="Backspace"||e.key==="Delete"?S&&w(!1):e.key==="Escape"&&(w(!1),N(!1))},Y=()=>{const e=m.current;if(!e)return;const t=e.selectionStart,s=e.selectionEnd;if(t===s){N(!1);return}const o=G(e,s);le(o),ue({start:t,end:s}),N(!0)},V=e=>{const{start:t,end:s}=k;if(t===s)return!1;const o=e==="**"||e==="_"?3:e.length;return!!K(e,o)},Se=()=>{const{start:e,end:t}=k,s=e-1;return e===t||s<0||n[s]!=="["||n[t]!=="]"||n[t+1]!=="("?!1:n.indexOf(")",t+2)!==-1},we=u.useMemo(()=>[{label:"Bold",icon:r.jsx(je,{}),onClick:()=>P("**"),active:V("**")},{label:"Italic",icon:r.jsx(ve,{}),onClick:()=>P("_"),active:V("_")},{label:"Strikethrough",icon:r.jsx(Ce,{}),onClick:()=>P("~~"),active:V("~~")},{label:"Link",icon:r.jsx(Te,{}),onClick:()=>pe(),active:Se()},{label:"H2",icon:r.jsx(Ee,{}),onClick:()=>F("## "),active:R("## ")},{label:"H3",icon:r.jsx(Ae,{}),onClick:()=>F("### "),active:R("### ")},{label:"Quote",icon:r.jsx(De,{}),onClick:()=>F("> "),active:R("> ")},{label:"Clear Formatting",icon:r.jsx(ze,{}),onClick:()=>fe(),active:!1}],[n,k]);return r.jsxs("div",{className:W||(p==null?void 0:p.root)||"relative",style:I,children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("p",{className:"text-xs font-medium",style:{color:"var(--mdx-editor-text-muted, var(--slate, #64748b))"},children:"Type / to insert blocks"}),y?r.jsx(y,{onSelect:be}):null]}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("button",{type:"button",className:"px-2 py-1 rounded-md text-xs font-medium",style:{background:"var(--mdx-editor-bg-secondary, var(--mist, #eef2f5))",color:"var(--mdx-editor-text-secondary, var(--storm, #4a5568))"},onClick:ge,disabled:!v.length,children:"Undo"}),r.jsx("button",{type:"button",className:"px-2 py-1 rounded-md text-xs font-medium",style:{background:"var(--mdx-editor-bg-secondary, var(--mist, #eef2f5))",color:"var(--mdx-editor-text-secondary, var(--storm, #4a5568))"},onClick:xe,disabled:!M.length,children:"Redo"})]})]}),r.jsx("textarea",{ref:m,value:n,onChange:e=>he(e.target.value),onKeyDown:ye,onMouseUp:Y,onKeyUp:Y,className:"w-full p-4 rounded-xl text-sm leading-relaxed",style:{background:"var(--mdx-editor-bg-secondary, var(--mist, #eef2f5))",border:"1px solid var(--mdx-editor-border, var(--cloud, #dde4ea))",minHeight:"420px"}}),S?r.jsx("div",{className:(p==null?void 0:p.slashMenu)||"absolute z-20 w-56 rounded-xl overflow-hidden",style:{top:H.top+32,left:H.left+12,background:"var(--mdx-editor-bg-primary, var(--pearl, #f8f6f3))",boxShadow:"var(--mdx-editor-shadow, var(--shadow-lg, 0 10px 15px -3px rgba(0,0,0,.1)))",border:"1px solid var(--mdx-editor-border, var(--cloud, #dde4ea))"},children:T.map((e,t)=>r.jsx("button",{className:(p==null?void 0:p.slashMenuItem)||"w-full text-left px-4 py-2 text-sm transition-colors",style:{color:"var(--mdx-editor-text-primary, var(--abyss, #1a2830))",background:t===$?"var(--mdx-editor-bg-secondary, var(--mist, #eef2f5))":"transparent"},onMouseEnter:s=>s.currentTarget.style.background="var(--mdx-editor-bg-secondary, var(--mist, #eef2f5))",onMouseLeave:s=>s.currentTarget.style.background=t===$?"var(--mdx-editor-bg-secondary, var(--mist, #eef2f5))":"transparent",onClick:()=>{Z(e.insert),w(!1)},children:e.label},e.label))}):null,de?r.jsx("div",{className:"absolute z-20 flex items-center gap-2 px-2 py-1 rounded-lg",style:{top:U.top-44,left:U.left,background:"var(--mdx-editor-bg-primary, var(--pearl, #f8f6f3))",boxShadow:"var(--mdx-editor-shadow, var(--shadow-lg, 0 10px 15px -3px rgba(0,0,0,.1)))",border:"1px solid var(--mdx-editor-border, var(--cloud, #dde4ea))"},children:we.map(e=>r.jsx("button",{className:"text-xs font-medium px-2 py-1 rounded-md transition-colors",style:{color:"var(--mdx-editor-text-secondary, var(--storm, #4a5568))",background:e.active?"var(--mdx-editor-primary-light, var(--ocean-light, rgba(37,99,235,.1)))":"transparent",border:e.active?"1px solid var(--mdx-editor-primary, var(--ocean, #2563eb))":"1px solid transparent"},"aria-pressed":e.active,onClick:e.onClick,title:e.label,children:e.icon},e.label))}):null]})}j.__docgenInfo={description:"",methods:[],displayName:"MdxEditor",props:{value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},emojiPicker:{required:!1,tsType:{name:"ComponentType",elements:[{name:"EmojiPickerSlotProps"}],raw:"ComponentType<EmojiPickerSlotProps>"},description:""},classNames:{required:!1,tsType:{name:"EditorClassNames"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const _={"--mdx-editor-bg-primary":"#ffffff","--mdx-editor-bg-secondary":"#f5f5f5","--mdx-editor-toolbar-bg":"#fafafa","--mdx-editor-border":"rgba(0,0,0,0.08)","--mdx-editor-heading-color":"#111111","--mdx-editor-text-secondary":"#333333","--mdx-editor-text-muted":"#999999","--mdx-editor-primary":"#ea580c","--mdx-editor-shadow-sm":"0 1px 3px rgba(0,0,0,0.06)"};function Ie(n){return n.trim().split(/\s+/).filter(Boolean).length}function $e(n){return n.split(`
`).length}function B({badge:n,value:a,children:d}){return r.jsx("div",{className:"min-h-screen flex items-start justify-center px-6 py-12 bg-[#f5f5f5] font-sans",children:r.jsxs("div",{className:"w-full max-w-[760px] rounded-xl border border-black/[0.08] bg-white shadow-sm overflow-hidden",children:[r.jsxs("div",{className:"px-4 py-2.5 border-b border-black/[0.07] bg-gray-50 flex items-center gap-2",children:[r.jsx("span",{className:"text-[10.5px] uppercase tracking-[0.1em] font-semibold font-mono text-gray-400",children:"MDX"}),r.jsx("span",{className:"w-[3px] h-[3px] rounded-full bg-black/10 shrink-0"}),r.jsx("span",{className:"text-[10.5px] font-mono text-orange-500",children:n}),r.jsx("span",{className:"ml-auto text-[10.5px] font-mono text-gray-300",children:"@crucible-ui/mdx"})]}),r.jsx("div",{children:d}),r.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-t border-black/[0.06] bg-gray-50",children:[r.jsxs("div",{className:"flex items-center gap-4 text-[10.5px] font-mono text-gray-400",children:[r.jsxs("span",{children:["words ",r.jsx("span",{className:"text-gray-500",children:Ie(a)})]}),r.jsxs("span",{children:["lines ",r.jsx("span",{className:"text-gray-500",children:$e(a)})]}),r.jsxs("span",{children:["chars ",r.jsx("span",{className:"text-gray-500",children:a.length})]})]}),r.jsxs("div",{className:"flex items-center gap-2 text-[10px] text-gray-300 font-mono",children:[r.jsx("span",{children:"/ commands"}),r.jsx("span",{children:"·"}),r.jsx("span",{children:"⌘B bold"}),r.jsx("span",{children:"·"}),r.jsx("span",{children:"⌘Z undo"})]})]})]})})}const Re={title:"Editor/MdxEditor",component:j,parameters:{layout:"fullscreen",docs:{description:{component:"A raw MDX textarea editor with slash commands, inline formatting toolbar, undo/redo, and selection-based formatting. Type `/` for block commands, or select text for inline formatting. Ideal when you want direct markdown control rather than a WYSIWYG surface."}}},tags:["autodocs"]},E={parameters:{docs:{description:{story:"Blank editor. Type `/` to open the slash command menu, or select text for the inline formatting toolbar."}}},render:()=>{const[n,a]=u.useState("");return r.jsx(B,{badge:"empty state",value:n,children:r.jsx(j,{value:n,onChange:a,style:{minHeight:420,..._}})})}},A={parameters:{docs:{description:{story:"Technical writing with code blocks, inline code, and MDX component syntax."}}},render:()=>{const[n,a]=u.useState(`## Building a type-safe API client

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
`);return r.jsx(B,{badge:"code-first",value:n,children:r.jsx(j,{value:n,onChange:a,style:{minHeight:420,..._}})})}},D={parameters:{docs:{description:{story:"Meeting notes — decisions, action items, and open questions."}}},render:()=>{const[n,a]=u.useState(`## Design sync — March 18

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
`);return r.jsx(B,{badge:"meeting notes",value:n,children:r.jsx(j,{value:n,onChange:a,style:{minHeight:420,..._}})})}};var J,ee,te;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Blank editor. Type \`/\` to open the slash command menu, or select text for the inline formatting toolbar."
      }
    }
  },
  render: () => {
    const [value, setValue] = useState("");
    return <EditorShell badge="empty state" value={value}>
        <MdxEditor value={value} onChange={setValue} style={{
        minHeight: 420,
        ...lightVars
      }} />
      </EditorShell>;
  }
}`,...(te=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,se,re;A.parameters={...A.parameters,docs:{...(ne=A.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Technical writing with code blocks, inline code, and MDX component syntax."
      }
    }
  },
  render: () => {
    const [value, setValue] = useState(\`## Building a type-safe API client

The pattern below gives you full end-to-end type safety from your Zod schema to the call site, with zero generated code.

### Define your schema once

\\\`\\\`\\\`ts
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
\\\`\\\`\\\`

### The client wrapper

\\\`\\\`\\\`ts
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
\\\`\\\`\\\`
\`);
    return <EditorShell badge="code-first" value={value}>
        <MdxEditor value={value} onChange={setValue} style={{
        minHeight: 420,
        ...lightVars
      }} />
      </EditorShell>;
  }
}`,...(re=(se=A.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var oe,ae,ie;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Meeting notes — decisions, action items, and open questions."
      }
    }
  },
  render: () => {
    const [value, setValue] = useState(\`## Design sync — March 18

**Attendees:** Sarah, Marcus, Priya, Devon
**Duration:** 45 min

---

### Decisions

1. New onboarding flow ships with the March 24 release — no slip
2. Drop the AI-generated avatars; use initials fallback with deterministic color
3. Sidebar redesign is gated behind \\\`sidebar_v2\\\` feature flag for the first two weeks

### Action items

- [ ] **Marcus** — Finalize component specs, share in Figma by EOD Thursday
- [ ] **Sarah** — Send Figma link to the iOS team + schedule handoff call
- [ ] **Priya** — Update the flag config in staging and verify rollout targeting
- [ ] **Devon** — Draft usability session recruitment email

### Open questions

> Should the new sidebar be opt-in or opt-out for existing users?
> Lean toward opt-out (new is default) but need a data point on how many users have customized their current sidebar.
\`);
    return <EditorShell badge="meeting notes" value={value}>
        <MdxEditor value={value} onChange={setValue} style={{
        minHeight: 420,
        ...lightVars
      }} />
      </EditorShell>;
  }
}`,...(ie=(ae=D.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};const Ve=["Default","CodeFirst","Notes"];export{A as CodeFirst,E as Default,D as Notes,Ve as __namedExportsOrder,Re as default};
