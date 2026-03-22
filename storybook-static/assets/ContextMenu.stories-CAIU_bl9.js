import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as d}from"./DataGrid-C34Gf9dF.js";import{r as C}from"./iframe-CR-0IFbH.js";import"./index-CrV-QA3d.js";import"./index-CfyGkxxH.js";import"./preload-helper-Dp1pzeXC.js";const c=Array.from({length:50},(i,n)=>({id:n+1,name:`User ${n+1}`,email:`user${n+1}@example.com`,role:["Admin","Editor","Viewer"][n%3],status:["Active","Inactive","Pending"][n%3]})),T={title:"Gridular/Features/Context Menu",component:d,parameters:{layout:"fullscreen"},decorators:[i=>e.jsx("div",{style:{padding:"2rem",minHeight:"100vh",background:"#f5f5f5",fontFamily:'"DM Sans", system-ui, sans-serif'},children:e.jsx(i,{})})],tags:["autodocs"]},a={args:{columns:[],data:[]},render:()=>{const[i,n]=C.useState(""),l=[{id:"name",header:"Name",key:"name"},{id:"email",header:"Email",key:"email"},{id:"role",header:"Role",key:"role"},{id:"status",header:"Status",key:"status"}];return e.jsxs("div",{children:[i&&e.jsx("div",{className:"mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md text-blue-800",children:i}),e.jsx(d,{columns:l,data:c,contextMenuContent:(t,o)=>e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>{n(`Copied ${o.header}: ${t[o.key]}`),navigator.clipboard.writeText(String(t[o.key])),setTimeout(()=>n(""),3e3)},children:"Copy Cell Value"}),e.jsx("button",{onClick:()=>{n(`Viewing details for: ${t.name}`),setTimeout(()=>n(""),3e3)},children:"View Details"}),e.jsx("button",{onClick:()=>{n(`Editing: ${t.name}`),setTimeout(()=>n(""),3e3)},children:"Edit Row"}),e.jsx("div",{className:"virtualized-grid-context-menu-divider"}),e.jsx("button",{className:"danger",onClick:()=>{n(`Deleted: ${t.name}`),setTimeout(()=>n(""),3e3)},children:"Delete Row"})]})})]})}},s={args:{columns:[],data:[]},render:()=>{const[i,n]=C.useState(""),l=[{id:"name",header:"Name",key:"name"},{id:"email",header:"Email",key:"email"},{id:"role",header:"Role",key:"role"},{id:"status",header:"Status",key:"status"}];return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-4 p-4 bg-gray-50 border border-gray-200 rounded-md",children:[e.jsx("p",{className:"text-sm text-gray-700",children:"This example shows conditional context menus. Try right-clicking on different columns:"}),e.jsxs("ul",{className:"mt-2 text-sm text-gray-600 list-disc list-inside",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Name column:"})," Shows user-specific actions"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Email column:"})," Shows email-specific actions"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Role column:"})," Shows role management actions"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Status column:"})," Shows status change actions"]})]})]}),i&&e.jsx("div",{className:"mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md text-blue-800",children:i}),e.jsx(d,{columns:l,data:c,contextMenuContent:(t,o)=>o.id==="name"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"virtualized-grid-context-menu-header",children:"User Actions"}),e.jsx("button",{onClick:()=>{n(`Viewing profile: ${t.name}`),setTimeout(()=>n(""),3e3)},children:"View Profile"}),e.jsx("button",{onClick:()=>{n(`Sending message to: ${t.name}`),setTimeout(()=>n(""),3e3)},children:"Send Message"})]}):o.id==="email"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"virtualized-grid-context-menu-header",children:"Email Actions"}),e.jsx("button",{onClick:()=>{n(`Copied email: ${t.email}`),navigator.clipboard.writeText(t.email),setTimeout(()=>n(""),3e3)},children:"Copy Email"}),e.jsx("button",{onClick:()=>{n(`Opening email client for: ${t.email}`),setTimeout(()=>n(""),3e3)},children:"Send Email"})]}):o.id==="role"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"virtualized-grid-context-menu-header",children:"Change Role"}),e.jsx("button",{onClick:()=>{n(`Changed ${t.name}'s role to Admin`),setTimeout(()=>n(""),3e3)},children:"Set as Admin"}),e.jsx("button",{onClick:()=>{n(`Changed ${t.name}'s role to Editor`),setTimeout(()=>n(""),3e3)},children:"Set as Editor"}),e.jsx("button",{onClick:()=>{n(`Changed ${t.name}'s role to Viewer`),setTimeout(()=>n(""),3e3)},children:"Set as Viewer"})]}):o.id==="status"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"virtualized-grid-context-menu-header",children:"Change Status"}),e.jsx("button",{onClick:()=>{n(`Activated ${t.name}`),setTimeout(()=>n(""),3e3)},children:"Set Active"}),e.jsx("button",{onClick:()=>{n(`Deactivated ${t.name}`),setTimeout(()=>n(""),3e3)},children:"Set Inactive"}),e.jsx("button",{onClick:()=>{n(`Set ${t.name} to Pending`),setTimeout(()=>n(""),3e3)},children:"Set Pending"})]}):e.jsx("button",{onClick:()=>{n(`Copied: ${t[o.key]}`),navigator.clipboard.writeText(String(t[o.key])),setTimeout(()=>n(""),3e3)},children:"Copy Value"})})]})}},r={args:{columns:[],data:[]},render:()=>{const i=[{id:"name",header:"Name",key:"name"},{id:"email",header:"Email",key:"email"},{id:"role",header:"Role",key:"role"},{id:"status",header:"Status",key:"status"}];return e.jsxs("div",{children:[e.jsx("div",{className:"mb-4 p-4 bg-gray-50 border border-gray-200 rounded-md",children:e.jsxs("p",{className:"text-sm text-gray-700",children:["This grid has no ",e.jsx("code",{className:"px-1 py-0.5 bg-gray-200 rounded",children:"contextMenuContent"})," prop, so right-clicking cells will show the browser's default context menu."]})}),e.jsx(d,{columns:i,data:c.slice(0,10)})]})}};var m,u,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    columns: [],
    data: []
  },
  render: () => {
    const [notification, setNotification] = useState<string>('');
    const columns = [{
      id: 'name',
      header: 'Name',
      key: 'name'
    }, {
      id: 'email',
      header: 'Email',
      key: 'email'
    }, {
      id: 'role',
      header: 'Role',
      key: 'role'
    }, {
      id: 'status',
      header: 'Status',
      key: 'status'
    }];
    return <div>
        {notification && <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md text-blue-800">
            {notification}
          </div>}
        <DataGrid columns={columns} data={sampleUsers} contextMenuContent={(row, column) => <>
              <button onClick={() => {
          setNotification(\`Copied \${column.header}: \${row[column.key]}\`);
          navigator.clipboard.writeText(String(row[column.key]));
          setTimeout(() => setNotification(''), 3000);
        }}>
                Copy Cell Value
              </button>
              <button onClick={() => {
          setNotification(\`Viewing details for: \${row.name}\`);
          setTimeout(() => setNotification(''), 3000);
        }}>
                View Details
              </button>
              <button onClick={() => {
          setNotification(\`Editing: \${row.name}\`);
          setTimeout(() => setNotification(''), 3000);
        }}>
                Edit Row
              </button>
              <div className="virtualized-grid-context-menu-divider" />
              <button className="danger" onClick={() => {
          setNotification(\`Deleted: \${row.name}\`);
          setTimeout(() => setNotification(''), 3000);
        }}>
                Delete Row
              </button>
            </>} />
      </div>;
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,x,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    columns: [],
    data: []
  },
  render: () => {
    const [notification, setNotification] = useState<string>('');
    const columns = [{
      id: 'name',
      header: 'Name',
      key: 'name'
    }, {
      id: 'email',
      header: 'Email',
      key: 'email'
    }, {
      id: 'role',
      header: 'Role',
      key: 'role'
    }, {
      id: 'status',
      header: 'Status',
      key: 'status'
    }];
    return <div>
        <div className="mb-4 p-4 bg-gray-50 border border-gray-200 rounded-md">
          <p className="text-sm text-gray-700">
            This example shows conditional context menus. Try right-clicking on different columns:
          </p>
          <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
            <li><strong>Name column:</strong> Shows user-specific actions</li>
            <li><strong>Email column:</strong> Shows email-specific actions</li>
            <li><strong>Role column:</strong> Shows role management actions</li>
            <li><strong>Status column:</strong> Shows status change actions</li>
          </ul>
        </div>
        {notification && <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md text-blue-800">
            {notification}
          </div>}
        <DataGrid columns={columns} data={sampleUsers} contextMenuContent={(row, column) => {
        // Different menu based on which column was right-clicked
        if (column.id === 'name') {
          return <>
                  <div className="virtualized-grid-context-menu-header">
                    User Actions
                  </div>
                  <button onClick={() => {
              setNotification(\`Viewing profile: \${row.name}\`);
              setTimeout(() => setNotification(''), 3000);
            }}>
                    View Profile
                  </button>
                  <button onClick={() => {
              setNotification(\`Sending message to: \${row.name}\`);
              setTimeout(() => setNotification(''), 3000);
            }}>
                    Send Message
                  </button>
                </>;
        }
        if (column.id === 'email') {
          return <>
                  <div className="virtualized-grid-context-menu-header">
                    Email Actions
                  </div>
                  <button onClick={() => {
              setNotification(\`Copied email: \${row.email}\`);
              navigator.clipboard.writeText(row.email);
              setTimeout(() => setNotification(''), 3000);
            }}>
                    Copy Email
                  </button>
                  <button onClick={() => {
              setNotification(\`Opening email client for: \${row.email}\`);
              setTimeout(() => setNotification(''), 3000);
            }}>
                    Send Email
                  </button>
                </>;
        }
        if (column.id === 'role') {
          return <>
                  <div className="virtualized-grid-context-menu-header">
                    Change Role
                  </div>
                  <button onClick={() => {
              setNotification(\`Changed \${row.name}'s role to Admin\`);
              setTimeout(() => setNotification(''), 3000);
            }}>
                    Set as Admin
                  </button>
                  <button onClick={() => {
              setNotification(\`Changed \${row.name}'s role to Editor\`);
              setTimeout(() => setNotification(''), 3000);
            }}>
                    Set as Editor
                  </button>
                  <button onClick={() => {
              setNotification(\`Changed \${row.name}'s role to Viewer\`);
              setTimeout(() => setNotification(''), 3000);
            }}>
                    Set as Viewer
                  </button>
                </>;
        }
        if (column.id === 'status') {
          return <>
                  <div className="virtualized-grid-context-menu-header">
                    Change Status
                  </div>
                  <button onClick={() => {
              setNotification(\`Activated \${row.name}\`);
              setTimeout(() => setNotification(''), 3000);
            }}>
                    Set Active
                  </button>
                  <button onClick={() => {
              setNotification(\`Deactivated \${row.name}\`);
              setTimeout(() => setNotification(''), 3000);
            }}>
                    Set Inactive
                  </button>
                  <button onClick={() => {
              setNotification(\`Set \${row.name} to Pending\`);
              setTimeout(() => setNotification(''), 3000);
            }}>
                    Set Pending
                  </button>
                </>;
        }

        // Default menu for any other column
        return <button onClick={() => {
          setNotification(\`Copied: \${row[column.key]}\`);
          navigator.clipboard.writeText(String(row[column.key]));
          setTimeout(() => setNotification(''), 3000);
        }}>
                Copy Value
              </button>;
      }} />
      </div>;
  }
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,p,N;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    columns: [],
    data: []
  },
  render: () => {
    const columns = [{
      id: 'name',
      header: 'Name',
      key: 'name'
    }, {
      id: 'email',
      header: 'Email',
      key: 'email'
    }, {
      id: 'role',
      header: 'Role',
      key: 'role'
    }, {
      id: 'status',
      header: 'Status',
      key: 'status'
    }];
    return <div>
        <div className="mb-4 p-4 bg-gray-50 border border-gray-200 rounded-md">
          <p className="text-sm text-gray-700">
            This grid has no <code className="px-1 py-0.5 bg-gray-200 rounded">contextMenuContent</code> prop,
            so right-clicking cells will show the browser's default context menu.
          </p>
        </div>
        <DataGrid columns={columns} data={sampleUsers.slice(0, 10)} />
      </div>;
  }
}`,...(N=(p=r.parameters)==null?void 0:p.docs)==null?void 0:N.source}}};const $=["BasicContextMenu","ConditionalContextMenu","WithoutContextMenu"];export{a as BasicContextMenu,s as ConditionalContextMenu,r as WithoutContextMenu,$ as __namedExportsOrder,T as default};
