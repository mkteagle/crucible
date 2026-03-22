import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-CR-0IFbH.js";import{D as k}from"./DataGrid-C34Gf9dF.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";import"./index-CrV-QA3d.js";import"./index-CfyGkxxH.js";const D=t=>{const s=["Aria","Elias","Luna","Felix","Nova","Atlas","Iris","Jasper","Stella","Oscar"],l=["Sterling","Blackwood","Montgomery","Fitzgerald","Ashworth"],a=["Design","Engineering","Marketing","Sales","Operations"];return Array.from({length:t},(g,o)=>({id:o+1,name:`${s[o%s.length]} ${l[o%l.length]}`,email:`${s[o%s.length].toLowerCase()}@example.com`,department:a[o%a.length],salary:6e4+o*1e3,projects:o%10+1}))},j=[{id:"id",key:"id",header:"ID",width:80},{id:"name",key:"name",header:"Name",width:200},{id:"email",key:"email",header:"Email",width:250},{id:"department",key:"department",header:"Department",width:150},{id:"salary",key:"salary",header:"Salary",width:150,render:t=>`$${t.salary.toLocaleString()}`},{id:"projects",key:"projects",header:"Projects",width:100}],ce={title:"Gridular/Features/Row Selection",component:k,parameters:{layout:"fullscreen"},decorators:[t=>e.jsx("div",{style:{padding:"2rem",fontFamily:'"DM Sans", system-ui, sans-serif',minHeight:"100vh",background:"#f5f5f5"},children:e.jsx(t,{})})]},C={render:()=>{const[t,s]=n.useState({}),l=n.useMemo(()=>D(50),[]),a=o=>{const i=String(o.id);s(u=>{if(u[i]){const{[i]:m,...d}=u;return d}return{[i]:!0}})},g=Object.keys(t).length;return e.jsxs("div",{style:{height:"700px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Single Row Selection"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed mb-0",children:"Click on any row to select it. Selected rows will be highlighted with a copper accent."}),e.jsxs("p",{className:"font-ui text-sm text-gray-700 font-semibold",children:["Selected rows: ",g]})]}),e.jsx(k,{gridId:"single-row-selection",columns:j,data:l,enableRowSelection:!0,selectedRows:t,onRowSelectionChange:s,onRowClick:a})]})}},_={render:()=>{const[t,s]=n.useState({}),[l,a]=n.useState(null),[g,o]=n.useState(!1),[i,u]=n.useState(null),[m,d]=n.useState(0),[p,T]=n.useState("select"),[N,O]=n.useState({}),[L,y]=n.useState(new Set),I=n.useMemo(()=>D(50),[]),J=(x,w,h)=>{const c=String(x.id),R=Date.now()-m<200&&L.size<=1;if(!(!R&&L.size>1)){if(h.shiftKey&&l!==null){const r=Math.min(l,w),b=Math.max(l,w);s(f=>{const A={...f};for(let E=r;E<=b;E++)A[String(I[E].id)]=!0;return A}),a(w);return}R&&(s(r=>{if(r[c]){const{[c]:b,...f}=r;return f}return{...r,[c]:!0}}),a(w))}},V=(x,w,h)=>{const c=String(x.id);if(d(Date.now()),u(w),h.shiftKey){o(!1);return}o(!0),O({...t}),y(new Set);const S=t[c];T(S?"deselect":"select"),s(R=>{const r={...R};return S?delete r[c]:r[c]=!0,r}),y(new Set([c])),a(w)},X=(x,w)=>{if(!g||i===null)return;const h=w,c=Math.min(i,h),S=Math.max(i,h);s(R=>{const r={...N};for(let b=c;b<=S;b++){const f=String(I[b].id);p==="select"?r[f]=!0:delete r[f]}return r}),y(new Set(Array.from({length:S-c+1},(R,r)=>String(I[c+r].id)))),a(w)},Y=()=>{o(!1),u(null),d(0),O({}),y(new Set)};n.useEffect(()=>{const x=()=>Y();return window.addEventListener("mouseup",x),()=>window.removeEventListener("mouseup",x)},[]);const Z=Object.keys(t).length,ee=Object.keys(t).join(", ");return e.jsxs("div",{style:{height:"700px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Multi-Row Selection with Drag"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed mb-0",children:"Click any row to select/deselect it. Hold Shift and click to select a range. Click and drag across rows to toggle selection (exactly like on mobile)."}),e.jsxs("p",{className:"font-ui text-sm text-gray-700 font-semibold",children:["Selected rows (",Z,"): ",ee||"None"]})]}),e.jsx(k,{gridId:"multi-row-selection",columns:j,data:I,enableRowSelection:!0,selectedRows:t,onRowSelectionChange:s,onRowClick:J,onRowMouseDown:V,onRowMouseEnter:X})]})}},v={render:()=>{const[t,s]=n.useState({}),l=n.useMemo(()=>D(50),[]),a=(i,u,m)=>{const d=String(i.id);s(p=>{if(m.metaKey||m.ctrlKey){if(p[d]){const{[d]:T,...N}=p;return N}return{...p,[d]:!0}}return p[d]?{}:{[d]:!0}})},g=Object.keys(t).length,o=Object.keys(t).join(", ");return e.jsxs("div",{style:{height:"700px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Multi-Row Selection with Modifier"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed mb-0",children:"Click to select a single row (replaces previous selection). Hold Cmd (Mac) or Ctrl (Windows) and click to add/remove rows from selection."}),e.jsxs("p",{className:"font-ui text-sm text-gray-700 font-semibold",children:["Selected rows (",g,"): ",o||"None"]})]}),e.jsx(k,{gridId:"multi-row-modifier-selection",columns:j,data:l,enableRowSelection:!0,selectedRows:t,onRowSelectionChange:s,onRowClick:a})]})}},M={render:()=>{const t=n.useMemo(()=>D(50),[]),[s,l]=n.useState({2:!0,5:!0,8:!0}),a=i=>{const u=String(i.id);l(m=>{if(m[u]){const{[u]:d,...p}=m;return p}return{...m,[u]:!0}})},g=Object.keys(s).length,o=Object.keys(s).join(", ");return e.jsxs("div",{style:{height:"700px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Preselected Rows"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed mb-0",children:"Rows can be preselected on initial render. Click rows to toggle selection."}),e.jsxs("p",{className:"font-ui text-sm text-gray-700 font-semibold",children:["Selected rows (",g,"): ",o]})]}),e.jsx(k,{gridId:"preselected-rows",columns:j,data:t,enableRowSelection:!0,selectedRows:s,onRowSelectionChange:l,onRowClick:a})]})}};var G,P,H;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const [selectedRows, setSelectedRows] = useState<RowSelectionState>({});
    const data = useMemo(() => generatePersonData(50), []);
    const handleRowClick = (item: any) => {
      const rowId = String(item.id);
      setSelectedRows(prev => {
        // Toggle single row selection
        if (prev[rowId]) {
          const {
            [rowId]: _,
            ...rest
          } = prev;
          return rest;
        }
        return {
          [rowId]: true
        };
      });
    };
    const selectedCount = Object.keys(selectedRows).length;
    return <div style={{
      height: '700px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Single Row Selection</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed mb-0">
            Click on any row to select it. Selected rows will be highlighted with a copper accent.
          </p>
          <p className="font-ui text-sm text-gray-700 font-semibold">
            Selected rows: {selectedCount}
          </p>
        </div>
        <DataGrid gridId="single-row-selection" columns={peopleColumns} data={data} enableRowSelection selectedRows={selectedRows} onRowSelectionChange={setSelectedRows} onRowClick={handleRowClick} />
      </div>;
  }
}`,...(H=(P=C.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var K,U,z;_.parameters={..._.parameters,docs:{...(K=_.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [selectedRows, setSelectedRows] = useState<RowSelectionState>({});
    const [lastSelectedIndex, setLastSelectedIndex] = useState<number | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartIndex, setDragStartIndex] = useState<number | null>(null);
    const [mouseDownTime, setMouseDownTime] = useState<number>(0);
    const [dragAction, setDragAction] = useState<'select' | 'deselect'>('select');
    const [initialSelection, setInitialSelection] = useState<RowSelectionState>({});
    const [touchedRows, setTouchedRows] = useState<Set<string>>(new Set());
    const data = useMemo(() => generatePersonData(50), []);
    const handleRowClick = (item: any, index: number, event: React.MouseEvent<HTMLDivElement>) => {
      const rowId = String(item.id);

      // Check if this was a quick click (not a drag)
      const clickDuration = Date.now() - mouseDownTime;
      const wasQuickClick = clickDuration < 200 && touchedRows.size <= 1;

      // If we dragged (not a quick click), skip the click handler
      if (!wasQuickClick && touchedRows.size > 1) {
        return;
      }

      // Shift+click for range selection
      if (event.shiftKey && lastSelectedIndex !== null) {
        const start = Math.min(lastSelectedIndex, index);
        const end = Math.max(lastSelectedIndex, index);
        setSelectedRows(prev => {
          const newSelection = {
            ...prev
          };
          for (let i = start; i <= end; i++) {
            newSelection[String(data[i].id)] = true;
          }
          return newSelection;
        });
        setLastSelectedIndex(index);
        return;
      }

      // For quick clicks, toggle normally (undo the mouseDown action if needed)
      if (wasQuickClick) {
        setSelectedRows(prev => {
          if (prev[rowId]) {
            const {
              [rowId]: _,
              ...rest
            } = prev;
            return rest;
          }
          return {
            ...prev,
            [rowId]: true
          };
        });
        setLastSelectedIndex(index);
      }
    };
    const handleMouseDown = (item: any, index: number, event: React.MouseEvent<HTMLDivElement>) => {
      const rowId = String(item.id);
      setMouseDownTime(Date.now());
      setDragStartIndex(index);

      // Skip drag handling if Shift key is pressed (for Shift+Click range selection)
      if (event.shiftKey) {
        setIsDragging(false);
        return;
      }
      setIsDragging(true); // Start dragging immediately

      // Save the initial selection state
      setInitialSelection({
        ...selectedRows
      });
      setTouchedRows(new Set());

      // Determine if we're selecting or deselecting based on the starting row
      const isCurrentlySelected = selectedRows[rowId];
      setDragAction(isCurrentlySelected ? 'deselect' : 'select');

      // Immediately apply action to the starting row
      setSelectedRows(prev => {
        const newSelection = {
          ...prev
        };
        if (isCurrentlySelected) {
          delete newSelection[rowId];
        } else {
          newSelection[rowId] = true;
        }
        return newSelection;
      });

      // Mark starting row as touched
      setTouchedRows(new Set([rowId]));
      setLastSelectedIndex(index);
    };
    const handleMouseEnter = (_item: any, index: number) => {
      if (!isDragging || dragStartIndex === null) return;
      const currentIndex = index;

      // Calculate the range from drag start to current position
      const start = Math.min(dragStartIndex, currentIndex);
      const end = Math.max(dragStartIndex, currentIndex);
      setSelectedRows(_prev => {
        const newSelection = {
          ...initialSelection
        }; // Start from initial state

        // Apply the drag action to all rows in the current range
        for (let i = start; i <= end; i++) {
          const rangeRowId = String(data[i].id);
          if (dragAction === 'select') {
            newSelection[rangeRowId] = true;
          } else {
            delete newSelection[rangeRowId];
          }
        }
        return newSelection;
      });

      // Update touched rows to match the current range
      setTouchedRows(new Set(Array.from({
        length: end - start + 1
      }, (_, i) => String(data[start + i].id))));
      setLastSelectedIndex(index);
    };
    const handleMouseUp = () => {
      setIsDragging(false);
      setDragStartIndex(null);
      setMouseDownTime(0);
      setInitialSelection({});
      setTouchedRows(new Set());
    };

    // Add global mouse up listener
    useEffect(() => {
      const handleGlobalMouseUp = () => handleMouseUp();
      window.addEventListener('mouseup', handleGlobalMouseUp);
      return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
    }, []);
    const selectedCount = Object.keys(selectedRows).length;
    const selectedIds = Object.keys(selectedRows).join(', ');
    return <div style={{
      height: '700px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Multi-Row Selection with Drag</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed mb-0">
            Click any row to select/deselect it. Hold Shift and click to select a range. Click and drag across rows to toggle selection (exactly like on mobile).
          </p>
          <p className="font-ui text-sm text-gray-700 font-semibold">
            Selected rows ({selectedCount}): {selectedIds || 'None'}
          </p>
        </div>
        <DataGrid gridId="multi-row-selection" columns={peopleColumns} data={data} enableRowSelection selectedRows={selectedRows} onRowSelectionChange={setSelectedRows} onRowClick={handleRowClick} onRowMouseDown={handleMouseDown} onRowMouseEnter={handleMouseEnter} />
      </div>;
  }
}`,...(z=(U=_.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var F,$,Q;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [selectedRows, setSelectedRows] = useState<RowSelectionState>({});
    const data = useMemo(() => generatePersonData(50), []);
    const handleRowClick = (item: any, _index: number, event: React.MouseEvent<HTMLDivElement>) => {
      const rowId = String(item.id);
      setSelectedRows(prev => {
        // Toggle row with Cmd/Ctrl for multi-select
        if (event.metaKey || event.ctrlKey) {
          if (prev[rowId]) {
            const {
              [rowId]: _,
              ...rest
            } = prev;
            return rest;
          }
          return {
            ...prev,
            [rowId]: true
          };
        }

        // Single selection without modifier
        if (prev[rowId]) {
          return {};
        }
        return {
          [rowId]: true
        };
      });
    };
    const selectedCount = Object.keys(selectedRows).length;
    const selectedIds = Object.keys(selectedRows).join(', ');
    return <div style={{
      height: '700px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Multi-Row Selection with Modifier</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed mb-0">
            Click to select a single row (replaces previous selection). Hold Cmd (Mac) or Ctrl (Windows) and click to add/remove rows from selection.
          </p>
          <p className="font-ui text-sm text-gray-700 font-semibold">
            Selected rows ({selectedCount}): {selectedIds || 'None'}
          </p>
        </div>
        <DataGrid gridId="multi-row-modifier-selection" columns={peopleColumns} data={data} enableRowSelection selectedRows={selectedRows} onRowSelectionChange={setSelectedRows} onRowClick={handleRowClick} />
      </div>;
  }
}`,...(Q=($=v.parameters)==null?void 0:$.docs)==null?void 0:Q.source}}};var W,q,B;M.parameters={...M.parameters,docs:{...(W=M.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const data = useMemo(() => generatePersonData(50), []);
    const [selectedRows, setSelectedRows] = useState<RowSelectionState>({
      '2': true,
      '5': true,
      '8': true
    });
    const handleRowClick = (item: any) => {
      const rowId = String(item.id);
      setSelectedRows(prev => {
        if (prev[rowId]) {
          const {
            [rowId]: _,
            ...rest
          } = prev;
          return rest;
        }
        return {
          ...prev,
          [rowId]: true
        };
      });
    };
    const selectedCount = Object.keys(selectedRows).length;
    const selectedIds = Object.keys(selectedRows).join(', ');
    return <div style={{
      height: '700px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Preselected Rows</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed mb-0">
            Rows can be preselected on initial render. Click rows to toggle selection.
          </p>
          <p className="font-ui text-sm text-gray-700 font-semibold">
            Selected rows ({selectedCount}): {selectedIds}
          </p>
        </div>
        <DataGrid gridId="preselected-rows" columns={peopleColumns} data={data} enableRowSelection selectedRows={selectedRows} onRowSelectionChange={setSelectedRows} onRowClick={handleRowClick} />
      </div>;
  }
}`,...(B=(q=M.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const ie=["SingleRowSelection","MultiRowSelection","MultiRowWithModifier","PreselectedRows"];export{_ as MultiRowSelection,v as MultiRowWithModifier,M as PreselectedRows,C as SingleRowSelection,ie as __namedExportsOrder,ce as default};
