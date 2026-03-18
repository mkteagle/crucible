import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i,R as T}from"./index-JhL3uwfD.js";const N=i.createContext(null);function y(){const o=i.useContext(N);if(!o)throw new Error("useDialogContext must be used within <Dialog>");return o}function g({children:o,defaultOpen:a=!1,onOpenChange:n}){const c=i.useRef(null),[s,d]=i.useState(a),m=i.useCallback(()=>{var t;(t=c.current)==null||t.showModal(),d(!0),n==null||n(!0)},[n]),r=i.useCallback(()=>{var t;(t=c.current)==null||t.close(),d(!1),n==null||n(!1)},[n]);return e.jsx(N.Provider,{value:{dialogRef:c,isOpen:s,open:m,close:r},children:o})}g.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};function f({children:o}){const{open:a}=y();return T.cloneElement(o,{onClick:a})}f.__docgenInfo={description:"",methods:[],displayName:"DialogTrigger",props:{children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement<{ onClick?: React.MouseEventHandler }>",elements:[{name:"signature",type:"object",raw:"{ onClick?: React.MouseEventHandler }",signature:{properties:[{key:"onClick",value:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler",required:!1}}]}}]},description:""}}};function b({children:o,closeOnBackdrop:a=!0,onClick:n,...c}){const{dialogRef:s,close:d}=y();i.useEffect(()=>{const r=s.current;if(!r)return;const t=()=>d();return r.addEventListener("close",t),()=>r.removeEventListener("close",t)},[s,d]);function m(r){a&&r.target===s.current&&d(),n==null||n(r)}return e.jsx("dialog",{ref:s,onClick:m,...c,children:o})}b.__docgenInfo={description:"",methods:[],displayName:"DialogContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},closeOnBackdrop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};function l({children:o}){const{close:a}=y();return T.cloneElement(o,{onClick:a})}l.__docgenInfo={description:"",methods:[],displayName:"DialogClose",props:{children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement<{ onClick?: React.MouseEventHandler }>",elements:[{name:"signature",type:"object",raw:"{ onClick?: React.MouseEventHandler }",signature:{properties:[{key:"onClick",value:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler",required:!1}}]}}]},description:""}}};const q={title:"Primitives/Dialog",parameters:{layout:"centered",docs:{description:{component:"Style-agnostic Dialog primitive built on the native `<dialog>` element. Bring your own styles."}}},tags:["autodocs"]},h={padding:"2rem",borderRadius:"12px",border:"1px solid #2a2a2a",background:"#161616",color:"#e6e6e6",minWidth:"360px",maxWidth:"480px"},j=`
  dialog::backdrop {
    background: rgba(0,0,0,0.7);
    backdrop-filter: blur(4px);
  }
`,p={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:j}),e.jsxs(g,{children:[e.jsx(f,{children:e.jsx("button",{style:{padding:"8px 16px",borderRadius:"8px",background:"#f97316",color:"#fff",border:"none",cursor:"pointer"},children:"Open Dialog"})}),e.jsxs(b,{style:h,children:[e.jsx("h2",{style:{margin:"0 0 8px",fontSize:"18px",fontWeight:600},children:"Dialog title"}),e.jsxs("p",{style:{margin:"0 0 24px",color:"#7a7a7a",fontSize:"14px"},children:["This is a native ",e.jsx("code",{children:"<dialog>"})," element with no imposed styles. Press Escape or click the backdrop to close."]}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px"},children:[e.jsx(l,{children:e.jsx("button",{style:{padding:"8px 16px",borderRadius:"8px",background:"#1f1f1f",color:"#e6e6e6",border:"1px solid #2a2a2a",cursor:"pointer"},children:"Cancel"})}),e.jsx(l,{children:e.jsx("button",{style:{padding:"8px 16px",borderRadius:"8px",background:"#f97316",color:"#fff",border:"none",cursor:"pointer"},children:"Confirm"})})]})]})]})]})},x={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:j}),e.jsxs(g,{children:[e.jsx(f,{children:e.jsx("button",{style:{padding:"8px 16px",borderRadius:"8px",background:"#ef4444",color:"#fff",border:"none",cursor:"pointer"},children:"Delete item"})}),e.jsxs(b,{style:h,children:[e.jsx("h2",{style:{margin:"0 0 8px",fontSize:"18px",fontWeight:600},children:"Delete item?"}),e.jsx("p",{style:{margin:"0 0 24px",color:"#7a7a7a",fontSize:"14px"},children:"This action cannot be undone. The item will be permanently removed."}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px"},children:[e.jsx(l,{children:e.jsx("button",{style:{padding:"8px 16px",borderRadius:"8px",background:"#1f1f1f",color:"#e6e6e6",border:"1px solid #2a2a2a",cursor:"pointer"},children:"Cancel"})}),e.jsx(l,{children:e.jsx("button",{style:{padding:"8px 16px",borderRadius:"8px",background:"#ef4444",color:"#fff",border:"none",cursor:"pointer"},children:"Delete"})})]})]})]})]})},u={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:j}),e.jsxs(g,{children:[e.jsx(f,{children:e.jsx("button",{style:{padding:"8px 16px",borderRadius:"8px",background:"#1f1f1f",color:"#e6e6e6",border:"1px solid #2a2a2a",cursor:"pointer"},children:"Edit profile"})}),e.jsxs(b,{style:h,children:[e.jsx("h2",{style:{margin:"0 0 20px",fontSize:"18px",fontWeight:600},children:"Edit profile"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginBottom:"24px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"12px",color:"#7a7a7a",marginBottom:"4px"},children:"Name"}),e.jsx("input",{defaultValue:"Jane Smith",style:{width:"100%",padding:"8px 12px",borderRadius:"8px",background:"#0d0d0d",border:"1px solid #2a2a2a",color:"#e6e6e6",fontSize:"14px",boxSizing:"border-box"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"12px",color:"#7a7a7a",marginBottom:"4px"},children:"Email"}),e.jsx("input",{defaultValue:"jane@example.com",style:{width:"100%",padding:"8px 12px",borderRadius:"8px",background:"#0d0d0d",border:"1px solid #2a2a2a",color:"#e6e6e6",fontSize:"14px",boxSizing:"border-box"}})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px"},children:[e.jsx(l,{children:e.jsx("button",{style:{padding:"8px 16px",borderRadius:"8px",background:"#1f1f1f",color:"#e6e6e6",border:"1px solid #2a2a2a",cursor:"pointer"},children:"Cancel"})}),e.jsx(l,{children:e.jsx("button",{style:{padding:"8px 16px",borderRadius:"8px",background:"#f97316",color:"#fff",border:"none",cursor:"pointer"},children:"Save changes"})})]})]})]})]})};var D,R,v;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <>
      <style>{overlayStyle}</style>
      <Dialog>
        <DialogTrigger>
          <button style={{
          padding: "8px 16px",
          borderRadius: "8px",
          background: "#f97316",
          color: "#fff",
          border: "none",
          cursor: "pointer"
        }}>
            Open Dialog
          </button>
        </DialogTrigger>
        <DialogContent style={dialogStyle}>
          <h2 style={{
          margin: "0 0 8px",
          fontSize: "18px",
          fontWeight: 600
        }}>Dialog title</h2>
          <p style={{
          margin: "0 0 24px",
          color: "#7a7a7a",
          fontSize: "14px"
        }}>
            This is a native <code>&lt;dialog&gt;</code> element with no imposed styles. Press Escape or click the backdrop to close.
          </p>
          <div style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "8px"
        }}>
            <DialogClose>
              <button style={{
              padding: "8px 16px",
              borderRadius: "8px",
              background: "#1f1f1f",
              color: "#e6e6e6",
              border: "1px solid #2a2a2a",
              cursor: "pointer"
            }}>
                Cancel
              </button>
            </DialogClose>
            <DialogClose>
              <button style={{
              padding: "8px 16px",
              borderRadius: "8px",
              background: "#f97316",
              color: "#fff",
              border: "none",
              cursor: "pointer"
            }}>
                Confirm
              </button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
}`,...(v=(R=p.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var k,C,S;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <>
      <style>{overlayStyle}</style>
      <Dialog>
        <DialogTrigger>
          <button style={{
          padding: "8px 16px",
          borderRadius: "8px",
          background: "#ef4444",
          color: "#fff",
          border: "none",
          cursor: "pointer"
        }}>
            Delete item
          </button>
        </DialogTrigger>
        <DialogContent style={dialogStyle}>
          <h2 style={{
          margin: "0 0 8px",
          fontSize: "18px",
          fontWeight: 600
        }}>Delete item?</h2>
          <p style={{
          margin: "0 0 24px",
          color: "#7a7a7a",
          fontSize: "14px"
        }}>
            This action cannot be undone. The item will be permanently removed.
          </p>
          <div style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "8px"
        }}>
            <DialogClose>
              <button style={{
              padding: "8px 16px",
              borderRadius: "8px",
              background: "#1f1f1f",
              color: "#e6e6e6",
              border: "1px solid #2a2a2a",
              cursor: "pointer"
            }}>
                Cancel
              </button>
            </DialogClose>
            <DialogClose>
              <button style={{
              padding: "8px 16px",
              borderRadius: "8px",
              background: "#ef4444",
              color: "#fff",
              border: "none",
              cursor: "pointer"
            }}>
                Delete
              </button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
}`,...(S=(C=x.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var E,w,z;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <>
      <style>{overlayStyle}</style>
      <Dialog>
        <DialogTrigger>
          <button style={{
          padding: "8px 16px",
          borderRadius: "8px",
          background: "#1f1f1f",
          color: "#e6e6e6",
          border: "1px solid #2a2a2a",
          cursor: "pointer"
        }}>
            Edit profile
          </button>
        </DialogTrigger>
        <DialogContent style={dialogStyle}>
          <h2 style={{
          margin: "0 0 20px",
          fontSize: "18px",
          fontWeight: 600
        }}>Edit profile</h2>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginBottom: "24px"
        }}>
            <div>
              <label style={{
              display: "block",
              fontSize: "12px",
              color: "#7a7a7a",
              marginBottom: "4px"
            }}>Name</label>
              <input defaultValue="Jane Smith" style={{
              width: "100%",
              padding: "8px 12px",
              borderRadius: "8px",
              background: "#0d0d0d",
              border: "1px solid #2a2a2a",
              color: "#e6e6e6",
              fontSize: "14px",
              boxSizing: "border-box"
            }} />
            </div>
            <div>
              <label style={{
              display: "block",
              fontSize: "12px",
              color: "#7a7a7a",
              marginBottom: "4px"
            }}>Email</label>
              <input defaultValue="jane@example.com" style={{
              width: "100%",
              padding: "8px 12px",
              borderRadius: "8px",
              background: "#0d0d0d",
              border: "1px solid #2a2a2a",
              color: "#e6e6e6",
              fontSize: "14px",
              boxSizing: "border-box"
            }} />
            </div>
          </div>
          <div style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "8px"
        }}>
            <DialogClose>
              <button style={{
              padding: "8px 16px",
              borderRadius: "8px",
              background: "#1f1f1f",
              color: "#e6e6e6",
              border: "1px solid #2a2a2a",
              cursor: "pointer"
            }}>
                Cancel
              </button>
            </DialogClose>
            <DialogClose>
              <button style={{
              padding: "8px 16px",
              borderRadius: "8px",
              background: "#f97316",
              color: "#fff",
              border: "none",
              cursor: "pointer"
            }}>
                Save changes
              </button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
}`,...(z=(w=u.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const M=["Default","Destructive","WithForm"];export{p as Default,x as Destructive,u as WithForm,M as __namedExportsOrder,q as default};
