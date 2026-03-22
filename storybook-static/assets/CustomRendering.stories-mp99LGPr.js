import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-CR-0IFbH.js";import{D as d}from"./DataGrid-C34Gf9dF.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";import"./index-CrV-QA3d.js";import"./index-CfyGkxxH.js";const n=s=>{const i=["active","pending","inactive"],t=["high","medium","low"];return Array.from({length:s},(r,a)=>({id:a+1,name:`Task ${a+1}`,status:i[a%i.length],priority:t[a%t.length],progress:Math.floor(Math.random()*100),assignee:`User ${a%5+1}`}))},X={title:"Gridular/Customization/Custom Rendering",component:d,parameters:{layout:"fullscreen"},decorators:[s=>e.jsx("div",{style:{padding:"2rem",background:"#f5f5f5",minHeight:"100vh"},children:e.jsx(s,{})})]},c={render:()=>{const s=o.useMemo(()=>n(50),[]),i=[{id:"id",key:"id",header:"ID",width:80},{id:"name",key:"name",header:"Task Name",width:200},{id:"status",key:"status",header:"Status",width:150,render:t=>{const r={active:"bg-green-100 text-green-800",pending:"bg-yellow-100 text-yellow-800",inactive:"bg-gray-100 text-gray-800"};return e.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-semibold ${r[t.status]}`,children:t.status.toUpperCase()})}},{id:"priority",key:"priority",header:"Priority",width:150,render:t=>{const r={high:"text-red-600",medium:"text-orange-600",low:"text-blue-600"},a={high:"🔴",medium:"🟠",low:"🔵"};return e.jsxs("span",{className:`font-semibold ${r[t.priority]}`,children:[a[t.priority]," ",t.priority.toUpperCase()]})}},{id:"progress",key:"progress",header:"Progress",width:200,render:t=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"flex-1 bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-copper h-2 rounded-full transition-all",style:{width:`${t.progress}%`}})}),e.jsxs("span",{className:"text-xs font-medium",children:[t.progress,"%"]})]})},{id:"assignee",key:"assignee",header:"Assignee",width:150}];return e.jsxs("div",{style:{height:"600px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Custom Cell Rendering"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed",children:"Customize how individual cells are rendered with badges, progress bars, and custom styling."})]}),e.jsx(d,{columns:i,data:s,gridId:"custom-cells"})]})}},g={render:()=>{const s=o.useMemo(()=>n(50),[]),i=[{id:"id",key:"id",header:"ID",width:80,headerClassName:"bg-gradient-to-r from-blue-500 to-purple-500 text-white"},{id:"name",key:"name",header:"Task Name",width:200,headerClassName:"bg-gradient-to-r from-green-500 to-teal-500 text-white"},{id:"status",key:"status",header:"Status",width:150,headerClassName:"bg-gradient-to-r from-orange-500 to-red-500 text-white"},{id:"progress",key:"progress",header:"Progress",width:200,headerClassName:"bg-gradient-to-r from-pink-500 to-rose-500 text-white"},{id:"assignee",key:"assignee",header:"Assignee",width:150,headerClassName:"bg-gradient-to-r from-indigo-500 to-blue-500 text-white"}];return e.jsxs("div",{style:{height:"600px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Custom Header Styling"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed",children:"Apply custom classes to column headers for unique styling."})]}),e.jsx(d,{columns:i,data:s,gridId:"custom-headers"})]})}},m={render:()=>{const s=o.useMemo(()=>n(50),[]),i=[{id:"id",key:"id",header:"ID",width:80},{id:"name",key:"name",header:"Task Name",width:200},{id:"status",key:"status",header:"Status",width:150},{id:"priority",key:"priority",header:"Priority",width:150},{id:"progress",key:"progress",header:"Progress",width:200},{id:"assignee",key:"assignee",header:"Assignee",width:150}];return e.jsxs("div",{style:{height:"600px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Custom Header Cell Rendering"}),e.jsxs("p",{className:"text-[13px] text-gray-600 leading-relaxed",children:["Use ",e.jsx("code",{className:"px-1 py-0.5 bg-gray-100 rounded text-xs",children:"renderHeaderCell"})," to completely customize header appearance with icons, badges, and custom layouts."]})]}),e.jsx(d,{columns:i,data:s,gridId:"custom-header-cells",enableSorting:!0,enableFiltering:!0,renderHeaderCell:({column:t,columnIndex:r,sortDirection:a,isFiltered:y})=>{const l={id:"🔢",name:"📝",status:"🎯",priority:"⚡",progress:"📊",assignee:"👤"}[t.id]||"📌";return e.jsxs("div",{className:"flex items-center justify-between w-full py-2 px-3 bg-gradient-to-r from-slate-800 to-slate-700",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-lg",children:l}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-xs font-bold text-amber-300 uppercase tracking-wider",children:t.header}),e.jsxs("span",{className:"text-[10px] text-slate-400",children:["Column ",r+1]})]})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[a&&e.jsx("span",{className:"px-1.5 py-0.5 bg-amber-500/20 text-amber-300 text-[10px] font-bold rounded border border-amber-500/30",children:a==="asc"?"↑":"↓"}),y&&e.jsx("span",{className:"px-1.5 py-0.5 bg-cyan-500/20 text-cyan-300 text-[10px] font-bold rounded border border-cyan-500/30",children:"FILTERED"})]})]})}})]})}},p={render:()=>{const s=o.useMemo(()=>n(50),[]),i=[{id:"id",key:"id",header:"ID",width:80},{id:"name",key:"name",header:"Task Name",width:200},{id:"status",key:"status",header:"Status",width:150},{id:"priority",key:"priority",header:"Priority",width:150},{id:"progress",key:"progress",header:"Progress",width:200},{id:"assignee",key:"assignee",header:"Assignee",width:150}];return e.jsxs("div",{style:{height:"600px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Minimal Header Design"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed",children:"Clean, minimalist header design with subtle styling and no uppercase text."})]}),e.jsx(d,{columns:i,data:s,gridId:"minimal-headers",enableSorting:!0,renderHeaderCell:({column:t,sortDirection:r})=>e.jsxs("div",{className:"flex items-center justify-between w-full px-4 py-3 bg-stone-50 border-b border-stone-200",children:[e.jsx("span",{className:"text-sm font-medium text-stone-900",children:t.header}),r&&e.jsx("span",{className:"text-stone-500 text-xs font-mono",children:r==="asc"?"↑":"↓"})]})})]})}},x={render:()=>{const s=o.useMemo(()=>n(50),[]),i=[{id:"id",key:"id",header:"ID",width:80},{id:"name",key:"name",header:"Task Name",width:200},{id:"status",key:"status",header:"Status",width:150},{id:"priority",key:"priority",header:"Priority",width:150},{id:"progress",key:"progress",header:"Progress",width:200},{id:"assignee",key:"assignee",header:"Assignee",width:150}];return e.jsxs("div",{style:{height:"600px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Colorful Header Badges"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed",children:"Each column header gets a unique color badge for visual distinction."})]}),e.jsx(d,{columns:i,data:s,gridId:"colorful-headers",enableSorting:!0,enableFiltering:!0,renderHeaderCell:({column:t,columnIndex:r,sortDirection:a,isFiltered:y})=>{const w=[{badge:"bg-blue-600",text:"text-blue-100",bg:"bg-blue-950"},{badge:"bg-violet-600",text:"text-violet-100",bg:"bg-violet-950"},{badge:"bg-fuchsia-600",text:"text-fuchsia-100",bg:"bg-fuchsia-950"},{badge:"bg-orange-600",text:"text-orange-100",bg:"bg-orange-950"},{badge:"bg-emerald-600",text:"text-emerald-100",bg:"bg-emerald-950"},{badge:"bg-indigo-600",text:"text-indigo-100",bg:"bg-indigo-950"}],l=w[r%w.length];return e.jsxs("div",{className:`flex items-center gap-2 w-full px-3 py-2 ${l.bg}`,children:[e.jsx("span",{className:`w-8 h-8 ${l.badge} rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-black/20`,children:t.header.charAt(0)}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:`text-xs font-bold ${l.text} uppercase tracking-wider truncate`,children:t.header}),e.jsxs("div",{className:"flex items-center gap-1 mt-0.5",children:[a&&e.jsx("span",{className:`text-[10px] ${l.badge.replace("bg-","text-")} font-semibold`,children:a.toUpperCase()}),y&&e.jsx("span",{className:"text-[10px] text-cyan-400 font-semibold",children:"• FILTERED"})]})]})]})}})]})}},h={render:()=>{const s=o.useMemo(()=>n(50),[]),i=[{id:"id",key:"id",header:"ID",width:80},{id:"name",key:"name",header:"Task Name",width:200},{id:"status",key:"status",header:"Status",width:150},{id:"priority",key:"priority",header:"Priority",width:150},{id:"progress",key:"progress",header:"Progress",width:200},{id:"assignee",key:"assignee",header:"Assignee",width:150}],t={id:"Unique task identifier",name:"Name of the task",status:"Current task status",priority:"Task priority level",progress:"Completion percentage",assignee:"Person assigned to task"};return e.jsxs("div",{style:{height:"600px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Headers with Info Icons"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed",children:"Headers include info icons and descriptions. Hover over the ℹ️ to see more details."})]}),e.jsx(d,{columns:i,data:s,gridId:"headers-with-tooltips",enableSorting:!0,renderHeaderCell:({column:r,sortDirection:a})=>e.jsxs("div",{className:"flex items-center justify-between w-full px-3 py-2 group bg-gradient-to-b from-gray-50 to-gray-100 border-b-2 border-gray-300",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs font-bold text-gray-900 uppercase tracking-wider",children:r.header}),e.jsx("span",{className:"text-xs text-blue-600 opacity-60 group-hover:opacity-100 transition-opacity cursor-help",title:t[r.id]||"No description available",children:"ℹ️"})]}),a&&e.jsx("span",{className:"text-orange-600 font-bold text-xs",children:a==="asc"?"↑":"↓"})]})})]})}},u={render:()=>{const s=o.useMemo(()=>n(50),[]),i=[{id:"id",key:"id",header:"ID",width:80},{id:"name",key:"name",header:"Task Name",width:200},{id:"status",key:"status",header:"Status",width:150},{id:"priority",key:"priority",header:"Priority",width:150},{id:"progress",key:"progress",header:"Progress",width:200},{id:"assignee",key:"assignee",header:"Assignee",width:150}];return e.jsxs("div",{style:{height:"600px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Gradient Header Design"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed",children:"Modern gradient design with glassmorphism effect and custom styling."})]}),e.jsx("style",{children:`
          .gradient-header-wrapper {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            backdrop-filter: blur(10px);
            border-bottom: 2px solid rgba(255, 255, 255, 0.4);
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }
        `}),e.jsx(d,{columns:i,data:s,gridId:"gradient-headers",enableSorting:!0,enableFiltering:!0,renderHeaderCell:({column:t,sortDirection:r,isFiltered:a})=>e.jsx("div",{className:"gradient-header-wrapper flex items-center justify-between w-full px-4 py-3",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-sm font-bold text-white tracking-wide",children:t.header}),(r||a)&&e.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[r&&e.jsx("span",{className:"text-xs text-white/80 font-medium",children:r==="asc"?"↑ Ascending":"↓ Descending"}),a&&e.jsx("span",{className:"text-xs bg-white/20 text-white px-2 py-0.5 rounded-full",children:"Filtered"})]})]})})})]})}},b={render:()=>{const s=o.useMemo(()=>n(50),[]),i=[{id:"id",key:"id",header:"ID",width:80},{id:"name",key:"name",header:"Task Name",width:200},{id:"status",key:"status",header:"Status",width:150,render:t=>{const r={active:"bg-green-100 text-green-800",pending:"bg-yellow-100 text-yellow-800",inactive:"bg-gray-100 text-gray-800"};return e.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-semibold ${r[t.status]}`,children:t.status.toUpperCase()})}},{id:"priority",key:"priority",header:"Priority",width:150},{id:"assignee",key:"assignee",header:"Assignee",width:150}];return e.jsxs("div",{style:{height:"600px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Custom Row Styling"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed",children:"Rows are styled based on status: Active (green background), Pending (yellow background), Inactive (gray background). Each row has a colored left border matching its status."})]}),e.jsx("style",{children:`
          [data-grid-id="custom-row-styling"] .virtualized-grid-row {
            border-left: 4px solid transparent;
          }
          [data-grid-id="custom-row-styling"] .virtualized-grid-row:has([data-status="active"]) {
            background-color: rgb(240 253 244) !important;
            border-left-color: rgb(34 197 94) !important;
          }
          [data-grid-id="custom-row-styling"] .virtualized-grid-row:has([data-status="active"]):hover {
            background-color: rgb(220 252 231) !important;
          }
          [data-grid-id="custom-row-styling"] .virtualized-grid-row:has([data-status="pending"]) {
            background-color: rgb(254 252 232) !important;
            border-left-color: rgb(234 179 8) !important;
          }
          [data-grid-id="custom-row-styling"] .virtualized-grid-row:has([data-status="pending"]):hover {
            background-color: rgb(254 249 195) !important;
          }
          [data-grid-id="custom-row-styling"] .virtualized-grid-row:has([data-status="inactive"]) {
            background-color: rgb(249 250 251) !important;
            border-left-color: rgb(156 163 175) !important;
          }
          [data-grid-id="custom-row-styling"] .virtualized-grid-row:has([data-status="inactive"]):hover {
            background-color: rgb(243 244 246) !important;
          }
        `}),e.jsx("div",{"data-grid-id":"custom-row-styling",children:e.jsx(d,{columns:i,data:s,gridId:"custom-row-styling",renderCell:({value:t,row:r,column:a})=>a.id==="status"?e.jsx("span",{"data-status":r.status,children:a.render?a.render(r):t}):t})})]})}};var f,k,v;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const data = useMemo(() => generateData(50), []);
    const columns: ColumnDef[] = [{
      id: 'id',
      key: 'id',
      header: 'ID',
      width: 80
    }, {
      id: 'name',
      key: 'name',
      header: 'Task Name',
      width: 200
    }, {
      id: 'status',
      key: 'status',
      header: 'Status',
      width: 150,
      render: row => {
        const colors: Record<string, string> = {
          active: 'bg-green-100 text-green-800',
          pending: 'bg-yellow-100 text-yellow-800',
          inactive: 'bg-gray-100 text-gray-800'
        };
        return <span className={\`px-2 py-1 rounded-full text-xs font-semibold \${colors[row.status]}\`}>
              {row.status.toUpperCase()}
            </span>;
      }
    }, {
      id: 'priority',
      key: 'priority',
      header: 'Priority',
      width: 150,
      render: row => {
        const colors: Record<string, string> = {
          high: 'text-red-600',
          medium: 'text-orange-600',
          low: 'text-blue-600'
        };
        const icons: Record<string, string> = {
          high: '🔴',
          medium: '🟠',
          low: '🔵'
        };
        return <span className={\`font-semibold \${colors[row.priority]}\`}>
              {icons[row.priority]} {row.priority.toUpperCase()}
            </span>;
      }
    }, {
      id: 'progress',
      key: 'progress',
      header: 'Progress',
      width: 200,
      render: row => <div className="flex items-center gap-2">
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div className="bg-copper h-2 rounded-full transition-all" style={{
            width: \`\${row.progress}%\`
          }} />
            </div>
            <span className="text-xs font-medium">{row.progress}%</span>
          </div>
    }, {
      id: 'assignee',
      key: 'assignee',
      header: 'Assignee',
      width: 150
    }];
    return <div style={{
      height: '600px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Custom Cell Rendering</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Customize how individual cells are rendered with badges, progress bars, and custom styling.
          </p>
        </div>
        <DataGrid columns={columns} data={data} gridId="custom-cells" />
      </div>;
  }
}`,...(v=(k=c.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var N,_,j;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const data = useMemo(() => generateData(50), []);
    const columns: ColumnDef[] = [{
      id: 'id',
      key: 'id',
      header: 'ID',
      width: 80,
      headerClassName: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
    }, {
      id: 'name',
      key: 'name',
      header: 'Task Name',
      width: 200,
      headerClassName: 'bg-gradient-to-r from-green-500 to-teal-500 text-white'
    }, {
      id: 'status',
      key: 'status',
      header: 'Status',
      width: 150,
      headerClassName: 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
    }, {
      id: 'progress',
      key: 'progress',
      header: 'Progress',
      width: 200,
      headerClassName: 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
    }, {
      id: 'assignee',
      key: 'assignee',
      header: 'Assignee',
      width: 150,
      headerClassName: 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white'
    }];
    return <div style={{
      height: '600px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Custom Header Styling</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Apply custom classes to column headers for unique styling.
          </p>
        </div>
        <DataGrid columns={columns} data={data} gridId="custom-headers" />
      </div>;
  }
}`,...(j=(_=g.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var C,D,I;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const data = useMemo(() => generateData(50), []);
    const columns: ColumnDef[] = [{
      id: 'id',
      key: 'id',
      header: 'ID',
      width: 80
    }, {
      id: 'name',
      key: 'name',
      header: 'Task Name',
      width: 200
    }, {
      id: 'status',
      key: 'status',
      header: 'Status',
      width: 150
    }, {
      id: 'priority',
      key: 'priority',
      header: 'Priority',
      width: 150
    }, {
      id: 'progress',
      key: 'progress',
      header: 'Progress',
      width: 200
    }, {
      id: 'assignee',
      key: 'assignee',
      header: 'Assignee',
      width: 150
    }];
    return <div style={{
      height: '600px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Custom Header Cell Rendering</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Use <code className="px-1 py-0.5 bg-gray-100 rounded text-xs">renderHeaderCell</code> to completely customize header appearance with icons, badges, and custom layouts.
          </p>
        </div>
        <DataGrid columns={columns} data={data} gridId="custom-header-cells" enableSorting enableFiltering renderHeaderCell={({
        column,
        columnIndex,
        sortDirection,
        isFiltered
      }) => {
        // Custom icons for each column
        const icons: Record<string, string> = {
          id: '🔢',
          name: '📝',
          status: '🎯',
          priority: '⚡',
          progress: '📊',
          assignee: '👤'
        };
        const icon = icons[column.id] || '📌';
        return <div className="flex items-center justify-between w-full py-2 px-3 bg-gradient-to-r from-slate-800 to-slate-700">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{icon}</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                      {column.header}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Column {columnIndex + 1}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {sortDirection && <span className="px-1.5 py-0.5 bg-amber-500/20 text-amber-300 text-[10px] font-bold rounded border border-amber-500/30">
                      {sortDirection === 'asc' ? '↑' : '↓'}
                    </span>}
                  {isFiltered && <span className="px-1.5 py-0.5 bg-cyan-500/20 text-cyan-300 text-[10px] font-bold rounded border border-cyan-500/30">
                      FILTERED
                    </span>}
                </div>
              </div>;
      }} />
      </div>;
  }
}`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var S,H,P;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const data = useMemo(() => generateData(50), []);
    const columns: ColumnDef[] = [{
      id: 'id',
      key: 'id',
      header: 'ID',
      width: 80
    }, {
      id: 'name',
      key: 'name',
      header: 'Task Name',
      width: 200
    }, {
      id: 'status',
      key: 'status',
      header: 'Status',
      width: 150
    }, {
      id: 'priority',
      key: 'priority',
      header: 'Priority',
      width: 150
    }, {
      id: 'progress',
      key: 'progress',
      header: 'Progress',
      width: 200
    }, {
      id: 'assignee',
      key: 'assignee',
      header: 'Assignee',
      width: 150
    }];
    return <div style={{
      height: '600px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Minimal Header Design</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Clean, minimalist header design with subtle styling and no uppercase text.
          </p>
        </div>
        <DataGrid columns={columns} data={data} gridId="minimal-headers" enableSorting renderHeaderCell={({
        column,
        sortDirection
      }) => <div className="flex items-center justify-between w-full px-4 py-3 bg-stone-50 border-b border-stone-200">
              <span className="text-sm font-medium text-stone-900">
                {column.header}
              </span>
              {sortDirection && <span className="text-stone-500 text-xs font-mono">
                  {sortDirection === 'asc' ? '↑' : '↓'}
                </span>}
            </div>} />
      </div>;
  }
}`,...(P=(H=p.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var A,T,M;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const data = useMemo(() => generateData(50), []);
    const columns: ColumnDef[] = [{
      id: 'id',
      key: 'id',
      header: 'ID',
      width: 80
    }, {
      id: 'name',
      key: 'name',
      header: 'Task Name',
      width: 200
    }, {
      id: 'status',
      key: 'status',
      header: 'Status',
      width: 150
    }, {
      id: 'priority',
      key: 'priority',
      header: 'Priority',
      width: 150
    }, {
      id: 'progress',
      key: 'progress',
      header: 'Progress',
      width: 200
    }, {
      id: 'assignee',
      key: 'assignee',
      header: 'Assignee',
      width: 150
    }];
    return <div style={{
      height: '600px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Colorful Header Badges</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Each column header gets a unique color badge for visual distinction.
          </p>
        </div>
        <DataGrid columns={columns} data={data} gridId="colorful-headers" enableSorting enableFiltering renderHeaderCell={({
        column,
        columnIndex,
        sortDirection,
        isFiltered
      }) => {
        const colorSchemes = [{
          badge: 'bg-blue-600',
          text: 'text-blue-100',
          bg: 'bg-blue-950'
        }, {
          badge: 'bg-violet-600',
          text: 'text-violet-100',
          bg: 'bg-violet-950'
        }, {
          badge: 'bg-fuchsia-600',
          text: 'text-fuchsia-100',
          bg: 'bg-fuchsia-950'
        }, {
          badge: 'bg-orange-600',
          text: 'text-orange-100',
          bg: 'bg-orange-950'
        }, {
          badge: 'bg-emerald-600',
          text: 'text-emerald-100',
          bg: 'bg-emerald-950'
        }, {
          badge: 'bg-indigo-600',
          text: 'text-indigo-100',
          bg: 'bg-indigo-950'
        }];
        const scheme = colorSchemes[columnIndex % colorSchemes.length];
        return <div className={\`flex items-center gap-2 w-full px-3 py-2 \${scheme.bg}\`}>
                <span className={\`w-8 h-8 \${scheme.badge} rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-black/20\`}>
                  {column.header.charAt(0)}
                </span>
                <div className="flex-1 min-w-0">
                  <div className={\`text-xs font-bold \${scheme.text} uppercase tracking-wider truncate\`}>
                    {column.header}
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    {sortDirection && <span className={\`text-[10px] \${scheme.badge.replace('bg-', 'text-')} font-semibold\`}>
                        {sortDirection.toUpperCase()}
                      </span>}
                    {isFiltered && <span className="text-[10px] text-cyan-400 font-semibold">
                        • FILTERED
                      </span>}
                  </div>
                </div>
              </div>;
      }} />
      </div>;
  }
}`,...(M=(T=x.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var R,z,F;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const data = useMemo(() => generateData(50), []);
    const columns: ColumnDef[] = [{
      id: 'id',
      key: 'id',
      header: 'ID',
      width: 80
    }, {
      id: 'name',
      key: 'name',
      header: 'Task Name',
      width: 200
    }, {
      id: 'status',
      key: 'status',
      header: 'Status',
      width: 150
    }, {
      id: 'priority',
      key: 'priority',
      header: 'Priority',
      width: 150
    }, {
      id: 'progress',
      key: 'progress',
      header: 'Progress',
      width: 200
    }, {
      id: 'assignee',
      key: 'assignee',
      header: 'Assignee',
      width: 150
    }];
    const descriptions: Record<string, string> = {
      id: 'Unique task identifier',
      name: 'Name of the task',
      status: 'Current task status',
      priority: 'Task priority level',
      progress: 'Completion percentage',
      assignee: 'Person assigned to task'
    };
    return <div style={{
      height: '600px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Headers with Info Icons</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Headers include info icons and descriptions. Hover over the ℹ️ to see more details.
          </p>
        </div>
        <DataGrid columns={columns} data={data} gridId="headers-with-tooltips" enableSorting renderHeaderCell={({
        column,
        sortDirection
      }) => <div className="flex items-center justify-between w-full px-3 py-2 group bg-gradient-to-b from-gray-50 to-gray-100 border-b-2 border-gray-300">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                  {column.header}
                </span>
                <span className="text-xs text-blue-600 opacity-60 group-hover:opacity-100 transition-opacity cursor-help" title={descriptions[column.id] || 'No description available'}>
                  ℹ️
                </span>
              </div>
              {sortDirection && <span className="text-orange-600 font-bold text-xs">
                  {sortDirection === 'asc' ? '↑' : '↓'}
                </span>}
            </div>} />
      </div>;
  }
}`,...(F=(z=h.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var $,E,G;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const data = useMemo(() => generateData(50), []);
    const columns: ColumnDef[] = [{
      id: 'id',
      key: 'id',
      header: 'ID',
      width: 80
    }, {
      id: 'name',
      key: 'name',
      header: 'Task Name',
      width: 200
    }, {
      id: 'status',
      key: 'status',
      header: 'Status',
      width: 150
    }, {
      id: 'priority',
      key: 'priority',
      header: 'Priority',
      width: 150
    }, {
      id: 'progress',
      key: 'progress',
      header: 'Progress',
      width: 200
    }, {
      id: 'assignee',
      key: 'assignee',
      header: 'Assignee',
      width: 150
    }];
    return <div style={{
      height: '600px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Gradient Header Design</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Modern gradient design with glassmorphism effect and custom styling.
          </p>
        </div>
        <style>{\`
          .gradient-header-wrapper {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            backdrop-filter: blur(10px);
            border-bottom: 2px solid rgba(255, 255, 255, 0.4);
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }
        \`}</style>
        <DataGrid columns={columns} data={data} gridId="gradient-headers" enableSorting enableFiltering renderHeaderCell={({
        column,
        sortDirection,
        isFiltered
      }) => <div className="gradient-header-wrapper flex items-center justify-between w-full px-4 py-3">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white tracking-wide">
                  {column.header}
                </span>
                {(sortDirection || isFiltered) && <div className="flex items-center gap-2 mt-1">
                    {sortDirection && <span className="text-xs text-white/80 font-medium">
                        {sortDirection === 'asc' ? '↑ Ascending' : '↓ Descending'}
                      </span>}
                    {isFiltered && <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">
                        Filtered
                      </span>}
                  </div>}
              </div>
            </div>} />
      </div>;
  }
}`,...(G=(E=u.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var U,q,B;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const data = useMemo(() => generateData(50), []);
    const columns: ColumnDef[] = [{
      id: 'id',
      key: 'id',
      header: 'ID',
      width: 80
    }, {
      id: 'name',
      key: 'name',
      header: 'Task Name',
      width: 200
    }, {
      id: 'status',
      key: 'status',
      header: 'Status',
      width: 150,
      render: row => {
        const colors: Record<string, string> = {
          active: 'bg-green-100 text-green-800',
          pending: 'bg-yellow-100 text-yellow-800',
          inactive: 'bg-gray-100 text-gray-800'
        };
        return <span className={\`px-2 py-1 rounded-full text-xs font-semibold \${colors[row.status]}\`}>
              {row.status.toUpperCase()}
            </span>;
      }
    }, {
      id: 'priority',
      key: 'priority',
      header: 'Priority',
      width: 150
    }, {
      id: 'assignee',
      key: 'assignee',
      header: 'Assignee',
      width: 150
    }];
    return <div style={{
      height: '600px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Custom Row Styling</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Rows are styled based on status: Active (green background), Pending (yellow background), Inactive (gray background).
            Each row has a colored left border matching its status.
          </p>
        </div>
        <style>{\`
          [data-grid-id="custom-row-styling"] .virtualized-grid-row {
            border-left: 4px solid transparent;
          }
          [data-grid-id="custom-row-styling"] .virtualized-grid-row:has([data-status="active"]) {
            background-color: rgb(240 253 244) !important;
            border-left-color: rgb(34 197 94) !important;
          }
          [data-grid-id="custom-row-styling"] .virtualized-grid-row:has([data-status="active"]):hover {
            background-color: rgb(220 252 231) !important;
          }
          [data-grid-id="custom-row-styling"] .virtualized-grid-row:has([data-status="pending"]) {
            background-color: rgb(254 252 232) !important;
            border-left-color: rgb(234 179 8) !important;
          }
          [data-grid-id="custom-row-styling"] .virtualized-grid-row:has([data-status="pending"]):hover {
            background-color: rgb(254 249 195) !important;
          }
          [data-grid-id="custom-row-styling"] .virtualized-grid-row:has([data-status="inactive"]) {
            background-color: rgb(249 250 251) !important;
            border-left-color: rgb(156 163 175) !important;
          }
          [data-grid-id="custom-row-styling"] .virtualized-grid-row:has([data-status="inactive"]):hover {
            background-color: rgb(243 244 246) !important;
          }
        \`}</style>
        <div data-grid-id="custom-row-styling">
          <DataGrid columns={columns} data={data} gridId="custom-row-styling" renderCell={({
          value,
          row,
          column
        }) => {
          if (column.id === 'status') {
            return <span data-status={row.status}>{column.render ? column.render(row) : value}</span>;
          }
          return value;
        }} />
        </div>
      </div>;
  }
}`,...(B=(q=b.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const Y=["CustomCells","CustomHeaders","CustomHeaderCellRendering","MinimalHeaderDesign","ColorfulHeaderBadges","HeadersWithTooltips","GradientHeaderDesign","CustomRowStyling"];export{x as ColorfulHeaderBadges,c as CustomCells,m as CustomHeaderCellRendering,g as CustomHeaders,b as CustomRowStyling,u as GradientHeaderDesign,h as HeadersWithTooltips,p as MinimalHeaderDesign,Y as __namedExportsOrder,X as default};
