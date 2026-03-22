import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe-CR-0IFbH.js";import{D as r}from"./DataGrid-C34Gf9dF.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";import"./index-CrV-QA3d.js";import"./index-CfyGkxxH.js";const G={title:"Gridular/Examples/Basic Usage",component:r,parameters:{layout:"fullscreen",docs:{description:{component:"Simple examples demonstrating basic grid usage with minimal configuration."}}},decorators:[a=>e.jsx("div",{style:{padding:"2rem",fontFamily:'"DM Sans", system-ui, sans-serif',minHeight:"100vh",background:"#f5f5f5"},children:e.jsx(a,{})})],tags:["autodocs"]},m=a=>{const s=["Alice Johnson","Bob Smith","Carol Davis","David Wilson","Eve Martinez"],p=["Engineering","Marketing","Sales","Operations","Design"];return Array.from({length:a},(N,t)=>({id:t+1,name:s[t%s.length],department:p[t%p.length],email:`${s[t%s.length].toLowerCase().replace(" ",".")}@company.com`,joinDate:new Date(2020+t%5,t%12,t%28+1).toLocaleDateString()}))},c=[{id:"id",key:"id",header:"ID",width:80},{id:"name",key:"name",header:"Name",width:200},{id:"department",key:"department",header:"Department",width:150},{id:"email",key:"email",header:"Email",width:250},{id:"joinDate",key:"joinDate",header:"Join Date",width:140}],o={render:()=>{const a=l.useMemo(()=>m(20),[]);return e.jsxs("div",{style:{height:"600px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Minimal Setup"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed",children:"The simplest possible grid configuration. Just pass columns and data."})]}),e.jsx(r,{columns:c,data:a})]})}},i={render:()=>{const a=l.useMemo(()=>m(10),[]);return e.jsxs("div",{style:{height:"600px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Small Dataset (10 rows)"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed",children:"With less than 20 rows, virtualization is disabled by default for better performance."})]}),e.jsx(r,{columns:c,data:a})]})}},d={render:()=>{const a=l.useMemo(()=>m(100),[]);return e.jsxs("div",{style:{height:"600px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Virtualized Dataset (100 rows)"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed",children:"With more than 20 rows, virtualization is automatically enabled. Scroll to see smooth performance."})]}),e.jsx(r,{columns:c,data:a})]})}},n={render:()=>{const a=l.useMemo(()=>m(1e3),[]);return e.jsxs("div",{style:{height:"600px"},children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Large Dataset (1,000 rows)"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed",children:"Virtualization handles large datasets with ease. Try scrolling through 1,000 rows smoothly!"})]}),e.jsx(r,{columns:c,data:a,gridId:"large-dataset-basic"})]})}};var x,g,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const data = useMemo(() => generateBasicData(20), []);
    return <div style={{
      height: '600px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Minimal Setup</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            The simplest possible grid configuration. Just pass columns and data.
          </p>
        </div>
        <DataGrid columns={basicColumns} data={data} />
      </div>;
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var u,b,_;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const data = useMemo(() => generateBasicData(10), []);
    return <div style={{
      height: '600px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Small Dataset (10 rows)</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            With less than 20 rows, virtualization is disabled by default for better performance.
          </p>
        </div>
        <DataGrid columns={basicColumns} data={data} />
      </div>;
  }
}`,...(_=(b=i.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var y,w,D;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const data = useMemo(() => generateBasicData(100), []);
    return <div style={{
      height: '600px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Virtualized Dataset (100 rows)</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            With more than 20 rows, virtualization is automatically enabled. Scroll to see smooth performance.
          </p>
        </div>
        <DataGrid columns={basicColumns} data={data} />
      </div>;
  }
}`,...(D=(w=d.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var v,f,j;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const data = useMemo(() => generateBasicData(1000), []);
    return <div style={{
      height: '600px'
    }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Large Dataset (1,000 rows)</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Virtualization handles large datasets with ease. Try scrolling through 1,000 rows smoothly!
          </p>
        </div>
        <DataGrid columns={basicColumns} data={data} gridId="large-dataset-basic" />
      </div>;
  }
}`,...(j=(f=n.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const L=["MinimalSetup","SmallDataset","VirtualizedDataset","LargeDataset"];export{n as LargeDataset,o as MinimalSetup,i as SmallDataset,d as VirtualizedDataset,L as __namedExportsOrder,G as default};
