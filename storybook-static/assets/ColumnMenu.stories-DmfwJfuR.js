import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as f,D as m,a as re,S as oe}from"./DataGrid-C34Gf9dF.js";import{r as c}from"./iframe-CR-0IFbH.js";import{C as v,D as y,S as le}from"./star-D-q6iJqx.js";import"./index-CrV-QA3d.js";import"./index-CfyGkxxH.js";import"./preload-helper-Dp1pzeXC.js";/**
 * @license lucide-react v0.559.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],ie=f("archive",ne);/**
 * @license lucide-react v0.559.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],N=f("file-text",ce);/**
 * @license lucide-react v0.559.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],de=f("share-2",me);/**
 * @license lucide-react v0.559.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],pe=f("sparkles",ue);/**
 * @license lucide-react v0.559.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],ge=f("trash-2",he),Se={title:"Gridular/Features/Column Menu",component:m,parameters:{layout:"fullscreen"},tags:["autodocs"]},d=[{id:1,name:"Laptop Pro",category:"Electronics",price:1299,stock:45,status:"Active"},{id:2,name:"Wireless Mouse",category:"Electronics",price:29,stock:120,status:"Active"},{id:3,name:"Desk Chair",category:"Furniture",price:399,stock:8,status:"Low Stock"},{id:4,name:"Monitor 4K",category:"Electronics",price:599,stock:0,status:"Out of Stock"},{id:5,name:"Keyboard Mechanical",category:"Electronics",price:149,stock:67,status:"Active"},{id:6,name:"Standing Desk",category:"Furniture",price:799,stock:15,status:"Active"},{id:7,name:"Webcam HD",category:"Electronics",price:89,stock:0,status:"Out of Stock"},{id:8,name:"Desk Lamp",category:"Furniture",price:49,stock:200,status:"Active"}],r=[{id:"name",header:"Product Name",key:"name",width:200},{id:"category",header:"Category",key:"category",width:150},{id:"price",header:"Price",key:"price",width:120,renderCell:o=>`$${o.price.toLocaleString()}`},{id:"stock",header:"Stock",key:"stock",width:100},{id:"status",header:"Status",key:"status",width:140,renderCell:o=>e.jsx("span",{className:`px-2 py-0.5 rounded text-xs font-semibold ${o.status==="Active"?"bg-green-100 text-green-800":o.status==="Low Stock"?"bg-yellow-100 text-yellow-800":"bg-red-100 text-red-800"}`,children:o.status})}],u={render:()=>{const[o,i]=c.useState({});return e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Column Overflow Menu"}),e.jsx("p",{className:"text-gray-600 mb-4",children:"Click the three-dot menu icon in any column header to access column actions:"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600 mb-4 space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Filter:"})," Opens a submenu with filter input (if filtering is enabled)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Hide Column:"})," Hides the column (can be shown again from the Column Manager)"]})]})]}),e.jsx("div",{style:{height:"600px"},children:e.jsx(m,{columns:r,data:d,enableFiltering:!0,enableColumnMenu:!0,filterState:o,onFilterChange:i,enableSorting:!0,rowHeight:60})})]})}},p={render:()=>{const[o,i]=c.useState({}),[l,s]=c.useState(""),t=[{...r[0],columnMenuItems:[{id:"copy",label:"Copy Names",icon:e.jsx(v,{className:"w-3 h-3"}),onClick:a=>{s(`Copied all values from ${a}`),setTimeout(()=>s(""),2e3)}}]},...r.slice(1,3),{...r[3],columnMenuItems:[{id:"export",label:"Export Stock Data",icon:e.jsx(y,{className:"w-3 h-3"}),onClick:a=>{s(`Exporting ${a} data...`),setTimeout(()=>s(""),2e3)}},{id:"clear",label:"Clear Zero Stock",icon:e.jsx(ge,{className:"w-3 h-3"}),onClick:a=>{s(`Clearing zero stock items from ${a}`),setTimeout(()=>s(""),2e3)},danger:!0}]},r[4]];return e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Custom Column Menu Items"}),e.jsx("p",{className:"text-gray-600 mb-4",children:"Each column can have custom menu items with icons and actions:"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600 mb-4 space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Product Name:"}),' "Copy Names" option']}),e.jsxs("li",{children:[e.jsx("strong",{children:"Stock:"}),' "Export Stock Data" and "Clear Zero Stock" (danger) options']})]}),l&&e.jsx("div",{className:"p-3 bg-green-50 border border-green-200 rounded mb-4",children:e.jsx("span",{className:"text-green-900 text-sm font-medium",children:l})})]}),e.jsx("div",{style:{height:"600px"},children:e.jsx(m,{columns:t,data:d,enableFiltering:!0,enableColumnMenu:!0,filterState:o,onFilterChange:i,onColumnAction:(a,n)=>{console.log("Column action:",a,"on column:",n)},enableSorting:!0,rowHeight:60})})]})}},h={render:()=>{const[o,i]=c.useState({}),[l,s]=c.useState("");return e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Global Default Menu Items"}),e.jsxs("p",{className:"text-gray-600 mb-4",children:["Use ",e.jsx("code",{className:"px-1.5 py-0.5 bg-gray-100 rounded text-xs",children:"defaultColumnMenuItems"})," to add actions that appear on all columns."]}),l&&e.jsx("div",{className:"p-3 bg-blue-50 border border-blue-200 rounded mb-4",children:e.jsx("span",{className:"text-blue-900 text-sm font-medium",children:l})})]}),e.jsx("div",{style:{height:"600px"},children:e.jsx(m,{columns:r,data:d,enableFiltering:!0,enableColumnMenu:!0,defaultColumnMenuItems:[{id:"export",label:"Export Column",icon:e.jsx(y,{className:"w-3 h-3"}),onClick:t=>{s(`Exporting ${t} data...`),setTimeout(()=>s(""),2e3)}},{id:"copy",label:"Copy Column",icon:e.jsx(v,{className:"w-3 h-3"}),onClick:t=>{s(`Copied ${t} to clipboard`),setTimeout(()=>s(""),2e3)}}],filterState:o,onFilterChange:i,onColumnAction:(t,a)=>{console.log("Global action:",t,"on column:",a)},enableSorting:!0,rowHeight:60})})]})}},g={render:()=>{const[o,i]=c.useState({}),l=[...r.slice(0,2),{...r[2],renderFilterMenu:({filterValue:s,onFilterChange:t,onClose:a})=>e.jsxs("div",{className:"p-3 space-y-2",children:[e.jsx("div",{className:"text-xs font-bold text-charcoal mb-2",children:"Price Range"}),e.jsx("div",{className:"space-y-2",children:["0-50","50-200","200-500","500+"].map(n=>e.jsxs("button",{onClick:()=>{t(n),a()},className:re("w-full px-2 py-1.5 text-left text-xs rounded","hover:bg-copper/10 transition-colors",s===n&&"bg-copper/20 font-bold"),children:["$",n]},n))})]}),filterFn:(s,t,a)=>{if(!a)return!0;const n=s.price;return a==="0-50"?n<=50:a==="50-200"?n>50&&n<=200:a==="200-500"?n>200&&n<=500:a==="500+"?n>500:!0}},...r.slice(3)];return e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Custom Filter Menu Rendering"}),e.jsxs("p",{className:"text-gray-600 mb-4",children:["The Price column has a custom filter menu with preset price ranges instead of a text input. Use ",e.jsx("code",{className:"px-1.5 py-0.5 bg-gray-100 rounded text-xs",children:"renderFilterMenu"})," per column or globally to customize the filter UI."]})]}),e.jsx("div",{style:{height:"600px"},children:e.jsx(m,{columns:l,data:d,enableFiltering:!0,enableColumnMenu:!0,filterState:o,onFilterChange:i,enableSorting:!0,rowHeight:60})})]})}},x={render:()=>{const[o,i]=c.useState({}),[l,s]=c.useState(""),t=n=>{s(n),setTimeout(()=>s(""),2500)},a=[{...r[0],columnMenuItems:[{id:"export",label:"Export",icon:e.jsx(y,{className:"w-3 h-3"}),onClick:()=>{},subMenu:[{id:"export-csv",label:"Export as CSV",icon:e.jsx(N,{className:"w-3 h-3"}),onClick:()=>t("Exporting as CSV..."),shortcut:"⌘E"},{id:"export-json",label:"Export as JSON",icon:e.jsx(N,{className:"w-3 h-3"}),onClick:()=>t("Exporting as JSON..."),shortcut:"⌘J"},{id:"export-excel",label:"Export as Excel",icon:e.jsx(N,{className:"w-3 h-3"}),onClick:()=>t("Exporting as Excel...")}]},{id:"share",label:"Share",icon:e.jsx(de,{className:"w-3 h-3"}),onClick:()=>{},separator:!0,subMenu:[{id:"share-link",label:"Copy Link",icon:e.jsx(v,{className:"w-3 h-3"}),onClick:()=>t("Link copied to clipboard"),shortcut:"⌘L"},{id:"share-email",label:"Send via Email",onClick:()=>t("Opening email client...")}]},{id:"favorite",label:"Add to Favorites",icon:e.jsx(le,{className:"w-3 h-3"}),onClick:()=>t("Added to favorites"),shortcut:"⌘F"}]},...r.slice(1,3),{...r[3],columnMenuItems:[{id:"settings",label:"Column Settings",icon:e.jsx(oe,{className:"w-3 h-3"}),onClick:()=>{},subMenu:[{id:"format",label:"Number Format",onClick:()=>{},subMenu:[{id:"format-number",label:"Standard",onClick:()=>t("Format: Standard")},{id:"format-compact",label:"Compact (1.2K)",onClick:()=>t("Format: Compact")},{id:"format-full",label:"Full (1,234)",onClick:()=>t("Format: Full")}]},{id:"align",label:"Alignment",separator:!0,onClick:()=>{},subMenu:[{id:"align-left",label:"Left",onClick:()=>t("Alignment: Left")},{id:"align-center",label:"Center",onClick:()=>t("Alignment: Center")},{id:"align-right",label:"Right",onClick:()=>t("Alignment: Right")}]}]},{id:"highlight",label:"Highlight Low Stock",icon:e.jsx(pe,{className:"w-3 h-3"}),onClick:()=>t("Highlighting items with stock < 10"),separator:!0},{id:"archive",label:"Archive Zero Stock",icon:e.jsx(ie,{className:"w-3 h-3"}),onClick:()=>t("Archiving zero stock items"),danger:!0}]},r[4]];return e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Submenus & Keyboard Shortcuts"}),e.jsx("p",{className:"text-gray-600 mb-4",children:"Menu items support nested submenus (with ChevronRight indicators), keyboard shortcuts display, and separators."}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600 mb-4 space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Product Name:"})," Export submenu, Share submenu, Add to Favorites with shortcuts"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Stock:"})," Nested settings menu (format → alignment), highlight and archive actions"]})]}),l&&e.jsx("div",{className:"p-3 bg-purple-50 border border-purple-200 rounded mb-4 animate-in fade-in slide-in-from-top-2",children:e.jsx("span",{className:"text-purple-900 text-sm font-medium",children:l})})]}),e.jsx("div",{style:{height:"600px"},children:e.jsx(m,{columns:a,data:d,enableFiltering:!0,enableColumnMenu:!0,filterState:o,onFilterChange:i,enableSorting:!0,rowHeight:60})})]})}},b={render:()=>{const[o,i]=c.useState({}),[l,s]=c.useState(""),t=[...r.slice(0,2),{...r[2],renderColumnMenu:({defaultItems:a})=>e.jsxs("div",{className:"p-2",children:[e.jsx("div",{className:"px-2 py-1.5 mb-2",children:e.jsx("div",{className:"text-[10px] font-bold text-copper uppercase tracking-wider",children:"Price Actions"})}),e.jsxs("button",{onClick:()=>{s("Bulk price update initiated"),setTimeout(()=>s(""),2500)},className:"w-full px-2.5 py-2 text-left text-xs rounded-md bg-gradient-to-r from-copper/10 to-copper-dark/10 hover:from-copper/20 hover:to-copper-dark/20 transition-all mb-1.5",children:[e.jsx("div",{className:"font-bold text-copper mb-0.5",children:"Bulk Price Update"}),e.jsx("div",{className:"text-[10px] text-charcoal/60",children:"Update prices for all items"})]}),e.jsxs("button",{onClick:()=>{s("Price history opened"),setTimeout(()=>s(""),2500)},className:"w-full px-2.5 py-2 text-left text-xs rounded-md hover:bg-copper/5 transition-colors mb-1.5",children:[e.jsx("div",{className:"font-medium text-charcoal",children:"View Price History"}),e.jsx("div",{className:"text-[10px] text-charcoal/50",children:"See pricing trends over time"})]}),e.jsx("div",{className:"h-px bg-gradient-to-r from-transparent via-copper/30 to-transparent my-2"}),a.filter,a.hideColumn]})},...r.slice(3)];return e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Fully Custom Column Menu"}),e.jsxs("p",{className:"text-gray-600 mb-4",children:["Use ",e.jsx("code",{className:"px-1.5 py-0.5 bg-gray-100 rounded text-xs",children:"renderColumnMenu"})," to completely customize the menu UI while still using default items like Filter and Hide Column."]}),l&&e.jsx("div",{className:"p-3 bg-indigo-50 border border-indigo-200 rounded mb-4",children:e.jsx("span",{className:"text-indigo-900 text-sm font-medium",children:l})})]}),e.jsx("div",{style:{height:"600px"},children:e.jsx(m,{columns:t,data:d,enableFiltering:!0,enableColumnMenu:!0,filterState:o,onFilterChange:i,enableSorting:!0,rowHeight:60})})]})}},C={render:()=>{const[o,i]=c.useState({});return e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Custom Menu Trigger"}),e.jsxs("p",{className:"text-gray-600 mb-4",children:["Use ",e.jsx("code",{className:"px-1.5 py-0.5 bg-gray-100 rounded text-xs",children:"renderColumnMenuTrigger"})," to customize the menu trigger button appearance."]})]}),e.jsx("div",{style:{height:"600px"},children:e.jsx(m,{columns:r,data:d,enableFiltering:!0,enableColumnMenu:!0,renderColumnMenuTrigger:({column:l})=>e.jsx("button",{onClick:s=>s.stopPropagation(),className:"px-2 py-1 rounded-full bg-copper/20 hover:bg-copper/30 transition-all active:scale-95",title:`Options for ${l.header}`,children:e.jsx(oe,{className:"w-3 h-3 text-copper"})}),defaultColumnMenuItems:[{id:"export",label:"Export Column",icon:e.jsx(y,{className:"w-3 h-3"}),onClick:()=>{},shortcut:"⌘E"}],filterState:o,onFilterChange:i,enableSorting:!0,rowHeight:60})})]})}};var S,k,M,w,j;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [filterState, setFilterState] = useState<FilterState>({});
    return <div className="p-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Column Overflow Menu</h2>
          <p className="text-gray-600 mb-4">
            Click the three-dot menu icon in any column header to access column actions:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
            <li><strong>Filter:</strong> Opens a submenu with filter input (if filtering is enabled)</li>
            <li><strong>Hide Column:</strong> Hides the column (can be shown again from the Column Manager)</li>
          </ul>
        </div>
        <div style={{
        height: '600px'
      }}>
          <DataGrid columns={columns} data={products} enableFiltering={true} enableColumnMenu={true} filterState={filterState} onFilterChange={setFilterState} enableSorting={true} rowHeight={60} />
        </div>
      </div>;
  }
}`,...(M=(k=u.parameters)==null?void 0:k.docs)==null?void 0:M.source},description:{story:"Basic overflow menu with filter and hide column options.",...(j=(w=u.parameters)==null?void 0:w.docs)==null?void 0:j.description}}};var F,E,I,A,T;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [filterState, setFilterState] = useState<FilterState>({});
    const [message, setMessage] = useState<string>('');
    const customColumns: ColumnDef<Product>[] = [{
      ...columns[0],
      columnMenuItems: [{
        id: 'copy',
        label: 'Copy Names',
        icon: <Copy className="w-3 h-3" />,
        onClick: columnId => {
          setMessage(\`Copied all values from \${columnId}\`);
          setTimeout(() => setMessage(''), 2000);
        }
      }]
    }, ...columns.slice(1, 3), {
      ...columns[3],
      columnMenuItems: [{
        id: 'export',
        label: 'Export Stock Data',
        icon: <Download className="w-3 h-3" />,
        onClick: columnId => {
          setMessage(\`Exporting \${columnId} data...\`);
          setTimeout(() => setMessage(''), 2000);
        }
      }, {
        id: 'clear',
        label: 'Clear Zero Stock',
        icon: <Trash2 className="w-3 h-3" />,
        onClick: columnId => {
          setMessage(\`Clearing zero stock items from \${columnId}\`);
          setTimeout(() => setMessage(''), 2000);
        },
        danger: true
      }]
    }, columns[4]];
    return <div className="p-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Custom Column Menu Items</h2>
          <p className="text-gray-600 mb-4">
            Each column can have custom menu items with icons and actions:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
            <li><strong>Product Name:</strong> "Copy Names" option</li>
            <li><strong>Stock:</strong> "Export Stock Data" and "Clear Zero Stock" (danger) options</li>
          </ul>
          {message && <div className="p-3 bg-green-50 border border-green-200 rounded mb-4">
              <span className="text-green-900 text-sm font-medium">{message}</span>
            </div>}
        </div>
        <div style={{
        height: '600px'
      }}>
          <DataGrid columns={customColumns} data={products} enableFiltering={true} enableColumnMenu={true} filterState={filterState} onFilterChange={setFilterState} onColumnAction={(action, columnId) => {
          console.log('Column action:', action, 'on column:', columnId);
        }} enableSorting={true} rowHeight={60} />
        </div>
      </div>;
  }
}`,...(I=(E=p.parameters)==null?void 0:E.docs)==null?void 0:I.source},description:{story:"Custom menu items per column and globally.",...(T=(A=p.parameters)==null?void 0:A.docs)==null?void 0:T.description}}};var H,D,P,$,L;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [filterState, setFilterState] = useState<FilterState>({});
    const [message, setMessage] = useState<string>('');
    return <div className="p-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Global Default Menu Items</h2>
          <p className="text-gray-600 mb-4">
            Use <code className="px-1.5 py-0.5 bg-gray-100 rounded text-xs">defaultColumnMenuItems</code> to add
            actions that appear on all columns.
          </p>
          {message && <div className="p-3 bg-blue-50 border border-blue-200 rounded mb-4">
              <span className="text-blue-900 text-sm font-medium">{message}</span>
            </div>}
        </div>
        <div style={{
        height: '600px'
      }}>
          <DataGrid columns={columns} data={products} enableFiltering={true} enableColumnMenu={true} defaultColumnMenuItems={[{
          id: 'export',
          label: 'Export Column',
          icon: <Download className="w-3 h-3" />,
          onClick: columnId => {
            setMessage(\`Exporting \${columnId} data...\`);
            setTimeout(() => setMessage(''), 2000);
          }
        }, {
          id: 'copy',
          label: 'Copy Column',
          icon: <Copy className="w-3 h-3" />,
          onClick: columnId => {
            setMessage(\`Copied \${columnId} to clipboard\`);
            setTimeout(() => setMessage(''), 2000);
          }
        }]} filterState={filterState} onFilterChange={setFilterState} onColumnAction={(action, columnId) => {
          console.log('Global action:', action, 'on column:', columnId);
        }} enableSorting={true} rowHeight={60} />
        </div>
      </div>;
  }
}`,...(P=(D=h.parameters)==null?void 0:D.docs)==null?void 0:P.source},description:{story:"Global default menu items that appear on all columns.",...(L=($=h.parameters)==null?void 0:$.docs)==null?void 0:L.description}}};var O,G,U,z,V;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [filterState, setFilterState] = useState<FilterState>({});
    const customColumns: ColumnDef<Product>[] = [...columns.slice(0, 2), {
      ...columns[2],
      renderFilterMenu: ({
        filterValue,
        onFilterChange,
        onClose
      }) => <div className="p-3 space-y-2">
            <div className="text-xs font-bold text-charcoal mb-2">Price Range</div>
            <div className="space-y-2">
              {['0-50', '50-200', '200-500', '500+'].map(range => <button key={range} onClick={() => {
            onFilterChange(range);
            onClose();
          }} className={cn('w-full px-2 py-1.5 text-left text-xs rounded', 'hover:bg-copper/10 transition-colors', filterValue === range && 'bg-copper/20 font-bold')}>
                  \${range}
                </button>)}
            </div>
          </div>,
      filterFn: (row, _, filterValue) => {
        if (!filterValue) return true;
        const price = row.price;
        if (filterValue === '0-50') return price <= 50;
        if (filterValue === '50-200') return price > 50 && price <= 200;
        if (filterValue === '200-500') return price > 200 && price <= 500;
        if (filterValue === '500+') return price > 500;
        return true;
      }
    }, ...columns.slice(3)];
    return <div className="p-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Custom Filter Menu Rendering</h2>
          <p className="text-gray-600 mb-4">
            The Price column has a custom filter menu with preset price ranges instead of a text input.
            Use <code className="px-1.5 py-0.5 bg-gray-100 rounded text-xs">renderFilterMenu</code> per column
            or globally to customize the filter UI.
          </p>
        </div>
        <div style={{
        height: '600px'
      }}>
          <DataGrid columns={customColumns} data={products} enableFiltering={true} enableColumnMenu={true} filterState={filterState} onFilterChange={setFilterState} enableSorting={true} rowHeight={60} />
        </div>
      </div>;
  }
}`,...(U=(G=g.parameters)==null?void 0:G.docs)==null?void 0:U.source},description:{story:"Custom filter menu rendering per column.",...(V=(z=g.parameters)==null?void 0:z.docs)==null?void 0:V.description}}};var _,R,B,J,K;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [filterState, setFilterState] = useState<FilterState>({});
    const [message, setMessage] = useState<string>('');
    const showMessage = (msg: string) => {
      setMessage(msg);
      setTimeout(() => setMessage(''), 2500);
    };
    const customColumns: ColumnDef<Product>[] = [{
      ...columns[0],
      columnMenuItems: [{
        id: 'export',
        label: 'Export',
        icon: <Download className="w-3 h-3" />,
        onClick: () => {},
        subMenu: [{
          id: 'export-csv',
          label: 'Export as CSV',
          icon: <FileText className="w-3 h-3" />,
          onClick: () => showMessage('Exporting as CSV...'),
          shortcut: '⌘E'
        }, {
          id: 'export-json',
          label: 'Export as JSON',
          icon: <FileText className="w-3 h-3" />,
          onClick: () => showMessage('Exporting as JSON...'),
          shortcut: '⌘J'
        }, {
          id: 'export-excel',
          label: 'Export as Excel',
          icon: <FileText className="w-3 h-3" />,
          onClick: () => showMessage('Exporting as Excel...')
        }]
      }, {
        id: 'share',
        label: 'Share',
        icon: <Share2 className="w-3 h-3" />,
        onClick: () => {},
        separator: true,
        subMenu: [{
          id: 'share-link',
          label: 'Copy Link',
          icon: <Copy className="w-3 h-3" />,
          onClick: () => showMessage('Link copied to clipboard'),
          shortcut: '⌘L'
        }, {
          id: 'share-email',
          label: 'Send via Email',
          onClick: () => showMessage('Opening email client...')
        }]
      }, {
        id: 'favorite',
        label: 'Add to Favorites',
        icon: <Star className="w-3 h-3" />,
        onClick: () => showMessage('Added to favorites'),
        shortcut: '⌘F'
      }]
    }, ...columns.slice(1, 3), {
      ...columns[3],
      columnMenuItems: [{
        id: 'settings',
        label: 'Column Settings',
        icon: <Settings className="w-3 h-3" />,
        onClick: () => {},
        subMenu: [{
          id: 'format',
          label: 'Number Format',
          onClick: () => {},
          subMenu: [{
            id: 'format-number',
            label: 'Standard',
            onClick: () => showMessage('Format: Standard')
          }, {
            id: 'format-compact',
            label: 'Compact (1.2K)',
            onClick: () => showMessage('Format: Compact')
          }, {
            id: 'format-full',
            label: 'Full (1,234)',
            onClick: () => showMessage('Format: Full')
          }]
        }, {
          id: 'align',
          label: 'Alignment',
          separator: true,
          onClick: () => {},
          subMenu: [{
            id: 'align-left',
            label: 'Left',
            onClick: () => showMessage('Alignment: Left')
          }, {
            id: 'align-center',
            label: 'Center',
            onClick: () => showMessage('Alignment: Center')
          }, {
            id: 'align-right',
            label: 'Right',
            onClick: () => showMessage('Alignment: Right')
          }]
        }]
      }, {
        id: 'highlight',
        label: 'Highlight Low Stock',
        icon: <Sparkles className="w-3 h-3" />,
        onClick: () => showMessage('Highlighting items with stock < 10'),
        separator: true
      }, {
        id: 'archive',
        label: 'Archive Zero Stock',
        icon: <Archive className="w-3 h-3" />,
        onClick: () => showMessage('Archiving zero stock items'),
        danger: true
      }]
    }, columns[4]];
    return <div className="p-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Submenus & Keyboard Shortcuts</h2>
          <p className="text-gray-600 mb-4">
            Menu items support nested submenus (with ChevronRight indicators), keyboard shortcuts display, and separators.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
            <li><strong>Product Name:</strong> Export submenu, Share submenu, Add to Favorites with shortcuts</li>
            <li><strong>Stock:</strong> Nested settings menu (format → alignment), highlight and archive actions</li>
          </ul>
          {message && <div className="p-3 bg-purple-50 border border-purple-200 rounded mb-4 animate-in fade-in slide-in-from-top-2">
              <span className="text-purple-900 text-sm font-medium">{message}</span>
            </div>}
        </div>
        <div style={{
        height: '600px'
      }}>
          <DataGrid columns={customColumns} data={products} enableFiltering={true} enableColumnMenu={true} filterState={filterState} onFilterChange={setFilterState} enableSorting={true} rowHeight={60} />
        </div>
      </div>;
  }
}`,...(B=(R=x.parameters)==null?void 0:R.docs)==null?void 0:B.source},description:{story:"Menu items with nested submenus and keyboard shortcuts.",...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Z,q,W,Q,X;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const [filterState, setFilterState] = useState<FilterState>({});
    const [message, setMessage] = useState<string>('');
    const customColumns: ColumnDef<Product>[] = [...columns.slice(0, 2), {
      ...columns[2],
      renderColumnMenu: ({
        defaultItems
      }) => <div className="p-2">
            <div className="px-2 py-1.5 mb-2">
              <div className="text-[10px] font-bold text-copper uppercase tracking-wider">Price Actions</div>
            </div>

            <button onClick={() => {
          setMessage('Bulk price update initiated');
          setTimeout(() => setMessage(''), 2500);
        }} className="w-full px-2.5 py-2 text-left text-xs rounded-md bg-gradient-to-r from-copper/10 to-copper-dark/10 hover:from-copper/20 hover:to-copper-dark/20 transition-all mb-1.5">
              <div className="font-bold text-copper mb-0.5">Bulk Price Update</div>
              <div className="text-[10px] text-charcoal/60">Update prices for all items</div>
            </button>

            <button onClick={() => {
          setMessage('Price history opened');
          setTimeout(() => setMessage(''), 2500);
        }} className="w-full px-2.5 py-2 text-left text-xs rounded-md hover:bg-copper/5 transition-colors mb-1.5">
              <div className="font-medium text-charcoal">View Price History</div>
              <div className="text-[10px] text-charcoal/50">See pricing trends over time</div>
            </button>

            <div className="h-px bg-gradient-to-r from-transparent via-copper/30 to-transparent my-2" />

            {defaultItems.filter}
            {defaultItems.hideColumn}
          </div>
    }, ...columns.slice(3)];
    return <div className="p-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Fully Custom Column Menu</h2>
          <p className="text-gray-600 mb-4">
            Use <code className="px-1.5 py-0.5 bg-gray-100 rounded text-xs">renderColumnMenu</code> to completely
            customize the menu UI while still using default items like Filter and Hide Column.
          </p>
          {message && <div className="p-3 bg-indigo-50 border border-indigo-200 rounded mb-4">
              <span className="text-indigo-900 text-sm font-medium">{message}</span>
            </div>}
        </div>
        <div style={{
        height: '600px'
      }}>
          <DataGrid columns={customColumns} data={products} enableFiltering={true} enableColumnMenu={true} filterState={filterState} onFilterChange={setFilterState} enableSorting={true} rowHeight={60} />
        </div>
      </div>;
  }
}`,...(W=(q=b.parameters)==null?void 0:q.docs)==null?void 0:W.source},description:{story:"Fully custom column menu rendering per column.",...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Y,ee,te,se,ae;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [filterState, setFilterState] = useState<FilterState>({});
    return <div className="p-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Custom Menu Trigger</h2>
          <p className="text-gray-600 mb-4">
            Use <code className="px-1.5 py-0.5 bg-gray-100 rounded text-xs">renderColumnMenuTrigger</code> to
            customize the menu trigger button appearance.
          </p>
        </div>
        <div style={{
        height: '600px'
      }}>
          <DataGrid columns={columns} data={products} enableFiltering={true} enableColumnMenu={true} renderColumnMenuTrigger={({
          column
        }) => <button onClick={e => e.stopPropagation()} className="px-2 py-1 rounded-full bg-copper/20 hover:bg-copper/30 transition-all active:scale-95" title={\`Options for \${column.header}\`}>
                <Settings className="w-3 h-3 text-copper" />
              </button>} defaultColumnMenuItems={[{
          id: 'export',
          label: 'Export Column',
          icon: <Download className="w-3 h-3" />,
          onClick: () => {},
          shortcut: '⌘E'
        }]} filterState={filterState} onFilterChange={setFilterState} enableSorting={true} rowHeight={60} />
        </div>
      </div>;
  }
}`,...(te=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:"Custom trigger button for the column menu.",...(ae=(se=C.parameters)==null?void 0:se.docs)==null?void 0:ae.description}}};const ke=["BasicOverflowMenu","CustomMenuItems","GlobalMenuItems","CustomFilterMenu","SubMenusAndShortcuts","FullyCustomMenu","CustomTrigger"];export{u as BasicOverflowMenu,g as CustomFilterMenu,p as CustomMenuItems,C as CustomTrigger,b as FullyCustomMenu,h as GlobalMenuItems,x as SubMenusAndShortcuts,ke as __namedExportsOrder,Se as default};
