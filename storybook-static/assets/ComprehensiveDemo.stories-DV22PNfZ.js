import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-CR-0IFbH.js";import{D as b}from"./DataGrid-C34Gf9dF.js";/* empty css              */import{D as f,C as R,S as D}from"./star-D-q6iJqx.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CrV-QA3d.js";import"./index-CfyGkxxH.js";const M=a=>{const r=["Aria","Elias","Luna","Felix","Nova","Atlas","Iris","Jasper","Stella","Oscar"],o=["Sterling","Blackwood","Montgomery","Fitzgerald","Ashworth","Kingsley","Beaumont","Hartwell","Sinclair","Windsor"],i=["Design","Engineering","Marketing","Sales","Operations"],d=["Active","On Leave","Remote","In Office"];return Array.from({length:a},(m,s)=>({id:s+1,name:`${r[s%r.length]} ${o[s%o.length]}`,email:`${r[s%r.length].toLowerCase()}.${o[s%o.length].toLowerCase()}@example.com`,department:i[s%i.length],status:d[s%d.length],salary:6e4+Math.floor(Math.random()*14e4),joinDate:new Date(2018+s%6,s%12,s%28+1).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),projects:Math.floor(Math.random()*10)+1,performance:(Math.random()*5).toFixed(1)}))},I=[{id:"id",key:"id",header:"ID",width:80,enableSorting:!0},{id:"name",key:"name",header:"Full Name",width:200,enableSorting:!0,enableFiltering:!0,enableColumnMenu:!0,columnMenuItems:[{id:"copy-names",label:"Copy Names",icon:e.jsx(R,{className:"w-3 h-3"}),onClick:a=>{console.log(`Copying all names from ${a}`)},shortcut:"⌘C"},{id:"export-names",label:"Export Names",icon:e.jsx(f,{className:"w-3 h-3"}),onClick:a=>{console.log(`Exporting ${a}`)},separator:!0}]},{id:"email",key:"email",header:"Email Address",width:280,enableFiltering:!0},{id:"department",key:"department",header:"Department",width:150,enableSorting:!0,enableFiltering:!0,enableGrouping:!0,enableColumnMenu:!0},{id:"status",key:"status",header:"Status",width:120,enableSorting:!0,enableGrouping:!0,enableColumnMenu:!0,render:a=>e.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-semibold ${a.status==="Active"?"bg-green-100 text-green-800":a.status==="Remote"?"bg-blue-100 text-blue-800":a.status==="On Leave"?"bg-yellow-100 text-yellow-800":"bg-gray-100 text-gray-800"}`,children:a.status})},{id:"salary",key:"salary",header:"Annual Salary",width:150,enableSorting:!0,enableColumnMenu:!0,render:a=>`$${a.salary.toLocaleString()}`,columnMenuItems:[{id:"highlight-high",label:"Highlight High Earners",icon:e.jsx(D,{className:"w-3 h-3"}),onClick:()=>console.log("Highlighting high earners")}]},{id:"joinDate",key:"joinDate",header:"Join Date",width:140},{id:"projects",key:"projects",header:"Projects",width:100,enableSorting:!0}],O={title:"Gridular/Examples/Comprehensive Demo",component:b,parameters:{layout:"fullscreen"},decorators:[a=>e.jsx("div",{style:{padding:"2rem",fontFamily:'"DM Sans", system-ui, sans-serif',minHeight:"100vh",background:"#f5f5f5"},children:e.jsx(a,{})})],tags:["autodocs"]},c={render:()=>{const[a,r]=n.useState(0),[o,i]=n.useState(25),[d,m]=n.useState({column:"name",direction:"asc"}),[s,y]=n.useState({}),[S,v]=n.useState({}),[w,C]=n.useState({groupByColumns:[],expandedGroups:{}}),[j,N]=n.useState({}),[k,E]=n.useState(null),p=n.useMemo(()=>M(1e3),[]);return e.jsxs("div",{style:{height:"800px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"🎯 Comprehensive Feature Demo"}),e.jsxs("div",{className:"font-ui text-sm text-gray-600 space-y-1",children:[e.jsxs("p",{children:["✨ ",e.jsx("strong",{children:"Column Management:"})," Show/hide columns, reset to defaults"]}),e.jsxs("p",{children:["📊 ",e.jsx("strong",{children:"Grouping:"})," Group by Department or Status using the Group Manager"]}),e.jsxs("p",{children:["📏 ",e.jsx("strong",{children:"Column Resize:"})," Drag column edges to resize widths"]}),e.jsxs("p",{children:["🔄 ",e.jsx("strong",{children:"Column Reorder:"})," Drag and drop column headers to reorder"]}),e.jsxs("p",{children:["🎯 ",e.jsx("strong",{children:"Cell Selection:"})," Click individual cells to select them"]}),e.jsxs("p",{children:["📂 ",e.jsx("strong",{children:"Expandable Rows:"})," Click chevron icons to expand/collapse row details"]}),e.jsxs("p",{children:["🔍 ",e.jsx("strong",{children:"Sorting:"})," Click column headers to sort data (asc/desc/none)"]}),e.jsxs("p",{children:["🔎 ",e.jsx("strong",{children:"Column Filtering:"})," Use filter buttons in column headers (compact Radix Popover)"]}),e.jsxs("p",{children:["⚙️ ",e.jsx("strong",{children:"Column Menu:"})," Click three-dot menu for column-specific actions with custom items"]}),e.jsxs("p",{children:["📄 ",e.jsx("strong",{children:"Pagination:"})," Navigate through pages with configurable page sizes"]}),e.jsxs("p",{children:["⚡ ",e.jsx("strong",{children:"Virtualization:"})," Efficient rendering for 1000+ rows"]}),e.jsxs("p",{children:["💾 ",e.jsx("strong",{children:"Persistence:"})," All settings automatically saved to localStorage"]}),e.jsxs("p",{children:["🎨 ",e.jsx("strong",{children:"Custom Rendering:"})," Status badges and salary formatting"]})]})]}),e.jsx(b,{gridId:"comprehensive-demo",columns:I,data:p,pagination:{pageIndex:a,pageSize:o,totalRows:p.length,onPageChange:r,onPageSizeChange:t=>{i(t),r(0)},pageSizeOptions:[10,25,50,100]},virtualizationThreshold:20,enableSorting:!0,sortState:d,onSortChange:m,enableFiltering:!0,filterState:S,onFilterChange:v,enableColumnMenu:!0,defaultColumnMenuItems:[{id:"export",label:"Export Column",icon:e.jsx(f,{className:"w-3 h-3"}),onClick:t=>{console.log(`Exporting column: ${t}`)},shortcut:"⌘E"}],onColumnAction:(t,l)=>{console.log(`Column action: ${t} on ${l}`)},enableColumnResize:!0,columnWidths:s,onColumnWidthsChange:y,enableColumnReorder:!0,enableGrouping:!0,groupingState:w,onGroupingChange:C,enableExpandableRows:!0,expandedRows:j,onExpandedRowsChange:N,renderExpandedRow:t=>e.jsxs("div",{className:"relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100/50"}),e.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-copper via-copper-dark to-copper"}),e.jsxs("div",{className:"relative px-6 py-5",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4 pb-3 border-b border-gray-200",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-br from-copper to-copper-dark flex items-center justify-center text-white text-sm font-bold",children:t.name.split(" ").map(l=>l[0]).join("")}),e.jsx("h4",{className:"text-base font-bold text-gray-900",children:"Employee Profile"})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-x-8 gap-y-5",children:[e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("span",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Email Address"}),e.jsx("span",{className:"text-sm text-gray-900 font-medium",children:t.email})]}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("span",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Active Projects"}),e.jsxs("span",{className:"text-sm text-gray-900 font-medium",children:[t.projects," projects"]})]}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("span",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Join Date"}),e.jsx("span",{className:"text-sm text-gray-900 font-medium",children:t.joinDate})]}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("span",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Performance"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"text-sm text-gray-900 font-medium",children:[t.performance," / 5.0"]}),e.jsx("div",{className:"flex gap-0.5",children:[...Array(5)].map((l,g)=>e.jsx("span",{className:`text-xs ${g<Math.floor(parseFloat(t.performance))?"text-amber-500":"text-gray-300"}`,children:"★"},g))})]})]}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("span",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Annual Salary"}),e.jsxs("span",{className:"text-lg text-gray-900 font-bold",children:["$",t.salary.toLocaleString()]})]}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("span",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Employment Status"}),e.jsx("span",{className:`inline-flex items-center w-fit px-3 py-1 rounded-full text-xs font-bold ${t.status==="Active"?"bg-emerald-100 text-emerald-800 border border-emerald-200":t.status==="Remote"?"bg-blue-100 text-blue-800 border border-blue-200":t.status==="On Leave"?"bg-amber-100 text-amber-800 border border-amber-200":"bg-gray-100 text-gray-800 border border-gray-200"}`,children:t.status})]})]})]})]}),enableCellSelection:!0,selectedCell:k,onCellSelect:(t,l)=>{E({rowId:t,columnId:l})},classes:{container:"shadow-lg rounded-lg",header:"font-semibold",row:"transition-all duration-150"}})]})}};var u,x,h;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(25);
    const [sortState, setSortState] = useState<SortState | null>({
      column: 'name',
      direction: 'asc'
    });
    const [columnWidths, setColumnWidths] = useState<Record<string, number>>({});
    const [filterState, setFilterState] = useState<FilterState>({});
    const [groupingState, setGroupingState] = useState<GroupingState>({
      groupByColumns: [],
      expandedGroups: {}
    });
    const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});
    const [selectedCell, setSelectedCell] = useState<{
      rowId: string;
      columnId: string;
    } | null>(null);
    const data = useMemo(() => generatePersonData(1000), []);
    return <div style={{
      height: '800px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">🎯 Comprehensive Feature Demo</h3>
          <div className="font-ui text-sm text-gray-600 space-y-1">
            <p>✨ <strong>Column Management:</strong> Show/hide columns, reset to defaults</p>
            <p>📊 <strong>Grouping:</strong> Group by Department or Status using the Group Manager</p>
            <p>📏 <strong>Column Resize:</strong> Drag column edges to resize widths</p>
            <p>🔄 <strong>Column Reorder:</strong> Drag and drop column headers to reorder</p>
            <p>🎯 <strong>Cell Selection:</strong> Click individual cells to select them</p>
            <p>📂 <strong>Expandable Rows:</strong> Click chevron icons to expand/collapse row details</p>
            <p>🔍 <strong>Sorting:</strong> Click column headers to sort data (asc/desc/none)</p>
            <p>🔎 <strong>Column Filtering:</strong> Use filter buttons in column headers (compact Radix Popover)</p>
            <p>⚙️ <strong>Column Menu:</strong> Click three-dot menu for column-specific actions with custom items</p>
            <p>📄 <strong>Pagination:</strong> Navigate through pages with configurable page sizes</p>
            <p>⚡ <strong>Virtualization:</strong> Efficient rendering for 1000+ rows</p>
            <p>💾 <strong>Persistence:</strong> All settings automatically saved to localStorage</p>
            <p>🎨 <strong>Custom Rendering:</strong> Status badges and salary formatting</p>
          </div>
        </div>
        <DataGrid gridId="comprehensive-demo" columns={peopleColumns} data={data} pagination={{
        pageIndex,
        pageSize,
        totalRows: data.length,
        onPageChange: setPageIndex,
        onPageSizeChange: size => {
          setPageSize(size);
          setPageIndex(0);
        },
        pageSizeOptions: [10, 25, 50, 100]
      }} virtualizationThreshold={20} enableSorting sortState={sortState} onSortChange={setSortState} enableFiltering filterState={filterState} onFilterChange={setFilterState} enableColumnMenu defaultColumnMenuItems={[{
        id: 'export',
        label: 'Export Column',
        icon: <Download className="w-3 h-3" />,
        onClick: columnId => {
          console.log(\`Exporting column: \${columnId}\`);
        },
        shortcut: '⌘E'
      }]} onColumnAction={(action, columnId) => {
        console.log(\`Column action: \${action} on \${columnId}\`);
      }} enableColumnResize columnWidths={columnWidths} onColumnWidthsChange={setColumnWidths} enableColumnReorder enableGrouping groupingState={groupingState} onGroupingChange={setGroupingState} enableExpandableRows expandedRows={expandedRows} onExpandedRowsChange={setExpandedRows} renderExpandedRow={row => <div className="relative overflow-hidden">
              {/* Elegant background with subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100/50" />

              {/* Decorative accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-copper via-copper-dark to-copper" />

              {/* Content */}
              <div className="relative px-6 py-5">
                {/* Header with icon */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-copper to-copper-dark flex items-center justify-center text-white text-sm font-bold">
                    {row.name.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                  <h4 className="text-base font-bold text-gray-900">Employee Profile</h4>
                </div>

                {/* Details grid with refined spacing and typography */}
                <div className="grid grid-cols-3 gap-x-8 gap-y-5">
                  <div className="flex flex-col space-y-1">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email Address</span>
                    <span className="text-sm text-gray-900 font-medium">{row.email}</span>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Active Projects</span>
                    <span className="text-sm text-gray-900 font-medium">{row.projects} projects</span>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Join Date</span>
                    <span className="text-sm text-gray-900 font-medium">{row.joinDate}</span>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Performance</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-900 font-medium">{row.performance} / 5.0</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => <span key={i} className={\`text-xs \${i < Math.floor(parseFloat(row.performance)) ? 'text-amber-500' : 'text-gray-300'}\`}>
                            ★
                          </span>)}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Annual Salary</span>
                    <span className="text-lg text-gray-900 font-bold">\${row.salary.toLocaleString()}</span>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Employment Status</span>
                    <span className={\`inline-flex items-center w-fit px-3 py-1 rounded-full text-xs font-bold \${row.status === 'Active' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' : row.status === 'Remote' ? 'bg-blue-100 text-blue-800 border border-blue-200' : row.status === 'On Leave' ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-gray-100 text-gray-800 border border-gray-200'}\`}>
                      {row.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>} enableCellSelection selectedCell={selectedCell} onCellSelect={(rowId, columnId) => {
        setSelectedCell({
          rowId,
          columnId
        });
      }} classes={{
        container: 'shadow-lg rounded-lg',
        header: 'font-semibold',
        row: 'transition-all duration-150'
      }} />
      </div>;
  }
}`,...(h=(x=c.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const W=["AllFeatures"];export{c as AllFeatures,W as __namedExportsOrder,O as default};
