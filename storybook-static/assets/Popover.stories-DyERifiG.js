import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s,R as N}from"./index-JhL3uwfD.js";const C=s.createContext(null);function E(){const r=s.useContext(C);if(!r)throw new Error("usePopoverContext must be used within <Popover>");return r}function x({children:r,onOpenChange:n}){const o=s.useId().replace(/:/g,"popover"),[i,a]=s.useState(!1),p=s.useCallback(()=>{var c;const t=document.getElementById(o);(c=t==null?void 0:t.showPopover)==null||c.call(t),a(!0),n==null||n(!0)},[o,n]),d=s.useCallback(()=>{var c;const t=document.getElementById(o);(c=t==null?void 0:t.hidePopover)==null||c.call(t),a(!1),n==null||n(!1)},[o,n]),b=s.useCallback(()=>{i?d():p()},[i,p,d]);return e.jsx(C.Provider,{value:{popoverId:o,isOpen:i,show:p,hide:d,toggle:b},children:r})}x.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};function g({children:r}){const{popoverId:n,toggle:o}=E();return N.cloneElement(r,{popovertarget:n,onClick:o})}g.__docgenInfo={description:"",methods:[],displayName:"PopoverTrigger",props:{children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement<{ onClick?: React.MouseEventHandler; popovertarget?: string }>",elements:[{name:"signature",type:"object",raw:"{ onClick?: React.MouseEventHandler; popovertarget?: string }",signature:{properties:[{key:"onClick",value:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler",required:!1}},{key:"popovertarget",value:{name:"string",required:!1}}]}}]},description:""}}};function v({children:r,...n}){const{popoverId:o,hide:i}=E();return s.useEffect(()=>{const a=document.getElementById(o);if(!a)return;const p=d=>{d.newState==="closed"&&i()};return a.addEventListener("toggle",p),()=>a.removeEventListener("toggle",p)},[o,i]),e.jsx("div",{id:o,popover:"auto",...n,children:r})}v.__docgenInfo={description:"",methods:[],displayName:"PopoverContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const q={title:"Primitives/Popover",parameters:{layout:"centered",docs:{description:{component:"Style-agnostic Popover primitive built on the native Popover API. Bring your own styles."}}},tags:["autodocs"]},f=`
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
`,l={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:f}),e.jsxs(x,{children:[e.jsx(g,{children:e.jsx("button",{style:{padding:"8px 16px",borderRadius:"8px",background:"#1f1f1f",color:"#e6e6e6",border:"1px solid #2a2a2a",cursor:"pointer"},children:"Open popover"})}),e.jsx(v,{style:{position:"fixed",top:"50%",left:"50%"},children:e.jsx("p",{style:{margin:0,fontSize:"14px"},children:"This is a native Popover API element. Click outside to dismiss."})})]})]})},u={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        ${f}
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
      `}),e.jsxs(x,{children:[e.jsx(g,{children:e.jsx("button",{style:{padding:"6px 8px",borderRadius:"6px",background:"#1f1f1f",color:"#7a7a7a",border:"1px solid #2a2a2a",cursor:"pointer",fontSize:"18px",lineHeight:1},children:"···"})}),e.jsxs(v,{style:{position:"fixed",top:"50%",left:"50%"},children:[e.jsx("button",{className:"menu-item",children:"✏️ Edit"}),e.jsx("button",{className:"menu-item",children:"📋 Duplicate"}),e.jsx("button",{className:"menu-item",children:"🔗 Copy link"}),e.jsx("div",{className:"menu-divider"}),e.jsx("button",{className:"menu-item danger",children:"🗑️ Delete"})]})]})]})},m={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        ${f}
        [popover] { max-width: 240px; }
      `}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{color:"#e6e6e6",fontSize:"14px"},children:"API key"}),e.jsxs(x,{children:[e.jsx(g,{children:e.jsx("button",{style:{width:"18px",height:"18px",borderRadius:"50%",background:"#1f1f1f",border:"1px solid #2a2a2a",color:"#7a7a7a",fontSize:"11px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:"?"})}),e.jsx(v,{style:{position:"fixed",top:"50%",left:"50%"},children:e.jsx("p",{style:{margin:0,fontSize:"13px",color:"#7a7a7a",lineHeight:"1.5"},children:"Your API key is used to authenticate requests. Keep it secret — treat it like a password."})})]})]})]})};var y,h,P;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <>
      <style>{basePopoverCSS}</style>
      <Popover>
        <PopoverTrigger>
          <button style={{
          padding: "8px 16px",
          borderRadius: "8px",
          background: "#1f1f1f",
          color: "#e6e6e6",
          border: "1px solid #2a2a2a",
          cursor: "pointer"
        }}>
            Open popover
          </button>
        </PopoverTrigger>
        <PopoverContent style={{
        position: "fixed",
        top: "50%",
        left: "50%"
      }}>
          <p style={{
          margin: 0,
          fontSize: "14px"
        }}>
            This is a native Popover API element. Click outside to dismiss.
          </p>
        </PopoverContent>
      </Popover>
    </>
}`,...(P=(h=l.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var k,j,w;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <>
      <style>{\`
        \${basePopoverCSS}
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
      \`}</style>
      <Popover>
        <PopoverTrigger>
          <button style={{
          padding: "6px 8px",
          borderRadius: "6px",
          background: "#1f1f1f",
          color: "#7a7a7a",
          border: "1px solid #2a2a2a",
          cursor: "pointer",
          fontSize: "18px",
          lineHeight: 1
        }}>
            ···
          </button>
        </PopoverTrigger>
        <PopoverContent style={{
        position: "fixed",
        top: "50%",
        left: "50%"
      }}>
          <button className="menu-item">✏️ Edit</button>
          <button className="menu-item">📋 Duplicate</button>
          <button className="menu-item">🔗 Copy link</button>
          <div className="menu-divider" />
          <button className="menu-item danger">🗑️ Delete</button>
        </PopoverContent>
      </Popover>
    </>
}`,...(w=(j=u.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var R,I,S;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <>
      <style>{\`
        \${basePopoverCSS}
        [popover] { max-width: 240px; }
      \`}</style>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "6px"
    }}>
        <span style={{
        color: "#e6e6e6",
        fontSize: "14px"
      }}>API key</span>
        <Popover>
          <PopoverTrigger>
            <button style={{
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            background: "#1f1f1f",
            border: "1px solid #2a2a2a",
            color: "#7a7a7a",
            fontSize: "11px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
              ?
            </button>
          </PopoverTrigger>
          <PopoverContent style={{
          position: "fixed",
          top: "50%",
          left: "50%"
        }}>
            <p style={{
            margin: 0,
            fontSize: "13px",
            color: "#7a7a7a",
            lineHeight: "1.5"
          }}>
              Your API key is used to authenticate requests. Keep it secret — treat it like a password.
            </p>
          </PopoverContent>
        </Popover>
      </div>
    </>
}`,...(S=(I=m.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const H=["Default","MenuPopover","InfoPopover"];export{l as Default,m as InfoPopover,u as MenuPopover,H as __namedExportsOrder,q as default};
