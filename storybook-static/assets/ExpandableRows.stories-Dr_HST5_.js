import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-CR-0IFbH.js";import{D as p}from"./DataGrid-C34Gf9dF.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";import"./index-CrV-QA3d.js";import"./index-CfyGkxxH.js";const c=s=>{const r=["Aria","Elias","Luna","Felix","Nova","Atlas","Iris","Jasper"],d=["Sterling","Blackwood","Montgomery","Fitzgerald"],a=["Design","Engineering","Marketing","Sales"];return Array.from({length:s},(w,t)=>({id:t+1,name:`${r[t%r.length]} ${d[t%d.length]}`,email:`${r[t%r.length].toLowerCase()}@example.com`,department:a[t%a.length],salary:6e4+t*1500,projects:t%10+1,performance:(t%50/10).toFixed(1),joinDate:new Date(2018+t%6,t%12,t%28+1).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}))},x=[{id:"id",key:"id",header:"ID",width:80},{id:"name",key:"name",header:"Name",width:200,enableSorting:!0},{id:"department",key:"department",header:"Department",width:150},{id:"email",key:"email",header:"Email",width:250},{id:"salary",key:"salary",header:"Salary",width:150,render:s=>`$${s.salary.toLocaleString()}`}],D={title:"Gridular/Features/Expandable Rows",component:p,parameters:{layout:"fullscreen"},decorators:[s=>e.jsx("div",{style:{padding:"2rem",fontFamily:'"DM Sans", system-ui, sans-serif',minHeight:"100vh",background:"#f5f5f5"},children:e.jsx(s,{})})]},o={render:()=>{const[s,r]=n.useState({}),d=n.useMemo(()=>c(50),[]);return e.jsxs("div",{style:{height:"700px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Expandable Rows"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed",children:"Click the chevron icon in the first column to expand row details."})]}),e.jsx(p,{gridId:"expandable-rows",columns:x,data:d,enableExpandableRows:!0,expandedRows:s,onExpandedRowsChange:r,renderExpandedRow:a=>e.jsx("div",{className:"space-y-2",children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold",children:"Email:"})," ",a.email]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold",children:"Projects:"})," ",a.projects]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold",children:"Performance:"})," ",a.performance,"/5.0"]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold",children:"Join Date:"})," ",a.joinDate]})]})}),virtualizationThreshold:100})]})}},i={render:()=>{const[s,r]=n.useState({}),d=n.useMemo(()=>c(200),[]);return e.jsxs("div",{style:{height:"700px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Expandable Rows + Virtualization"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed",children:"200 rows with expandable content. Virtualization handles dynamic heights automatically."})]}),e.jsx(p,{gridId:"expandable-virtualized",columns:x,data:d,enableExpandableRows:!0,expandedRows:s,onExpandedRowsChange:r,renderExpandedRow:a=>e.jsxs("div",{className:"p-4 space-y-3 bg-gradient-to-br from-copper/5 to-copper/10 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-charcoal mb-2",children:"Employee Details"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold text-copper",children:"Email:"}),e.jsx("p",{className:"text-charcoal",children:a.email})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold text-copper",children:"Projects:"}),e.jsxs("p",{className:"text-charcoal",children:[a.projects," active"]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold text-copper",children:"Performance:"}),e.jsxs("p",{className:"text-charcoal",children:[a.performance,"/5.0 ⭐"]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold text-copper",children:"Join Date:"}),e.jsx("p",{className:"text-charcoal",children:a.joinDate})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold text-copper",children:"Department:"}),e.jsx("p",{className:"text-charcoal",children:a.department})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold text-copper",children:"Salary:"}),e.jsxs("p",{className:"text-charcoal",children:["$",a.salary.toLocaleString()]})]})]})]}),virtualizationThreshold:20})]})}},l={render:()=>{const[s,r]=n.useState({}),d=n.useMemo(()=>c(50),[]);return e.jsxs("div",{style:{height:"700px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Fully Custom Styled Expansion"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed",children:"Complete control over expanded content styling - render whatever the hell you want!"})]}),e.jsx(p,{gridId:"custom-styled-expanded",columns:x,data:d,enableExpandableRows:!0,expandedRows:s,onExpandedRowsChange:r,expandedRowHeight:300,renderExpandedRow:a=>e.jsxs("div",{style:{padding:"24px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderTop:"2px solid #b87333",color:"white",minHeight:"250px",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("h3",{style:{fontSize:"1.5rem",fontWeight:"bold",margin:0},children:a.name}),e.jsx("span",{style:{padding:"4px 12px",background:"rgba(255,255,255,0.2)",borderRadius:"12px",fontSize:"0.875rem",fontWeight:"600"},children:a.department})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"20px"},children:[e.jsxs("div",{style:{padding:"16px",background:"rgba(255,255,255,0.15)",borderRadius:"8px",backdropFilter:"blur(10px)"},children:[e.jsx("div",{style:{fontSize:"0.75rem",opacity:.8,marginBottom:"4px"},children:"📧 Email"}),e.jsx("div",{style:{fontSize:"0.875rem",fontWeight:"500"},children:a.email})]}),e.jsxs("div",{style:{padding:"16px",background:"rgba(255,255,255,0.15)",borderRadius:"8px",backdropFilter:"blur(10px)"},children:[e.jsx("div",{style:{fontSize:"0.75rem",opacity:.8,marginBottom:"4px"},children:"💰 Salary"}),e.jsxs("div",{style:{fontSize:"0.875rem",fontWeight:"500"},children:["$",a.salary.toLocaleString()]})]}),e.jsxs("div",{style:{padding:"16px",background:"rgba(255,255,255,0.15)",borderRadius:"8px",backdropFilter:"blur(10px)"},children:[e.jsx("div",{style:{fontSize:"0.75rem",opacity:.8,marginBottom:"4px"},children:"⭐ Performance"}),e.jsxs("div",{style:{fontSize:"0.875rem",fontWeight:"500"},children:[a.performance,"/5.0"]})]})]}),e.jsxs("div",{style:{marginTop:"auto",paddingTop:"16px",borderTop:"1px solid rgba(255,255,255,0.2)",display:"flex",justifyContent:"space-between",fontSize:"0.875rem"},children:[e.jsxs("span",{children:["📅 Joined: ",a.joinDate]}),e.jsxs("span",{children:["📊 ",a.projects," Active Projects"]})]})]}),virtualizationThreshold:20})]})}};var m,h,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});
    const data = useMemo(() => generatePersonData(50), []);
    return <div style={{
      height: '700px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Expandable Rows</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Click the chevron icon in the first column to expand row details.
          </p>
        </div>
        <DataGrid gridId="expandable-rows" columns={peopleColumns} data={data} enableExpandableRows expandedRows={expandedRows} onExpandedRowsChange={setExpandedRows} renderExpandedRow={row => <div className="space-y-2">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="font-semibold">Email:</span> {row.email}
                </div>
                <div>
                  <span className="font-semibold">Projects:</span> {row.projects}
                </div>
                <div>
                  <span className="font-semibold">Performance:</span> {row.performance}/5.0
                </div>
                <div>
                  <span className="font-semibold">Join Date:</span> {row.joinDate}
                </div>
              </div>
            </div>} virtualizationThreshold={100} />
      </div>;
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,u,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});
    const data = useMemo(() => generatePersonData(200), []);
    return <div style={{
      height: '700px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Expandable Rows + Virtualization</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            200 rows with expandable content. Virtualization handles dynamic heights automatically.
          </p>
        </div>
        <DataGrid gridId="expandable-virtualized" columns={peopleColumns} data={data} enableExpandableRows expandedRows={expandedRows} onExpandedRowsChange={setExpandedRows} renderExpandedRow={row => <div className="p-4 space-y-3 bg-gradient-to-br from-copper/5 to-copper/10 rounded-lg">
              <h4 className="font-bold text-charcoal mb-2">Employee Details</h4>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-copper">Email:</span>
                  <p className="text-charcoal">{row.email}</p>
                </div>
                <div>
                  <span className="font-semibold text-copper">Projects:</span>
                  <p className="text-charcoal">{row.projects} active</p>
                </div>
                <div>
                  <span className="font-semibold text-copper">Performance:</span>
                  <p className="text-charcoal">{row.performance}/5.0 ⭐</p>
                </div>
                <div>
                  <span className="font-semibold text-copper">Join Date:</span>
                  <p className="text-charcoal">{row.joinDate}</p>
                </div>
                <div>
                  <span className="font-semibold text-copper">Department:</span>
                  <p className="text-charcoal">{row.department}</p>
                </div>
                <div>
                  <span className="font-semibold text-copper">Salary:</span>
                  <p className="text-charcoal">\${row.salary.toLocaleString()}</p>
                </div>
              </div>
            </div>} virtualizationThreshold={20} />
      </div>;
  }
}`,...(v=(u=i.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var y,f,j;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});
    const data = useMemo(() => generatePersonData(50), []);
    return <div style={{
      height: '700px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Fully Custom Styled Expansion</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Complete control over expanded content styling - render whatever the hell you want!
          </p>
        </div>
        <DataGrid gridId="custom-styled-expanded" columns={peopleColumns} data={data} enableExpandableRows expandedRows={expandedRows} onExpandedRowsChange={setExpandedRows} expandedRowHeight={300} renderExpandedRow={row => <div style={{
        padding: '24px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderTop: '2px solid #b87333',
        color: 'white',
        minHeight: '250px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
              <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
                <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            margin: 0
          }}>
                  {row.name}
                </h3>
                <span style={{
            padding: '4px 12px',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '12px',
            fontSize: '0.875rem',
            fontWeight: '600'
          }}>
                  {row.department}
                </span>
              </div>

              <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px'
        }}>
                <div style={{
            padding: '16px',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '8px',
            backdropFilter: 'blur(10px)'
          }}>
                  <div style={{
              fontSize: '0.75rem',
              opacity: 0.8,
              marginBottom: '4px'
            }}>
                    📧 Email
                  </div>
                  <div style={{
              fontSize: '0.875rem',
              fontWeight: '500'
            }}>{row.email}</div>
                </div>

                <div style={{
            padding: '16px',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '8px',
            backdropFilter: 'blur(10px)'
          }}>
                  <div style={{
              fontSize: '0.75rem',
              opacity: 0.8,
              marginBottom: '4px'
            }}>
                    💰 Salary
                  </div>
                  <div style={{
              fontSize: '0.875rem',
              fontWeight: '500'
            }}>
                    \${row.salary.toLocaleString()}
                  </div>
                </div>

                <div style={{
            padding: '16px',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '8px',
            backdropFilter: 'blur(10px)'
          }}>
                  <div style={{
              fontSize: '0.75rem',
              opacity: 0.8,
              marginBottom: '4px'
            }}>
                    ⭐ Performance
                  </div>
                  <div style={{
              fontSize: '0.875rem',
              fontWeight: '500'
            }}>
                    {row.performance}/5.0
                  </div>
                </div>
              </div>

              <div style={{
          marginTop: 'auto',
          paddingTop: '16px',
          borderTop: '1px solid rgba(255,255,255,0.2)',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.875rem'
        }}>
                <span>📅 Joined: {row.joinDate}</span>
                <span>📊 {row.projects} Active Projects</span>
              </div>
            </div>} virtualizationThreshold={20} />
      </div>;
  }
}`,...(j=(f=l.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const C=["BasicExpanded","ExpandedWithVirtualization","CustomStyledExpanded"];export{o as BasicExpanded,l as CustomStyledExpanded,i as ExpandedWithVirtualization,C as __namedExportsOrder,D as default};
