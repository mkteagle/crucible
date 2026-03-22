import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./iframe-CR-0IFbH.js";import{D as r}from"./DataGrid-C34Gf9dF.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";import"./index-CrV-QA3d.js";import"./index-CfyGkxxH.js";const i=[{id:"name",key:"name",header:"Name",width:200},{id:"email",key:"email",header:"Email",width:250},{id:"role",key:"role",header:"Role",width:150},{id:"status",key:"status",header:"Status",width:150}],d=[{id:1,name:"Alice Johnson",email:"alice@example.com",role:"Admin",status:"Active"},{id:2,name:"Bob Smith",email:"bob@example.com",role:"User",status:"Active"},{id:3,name:"Carol White",email:"carol@example.com",role:"Editor",status:"Inactive"},{id:4,name:"David Brown",email:"david@example.com",role:"User",status:"Active"},{id:5,name:"Eve Davis",email:"eve@example.com",role:"Admin",status:"Active"}],Q={title:"Gridular/Customization/Skeleton Loading",component:r,parameters:{layout:"fullscreen"},decorators:[t=>e.jsxs("div",{style:{padding:"2rem",fontFamily:'"DM Sans", system-ui, sans-serif',minHeight:"100vh",background:"#f5f5f5"},children:[e.jsx("style",{children:`
          .skeleton-purple {
            background: linear-gradient(90deg, #e9d5ff 0%, #f3e8ff 50%, #e9d5ff 100%);
            background-size: 200% 100%;
          }

          .skeleton-slow {
            animation: shimmer 3s infinite;
          }

          .skeleton-fast {
            animation: shimmer 0.8s infinite;
          }

          .skeleton-no-animation {
            animation: none;
            background: #f0ede9;
          }

          .skeleton-large {
            width: 90%;
            height: 20px;
            border-radius: 8px;
          }

          .skeleton-dark {
            background: linear-gradient(90deg, #374151 0%, #4b5563 50%, #374151 100%);
            background-size: 200% 100%;
          }

          .skeleton-brand {
            background: linear-gradient(90deg, rgba(184, 115, 51, 0.15) 0%, rgba(184, 115, 51, 0.05) 50%, rgba(184, 115, 51, 0.15) 100%);
            background-size: 200% 100%;
            animation: shimmer 2s infinite;
          }
        `}),e.jsx(t,{})]})]},l={render:()=>{const[t,s]=a.useState([]),[o,n]=a.useState(!0);return a.useEffect(()=>{setTimeout(()=>{s(d),n(!1)},2e3)},[]),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Default Skeleton"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed mb-0",children:"Default skeleton loading state with standard colors and animation."}),e.jsxs("p",{className:"font-ui text-xs text-gray-500",children:["Uses the default ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:".skeleton-shimmer"})," class."]})]}),e.jsx("div",{style:{height:"400px"},children:e.jsx(r,{columns:i,data:t,isLoading:o,pagination:{pageIndex:0,pageSize:10,totalRows:5,manualPagination:!0}})})]})}},m={render:()=>{const[t,s]=a.useState([]),[o,n]=a.useState(!0);return a.useEffect(()=>{setTimeout(()=>{s(d),n(!1)},2e3)},[]),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Custom Colors (Purple)"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed mb-0",children:"Skeleton with custom gradient colors using a purple theme."}),e.jsx("pre",{className:"font-mono text-xs bg-gray-100 p-2 rounded overflow-x-auto",children:`.skeleton-purple {
  background: linear-gradient(90deg,
    #e9d5ff 0%, #f3e8ff 50%, #e9d5ff 100%);
  background-size: 200% 100%;
}`})]}),e.jsx("div",{style:{height:"400px"},children:e.jsx(r,{columns:i,data:t,isLoading:o,pagination:{pageIndex:0,pageSize:10,totalRows:5,manualPagination:!0},classes:{skeleton:"skeleton-purple"}})})]})}},c={render:()=>{const[t,s]=a.useState([]),[o,n]=a.useState(!0);return a.useEffect(()=>{setTimeout(()=>{s(d),n(!1)},2e3)},[]),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Slow Animation"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed mb-0",children:"Skeleton with a slower animation duration (3 seconds)."}),e.jsx("pre",{className:"font-mono text-xs bg-gray-100 p-2 rounded overflow-x-auto",children:`.skeleton-slow {
  animation: shimmer 3s infinite;
}`})]}),e.jsx("div",{style:{height:"400px"},children:e.jsx(r,{columns:i,data:t,isLoading:o,pagination:{pageIndex:0,pageSize:10,totalRows:5,manualPagination:!0},classes:{skeleton:"skeleton-slow"}})})]})}},g={render:()=>{const[t,s]=a.useState([]),[o,n]=a.useState(!0);return a.useEffect(()=>{setTimeout(()=>{s(d),n(!1)},2e3)},[]),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Fast Animation"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed mb-0",children:"Skeleton with a faster animation duration (0.8 seconds)."}),e.jsx("pre",{className:"font-mono text-xs bg-gray-100 p-2 rounded overflow-x-auto",children:`.skeleton-fast {
  animation: shimmer 0.8s infinite;
}`})]}),e.jsx("div",{style:{height:"400px"},children:e.jsx(r,{columns:i,data:t,isLoading:o,pagination:{pageIndex:0,pageSize:10,totalRows:5,manualPagination:!0},classes:{skeleton:"skeleton-fast"}})})]})}},p={render:()=>{const[t,s]=a.useState([]),[o,n]=a.useState(!0);return a.useEffect(()=>{setTimeout(()=>{s(d),n(!1)},2e3)},[]),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"No Animation"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed mb-0",children:"Static skeleton without animation (useful for reduced motion preferences)."}),e.jsx("pre",{className:"font-mono text-xs bg-gray-100 p-2 rounded overflow-x-auto",children:`.skeleton-no-animation {
  animation: none;
  background: #f0ede9;
}`})]}),e.jsx("div",{style:{height:"400px"},children:e.jsx(r,{columns:i,data:t,isLoading:o,pagination:{pageIndex:0,pageSize:10,totalRows:5,manualPagination:!0},classes:{skeleton:"skeleton-no-animation"}})})]})}},x={render:()=>{const[t,s]=a.useState([]),[o,n]=a.useState(!0);return a.useEffect(()=>{setTimeout(()=>{s(d),n(!1)},2e3)},[]),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Custom Dimensions"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed mb-0",children:"Skeleton with custom width, height, and border radius."}),e.jsx("pre",{className:"font-mono text-xs bg-gray-100 p-2 rounded overflow-x-auto",children:`.skeleton-large {
  width: 90%;
  height: 20px;
  border-radius: 8px;
}`})]}),e.jsx("div",{style:{height:"400px"},children:e.jsx(r,{columns:i,data:t,isLoading:o,pagination:{pageIndex:0,pageSize:10,totalRows:5,manualPagination:!0},classes:{skeleton:"skeleton-large"}})})]})}},u={render:()=>{const[t,s]=a.useState([]),[o,n]=a.useState(!0);return a.useEffect(()=>{setTimeout(()=>{s(d),n(!1)},2e3)},[]),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-4 p-4 bg-gray-800 rounded-lg shadow",children:[e.jsx("h3",{className:"font-ui text-lg font-semibold text-white mb-2",children:"Dark Theme Skeleton"}),e.jsx("p",{className:"font-ui text-sm text-gray-300 mb-2",children:"Skeleton optimized for dark backgrounds with darker colors."}),e.jsx("pre",{className:"font-mono text-xs bg-gray-700 text-gray-200 p-2 rounded overflow-x-auto",children:`.skeleton-dark {
  background: linear-gradient(90deg,
    #374151 0%, #4b5563 50%, #374151 100%);
  background-size: 200% 100%;
}`})]}),e.jsx("div",{style:{height:"400px"},children:e.jsx(r,{columns:i,data:t,isLoading:o,pagination:{pageIndex:0,pageSize:10,totalRows:5,manualPagination:!0},classes:{container:"bg-gray-900",body:"bg-gray-900",skeleton:"skeleton-dark"}})})]})}},b={render:()=>{const[t,s]=a.useState([]),[o,n]=a.useState(!0);return a.useEffect(()=>{setTimeout(()=>{s(d),n(!1)},2e3)},[]),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("h3",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Brand Colors"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed mb-0",children:"Skeleton using copper brand colors to match the grid theme with slower animation."}),e.jsx("pre",{className:"font-mono text-xs bg-gray-100 p-2 rounded overflow-x-auto",children:`.skeleton-brand {
  background: linear-gradient(90deg,
    rgba(184, 115, 51, 0.15) 0%,
    rgba(184, 115, 51, 0.05) 50%,
    rgba(184, 115, 51, 0.15) 100%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}`})]}),e.jsx("div",{style:{height:"400px"},children:e.jsx(r,{columns:i,data:t,isLoading:o,pagination:{pageIndex:0,pageSize:10,totalRows:5,manualPagination:!0},classes:{skeleton:"skeleton-brand"}})})]})}};var h,f,k;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      // Simulate loading
      setTimeout(() => {
        setData(mockData);
        setIsLoading(false);
      }, 2000);
    }, []);
    return <div>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Default Skeleton</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed mb-0">
            Default skeleton loading state with standard colors and animation.
          </p>
          <p className="font-ui text-xs text-gray-500">
            Uses the default <code className="bg-gray-100 px-1 rounded">.skeleton-shimmer</code> class.
          </p>
        </div>
        <div style={{
        height: '400px'
      }}>
          <DataGrid columns={columns} data={data} isLoading={isLoading} pagination={{
          pageIndex: 0,
          pageSize: 10,
          totalRows: 5,
          manualPagination: true
        }} />
        </div>
      </div>;
  }
}`,...(k=(f=l.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var w,v,S;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      // Simulate loading
      setTimeout(() => {
        setData(mockData);
        setIsLoading(false);
      }, 2000);
    }, []);
    return <div>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Custom Colors (Purple)</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed mb-0">
            Skeleton with custom gradient colors using a purple theme.
          </p>
          <pre className="font-mono text-xs bg-gray-100 p-2 rounded overflow-x-auto">
{\`.skeleton-purple {
  background: linear-gradient(90deg,
    #e9d5ff 0%, #f3e8ff 50%, #e9d5ff 100%);
  background-size: 200% 100%;
}\`}</pre>
        </div>
        <div style={{
        height: '400px'
      }}>
          <DataGrid columns={columns} data={data} isLoading={isLoading} pagination={{
          pageIndex: 0,
          pageSize: 10,
          totalRows: 5,
          manualPagination: true
        }} classes={{
          skeleton: 'skeleton-purple'
        }} />
        </div>
      </div>;
  }
}`,...(S=(v=m.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var _,y,N;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      // Simulate loading
      setTimeout(() => {
        setData(mockData);
        setIsLoading(false);
      }, 2000);
    }, []);
    return <div>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Slow Animation</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed mb-0">
            Skeleton with a slower animation duration (3 seconds).
          </p>
          <pre className="font-mono text-xs bg-gray-100 p-2 rounded overflow-x-auto">
{\`.skeleton-slow {
  animation: shimmer 3s infinite;
}\`}</pre>
        </div>
        <div style={{
        height: '400px'
      }}>
          <DataGrid columns={columns} data={data} isLoading={isLoading} pagination={{
          pageIndex: 0,
          pageSize: 10,
          totalRows: 5,
          manualPagination: true
        }} classes={{
          skeleton: 'skeleton-slow'
        }} />
        </div>
      </div>;
  }
}`,...(N=(y=c.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var j,D,L;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      // Simulate loading
      setTimeout(() => {
        setData(mockData);
        setIsLoading(false);
      }, 2000);
    }, []);
    return <div>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Fast Animation</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed mb-0">
            Skeleton with a faster animation duration (0.8 seconds).
          </p>
          <pre className="font-mono text-xs bg-gray-100 p-2 rounded overflow-x-auto">
{\`.skeleton-fast {
  animation: shimmer 0.8s infinite;
}\`}</pre>
        </div>
        <div style={{
        height: '400px'
      }}>
          <DataGrid columns={columns} data={data} isLoading={isLoading} pagination={{
          pageIndex: 0,
          pageSize: 10,
          totalRows: 5,
          manualPagination: true
        }} classes={{
          skeleton: 'skeleton-fast'
        }} />
        </div>
      </div>;
  }
}`,...(L=(D=g.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var I,z,E;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      // Simulate loading
      setTimeout(() => {
        setData(mockData);
        setIsLoading(false);
      }, 2000);
    }, []);
    return <div>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">No Animation</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed mb-0">
            Static skeleton without animation (useful for reduced motion preferences).
          </p>
          <pre className="font-mono text-xs bg-gray-100 p-2 rounded overflow-x-auto">
{\`.skeleton-no-animation {
  animation: none;
  background: #f0ede9;
}\`}</pre>
        </div>
        <div style={{
        height: '400px'
      }}>
          <DataGrid columns={columns} data={data} isLoading={isLoading} pagination={{
          pageIndex: 0,
          pageSize: 10,
          totalRows: 5,
          manualPagination: true
        }} classes={{
          skeleton: 'skeleton-no-animation'
        }} />
        </div>
      </div>;
  }
}`,...(E=(z=p.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var T,A,C;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      // Simulate loading
      setTimeout(() => {
        setData(mockData);
        setIsLoading(false);
      }, 2000);
    }, []);
    return <div>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Custom Dimensions</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed mb-0">
            Skeleton with custom width, height, and border radius.
          </p>
          <pre className="font-mono text-xs bg-gray-100 p-2 rounded overflow-x-auto">
{\`.skeleton-large {
  width: 90%;
  height: 20px;
  border-radius: 8px;
}\`}</pre>
        </div>
        <div style={{
        height: '400px'
      }}>
          <DataGrid columns={columns} data={data} isLoading={isLoading} pagination={{
          pageIndex: 0,
          pageSize: 10,
          totalRows: 5,
          manualPagination: true
        }} classes={{
          skeleton: 'skeleton-large'
        }} />
        </div>
      </div>;
  }
}`,...(C=(A=x.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var P,R,U;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      // Simulate loading
      setTimeout(() => {
        setData(mockData);
        setIsLoading(false);
      }, 2000);
    }, []);
    return <div>
        <div className="mb-4 p-4 bg-gray-800 rounded-lg shadow">
          <h3 className="font-ui text-lg font-semibold text-white mb-2">Dark Theme Skeleton</h3>
          <p className="font-ui text-sm text-gray-300 mb-2">
            Skeleton optimized for dark backgrounds with darker colors.
          </p>
          <pre className="font-mono text-xs bg-gray-700 text-gray-200 p-2 rounded overflow-x-auto">
{\`.skeleton-dark {
  background: linear-gradient(90deg,
    #374151 0%, #4b5563 50%, #374151 100%);
  background-size: 200% 100%;
}\`}</pre>
        </div>
        <div style={{
        height: '400px'
      }}>
          <DataGrid columns={columns} data={data} isLoading={isLoading} pagination={{
          pageIndex: 0,
          pageSize: 10,
          totalRows: 5,
          manualPagination: true
        }} classes={{
          container: 'bg-gray-900',
          body: 'bg-gray-900',
          skeleton: 'skeleton-dark'
        }} />
        </div>
      </div>;
  }
}`,...(U=(R=u.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var G,B,F;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      // Simulate loading
      setTimeout(() => {
        setData(mockData);
        setIsLoading(false);
      }, 2000);
    }, []);
    return <div>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Brand Colors</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed mb-0">
            Skeleton using copper brand colors to match the grid theme with slower animation.
          </p>
          <pre className="font-mono text-xs bg-gray-100 p-2 rounded overflow-x-auto">
{\`.skeleton-brand {
  background: linear-gradient(90deg,
    rgba(184, 115, 51, 0.15) 0%,
    rgba(184, 115, 51, 0.05) 50%,
    rgba(184, 115, 51, 0.15) 100%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}\`}</pre>
        </div>
        <div style={{
        height: '400px'
      }}>
          <DataGrid columns={columns} data={data} isLoading={isLoading} pagination={{
          pageIndex: 0,
          pageSize: 10,
          totalRows: 5,
          manualPagination: true
        }} classes={{
          skeleton: 'skeleton-brand'
        }} />
        </div>
      </div>;
  }
}`,...(F=(B=b.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};const V=["Default","CustomColors","SlowAnimation","FastAnimation","NoAnimation","CustomDimensions","DarkTheme","BrandColors"];export{b as BrandColors,m as CustomColors,x as CustomDimensions,u as DarkTheme,l as Default,g as FastAnimation,p as NoAnimation,c as SlowAnimation,V as __namedExportsOrder,Q as default};
