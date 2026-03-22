import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as x}from"./DataGrid-C34Gf9dF.js";import{r as p}from"./iframe-CR-0IFbH.js";import"./index-CrV-QA3d.js";import"./index-CfyGkxxH.js";import"./preload-helper-Dp1pzeXC.js";const K={title:"Gridular/Features/Column Filtering",component:x,parameters:{layout:"fullscreen"},decorators:[t=>e.jsx("div",{style:{padding:"2rem",minHeight:"100vh",background:"#f5f5f5",fontFamily:'"DM Sans", system-ui, sans-serif'},children:e.jsx(t,{})})],tags:["autodocs"]},V=t=>{const n=["Engineering","Marketing","Sales","HR","Finance","Operations"],s=["Manager","Senior","Junior","Lead","Director","Specialist"],r=["Active","On Leave","Remote"],i=["Alice Johnson","Bob Smith","Charlie Brown","Diana Prince","Edward Norton","Fiona Apple","George Harrison","Helen Mirren","Ian McKellen","Julia Roberts","Kevin Spacey","Laura Dern","Michael Jordan","Nancy Drew","Oscar Wilde","Patricia Hill"];return Array.from({length:t},(l,a)=>({id:a+1,name:i[a%i.length],department:n[a%n.length],position:s[a%s.length],email:`${i[a%i.length].toLowerCase().replace(" ",".")}@company.com`,salary:5e4+a%10*1e4,status:r[a%r.length]}))},u=V(100),o=[{id:"id",header:"ID",key:"id",width:80},{id:"name",header:"Name",key:"name",width:180},{id:"department",header:"Department",key:"department",width:150},{id:"position",header:"Position",key:"position",width:150},{id:"email",header:"Email",key:"email",width:250},{id:"salary",header:"Salary",key:"salary",width:120,renderCell:t=>`$${t.salary.toLocaleString()}`},{id:"status",header:"Status",key:"status",width:120,renderCell:t=>e.jsx("span",{className:`px-2 py-1 rounded text-xs font-semibold ${t.status==="Active"?"bg-green-100 text-green-800":t.status==="Remote"?"bg-blue-100 text-blue-800":"bg-yellow-100 text-yellow-800"}`,children:t.status})}],d={render:()=>{const[t,n]=p.useState({});return e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h2",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Column Filtering"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed mb-3",children:"Click the filter icon in any column header to filter the data. The filter uses case-insensitive substring matching by default."}),Object.keys(t).length>0&&e.jsxs("div",{className:"p-3 bg-indigo-50 border border-indigo-100 rounded-lg",children:[e.jsx("strong",{className:"text-blue-900",children:"Active Filters:"}),e.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:Object.entries(t).map(([s,r])=>e.jsxs("span",{className:"px-2 py-[3px] bg-indigo-50 border border-indigo-100 text-indigo-700 rounded text-[11.5px] font-mono",children:[s,': "',r,'"']},s))})]})]}),e.jsx("div",{style:{height:"600px"},children:e.jsx(x,{columns:o,data:u,enableFiltering:!0,filterState:t,onFilterChange:n,enableSorting:!0,rowHeight:60})})]})}},c={render:()=>{const[t,n]=p.useState({}),s=[...o.slice(0,-2),{id:"salary",header:"Salary",key:"salary",width:120,renderCell:r=>`$${r.salary.toLocaleString()}`,filterFn:(r,i,l)=>{const a=parseInt(l);return isNaN(a)?!0:r.salary>=a}},{id:"status",header:"Status",key:"status",width:120,renderCell:r=>e.jsx("span",{className:`px-2 py-1 rounded text-xs font-semibold ${r.status==="Active"?"bg-green-100 text-green-800":r.status==="Remote"?"bg-blue-100 text-blue-800":"bg-yellow-100 text-yellow-800"}`,children:r.status}),filterFn:(r,i,l)=>r.status.toLowerCase()===l.toLowerCase()}];return e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h2",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Custom Filter Functions"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed mb-3",children:"Different columns can have custom filtering logic:"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600 mb-4 space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Salary:"})," Filters by minimum salary (numeric comparison)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Status:"})," Filters by exact match"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Other columns:"})," Default case-insensitive substring matching"]})]}),Object.keys(t).length>0&&e.jsxs("div",{className:"p-3 bg-indigo-50 border border-indigo-100 rounded-lg",children:[e.jsx("strong",{className:"text-blue-900",children:"Active Filters:"}),e.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:Object.entries(t).map(([r,i])=>e.jsxs("span",{className:"px-2 py-[3px] bg-indigo-50 border border-indigo-100 text-indigo-700 rounded text-[11.5px] font-mono",children:[r,': "',i,'"']},r))})]})]}),e.jsx("div",{style:{height:"600px"},children:e.jsx(x,{columns:s,data:u,enableFiltering:!0,filterState:t,onFilterChange:n,enableSorting:!0,rowHeight:60})})]})}},g={render:()=>{const[t,n]=p.useState({}),[s,r]=p.useState(0),i=20,l=u.filter(a=>Object.entries(t).every(([b,h])=>h?String(a[b]??"").toLowerCase().includes(h.toLowerCase()):!0));return e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h2",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Filtering with Pagination"}),e.jsxs("p",{className:"text-[13px] text-gray-600 leading-relaxed mb-3",children:["Filters are applied to the entire dataset before pagination. Showing ",l.length," of ",u.length," total records."]}),Object.keys(t).length>0&&e.jsxs("div",{className:"p-3 bg-indigo-50 border border-indigo-100 rounded-lg",children:[e.jsx("strong",{className:"text-blue-900",children:"Active Filters:"}),e.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:Object.entries(t).map(([a,b])=>e.jsxs("span",{className:"px-2 py-[3px] bg-indigo-50 border border-indigo-100 text-indigo-700 rounded text-[11.5px] font-mono",children:[a,': "',b,'"']},a))})]})]}),e.jsx("div",{style:{height:"600px"},children:e.jsx(x,{columns:o,data:l,enableFiltering:!0,filterState:t,onFilterChange:a=>{n(a),r(0)},enableSorting:!0,pagination:{pageIndex:s,pageSize:i,totalRows:l.length,onPageChange:r},rowHeight:60})})]})}},m={render:()=>{const[t,n]=p.useState({}),s=[{...o[0],enableFiltering:!1},...o.slice(1,5),{...o[5],enableFiltering:!1},o[6]];return e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h2",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Selective Column Filtering"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed mb-3",children:"Some columns have filtering disabled (ID and Salary columns). Notice they don't show filter icons."}),Object.keys(t).length>0&&e.jsxs("div",{className:"p-3 bg-indigo-50 border border-indigo-100 rounded-lg",children:[e.jsx("strong",{className:"text-blue-900",children:"Active Filters:"}),e.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:Object.entries(t).map(([r,i])=>e.jsxs("span",{className:"px-2 py-[3px] bg-indigo-50 border border-indigo-100 text-indigo-700 rounded text-[11.5px] font-mono",children:[r,': "',i,'"']},r))})]})]}),e.jsx("div",{style:{height:"600px"},children:e.jsx(x,{columns:s,data:u,enableFiltering:!0,filterState:t,onFilterChange:n,enableSorting:!0,rowHeight:60})})]})}};var f,y,S,v,F;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [filterState, setFilterState] = useState<FilterState>({});
    return <div className="">
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Column Filtering</h2>
          <p className="text-[13px] text-gray-600 leading-relaxed mb-3">
            Click the filter icon in any column header to filter the data. The filter uses
            case-insensitive substring matching by default.
          </p>
          {Object.keys(filterState).length > 0 && <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-lg">
              <strong className="text-blue-900">Active Filters:</strong>
              <div className="mt-2 flex flex-wrap gap-2">
                {Object.entries(filterState).map(([col, value]) => <span key={col} className="px-2 py-[3px] bg-indigo-50 border border-indigo-100 text-indigo-700 rounded text-[11.5px] font-mono">
                    {col}: "{value}"
                  </span>)}
              </div>
            </div>}
        </div>
        <div style={{
        height: '600px'
      }}>
          <DataGrid columns={columns} data={employees} enableFiltering={true} filterState={filterState} onFilterChange={setFilterState} enableSorting={true} rowHeight={60} />
        </div>
      </div>;
  }
}`,...(S=(y=d.parameters)==null?void 0:y.docs)==null?void 0:S.source},description:{story:`Basic column filtering with text inputs.
Click the filter icon in any column header to filter data.`,...(F=(v=d.parameters)==null?void 0:v.docs)==null?void 0:F.description}}};var w,N,j,_,C;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [filterState, setFilterState] = useState<FilterState>({});
    const customColumns: ColumnDef<Employee>[] = [...columns.slice(0, -2), {
      id: 'salary',
      header: 'Salary',
      key: 'salary',
      width: 120,
      renderCell: row => \`$\${row.salary.toLocaleString()}\`,
      // Custom filter: filter by minimum salary (numeric comparison)
      filterFn: (row, _columnId, filterValue) => {
        const minSalary = parseInt(filterValue);
        if (isNaN(minSalary)) return true;
        return row.salary >= minSalary;
      }
    }, {
      id: 'status',
      header: 'Status',
      key: 'status',
      width: 120,
      renderCell: row => <span className={\`px-2 py-1 rounded text-xs font-semibold \${row.status === 'Active' ? 'bg-green-100 text-green-800' : row.status === 'Remote' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}\`}>
            {row.status}
          </span>,
      // Custom filter: exact match for status
      filterFn: (row, _columnId, filterValue) => {
        return row.status.toLowerCase() === filterValue.toLowerCase();
      }
    }];
    return <div className="">
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Custom Filter Functions</h2>
          <p className="text-[13px] text-gray-600 leading-relaxed mb-3">
            Different columns can have custom filtering logic:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
            <li><strong>Salary:</strong> Filters by minimum salary (numeric comparison)</li>
            <li><strong>Status:</strong> Filters by exact match</li>
            <li><strong>Other columns:</strong> Default case-insensitive substring matching</li>
          </ul>
          {Object.keys(filterState).length > 0 && <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-lg">
              <strong className="text-blue-900">Active Filters:</strong>
              <div className="mt-2 flex flex-wrap gap-2">
                {Object.entries(filterState).map(([col, value]) => <span key={col} className="px-2 py-[3px] bg-indigo-50 border border-indigo-100 text-indigo-700 rounded text-[11.5px] font-mono">
                    {col}: "{value}"
                  </span>)}
              </div>
            </div>}
        </div>
        <div style={{
        height: '600px'
      }}>
          <DataGrid columns={customColumns} data={employees} enableFiltering={true} filterState={filterState} onFilterChange={setFilterState} enableSorting={true} rowHeight={60} />
        </div>
      </div>;
  }
}`,...(j=(N=c.parameters)==null?void 0:N.docs)==null?void 0:j.source},description:{story:`Column filtering with custom filter functions.
Different columns can have custom filtering logic.`,...(C=(_=c.parameters)==null?void 0:_.docs)==null?void 0:C.description}}};var k,D,O,I,A;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [filterState, setFilterState] = useState<FilterState>({});
    const [pageIndex, setPageIndex] = useState(0);
    const pageSize = 20;

    // Filter data first, then get total for pagination
    const filteredData = employees.filter(row => {
      return Object.entries(filterState).every(([columnId, filterValue]) => {
        if (!filterValue) return true;
        const cellValue = String(row[columnId as keyof Employee] ?? '').toLowerCase();
        return cellValue.includes(filterValue.toLowerCase());
      });
    });
    return <div className="">
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Filtering with Pagination</h2>
          <p className="text-[13px] text-gray-600 leading-relaxed mb-3">
            Filters are applied to the entire dataset before pagination.
            Showing {filteredData.length} of {employees.length} total records.
          </p>
          {Object.keys(filterState).length > 0 && <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-lg">
              <strong className="text-blue-900">Active Filters:</strong>
              <div className="mt-2 flex flex-wrap gap-2">
                {Object.entries(filterState).map(([col, value]) => <span key={col} className="px-2 py-[3px] bg-indigo-50 border border-indigo-100 text-indigo-700 rounded text-[11.5px] font-mono">
                    {col}: "{value}"
                  </span>)}
              </div>
            </div>}
        </div>
        <div style={{
        height: '600px'
      }}>
          <DataGrid columns={columns} data={filteredData} enableFiltering={true} filterState={filterState} onFilterChange={newFilterState => {
          setFilterState(newFilterState);
          setPageIndex(0); // Reset to first page when filter changes
        }} enableSorting={true} pagination={{
          pageIndex,
          pageSize,
          totalRows: filteredData.length,
          onPageChange: setPageIndex
        }} rowHeight={60} />
        </div>
      </div>;
  }
}`,...(O=(D=g.parameters)==null?void 0:D.docs)==null?void 0:O.source},description:{story:`Column filtering with pagination.
Filters are applied before pagination.`,...(A=(I=g.parameters)==null?void 0:I.docs)==null?void 0:A.description}}};var L,H,P,E,R;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [filterState, setFilterState] = useState<FilterState>({});
    const selectiveColumns: ColumnDef<Employee>[] = [{
      ...columns[0],
      enableFiltering: false // Disable filtering on ID
    }, ...columns.slice(1, 5), {
      ...columns[5],
      enableFiltering: false // Disable filtering on Salary
    }, columns[6]];
    return <div className="">
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Selective Column Filtering</h2>
          <p className="text-[13px] text-gray-600 leading-relaxed mb-3">
            Some columns have filtering disabled (ID and Salary columns).
            Notice they don't show filter icons.
          </p>
          {Object.keys(filterState).length > 0 && <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-lg">
              <strong className="text-blue-900">Active Filters:</strong>
              <div className="mt-2 flex flex-wrap gap-2">
                {Object.entries(filterState).map(([col, value]) => <span key={col} className="px-2 py-[3px] bg-indigo-50 border border-indigo-100 text-indigo-700 rounded text-[11.5px] font-mono">
                    {col}: "{value}"
                  </span>)}
              </div>
            </div>}
        </div>
        <div style={{
        height: '600px'
      }}>
          <DataGrid columns={selectiveColumns} data={employees} enableFiltering={true} filterState={filterState} onFilterChange={setFilterState} enableSorting={true} rowHeight={60} />
        </div>
      </div>;
  }
}`,...(P=(H=m.parameters)==null?void 0:H.docs)==null?void 0:P.source},description:{story:"Disable filtering on specific columns.\nSet `enableFiltering: false` on individual columns to disable filtering for that column.",...(R=(E=m.parameters)==null?void 0:E.docs)==null?void 0:R.description}}};const T=["BasicFiltering","CustomFilterFunctions","FilteringWithPagination","SelectiveFiltering"];export{d as BasicFiltering,c as CustomFilterFunctions,g as FilteringWithPagination,m as SelectiveFiltering,T as __namedExportsOrder,K as default};
