import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l,R as L}from"./iframe-CR-0IFbH.js";import"./preload-helper-Dp1pzeXC.js";const M=l.createContext(null);function j(){const t=l.useContext(M);if(!t)throw new Error("useDialogContext must be used within <Dialog>");return t}function x({children:t,defaultOpen:s=!1,onOpenChange:n}){const c=l.useRef(null),[o,i]=l.useState(s),a=l.useCallback(()=>{var d;(d=c.current)==null||d.showModal(),i(!0),n==null||n(!0)},[n]),r=l.useCallback(()=>{var d;(d=c.current)==null||d.close(),i(!1),n==null||n(!1)},[n]);return e.jsx(M.Provider,{value:{dialogRef:c,isOpen:o,open:a,close:r},children:t})}x.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};function m({children:t}){const{open:s}=j();return L.cloneElement(t,{onClick:s})}m.__docgenInfo={description:"",methods:[],displayName:"DialogTrigger",props:{children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement<{ onClick?: React.MouseEventHandler }>",elements:[{name:"signature",type:"object",raw:"{ onClick?: React.MouseEventHandler }",signature:{properties:[{key:"onClick",value:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler",required:!1}}]}}]},description:""}}};function u({children:t,closeOnBackdrop:s=!0,onClick:n,...c}){const{dialogRef:o,close:i}=j();l.useEffect(()=>{const r=o.current;if(!r)return;const d=()=>i();return r.addEventListener("close",d),()=>r.removeEventListener("close",d)},[o,i]);function a(r){s&&r.target===o.current&&i(),n==null||n(r)}return e.jsx("dialog",{ref:o,onClick:a,...c,children:t})}u.__docgenInfo={description:"",methods:[],displayName:"DialogContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},closeOnBackdrop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};function p({children:t}){const{close:s}=j();return L.cloneElement(t,{onClick:s})}p.__docgenInfo={description:"",methods:[],displayName:"DialogClose",props:{children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement<{ onClick?: React.MouseEventHandler }>",elements:[{name:"signature",type:"object",raw:"{ onClick?: React.MouseEventHandler }",signature:{properties:[{key:"onClick",value:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler",required:!1}}]}}]},description:""}}};const v=`
  dialog {
    padding: 0;
    margin: auto;
    border: none;
    border-radius: 12px;
    background: #ffffff;
    color: #111111;
    box-shadow:
      0 0 0 1px rgba(0,0,0,0.06),
      0 8px 32px rgba(0,0,0,0.12),
      0 2px 8px rgba(0,0,0,0.06);
    font-family: system-ui, -apple-system, sans-serif;
    min-width: 380px;
    max-width: 520px;
    width: calc(100vw - 48px);
    animation: dialog-enter 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  @keyframes dialog-enter {
    from { opacity: 0; transform: scale(0.97) translateY(-6px); }
    to   { opacity: 1; transform: scale(1) translateY(0); }
  }

  dialog::backdrop {
    background: rgba(0,0,0,0.3);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    animation: backdrop-enter 0.2s ease;
  }

  @keyframes backdrop-enter {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`;function g({children:t}){return e.jsx("label",{className:"block text-[11px] font-semibold text-gray-400 uppercase tracking-[0.09em] mb-[7px] font-mono",children:t})}function B(t){return e.jsx("input",{className:"w-full px-3 py-[9px] rounded-[9px] bg-white border border-black/[0.1] text-gray-800 text-[13.5px] box-border font-sans transition-[border-color,box-shadow] appearance-none focus:outline-none focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(249,115,22,0.08)] placeholder:text-gray-300",...t})}function k(t){return e.jsx("select",{className:"w-full px-3 py-[9px] rounded-[9px] bg-white border border-black/[0.1] text-gray-800 text-[13.5px] box-border font-sans transition-[border-color,box-shadow] appearance-none focus:outline-none focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(249,115,22,0.08)]",...t})}function H(t){return e.jsx("textarea",{className:"w-full px-3 py-[9px] rounded-[9px] bg-white border border-black/[0.1] text-gray-800 text-[13.5px] box-border font-sans transition-[border-color,box-shadow] appearance-none focus:outline-none focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(249,115,22,0.08)] placeholder:text-gray-300 resize-none",...t})}const N="inline-flex items-center gap-1.5 px-[17px] py-[8.5px] rounded-[9px] text-[13.5px] font-medium cursor-pointer border border-black/[0.1] font-sans tracking-[-0.01em] transition-[background,color] active:scale-[0.97] bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700",A="inline-flex items-center gap-1.5 px-[17px] py-[8.5px] rounded-[9px] text-[13.5px] font-medium cursor-pointer border-none font-sans tracking-[-0.01em] transition-[opacity,box-shadow] active:scale-[0.97] bg-orange-500 text-white shadow-[0_2px_10px_rgba(249,115,22,0.22)] hover:opacity-[0.88]",V="inline-flex items-center gap-1.5 px-[17px] py-[8.5px] rounded-[9px] text-[13.5px] font-medium cursor-pointer border-none font-sans tracking-[-0.01em] transition-[opacity,box-shadow] active:scale-[0.97] bg-red-500 text-white shadow-[0_2px_10px_rgba(239,68,68,0.2)] hover:opacity-[0.88]",W={title:"Primitives/Dialog",parameters:{layout:"fullscreen",docs:{description:{component:"Style-agnostic Dialog primitive built on the native `<dialog>` element. Keyboard-accessible, focus-trapped, `Escape`-dismissible, backdrop-clickable — all for free from the browser."}}},tags:["autodocs"]},b={parameters:{docs:{description:{story:"Standard confirmation dialog. Press Escape or click the backdrop to dismiss."}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:v}),e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans",children:e.jsxs(x,{children:[e.jsx(m,{children:e.jsx("button",{className:"inline-flex items-center gap-[7px] px-5 py-[9px] rounded-[10px] text-[13.5px] font-medium cursor-pointer tracking-[-0.01em] transition-[opacity,transform] hover:opacity-[0.88] active:scale-[0.97] bg-orange-500 text-white shadow-[0_4px_16px_rgba(249,115,22,0.28)] border-none whitespace-nowrap",children:"Publish changes"})}),e.jsxs(u,{children:[e.jsx("div",{className:"px-7 pt-7 flex items-center gap-3",children:e.jsx("div",{className:"w-10 h-10 rounded-[10px] flex items-center justify-center text-[18px] shrink-0 border border-orange-500/20 bg-orange-500/[0.08]",children:"↑"})}),e.jsxs("div",{className:"px-7 pt-4",children:[e.jsx("h2",{className:"m-0 mb-[7px] text-[17px] font-semibold text-gray-900 tracking-[-0.025em] leading-[1.25]",children:"Publish changes"}),e.jsx("p",{className:"m-0 text-[13.5px] text-gray-500 leading-[1.6]",children:"Your changes will go live immediately and become visible to all users on the platform."})]}),e.jsxs("div",{className:"px-7 pt-6 pb-6 flex justify-end gap-2",children:[e.jsx(p,{children:e.jsx("button",{className:N,children:"Cancel"})}),e.jsx(p,{children:e.jsx("button",{className:A,children:"Publish now"})})]})]})]})})]})},h={parameters:{docs:{description:{story:"Destructive confirmation with a danger-state CTA. Cancel is the visually dominant safe default."}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:v}),e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans",children:e.jsxs(x,{children:[e.jsx(m,{children:e.jsx("button",{className:"inline-flex items-center gap-[7px] px-5 py-[9px] rounded-[10px] text-[13.5px] font-medium cursor-pointer tracking-[-0.01em] transition-[opacity,transform] hover:opacity-[0.88] active:scale-[0.97] bg-red-50 text-red-600 border border-red-200 whitespace-nowrap",children:"Delete project"})}),e.jsxs(u,{children:[e.jsx("div",{className:"px-7 pt-7 flex items-center gap-3",children:e.jsx("div",{className:"w-10 h-10 rounded-[10px] flex items-center justify-center text-[18px] shrink-0 border border-red-200 bg-red-50",children:"⚠"})}),e.jsxs("div",{className:"px-7 pt-4",children:[e.jsx("h2",{className:"m-0 mb-[7px] text-[17px] font-semibold text-red-600 tracking-[-0.025em] leading-[1.25]",children:'Delete "Q4 Sprint"?'}),e.jsxs("p",{className:"m-0 text-[13.5px] text-gray-500 leading-[1.6]",children:["This will permanently delete the project and all"," ",e.jsx("strong",{className:"text-gray-700 font-medium",children:"47 tasks"})," ","inside it. There is no undo."]})]}),e.jsxs("div",{className:"mx-7 my-5 px-4 py-[14px] rounded-[10px] bg-red-50 border border-red-100",children:[e.jsx("div",{className:"text-[10.5px] font-semibold uppercase tracking-[0.1em] text-red-400 font-mono mb-1.5",children:"Irreversible action"}),e.jsx("div",{className:"text-[13px] text-gray-500 leading-[1.55]",children:"Deleted projects cannot be restored. All associated lists, tasks, and activity history will be permanently removed from your workspace."})]}),e.jsxs("div",{className:"px-7 pb-6 flex justify-end gap-2",children:[e.jsx(p,{children:e.jsx("button",{className:N,children:"Keep project"})}),e.jsx(p,{children:e.jsx("button",{className:V,children:"Delete forever"})})]})]})]})})]})},f={parameters:{docs:{description:{story:"Dialog with a form body. Focus is trapped inside; Tab cycles through fields. A common pattern for create/edit flows."}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:v}),e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans",children:e.jsxs(x,{children:[e.jsx(m,{children:e.jsx("button",{className:"inline-flex items-center gap-[7px] px-5 py-[9px] rounded-[10px] text-[13.5px] font-medium cursor-pointer tracking-[-0.01em] transition-[opacity,transform] hover:opacity-[0.88] active:scale-[0.97] bg-white text-gray-700 border border-black/[0.1] whitespace-nowrap",children:"+ New project"})}),e.jsxs(u,{children:[e.jsxs("div",{className:"px-7 pt-7",children:[e.jsx("h2",{className:"m-0 mb-[7px] text-[17px] font-semibold text-gray-900 tracking-[-0.025em] leading-[1.25]",children:"Create project"}),e.jsx("p",{className:"m-0 text-[13.5px] text-gray-500 leading-[1.6]",children:"Projects group your lists and tasks into a focused workspace."})]}),e.jsxs("div",{className:"px-7 py-5",children:[e.jsx("div",{className:"h-px bg-black/[0.06] mb-5"}),e.jsxs("div",{className:"mb-4",children:[e.jsx(g,{children:"Project name"}),e.jsx(B,{autoFocus:!0,placeholder:"e.g. Q2 Roadmap"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[e.jsxs("div",{children:[e.jsx(g,{children:"Color"}),e.jsxs(k,{defaultValue:"orange",children:[e.jsx("option",{value:"orange",children:"Orange"}),e.jsx("option",{value:"cyan",children:"Cyan"}),e.jsx("option",{value:"emerald",children:"Emerald"}),e.jsx("option",{value:"violet",children:"Violet"}),e.jsx("option",{value:"rose",children:"Rose"})]})]}),e.jsxs("div",{children:[e.jsx(g,{children:"Visibility"}),e.jsxs(k,{defaultValue:"private",children:[e.jsx("option",{value:"private",children:"Private"}),e.jsx("option",{value:"team",children:"Team"}),e.jsx("option",{value:"public",children:"Public"})]})]})]}),e.jsxs("div",{children:[e.jsx(g,{children:"Description"}),e.jsx(H,{rows:3,placeholder:"What's this project about?"}),e.jsx("div",{className:"mt-[5px] text-[11.5px] text-gray-400 leading-[1.5]",children:"Optional — shown to collaborators in the project overview."})]})]}),e.jsxs("div",{className:"px-7 pb-6 flex justify-end gap-2",children:[e.jsx(p,{children:e.jsx("button",{className:N,children:"Cancel"})}),e.jsx(p,{children:e.jsx("button",{className:A,children:"Create project"})})]})]})]})})]})},y={parameters:{docs:{description:{story:"Search-style command palette built on the Dialog primitive. Stateful — results filter in real time as you type."}}},render:()=>{const[t,s]=l.useState(""),[n,c]=l.useState(0),o=[{icon:"+",label:"New task",shortcut:"N"},{icon:"◫",label:"New project",shortcut:"P"},{icon:"≡",label:"New list",shortcut:"L"},{icon:"⌕",label:"Search tasks…",shortcut:"/"},{icon:"◑",label:"Today",shortcut:"T"},{icon:"□",label:"Inbox",shortcut:"I"},{icon:"⚙",label:"Open settings",shortcut:","},{icon:"?",label:"Help & shortcuts",shortcut:"?"}],i=t?o.filter(a=>a.label.toLowerCase().includes(t.toLowerCase())):o;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`${v} dialog { min-width: 460px; }`}),e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans",children:e.jsxs(x,{children:[e.jsx(m,{children:e.jsxs("button",{className:"inline-flex items-center gap-2.5 px-5 py-[9px] rounded-[10px] text-[13.5px] font-medium cursor-pointer tracking-[-0.01em] transition-[opacity,transform] hover:opacity-[0.88] active:scale-[0.97] bg-white text-gray-400 border border-black/[0.1] whitespace-nowrap",children:[e.jsx("span",{className:"text-[14px]",children:"⌕"}),e.jsx("span",{children:"Search commands…"}),e.jsx("span",{className:"ml-2 bg-gray-100 border border-black/[0.08] rounded-[6px] px-[7px] py-[2px] text-[11px] text-gray-400 font-mono",children:"⌘K"})]})}),e.jsxs(u,{children:[e.jsxs("div",{className:"flex items-center gap-3 px-5 py-4 border-b border-black/[0.06]",children:[e.jsx("span",{className:"text-gray-400 text-[16px] shrink-0 leading-none",children:"⌕"}),e.jsx("input",{autoFocus:!0,className:"flex-1 bg-transparent border-none text-gray-800 text-[14.5px] outline-none font-sans tracking-[-0.01em] placeholder:text-gray-300",placeholder:"Search commands…",value:t,onChange:a=>{s(a.target.value),c(0)}}),t&&e.jsx("button",{onClick:()=>s(""),className:"bg-transparent border-none text-gray-400 cursor-pointer text-[14px] px-[2px] leading-none hover:text-gray-600",children:"✕"})]}),i.length===0?e.jsxs("div",{className:"py-8 px-5 text-center text-gray-400 text-[13px]",children:[e.jsx("span",{className:"block text-[28px] mb-2.5 opacity-30",children:"⌕"}),"No commands match ",e.jsxs("strong",{className:"text-gray-500 font-medium",children:['"',t,'"']})]}):e.jsxs("div",{children:[!t&&e.jsx("div",{className:"text-[10px] font-semibold text-gray-400 uppercase tracking-[0.12em] font-mono px-4 pt-3 pb-1.5",children:"Commands"}),e.jsx("div",{className:"p-1.5",children:i.map((a,r)=>e.jsx(p,{children:e.jsxs("button",{className:`flex items-center justify-between w-full px-3 py-2 border-none rounded-lg cursor-pointer transition-[background] gap-2.5 text-left font-sans ${r===n?"bg-orange-50":"bg-transparent hover:bg-gray-50"}`,onMouseEnter:()=>c(r),children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:`w-[30px] h-[30px] rounded-lg flex items-center justify-center text-[13px] shrink-0 border ${r===n?"bg-orange-50 border-orange-200 text-orange-500":"bg-gray-50 border-black/[0.07] text-gray-400"}`,children:a.icon}),e.jsx("span",{className:`text-[13.5px] tracking-[-0.01em] ${r===n?"text-gray-900":"text-gray-600"}`,children:a.label})]}),e.jsx("span",{className:"text-[10.5px] text-gray-400 bg-gray-100 border border-black/[0.07] rounded-[5px] px-[7px] py-[2px] font-mono shrink-0",children:a.shortcut})]})},a.label))})]}),e.jsx("div",{className:"flex gap-4 px-4 py-2.5 border-t border-black/[0.05] bg-gray-50 rounded-b-xl",children:[["↵","select"],["↑↓","navigate"],["Esc","close"]].map(([a,r])=>e.jsxs("span",{className:"flex items-center gap-[5px] text-[10.5px] text-gray-400 font-mono",children:[e.jsx("kbd",{className:"bg-white border border-black/[0.08] rounded px-[5px] py-[1px] text-[10px] font-mono text-gray-400",children:a}),r]},a))})]})]})})]})}};var w,D,C;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Standard confirmation dialog. Press Escape or click the backdrop to dismiss."
      }
    }
  },
  render: () => <>
      <style>{dialogCSS}</style>
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans">
        <Dialog>
          <DialogTrigger>
            <button className="inline-flex items-center gap-[7px] px-5 py-[9px] rounded-[10px] text-[13.5px] font-medium cursor-pointer tracking-[-0.01em] transition-[opacity,transform] hover:opacity-[0.88] active:scale-[0.97] bg-orange-500 text-white shadow-[0_4px_16px_rgba(249,115,22,0.28)] border-none whitespace-nowrap">
              Publish changes
            </button>
          </DialogTrigger>
          <DialogContent>
            <div className="px-7 pt-7 flex items-center gap-3">
              <div className="w-10 h-10 rounded-[10px] flex items-center justify-center text-[18px] shrink-0 border border-orange-500/20 bg-orange-500/[0.08]">
                ↑
              </div>
            </div>
            <div className="px-7 pt-4">
              <h2 className="m-0 mb-[7px] text-[17px] font-semibold text-gray-900 tracking-[-0.025em] leading-[1.25]">
                Publish changes
              </h2>
              <p className="m-0 text-[13.5px] text-gray-500 leading-[1.6]">
                Your changes will go live immediately and become visible to all users on the platform.
              </p>
            </div>
            <div className="px-7 pt-6 pb-6 flex justify-end gap-2">
              <DialogClose>
                <button className={cancelBtn}>Cancel</button>
              </DialogClose>
              <DialogClose>
                <button className={primaryBtn}>Publish now</button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
}`,...(C=(D=b.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var S,R,_;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Destructive confirmation with a danger-state CTA. Cancel is the visually dominant safe default."
      }
    }
  },
  render: () => <>
      <style>{dialogCSS}</style>
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans">
        <Dialog>
          <DialogTrigger>
            <button className="inline-flex items-center gap-[7px] px-5 py-[9px] rounded-[10px] text-[13.5px] font-medium cursor-pointer tracking-[-0.01em] transition-[opacity,transform] hover:opacity-[0.88] active:scale-[0.97] bg-red-50 text-red-600 border border-red-200 whitespace-nowrap">
              Delete project
            </button>
          </DialogTrigger>
          <DialogContent>
            <div className="px-7 pt-7 flex items-center gap-3">
              <div className="w-10 h-10 rounded-[10px] flex items-center justify-center text-[18px] shrink-0 border border-red-200 bg-red-50">
                ⚠
              </div>
            </div>
            <div className="px-7 pt-4">
              <h2 className="m-0 mb-[7px] text-[17px] font-semibold text-red-600 tracking-[-0.025em] leading-[1.25]">
                Delete "Q4 Sprint"?
              </h2>
              <p className="m-0 text-[13.5px] text-gray-500 leading-[1.6]">
                This will permanently delete the project and all{" "}
                <strong className="text-gray-700 font-medium">47 tasks</strong>{" "}
                inside it. There is no undo.
              </p>
            </div>
            <div className="mx-7 my-5 px-4 py-[14px] rounded-[10px] bg-red-50 border border-red-100">
              <div className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-red-400 font-mono mb-1.5">
                Irreversible action
              </div>
              <div className="text-[13px] text-gray-500 leading-[1.55]">
                Deleted projects cannot be restored. All associated lists, tasks, and activity history will be permanently removed from your workspace.
              </div>
            </div>
            <div className="px-7 pb-6 flex justify-end gap-2">
              <DialogClose>
                <button className={cancelBtn}>Keep project</button>
              </DialogClose>
              <DialogClose>
                <button className={destructiveBtn}>Delete forever</button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
}`,...(_=(R=h.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var T,E,F;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Dialog with a form body. Focus is trapped inside; Tab cycles through fields. A common pattern for create/edit flows."
      }
    }
  },
  render: () => <>
      <style>{dialogCSS}</style>
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans">
        <Dialog>
          <DialogTrigger>
            <button className="inline-flex items-center gap-[7px] px-5 py-[9px] rounded-[10px] text-[13.5px] font-medium cursor-pointer tracking-[-0.01em] transition-[opacity,transform] hover:opacity-[0.88] active:scale-[0.97] bg-white text-gray-700 border border-black/[0.1] whitespace-nowrap">
              + New project
            </button>
          </DialogTrigger>
          <DialogContent>
            <div className="px-7 pt-7">
              <h2 className="m-0 mb-[7px] text-[17px] font-semibold text-gray-900 tracking-[-0.025em] leading-[1.25]">
                Create project
              </h2>
              <p className="m-0 text-[13.5px] text-gray-500 leading-[1.6]">
                Projects group your lists and tasks into a focused workspace.
              </p>
            </div>
            <div className="px-7 py-5">
              <div className="h-px bg-black/[0.06] mb-5" />
              <div className="mb-4">
                <FieldLabel>Project name</FieldLabel>
                <FieldInput autoFocus placeholder="e.g. Q2 Roadmap" />
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                  <FieldLabel>Color</FieldLabel>
                  <FieldSelect defaultValue="orange">
                    <option value="orange">Orange</option>
                    <option value="cyan">Cyan</option>
                    <option value="emerald">Emerald</option>
                    <option value="violet">Violet</option>
                    <option value="rose">Rose</option>
                  </FieldSelect>
                </div>
                <div>
                  <FieldLabel>Visibility</FieldLabel>
                  <FieldSelect defaultValue="private">
                    <option value="private">Private</option>
                    <option value="team">Team</option>
                    <option value="public">Public</option>
                  </FieldSelect>
                </div>
              </div>
              <div>
                <FieldLabel>Description</FieldLabel>
                <FieldTextarea rows={3} placeholder="What's this project about?" />
                <div className="mt-[5px] text-[11.5px] text-gray-400 leading-[1.5]">
                  Optional — shown to collaborators in the project overview.
                </div>
              </div>
            </div>
            <div className="px-7 pb-6 flex justify-end gap-2">
              <DialogClose>
                <button className={cancelBtn}>Cancel</button>
              </DialogClose>
              <DialogClose>
                <button className={primaryBtn}>Create project</button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
}`,...(F=(E=f.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var I,P,q;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Search-style command palette built on the Dialog primitive. Stateful — results filter in real time as you type."
      }
    }
  },
  render: () => {
    const [query, setQuery] = useState("");
    const [activeIdx, setActiveIdx] = useState(0);
    const allCmds = [{
      icon: "+",
      label: "New task",
      shortcut: "N"
    }, {
      icon: "◫",
      label: "New project",
      shortcut: "P"
    }, {
      icon: "≡",
      label: "New list",
      shortcut: "L"
    }, {
      icon: "⌕",
      label: "Search tasks…",
      shortcut: "/"
    }, {
      icon: "◑",
      label: "Today",
      shortcut: "T"
    }, {
      icon: "□",
      label: "Inbox",
      shortcut: "I"
    }, {
      icon: "⚙",
      label: "Open settings",
      shortcut: ","
    }, {
      icon: "?",
      label: "Help & shortcuts",
      shortcut: "?"
    }];
    const filtered = query ? allCmds.filter(c => c.label.toLowerCase().includes(query.toLowerCase())) : allCmds;
    return <>
        <style>{\`\${dialogCSS} dialog { min-width: 460px; }\`}</style>
        <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans">
          <Dialog>
            <DialogTrigger>
              <button className="inline-flex items-center gap-2.5 px-5 py-[9px] rounded-[10px] text-[13.5px] font-medium cursor-pointer tracking-[-0.01em] transition-[opacity,transform] hover:opacity-[0.88] active:scale-[0.97] bg-white text-gray-400 border border-black/[0.1] whitespace-nowrap">
                <span className="text-[14px]">⌕</span>
                <span>Search commands…</span>
                <span className="ml-2 bg-gray-100 border border-black/[0.08] rounded-[6px] px-[7px] py-[2px] text-[11px] text-gray-400 font-mono">
                  ⌘K
                </span>
              </button>
            </DialogTrigger>
            <DialogContent>
              <div className="flex items-center gap-3 px-5 py-4 border-b border-black/[0.06]">
                <span className="text-gray-400 text-[16px] shrink-0 leading-none">⌕</span>
                <input autoFocus className="flex-1 bg-transparent border-none text-gray-800 text-[14.5px] outline-none font-sans tracking-[-0.01em] placeholder:text-gray-300" placeholder="Search commands…" value={query} onChange={e => {
                setQuery(e.target.value);
                setActiveIdx(0);
              }} />
                {query && <button onClick={() => setQuery("")} className="bg-transparent border-none text-gray-400 cursor-pointer text-[14px] px-[2px] leading-none hover:text-gray-600">
                    ✕
                  </button>}
              </div>

              {filtered.length === 0 ? <div className="py-8 px-5 text-center text-gray-400 text-[13px]">
                  <span className="block text-[28px] mb-2.5 opacity-30">⌕</span>
                  No commands match <strong className="text-gray-500 font-medium">"{query}"</strong>
                </div> : <div>
                  {!query && <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.12em] font-mono px-4 pt-3 pb-1.5">
                      Commands
                    </div>}
                  <div className="p-1.5">
                    {filtered.map((c, i) => <DialogClose key={c.label}>
                        <button className={\`flex items-center justify-between w-full px-3 py-2 border-none rounded-lg cursor-pointer transition-[background] gap-2.5 text-left font-sans \${i === activeIdx ? "bg-orange-50" : "bg-transparent hover:bg-gray-50"}\`} onMouseEnter={() => setActiveIdx(i)}>
                          <div className="flex items-center gap-2.5">
                            <div className={\`w-[30px] h-[30px] rounded-lg flex items-center justify-center text-[13px] shrink-0 border \${i === activeIdx ? "bg-orange-50 border-orange-200 text-orange-500" : "bg-gray-50 border-black/[0.07] text-gray-400"}\`}>
                              {c.icon}
                            </div>
                            <span className={\`text-[13.5px] tracking-[-0.01em] \${i === activeIdx ? "text-gray-900" : "text-gray-600"}\`}>
                              {c.label}
                            </span>
                          </div>
                          <span className="text-[10.5px] text-gray-400 bg-gray-100 border border-black/[0.07] rounded-[5px] px-[7px] py-[2px] font-mono shrink-0">
                            {c.shortcut}
                          </span>
                        </button>
                      </DialogClose>)}
                  </div>
                </div>}

              <div className="flex gap-4 px-4 py-2.5 border-t border-black/[0.05] bg-gray-50 rounded-b-xl">
                {[["↵", "select"], ["↑↓", "navigate"], ["Esc", "close"]].map(([key, label]) => <span key={key} className="flex items-center gap-[5px] text-[10.5px] text-gray-400 font-mono">
                    <kbd className="bg-white border border-black/[0.08] rounded px-[5px] py-[1px] text-[10px] font-mono text-gray-400">
                      {key}
                    </kbd>
                    {label}
                  </span>)}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </>;
  }
}`,...(q=(P=y.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};const Y=["Default","Destructive","WithForm","CommandPalette"];export{y as CommandPalette,b as Default,h as Destructive,f as WithForm,Y as __namedExportsOrder,W as default};
