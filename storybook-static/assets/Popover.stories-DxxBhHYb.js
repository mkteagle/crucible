import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m,R as ee}from"./iframe-CR-0IFbH.js";import"./preload-helper-Dp1pzeXC.js";const G=m.createContext(null);function Q(){const t=m.useContext(G);if(!t)throw new Error("usePopoverContext must be used within <Popover>");return t}function u({children:t,onOpenChange:n,placement:o="bottom",align:p="start"}){const s=m.useId().replace(/:/g,"popover"),[a,i]=m.useState(!1),l=m.useRef(null),r=m.useCallback(()=>{var d;const c=document.getElementById(s);(d=c==null?void 0:c.showPopover)==null||d.call(c),i(!0),n==null||n(!0)},[s,n]),x=m.useCallback(()=>{var d;const c=document.getElementById(s);(d=c==null?void 0:c.hidePopover)==null||d.call(c),i(!1),n==null||n(!1)},[s,n]),g=m.useCallback(()=>{a?x():r()},[a,r,x]);return e.jsx(G.Provider,{value:{popoverId:s,isOpen:a,show:r,hide:x,toggle:g,triggerRef:l,placement:o,align:p},children:t})}u.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},placement:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:`Which side of the trigger to render on. Flips automatically if there's not enough space. @default "bottom"`,defaultValue:{value:'"bottom"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'}]},description:'Alignment along the cross-axis. @default "start"',defaultValue:{value:'"start"',computed:!1}}}};function b({children:t}){const{popoverId:n,toggle:o,triggerRef:p}=Q();return ee.cloneElement(t,{ref:p,onClick:o,style:{...t.props.style??{},anchorName:`--popover-${n}`}})}b.__docgenInfo={description:"",methods:[],displayName:"PopoverTrigger",props:{children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement<{ onClick?: React.MouseEventHandler; style?: React.CSSProperties; ref?: React.Ref<HTMLElement> }>",elements:[{name:"signature",type:"object",raw:"{ onClick?: React.MouseEventHandler; style?: React.CSSProperties; ref?: React.Ref<HTMLElement> }",signature:{properties:[{key:"onClick",value:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler",required:!1}},{key:"style",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"ref",value:{name:"ReactRef",raw:"React.Ref<HTMLElement>",elements:[{name:"HTMLElement"}],required:!1}}]}}]},description:""}}};const te={position:"fixed",inset:"unset",border:"none",padding:0,background:"transparent",margin:0,outline:"none"};function j(t,n,o,p,s,a=8){const i=n-t;let l;return p==="start"?l=t:p==="end"?l=n-o:l=t+(i-o)/2,Math.max(a,Math.min(l,s-o-a))}function ne(t,n,o,p,s,a){const i=window.innerWidth,l=window.innerHeight;let r=p;return r==="bottom"&&l-t.bottom<o+a&&t.top>o+a?r="top":r==="top"&&t.top<o+a&&l-t.bottom>o+a?r="bottom":r==="right"&&i-t.right<n+a&&t.left>n+a?r="left":r==="left"&&t.left<n+a&&i-t.right>n+a&&(r="right"),r==="bottom"?{top:t.bottom+a,left:j(t.left,t.right,n,s,i)}:r==="top"?{top:t.top-o-a,left:j(t.left,t.right,n,s,i)}:r==="right"?{top:j(t.top,t.bottom,o,s,l),left:t.right+a}:{top:j(t.top,t.bottom,o,s,l),left:t.left-n-a}}function f({children:t,style:n,...o}){const{popoverId:p,hide:s,triggerRef:a,placement:i,align:l}=Q();return m.useEffect(()=>{const r=document.getElementById(p);if(!r)return;let x=!1;const g=()=>{if(!x)return;const h=a.current;if(!h)return;const k=h.getBoundingClientRect(),v=r.offsetHeight||200,T=r.offsetWidth||240,{top:O,left:W}=ne(k,T,v,i,l,6);r.style.top=`${O}px`,r.style.left=`${W}px`},c=()=>g(),d=()=>g(),N=h=>{h.newState==="open"?(x=!0,g(),requestAnimationFrame(g),window.addEventListener("scroll",c,{capture:!0,passive:!0}),window.addEventListener("resize",d,{passive:!0})):(x=!1,s(),window.removeEventListener("scroll",c,{capture:!0}),window.removeEventListener("resize",d),r.style.top="",r.style.left="")};return r.addEventListener("toggle",N),()=>{r.removeEventListener("toggle",N),window.removeEventListener("scroll",c,{capture:!0}),window.removeEventListener("resize",d)}},[p,s,a,i,l]),e.jsx("div",{id:p,popover:"auto",style:{...te,...n},...o,children:t})}f.__docgenInfo={description:"",methods:[],displayName:"PopoverContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const le={title:"Primitives/Popover",parameters:{layout:"fullscreen",docs:{description:{component:"Style-agnostic Popover primitive built on the native Popover API. Zero imposed styles — bring your own. Supports `placement` (top | bottom | left | right) and `align` (start | center | end) with automatic flip when near the viewport edge. Click outside to light-dismiss."}}},argTypes:{placement:{control:"select",options:["top","bottom","left","right"],description:"Which side of the trigger to render on",table:{defaultValue:{summary:"bottom"}}},align:{control:"select",options:["start","center","end"],description:"Alignment along the cross-axis of the trigger",table:{defaultValue:{summary:"start"}}}},tags:["autodocs"]};function y({children:t,className:n=""}){return e.jsx("div",{className:`rounded-xl border border-black/[0.08] bg-white text-gray-800 shadow-[0_4px_24px_rgba(0,0,0,0.1),0_1px_4px_rgba(0,0,0,0.06)] font-sans text-[13px] overflow-hidden ${n}`,children:t})}const X="inline-flex items-center gap-[7px] px-4 py-2 rounded-[9px] bg-white text-gray-700 border border-black/[0.1] cursor-pointer text-[13.5px] tracking-[-0.01em] font-sans transition-[background,border-color,box-shadow] whitespace-nowrap hover:bg-gray-50 hover:border-black/[0.15] active:scale-[0.98]",w={args:{placement:"bottom",align:"start"},parameters:{layout:"fullscreen",docs:{description:{story:"Use the controls panel below to try every `placement` and `align` combination interactively."}}},render:({placement:t,align:n})=>e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans",children:e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsxs("div",{className:"text-[11px] font-mono text-gray-400 tracking-[0.04em]",children:["placement=",e.jsx("span",{className:"text-indigo-500 font-semibold",children:t})," ","align=",e.jsx("span",{className:"text-indigo-500 font-semibold",children:n})]}),e.jsxs(u,{placement:t,align:n,children:[e.jsx(b,{children:e.jsxs("button",{className:X,children:[e.jsx("span",{className:"text-indigo-500 text-[12px]",children:"◈"}),"Open popover",e.jsx("span",{className:"text-gray-400 text-[10px]",children:"▾"})]})}),e.jsx(f,{children:e.jsxs(y,{className:"px-4 py-3 max-w-[240px]",children:[e.jsxs("div",{className:"text-[12.5px] font-semibold text-gray-900 mb-1 tracking-[-0.01em]",children:[t,"-",n]}),e.jsxs("p",{className:"text-[12px] text-gray-500 leading-[1.6] mb-0",children:["Change ",e.jsx("code",{className:"font-mono text-indigo-600 text-[11px]",children:"placement"})," and"," ",e.jsx("code",{className:"font-mono text-indigo-600 text-[11px]",children:"align"})," in the controls panel below."]})]})})]})]})})},P={parameters:{docs:{description:{story:"Basic popover anchored below the trigger. Click outside to light-dismiss via the native Popover API."}}},render:()=>e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans",children:e.jsxs(u,{children:[e.jsx(b,{children:e.jsxs("button",{className:X,children:[e.jsx("span",{className:"text-indigo-500 text-[12px]",children:"◈"}),"Options",e.jsx("span",{className:"text-gray-400 text-[10px]",children:"▾"})]})}),e.jsx(f,{children:e.jsxs(y,{className:"px-5 py-[18px] max-w-[280px] leading-none",children:[e.jsxs("div",{className:"text-[12.5px] font-semibold text-gray-900 tracking-[-0.01em] mb-2 flex items-center gap-[7px]",children:["Native Popover API",e.jsx("span",{className:"text-[9.5px] font-semibold uppercase tracking-[0.09em] text-indigo-600 font-mono bg-indigo-50 border border-indigo-100 rounded px-[6px] py-[2px]",children:"Chrome 125+"})]}),e.jsxs("p",{className:"text-[12.5px] text-gray-500 leading-[1.6] mb-[14px]",children:["Built on"," ",e.jsx("code",{className:"inline bg-gray-100 border border-black/[0.07] rounded-[5px] px-[5px] py-[1px] font-mono text-[11.5px] text-indigo-600",children:'popover="auto"'}),". Keyboard-accessible and light-dismiss come for free — no JavaScript event listeners needed."]}),e.jsx("p",{className:"text-[12.5px] text-gray-500 leading-[1.6] mb-0",children:"Positioned via CSS anchor positioning with automatic flip when near the viewport edge."}),e.jsx("div",{className:"flex gap-3 border-t border-black/[0.06] pt-3 mt-3",children:[["bundle","0 deps"],["a11y","built-in"],["dismiss","light"]].map(([t,n])=>e.jsxs("div",{className:"flex flex-col gap-[3px]",children:[e.jsx("span",{className:"text-[9.5px] text-gray-400 uppercase tracking-[0.09em] font-mono font-semibold",children:t}),e.jsx("span",{className:"text-[13px] text-gray-700 font-medium tracking-[-0.01em]",children:n})]},t))})]})})]})})},C={parameters:{docs:{description:{story:"Compact action menu triggered from a ··· button. The canonical dropdown pattern."}}},render:()=>e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans",children:e.jsxs(u,{children:[e.jsx(b,{children:e.jsx("button",{title:"More options",className:"w-[30px] h-[30px] rounded-[7px] bg-white border border-black/[0.1] text-gray-400 cursor-pointer flex items-center justify-center text-[17px] tracking-[0.1em] leading-none transition-[background,color,border-color] p-0 font-sans hover:bg-gray-50 hover:text-gray-600",children:"···"})}),e.jsx(f,{children:e.jsxs(y,{className:"min-w-[180px] p-[5px]",children:[e.jsx("div",{className:"px-2.5 pt-1 pb-[3px] text-[9.5px] font-semibold text-gray-400 uppercase tracking-[0.1em] font-mono",children:"Actions"}),[{icon:"✏",label:"Edit",shortcut:"E"},{icon:"⎘",label:"Duplicate",shortcut:"⌘D"},{icon:"→",label:"Move to…",shortcut:null},{icon:"◻",label:"Copy link",shortcut:"⌘⇧C"}].map(t=>e.jsxs("button",{className:"flex items-center gap-2.5 w-full px-2.5 py-[7px] border-none bg-transparent text-gray-600 text-[13px] rounded-[7px] cursor-pointer text-left font-sans transition-[background,color] tracking-[-0.01em] hover:bg-gray-50 hover:text-gray-900",children:[e.jsx("i",{className:"not-italic w-4 text-center shrink-0 opacity-50 text-[12px]",children:t.icon}),t.label,t.shortcut&&e.jsx("span",{className:"ml-auto text-[10.5px] text-gray-400 font-mono",children:t.shortcut})]},t.label)),e.jsx("div",{className:"h-px bg-black/[0.06] my-1 mx-1.5"}),e.jsxs("button",{className:"flex items-center gap-2.5 w-full px-2.5 py-[7px] border-none bg-transparent text-red-500 text-[13px] rounded-[7px] cursor-pointer text-left font-sans transition-[background,color] tracking-[-0.01em] hover:bg-red-50 hover:text-red-600",children:[e.jsx("i",{className:"not-italic w-4 text-center shrink-0 opacity-60 text-[12px]",children:"✕"}),"Delete",e.jsx("span",{className:"ml-auto text-[10.5px] text-red-400/60 font-mono",children:"⌫"})]})]})})]})})},R={parameters:{docs:{description:{story:"Avatar trigger revealing a user card with account info and navigation actions."}}},render:()=>e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans",children:e.jsxs(u,{children:[e.jsx(b,{children:e.jsx("button",{title:"Your profile",className:"w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-indigo-500 to-violet-500 text-white text-[13px] font-bold cursor-pointer flex items-center justify-center transition-[opacity,transform,box-shadow] font-sans tracking-[-0.02em] p-0 shadow-sm hover:opacity-90 hover:scale-[1.05]",children:"JD"})}),e.jsx(f,{children:e.jsxs(y,{className:"w-[236px]",children:[e.jsxs("div",{className:"px-4 py-4 border-b border-black/[0.06] flex items-center gap-3",children:[e.jsx("div",{className:"w-[42px] h-[42px] rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-[15px] font-bold shrink-0 tracking-[-0.02em] font-sans",children:"JD"}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[14px] font-semibold text-gray-900 mb-[3px] tracking-[-0.02em]",children:"Jane Doe"}),e.jsx("div",{className:"text-[11.5px] text-gray-400 font-mono tracking-[-0.01em]",children:"jane@example.com"}),e.jsx("div",{className:"mt-[5px] inline-flex items-center gap-1 text-[9.5px] font-semibold uppercase tracking-[0.09em] text-orange-600 font-mono bg-orange-50 border border-orange-100 rounded px-[6px] py-[2px]",children:"Pro"})]})]}),e.jsxs("div",{className:"p-[5px]",children:[[{icon:"⚙",label:"Account settings"},{icon:"⌨",label:"Keyboard shortcuts"},{icon:"◑",label:"Appearance"},{icon:"?",label:"Help & support"}].map(t=>e.jsxs("button",{className:"flex items-center gap-2.5 w-full px-2.5 py-[7px] border-none bg-transparent text-gray-600 text-[13px] rounded-[7px] cursor-pointer text-left font-sans transition-[background,color] tracking-[-0.01em] hover:bg-gray-50 hover:text-gray-900",children:[e.jsx("i",{className:"not-italic text-[12px] w-4 text-center opacity-50",children:t.icon}),t.label]},t.label)),e.jsx("div",{className:"h-px bg-black/[0.06] my-1 mx-1.5"}),e.jsxs("button",{className:"flex items-center gap-2.5 w-full px-2.5 py-[7px] border-none bg-transparent text-red-500 text-[13px] rounded-[7px] cursor-pointer text-left font-sans transition-[background,color] tracking-[-0.01em] hover:bg-red-50 hover:text-red-600",children:[e.jsx("i",{className:"not-italic text-[12px] w-4 text-center opacity-50",children:"↩"}),"Sign out"]})]}),e.jsx("div",{className:"px-4 py-2 border-t border-black/[0.05] bg-gray-50 flex items-center justify-between",children:[["Tasks","142"],["Projects","8"],["Done today","6"]].map(([t,n])=>e.jsxs("div",{className:"flex flex-col gap-[2px]",children:[e.jsx("span",{className:"text-[9.5px] text-gray-400 uppercase tracking-[0.08em] font-mono",children:t}),e.jsx("span",{className:"text-[10.5px] text-gray-600 font-mono",children:n})]},t))})]})})]})})},S={parameters:{docs:{description:{story:"Richer popover with stateful form controls — demonstrates how to build a task filter panel."}}},render:()=>{const[t,n]=m.useState("all"),[o,p]=m.useState("all"),[s,a]=m.useState("all"),[i,l]=m.useState("all"),r=[t,o,s,i].filter(d=>d!=="all").length,x=r>0;function g(){n("all"),p("all"),a("all"),l("all")}const c="w-full px-2.5 py-[7px] rounded-lg bg-white border border-black/[0.1] text-gray-700 text-[12.5px] cursor-pointer appearance-none font-sans tracking-[-0.01em] transition-[border-color] focus:outline-none focus:border-orange-400";return e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans",children:e.jsxs(u,{children:[e.jsx(b,{children:e.jsxs("button",{className:`inline-flex items-center gap-[7px] px-[14px] py-[7.5px] rounded-[9px] border cursor-pointer text-[13px] tracking-[-0.01em] font-sans transition-[background,border-color] ${x?"text-orange-600 border-orange-200 bg-orange-50 hover:bg-orange-100":"bg-white text-gray-600 border-black/[0.1] hover:bg-gray-50"}`,children:[e.jsx("span",{className:"text-[11px]",children:"⊞"}),"Filters",x&&e.jsx("span",{className:"w-[17px] h-[17px] rounded-full bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center font-mono",children:r})]})}),e.jsx(f,{children:e.jsxs(y,{className:"w-64",children:[e.jsxs("div",{className:"px-4 py-[14px] border-b border-black/[0.06] flex items-center justify-between",children:[e.jsx("span",{className:"text-[12px] font-semibold text-gray-400 uppercase tracking-[0.08em] font-mono",children:"Filter tasks"}),e.jsx("button",{onClick:g,className:`text-[11px] bg-transparent border-none cursor-pointer font-sans p-0 transition-[color] ${x?"text-orange-500 hover:text-orange-600":"text-gray-400 hover:text-gray-600"}`,children:x?"Clear all":"No filters"})]}),x&&e.jsxs("div",{className:"px-4 pt-3 pb-0 flex flex-wrap gap-1.5",children:[t!=="all"&&e.jsxs("span",{className:"inline-flex items-center gap-[5px] px-2 py-[3px] rounded-[5px] bg-orange-50 border border-orange-100 text-[11px] text-orange-600 font-mono tracking-[-0.01em]",children:["status: ",t]}),o!=="all"&&e.jsxs("span",{className:"inline-flex items-center gap-[5px] px-2 py-[3px] rounded-[5px] bg-orange-50 border border-orange-100 text-[11px] text-orange-600 font-mono tracking-[-0.01em]",children:["priority: ",o]}),s!=="all"&&e.jsxs("span",{className:"inline-flex items-center gap-[5px] px-2 py-[3px] rounded-[5px] bg-orange-50 border border-orange-100 text-[11px] text-orange-600 font-mono tracking-[-0.01em]",children:["assignee: ",s]}),i!=="all"&&e.jsxs("span",{className:"inline-flex items-center gap-[5px] px-2 py-[3px] rounded-[5px] bg-orange-50 border border-orange-100 text-[11px] text-orange-600 font-mono tracking-[-0.01em]",children:["due: ",i]})]}),e.jsx("div",{className:"px-4 py-[14px] space-y-[14px]",children:[{label:"Status",value:t,setter:n,options:[["all","All statuses"],["todo","To do"],["in_progress","In progress"],["done","Done"]]},{label:"Priority",value:o,setter:p,options:[["all","All priorities"],["urgent","Urgent"],["high","High"],["medium","Medium"],["low","Low"]]},{label:"Assignee",value:s,setter:a,options:[["all","Anyone"],["me","Me"],["claude","Claude"],["unassigned","Unassigned"]]},{label:"Due date",value:i,setter:l,options:[["all","Any time"],["today","Today"],["week","This week"],["overdue","Overdue"],["none","No due date"]]}].map(({label:d,value:N,setter:h,options:k})=>e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-semibold text-gray-400 uppercase tracking-[0.09em] mb-[7px] font-mono",children:d}),e.jsx("select",{className:c,value:N,onChange:v=>h(v.target.value),children:k.map(([v,T])=>e.jsx("option",{value:v,children:T},v))})]},d))}),e.jsxs("div",{className:"px-4 pb-[14px] pt-2.5 border-t border-black/[0.06] flex gap-2",children:[e.jsx("button",{onClick:g,className:"flex-1 py-[7.5px] rounded-lg bg-gray-100 text-gray-600 border border-black/[0.08] text-[12.5px] cursor-pointer font-sans transition-[background,color] tracking-[-0.01em] hover:bg-gray-200",children:"Reset"}),e.jsx("button",{className:"flex-1 py-[7.5px] rounded-lg bg-orange-500 text-white border-none text-[12.5px] font-medium cursor-pointer font-sans transition-[opacity] tracking-[-0.01em] hover:opacity-90",children:"Apply"})]})]})})]})})}},re=[{placement:"top",align:"start",label:"top-start"},{placement:"top",align:"center",label:"top-center"},{placement:"top",align:"end",label:"top-end"},{placement:"bottom",align:"start",label:"bottom-start"},{placement:"bottom",align:"center",label:"bottom-center"},{placement:"bottom",align:"end",label:"bottom-end"},{placement:"left",align:"start",label:"left-start"},{placement:"left",align:"center",label:"left-center"},{placement:"left",align:"end",label:"left-end"},{placement:"right",align:"start",label:"right-start"},{placement:"right",align:"center",label:"right-center"},{placement:"right",align:"end",label:"right-end"}];function oe({label:t}){return e.jsx(y,{className:"px-3 py-2 whitespace-nowrap",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-[10px] font-mono font-semibold text-indigo-500 uppercase tracking-[0.08em]",children:"placement"}),e.jsx("code",{className:"text-[12px] font-mono text-gray-700",children:t})]})})}const A={parameters:{docs:{description:{story:"All 12 placement combinations: `top | bottom | left | right` × `start | center | end`. Hover over the grid for demos. Each popover auto-flips if there's not enough space on the preferred side."}},layout:"fullscreen"},render:()=>e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans p-16",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("h3",{className:"text-[13px] font-semibold text-gray-400 uppercase tracking-[0.1em] font-mono mb-2",children:"Placement × Alignment"}),e.jsx("p",{className:"text-[13px] text-gray-500",children:"Click any trigger to see placement"})]}),e.jsx("div",{className:"grid grid-cols-3 gap-3",children:re.map(({placement:t,align:n,label:o})=>e.jsxs(u,{placement:t,align:n,children:[e.jsx(b,{children:e.jsx("button",{className:"w-full px-3 py-2 rounded-[8px] bg-white border border-black/[0.1] cursor-pointer text-[11.5px] tracking-[-0.01em] font-mono text-gray-500 transition-[background,color,border-color] hover:bg-gray-50 hover:text-indigo-600 hover:border-indigo-200",children:o})}),e.jsx(f,{children:e.jsx(oe,{label:o})})]},o))})]})})};var E,D,M;w.parameters={...w.parameters,docs:{...(E=w.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    placement: "bottom",
    align: "start"
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "Use the controls panel below to try every \`placement\` and \`align\` combination interactively."
      }
    }
  },
  render: ({
    placement,
    align
  }) => <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans">
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
}`,...(M=(D=w.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var I,_,F;P.parameters={...P.parameters,docs:{...(I=P.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Basic popover anchored below the trigger. Click outside to light-dismiss via the native Popover API."
      }
    }
  },
  render: () => <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans">
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
              {[["bundle", "0 deps"], ["a11y", "built-in"], ["dismiss", "light"]].map(([label, value]) => <div key={label} className="flex flex-col gap-[3px]">
                  <span className="text-[9.5px] text-gray-400 uppercase tracking-[0.09em] font-mono font-semibold">{label}</span>
                  <span className="text-[13px] text-gray-700 font-medium tracking-[-0.01em]">{value}</span>
                </div>)}
            </div>
          </Panel>
        </PopoverContent>
      </Popover>
    </div>
}`,...(F=(_=P.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var L,H,q;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Compact action menu triggered from a ··· button. The canonical dropdown pattern."
      }
    }
  },
  render: () => <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans">
      <Popover>
        <PopoverTrigger>
          <button title="More options" className="w-[30px] h-[30px] rounded-[7px] bg-white border border-black/[0.1] text-gray-400 cursor-pointer flex items-center justify-center text-[17px] tracking-[0.1em] leading-none transition-[background,color,border-color] p-0 font-sans hover:bg-gray-50 hover:text-gray-600">
            ···
          </button>
        </PopoverTrigger>
        <PopoverContent>
          <Panel className="min-w-[180px] p-[5px]">
            <div className="px-2.5 pt-1 pb-[3px] text-[9.5px] font-semibold text-gray-400 uppercase tracking-[0.1em] font-mono">
              Actions
            </div>
            {[{
            icon: "✏",
            label: "Edit",
            shortcut: "E"
          }, {
            icon: "⎘",
            label: "Duplicate",
            shortcut: "⌘D"
          }, {
            icon: "→",
            label: "Move to…",
            shortcut: null
          }, {
            icon: "◻",
            label: "Copy link",
            shortcut: "⌘⇧C"
          }].map(item => <button key={item.label} className="flex items-center gap-2.5 w-full px-2.5 py-[7px] border-none bg-transparent text-gray-600 text-[13px] rounded-[7px] cursor-pointer text-left font-sans transition-[background,color] tracking-[-0.01em] hover:bg-gray-50 hover:text-gray-900">
                <i className="not-italic w-4 text-center shrink-0 opacity-50 text-[12px]">{item.icon}</i>
                {item.label}
                {item.shortcut && <span className="ml-auto text-[10.5px] text-gray-400 font-mono">{item.shortcut}</span>}
              </button>)}
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
}`,...(q=(H=C.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var B,J,U;R.parameters={...R.parameters,docs:{...(B=R.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Avatar trigger revealing a user card with account info and navigation actions."
      }
    }
  },
  render: () => <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans">
      <Popover>
        <PopoverTrigger>
          <button title="Your profile" className="w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-indigo-500 to-violet-500 text-white text-[13px] font-bold cursor-pointer flex items-center justify-center transition-[opacity,transform,box-shadow] font-sans tracking-[-0.02em] p-0 shadow-sm hover:opacity-90 hover:scale-[1.05]">
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
              {[{
              icon: "⚙",
              label: "Account settings"
            }, {
              icon: "⌨",
              label: "Keyboard shortcuts"
            }, {
              icon: "◑",
              label: "Appearance"
            }, {
              icon: "?",
              label: "Help & support"
            }].map(item => <button key={item.label} className="flex items-center gap-2.5 w-full px-2.5 py-[7px] border-none bg-transparent text-gray-600 text-[13px] rounded-[7px] cursor-pointer text-left font-sans transition-[background,color] tracking-[-0.01em] hover:bg-gray-50 hover:text-gray-900">
                  <i className="not-italic text-[12px] w-4 text-center opacity-50">{item.icon}</i>
                  {item.label}
                </button>)}
              <div className="h-px bg-black/[0.06] my-1 mx-1.5" />
              <button className="flex items-center gap-2.5 w-full px-2.5 py-[7px] border-none bg-transparent text-red-500 text-[13px] rounded-[7px] cursor-pointer text-left font-sans transition-[background,color] tracking-[-0.01em] hover:bg-red-50 hover:text-red-600">
                <i className="not-italic text-[12px] w-4 text-center opacity-50">↩</i>
                Sign out
              </button>
            </div>

            <div className="px-4 py-2 border-t border-black/[0.05] bg-gray-50 flex items-center justify-between">
              {[["Tasks", "142"], ["Projects", "8"], ["Done today", "6"]].map(([label, value]) => <div key={label} className="flex flex-col gap-[2px]">
                  <span className="text-[9.5px] text-gray-400 uppercase tracking-[0.08em] font-mono">{label}</span>
                  <span className="text-[10.5px] text-gray-600 font-mono">{value}</span>
                </div>)}
            </div>
          </Panel>
        </PopoverContent>
      </Popover>
    </div>
}`,...(U=(J=R.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var $,K,V;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Richer popover with stateful form controls — demonstrates how to build a task filter panel."
      }
    }
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
    const filterSelectCls = "w-full px-2.5 py-[7px] rounded-lg bg-white border border-black/[0.1] text-gray-700 text-[12.5px] cursor-pointer appearance-none font-sans tracking-[-0.01em] transition-[border-color] focus:outline-none focus:border-orange-400";
    return <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans">
        <Popover>
          <PopoverTrigger>
            <button className={\`inline-flex items-center gap-[7px] px-[14px] py-[7.5px] rounded-[9px] border cursor-pointer text-[13px] tracking-[-0.01em] font-sans transition-[background,border-color] \${isFiltered ? "text-orange-600 border-orange-200 bg-orange-50 hover:bg-orange-100" : "bg-white text-gray-600 border-black/[0.1] hover:bg-gray-50"}\`}>
              <span className="text-[11px]">⊞</span>
              Filters
              {isFiltered && <span className="w-[17px] h-[17px] rounded-full bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center font-mono">
                  {activeCount}
                </span>}
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <Panel className="w-64">
              <div className="px-4 py-[14px] border-b border-black/[0.06] flex items-center justify-between">
                <span className="text-[12px] font-semibold text-gray-400 uppercase tracking-[0.08em] font-mono">
                  Filter tasks
                </span>
                <button onClick={clearAll} className={\`text-[11px] bg-transparent border-none cursor-pointer font-sans p-0 transition-[color] \${isFiltered ? "text-orange-500 hover:text-orange-600" : "text-gray-400 hover:text-gray-600"}\`}>
                  {isFiltered ? "Clear all" : "No filters"}
                </button>
              </div>

              {isFiltered && <div className="px-4 pt-3 pb-0 flex flex-wrap gap-1.5">
                  {status !== "all" && <span className="inline-flex items-center gap-[5px] px-2 py-[3px] rounded-[5px] bg-orange-50 border border-orange-100 text-[11px] text-orange-600 font-mono tracking-[-0.01em]">
                      status: {status}
                    </span>}
                  {priority !== "all" && <span className="inline-flex items-center gap-[5px] px-2 py-[3px] rounded-[5px] bg-orange-50 border border-orange-100 text-[11px] text-orange-600 font-mono tracking-[-0.01em]">
                      priority: {priority}
                    </span>}
                  {assignee !== "all" && <span className="inline-flex items-center gap-[5px] px-2 py-[3px] rounded-[5px] bg-orange-50 border border-orange-100 text-[11px] text-orange-600 font-mono tracking-[-0.01em]">
                      assignee: {assignee}
                    </span>}
                  {dateRange !== "all" && <span className="inline-flex items-center gap-[5px] px-2 py-[3px] rounded-[5px] bg-orange-50 border border-orange-100 text-[11px] text-orange-600 font-mono tracking-[-0.01em]">
                      due: {dateRange}
                    </span>}
                </div>}

              <div className="px-4 py-[14px] space-y-[14px]">
                {[{
                label: "Status",
                value: status,
                setter: setStatus,
                options: [["all", "All statuses"], ["todo", "To do"], ["in_progress", "In progress"], ["done", "Done"]]
              }, {
                label: "Priority",
                value: priority,
                setter: setPriority,
                options: [["all", "All priorities"], ["urgent", "Urgent"], ["high", "High"], ["medium", "Medium"], ["low", "Low"]]
              }, {
                label: "Assignee",
                value: assignee,
                setter: setAssignee,
                options: [["all", "Anyone"], ["me", "Me"], ["claude", "Claude"], ["unassigned", "Unassigned"]]
              }, {
                label: "Due date",
                value: dateRange,
                setter: setDateRange,
                options: [["all", "Any time"], ["today", "Today"], ["week", "This week"], ["overdue", "Overdue"], ["none", "No due date"]]
              }].map(({
                label,
                value,
                setter,
                options
              }) => <div key={label}>
                    <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-[0.09em] mb-[7px] font-mono">
                      {label}
                    </label>
                    <select className={filterSelectCls} value={value} onChange={e => setter(e.target.value)}>
                      {options.map(([val, text]) => <option key={val} value={val}>{text}</option>)}
                    </select>
                  </div>)}
              </div>

              <div className="px-4 pb-[14px] pt-2.5 border-t border-black/[0.06] flex gap-2">
                <button onClick={clearAll} className="flex-1 py-[7.5px] rounded-lg bg-gray-100 text-gray-600 border border-black/[0.08] text-[12.5px] cursor-pointer font-sans transition-[background,color] tracking-[-0.01em] hover:bg-gray-200">
                  Reset
                </button>
                <button className="flex-1 py-[7.5px] rounded-lg bg-orange-500 text-white border-none text-[12.5px] font-medium cursor-pointer font-sans transition-[opacity] tracking-[-0.01em] hover:opacity-90">
                  Apply
                </button>
              </div>
            </Panel>
          </PopoverContent>
        </Popover>
      </div>;
  }
}`,...(V=(K=S.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var z,Y,Z;A.parameters={...A.parameters,docs:{...(z=A.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "All 12 placement combinations: \`top | bottom | left | right\` × \`start | center | end\`. Hover over the grid for demos. Each popover auto-flips if there's not enough space on the preferred side."
      }
    },
    layout: "fullscreen"
  },
  render: () => <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] font-sans p-16">
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-[13px] font-semibold text-gray-400 uppercase tracking-[0.1em] font-mono mb-2">
            Placement × Alignment
          </h3>
          <p className="text-[13px] text-gray-500">Click any trigger to see placement</p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {placements.map(({
          placement,
          align,
          label
        }) => <Popover key={label} placement={placement} align={align}>
              <PopoverTrigger>
                <button className={\`w-full px-3 py-2 rounded-[8px] bg-white border border-black/[0.1] cursor-pointer text-[11.5px] tracking-[-0.01em] font-mono text-gray-500 transition-[background,color,border-color] hover:bg-gray-50 hover:text-indigo-600 hover:border-indigo-200\`}>
                  {label}
                </button>
              </PopoverTrigger>
              <PopoverContent>
                <PlacementTip label={label} />
              </PopoverContent>
            </Popover>)}
        </div>
      </div>
    </div>
}`,...(Z=(Y=A.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const ce=["Playground","Default","ContextMenu","UserProfile","FilterPanel","Placement"];export{C as ContextMenu,P as Default,S as FilterPanel,A as Placement,w as Playground,R as UserProfile,ce as __namedExportsOrder,le as default};
