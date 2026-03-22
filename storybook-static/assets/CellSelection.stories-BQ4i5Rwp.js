import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-CR-0IFbH.js";import{D as p}from"./DataGrid-C34Gf9dF.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";import"./index-CrV-QA3d.js";import"./index-CfyGkxxH.js";const u=e=>{const r=["Aria","Elias","Luna","Felix","Nova","Atlas","Iris","Jasper","Stella","Oscar"],a=["Sterling","Blackwood","Montgomery","Fitzgerald","Ashworth"],n=["Design","Engineering","Marketing","Sales","Operations"];return Array.from({length:e},(o,t)=>({id:t+1,name:`${r[t%r.length]} ${a[t%a.length]}`,email:`${r[t%r.length].toLowerCase()}@example.com`,department:n[t%n.length],salary:6e4+t*1e3,projects:t%10+1}))},x=[{id:"id",key:"id",header:"ID",width:80},{id:"name",key:"name",header:"Name",width:200},{id:"email",key:"email",header:"Email",width:250},{id:"department",key:"department",header:"Department",width:150},{id:"salary",key:"salary",header:"Salary",width:150,render:e=>`$${e.salary.toLocaleString()}`},{id:"projects",key:"projects",header:"Projects",width:100}],k={title:"Gridular/Features/Cell Selection",component:p,parameters:{layout:"fullscreen"},decorators:[e=>l.jsx("div",{style:{padding:"2rem",fontFamily:'"DM Sans", system-ui, sans-serif',minHeight:"100vh",background:"#f5f5f5"},children:l.jsx(e,{})})]},s={render:()=>{const[e,r]=d.useState(null),a=d.useMemo(()=>u(50),[]);return l.jsxs("div",{style:{height:"700px"},children:[l.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[l.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Cell Selection"}),l.jsxs("p",{className:"text-[13px] text-gray-600 leading-relaxed",children:["Click individual cells to select them. Selected cell: ",e?`Row ${e.rowId}, Column ${e.columnId}`:"None"]})]}),l.jsx(p,{gridId:"cell-selection",columns:x,data:a,enableCellSelection:!0,selectedCell:e,onCellSelect:(n,o)=>r({rowId:n,columnId:o})})]})}};var c,i,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [selectedCell, setSelectedCell] = useState<{
      rowId: string;
      columnId: string;
    } | null>(null);
    const data = useMemo(() => generatePersonData(50), []);
    return <div style={{
      height: '700px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Cell Selection</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Click individual cells to select them. Selected cell: {selectedCell ? \`Row \${selectedCell.rowId}, Column \${selectedCell.columnId}\` : 'None'}
          </p>
        </div>
        <DataGrid gridId="cell-selection" columns={peopleColumns} data={data} enableCellSelection selectedCell={selectedCell} onCellSelect={(rowId, columnId) => setSelectedCell({
        rowId,
        columnId
      })} />
      </div>;
  }
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const _=["CellSelection"];export{s as CellSelection,_ as __namedExportsOrder,k as default};
