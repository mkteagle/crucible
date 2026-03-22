import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-CR-0IFbH.js";import{D as n}from"./DataGrid-C34Gf9dF.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";import"./index-CrV-QA3d.js";import"./index-CfyGkxxH.js";const c=r=>{const a=["Alice Johnson","Bob Smith","Carol Davis","David Wilson"],s=["Engineering","Marketing","Sales","Design"];return Array.from({length:r},(p,t)=>({id:t+1,name:a[t%a.length],department:s[t%s.length],email:`${a[t%a.length].toLowerCase().replace(" ",".")}@company.com`,phone:`+1 (555) ${String(t).padStart(3,"0")}-${String(t*11).padStart(4,"0")}`,role:`Role ${t%5+1}`}))},u=[{id:"id",key:"id",header:"ID",width:80,enableSorting:!0},{id:"name",key:"name",header:"Name",width:200,enableSorting:!0},{id:"department",key:"department",header:"Department",width:150},{id:"email",key:"email",header:"Email",width:250},{id:"phone",key:"phone",header:"Phone",width:180},{id:"role",key:"role",header:"Role",width:150}],M={title:"Gridular/Features/Column Management",component:n,parameters:{layout:"fullscreen"},decorators:[r=>e.jsx("div",{style:{padding:"2rem",fontFamily:'"DM Sans", system-ui, sans-serif',minHeight:"100vh",background:"#f5f5f5"},children:e.jsx(r,{})})]},d={render:()=>{const[r,a]=o.useState({}),s=o.useMemo(()=>c(50),[]);return e.jsxs("div",{style:{height:"600px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Column Resizing"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed",children:"Drag the column edges to resize them. Widths are persisted automatically."})]}),e.jsx(n,{gridId:"column-resize",columns:u,data:s,enableColumnResize:!0,columnWidths:r,onColumnWidthsChange:a,enableSorting:!0})]})}},l={render:()=>{const[r,a]=o.useState([]),s=o.useMemo(()=>c(50),[]);return e.jsxs("div",{style:{height:"600px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Column Reordering"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed",children:"Drag column headers to reorder them. Order is persisted automatically."})]}),e.jsx(n,{gridId:"column-reorder",columns:u,data:s,enableColumnReorder:!0,columnOrder:r,onColumnOrderChange:a,enableSorting:!0})]})}},m={render:()=>{const r=o.useMemo(()=>c(50),[]);return e.jsxs("div",{style:{height:"600px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Show/Hide Columns"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed",children:'Click the "Columns" button to show/hide individual columns. Settings are persisted.'})]}),e.jsx(n,{gridId:"show-hide-columns",columns:u,data:r,enableSorting:!0})]})}},i={render:()=>{const[r,a]=o.useState({}),[s,p]=o.useState([]),t=o.useMemo(()=>c(50),[]);return e.jsxs("div",{style:{height:"600px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"All Column Features"}),e.jsxs("p",{className:"font-ui text-sm text-gray-600 space-y-1",children:[e.jsx("span",{className:"block",children:"• Drag edges to resize columns"}),e.jsx("span",{className:"block",children:"• Drag headers to reorder columns"}),e.jsx("span",{className:"block",children:"• Use Columns menu to show/hide columns"}),e.jsx("span",{className:"block",children:"• Click Reset to restore defaults"})]})]}),e.jsx(n,{gridId:"all-column-features",columns:u,data:t,enableColumnResize:!0,columnWidths:r,onColumnWidthsChange:a,enableColumnReorder:!0,columnOrder:s,onColumnOrderChange:p,enableSorting:!0})]})}};var h,g,x;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [columnWidths, setColumnWidths] = useState<Record<string, number>>({});
    const data = useMemo(() => generateData(50), []);
    return <div style={{
      height: '600px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Column Resizing</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Drag the column edges to resize them. Widths are persisted automatically.
          </p>
        </div>
        <DataGrid gridId="column-resize" columns={columns} data={data} enableColumnResize columnWidths={columnWidths} onColumnWidthsChange={setColumnWidths} enableSorting />
      </div>;
  }
}`,...(x=(g=d.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,C,_;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [columnOrder, setColumnOrder] = useState<string[]>([]);
    const data = useMemo(() => generateData(50), []);
    return <div style={{
      height: '600px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Column Reordering</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Drag column headers to reorder them. Order is persisted automatically.
          </p>
        </div>
        <DataGrid gridId="column-reorder" columns={columns} data={data} enableColumnReorder columnOrder={columnOrder} onColumnOrderChange={setColumnOrder} enableSorting />
      </div>;
  }
}`,...(_=(C=l.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var y,k,S;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const data = useMemo(() => generateData(50), []);
    return <div style={{
      height: '600px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Show/Hide Columns</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Click the "Columns" button to show/hide individual columns. Settings are persisted.
          </p>
        </div>
        <DataGrid gridId="show-hide-columns" columns={columns} data={data} enableSorting />
      </div>;
  }
}`,...(S=(k=m.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var w,N,v;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [columnWidths, setColumnWidths] = useState<Record<string, number>>({});
    const [columnOrder, setColumnOrder] = useState<string[]>([]);
    const data = useMemo(() => generateData(50), []);
    return <div style={{
      height: '600px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">All Column Features</h3>
          <p className="font-ui text-sm text-gray-600 space-y-1">
            <span className="block">• Drag edges to resize columns</span>
            <span className="block">• Drag headers to reorder columns</span>
            <span className="block">• Use Columns menu to show/hide columns</span>
            <span className="block">• Click Reset to restore defaults</span>
          </p>
        </div>
        <DataGrid gridId="all-column-features" columns={columns} data={data} enableColumnResize columnWidths={columnWidths} onColumnWidthsChange={setColumnWidths} enableColumnReorder columnOrder={columnOrder} onColumnOrderChange={setColumnOrder} enableSorting />
      </div>;
  }
}`,...(v=(N=i.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};const I=["ColumnResize","ColumnReorder","ShowHideColumns","AllColumnFeatures"];export{i as AllColumnFeatures,l as ColumnReorder,d as ColumnResize,m as ShowHideColumns,I as __namedExportsOrder,M as default};
