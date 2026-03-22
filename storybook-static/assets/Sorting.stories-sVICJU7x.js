import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-CR-0IFbH.js";import{D as i}from"./DataGrid-C34Gf9dF.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";import"./index-CrV-QA3d.js";import"./index-CfyGkxxH.js";const u=t=>{const r=["Alice","Bob","Carol","David","Eve"],a=["Engineering","Marketing","Sales"];return Array.from({length:t},(h,o)=>({id:o+1,name:r[o%r.length],department:a[o%a.length],age:25+o%20,score:Math.floor(Math.random()*100)}))},S=[{id:"id",key:"id",header:"ID",width:80,enableSorting:!0},{id:"name",key:"name",header:"Name",width:200,enableSorting:!0},{id:"department",key:"department",header:"Department",width:200,enableSorting:!0},{id:"age",key:"age",header:"Age",width:120,enableSorting:!0},{id:"score",key:"score",header:"Score",width:120,enableSorting:!0}],j={title:"Gridular/Features/Sorting",component:i,parameters:{layout:"fullscreen"},decorators:[t=>e.jsx("div",{style:{padding:"2rem",background:"#f5f5f5",minHeight:"100vh"},children:e.jsx(t,{})})]},s={render:()=>{const[t,r]=d.useState(null),a=d.useMemo(()=>u(50),[]);return e.jsxs("div",{style:{height:"600px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Basic Sorting"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed",children:"Click column headers to sort. Click again to reverse, and once more to clear sorting."}),t&&e.jsxs("p",{className:"font-ui text-sm text-copper mt-2",children:["Sorted by: ",t.column," (",t.direction,")"]})]}),e.jsx(i,{columns:S,data:a,enableSorting:!0,sortState:t,onSortChange:r,gridId:"basic-sorting"})]})}},n={render:()=>{const[t,r]=d.useState({column:"name",direction:"asc"}),a=d.useMemo(()=>u(50),[]);return e.jsxs("div",{style:{height:"600px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Default Sorted"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed",children:"Grid starts with data sorted by Name in ascending order."})]}),e.jsx(i,{columns:S,data:a,enableSorting:!0,sortState:t,onSortChange:r,gridId:"default-sorted"})]})}};var c,l,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [sortState, setSortState] = useState<SortState | null>(null);
    const data = useMemo(() => generateData(50), []);
    return <div style={{
      height: '600px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Basic Sorting</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Click column headers to sort. Click again to reverse, and once more to clear sorting.
          </p>
          {sortState && <p className="font-ui text-sm text-copper mt-2">
              Sorted by: {sortState.column} ({sortState.direction})
            </p>}
        </div>
        <DataGrid columns={columns} data={data} enableSorting sortState={sortState} onSortChange={setSortState} gridId="basic-sorting" />
      </div>;
  }
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var g,p,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [sortState, setSortState] = useState<SortState | null>({
      column: 'name',
      direction: 'asc'
    });
    const data = useMemo(() => generateData(50), []);
    return <div style={{
      height: '600px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Default Sorted</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Grid starts with data sorted by Name in ascending order.
          </p>
        </div>
        <DataGrid columns={columns} data={data} enableSorting sortState={sortState} onSortChange={setSortState} gridId="default-sorted" />
      </div>;
  }
}`,...(x=(p=n.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const w=["BasicSorting","DefaultSorted"];export{s as BasicSorting,n as DefaultSorted,w as __namedExportsOrder,j as default};
