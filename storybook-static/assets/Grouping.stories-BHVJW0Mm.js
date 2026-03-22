import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-CR-0IFbH.js";import{D as u}from"./DataGrid-C34Gf9dF.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";import"./index-CrV-QA3d.js";import"./index-CfyGkxxH.js";const d=t=>{const r=["Aria","Elias","Luna","Felix","Nova","Atlas","Iris","Jasper","Stella","Oscar"],a=["Sterling","Blackwood","Montgomery","Fitzgerald","Ashworth"],l=["Design","Engineering","Marketing","Sales","Operations"],m=["Active","On Leave","Remote","In Office"];return Array.from({length:t},(w,n)=>({id:n+1,name:`${r[n%r.length]} ${a[n%a.length]}`,email:`${r[n%r.length].toLowerCase()}@example.com`,department:l[n%l.length],status:m[n%m.length],salary:6e4+n*1e3}))},g=[{id:"id",key:"id",header:"ID",width:80,enableSorting:!0},{id:"name",key:"name",header:"Name",width:200,enableSorting:!0},{id:"department",key:"department",header:"Department",width:150,enableSorting:!0,enableGrouping:!0},{id:"status",key:"status",header:"Status",width:120,enableSorting:!0,enableGrouping:!0},{id:"email",key:"email",header:"Email",width:250},{id:"salary",key:"salary",header:"Salary",width:150,enableSorting:!0,render:t=>`$${t.salary.toLocaleString()}`}],M={title:"Gridular/Features/Grouping",component:u,parameters:{layout:"fullscreen"},decorators:[t=>e.jsx("div",{style:{padding:"2rem",fontFamily:'"DM Sans", system-ui, sans-serif',minHeight:"100vh",background:"#f5f5f5"},children:e.jsx(t,{})})]},s={render:()=>{const[t,r]=o.useState({groupByColumns:["department"],expandedGroups:{}}),a=o.useMemo(()=>d(100),[]);return e.jsxs("div",{style:{height:"700px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Data Grouping"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed",children:'Group data by Department. Click group headers to expand/collapse. Use the "Group by" button to change grouping.'})]}),e.jsx(u,{gridId:"grouping-example",columns:g,data:a,enableSorting:!0,enableGrouping:!0,groupingState:t,onGroupingChange:r,virtualizationThreshold:20})]})}},i={render:()=>{const[t,r]=o.useState({groupByColumns:["department","status"],expandedGroups:{}}),a=o.useMemo(()=>d(100),[]);return e.jsxs("div",{style:{height:"700px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Multi-Level Grouping"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed",children:"Group by Department, then by Status. Creates a hierarchical structure with nested groups."})]}),e.jsx(u,{gridId:"multi-level-grouping",columns:g,data:a,enableSorting:!0,enableGrouping:!0,groupingState:t,onGroupingChange:r,virtualizationThreshold:20})]})}},p={render:()=>{const[t,r]=o.useState({groupByColumns:["department"],expandedGroups:{}}),a=o.useMemo(()=>d(500),[]);return e.jsxs("div",{style:{height:"700px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Grouping + Virtualization (500 rows)"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed",children:"Large dataset with grouping enabled. Virtualization handles both group rows and data rows efficiently."})]}),e.jsx(u,{gridId:"grouping-virtualized",columns:g,data:a,enableSorting:!0,enableGrouping:!0,groupingState:t,onGroupingChange:r,virtualizationThreshold:20})]})}};var c,x,h;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [groupingState, setGroupingState] = useState<GroupingState>({
      groupByColumns: ['department'],
      expandedGroups: {}
    });
    const data = useMemo(() => generatePersonData(100), []);
    return <div style={{
      height: '700px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Data Grouping</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Group data by Department. Click group headers to expand/collapse. Use the "Group by" button to change grouping.
          </p>
        </div>
        <DataGrid gridId="grouping-example" columns={peopleColumns} data={data} enableSorting enableGrouping groupingState={groupingState} onGroupingChange={setGroupingState} virtualizationThreshold={20} />
      </div>;
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,G,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [groupingState, setGroupingState] = useState<GroupingState>({
      groupByColumns: ['department', 'status'],
      expandedGroups: {}
    });
    const data = useMemo(() => generatePersonData(100), []);
    return <div style={{
      height: '700px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Multi-Level Grouping</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Group by Department, then by Status. Creates a hierarchical structure with nested groups.
          </p>
        </div>
        <DataGrid gridId="multi-level-grouping" columns={peopleColumns} data={data} enableSorting enableGrouping groupingState={groupingState} onGroupingChange={setGroupingState} virtualizationThreshold={20} />
      </div>;
  }
}`,...(S=(G=i.parameters)==null?void 0:G.docs)==null?void 0:S.source}}};var y,_,v;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [groupingState, setGroupingState] = useState<GroupingState>({
      groupByColumns: ['department'],
      expandedGroups: {}
    });
    const data = useMemo(() => generatePersonData(500), []);
    return <div style={{
      height: '700px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Grouping + Virtualization (500 rows)</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Large dataset with grouping enabled. Virtualization handles both group rows and data rows efficiently.
          </p>
        </div>
        <DataGrid gridId="grouping-virtualized" columns={peopleColumns} data={data} enableSorting enableGrouping groupingState={groupingState} onGroupingChange={setGroupingState} virtualizationThreshold={20} />
      </div>;
  }
}`,...(v=(_=p.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const L=["BasicGrouping","MultiLevelGrouping","GroupingWithVirtualization"];export{s as BasicGrouping,p as GroupingWithVirtualization,i as MultiLevelGrouping,L as __namedExportsOrder,M as default};
