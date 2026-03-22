import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-CR-0IFbH.js";import{D as h}from"./DataGrid-C34Gf9dF.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";import"./index-CrV-QA3d.js";import"./index-CfyGkxxH.js";const c=a=>{const t=["Aria","Elias","Luna","Felix","Nova","Atlas","Iris","Jasper","Stella","Oscar"],n=["Sterling","Blackwood","Montgomery","Fitzgerald","Ashworth","Kingsley","Beaumont","Hartwell","Sinclair","Windsor"],o=["Design","Engineering","Marketing","Sales","Operations"],i=["Active","On Leave","Remote","In Office"];return Array.from({length:a},(l,e)=>({id:e+1,name:`${t[e%t.length]} ${n[e%n.length]}`,email:`${t[e%t.length].toLowerCase()}.${n[e%n.length].toLowerCase()}@example.com`,department:o[e%o.length],status:i[e%i.length],salary:6e4+Math.floor(Math.random()*14e4),joinDate:new Date(2018+e%6,e%12,e%28+1).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),projects:Math.floor(Math.random()*10)+1,performance:(Math.random()*5).toFixed(1)}))},u=[{id:"id",key:"id",header:"ID",width:80,enableSorting:!0},{id:"name",key:"name",header:"Full Name",width:200,enableSorting:!0,enableFiltering:!0},{id:"email",key:"email",header:"Email Address",width:280,enableFiltering:!0},{id:"department",key:"department",header:"Department",width:150,enableSorting:!0,enableFiltering:!0,enableGrouping:!0},{id:"status",key:"status",header:"Status",width:120,enableSorting:!0,enableGrouping:!0},{id:"salary",key:"salary",header:"Annual Salary",width:150,enableSorting:!0,render:a=>`$${a.salary.toLocaleString()}`},{id:"joinDate",key:"joinDate",header:"Join Date",width:140},{id:"projects",key:"projects",header:"Projects",width:100,enableSorting:!0}],z={title:"Gridular/Features/Pagination",component:h,parameters:{layout:"fullscreen"},decorators:[a=>r.jsx("div",{style:{padding:"2rem",fontFamily:'"DM Sans", system-ui, sans-serif',minHeight:"100vh",background:"#f5f5f5"},children:r.jsx(a,{})})]},s={render:()=>{const[a,t]=d.useState(0),[n,o]=d.useState(20),i=d.useMemo(()=>c(1e3),[]);return r.jsxs("div",{style:{height:"700px"},children:[r.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[r.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Pagination"}),r.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed",children:"Grid with pagination controls. Auto-virtualizes when page size exceeds threshold."})]}),r.jsx(h,{gridId:"pagination-example",columns:u,data:i,pagination:{pageIndex:a,pageSize:n,totalRows:i.length,onPageChange:t,onPageSizeChange:l=>{o(l),t(0)},pageSizeOptions:[10,20,50,100]},enableSorting:!0})]})}};var g,p,m;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const data = useMemo(() => generatePersonData(1000), []);
    return <div style={{
      height: '700px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Pagination</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Grid with pagination controls. Auto-virtualizes when page size exceeds threshold.
          </p>
        </div>
        <DataGrid gridId="pagination-example" columns={peopleColumns} data={data} pagination={{
        pageIndex,
        pageSize,
        totalRows: data.length,
        onPageChange: setPageIndex,
        onPageSizeChange: size => {
          setPageSize(size);
          setPageIndex(0);
        },
        pageSizeOptions: [10, 20, 50, 100]
      }} enableSorting />
      </div>;
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const j=["WithPagination"];export{s as WithPagination,j as __namedExportsOrder,z as default};
