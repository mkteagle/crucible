import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./iframe-CR-0IFbH.js";import{D as I}from"./DataGrid-C34Gf9dF.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";import"./index-CrV-QA3d.js";import"./index-CfyGkxxH.js";const O="https://api.potterdb.com/v1",C=async(t,u)=>{const n=`${O}/characters?page[number]=${t}&page[size]=${u}`,d=await fetch(n);if(!d.ok)throw new Error(`HTTP error! status: ${d.status}`);const l=await d.json();return{characters:l.data.map(o=>({id:o.id,slug:o.attributes.slug,name:o.attributes.name,born:o.attributes.born,house:o.attributes.house,gender:o.attributes.gender,species:o.attributes.species,bloodStatus:o.attributes.blood_status})),totalCount:l.meta.pagination.records,lastPage:l.meta.pagination.last}},z=[{id:"name",key:"name",header:"Name",width:250,enableSorting:!0,render:t=>t.name||"N/A"},{id:"house",key:"house",header:"House",width:150,enableSorting:!0,enableGrouping:!0,render:t=>t.house||"Unknown"},{id:"species",key:"species",header:"Species",width:150,render:t=>t.species||"Unknown"},{id:"gender",key:"gender",header:"Gender",width:120,render:t=>t.gender||"Unknown"},{id:"bloodStatus",key:"bloodStatus",header:"Blood Status",width:160,render:t=>t.bloodStatus||"Unknown"},{id:"born",key:"born",header:"Born",width:180,render:t=>t.born||"Unknown"}],Y={title:"Gridular/Examples/Server Pagination (Potter DB)",component:I,parameters:{layout:"fullscreen"},decorators:[t=>e.jsx("div",{style:{padding:"2rem",fontFamily:'"DM Sans", system-ui, sans-serif',minHeight:"100vh",background:"#f5f5f5"},children:e.jsx(t,{})})]},w={render:()=>{const[t,u]=a.useState([]),[n,d]=a.useState(0),[l,o]=a.useState(20),[m,x]=a.useState(!1),[b,f]=a.useState(0),p=a.useRef(!1),g=a.useCallback(async(i,c)=>{x(!0);try{const r=await C(i+1,c);u(r.characters),f(r.totalCount)}catch(r){console.error("Failed to fetch characters:",r)}finally{x(!1)}},[]);return a.useEffect(()=>{p.current||(p.current=!0,g(0,l))},[]),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("p",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Potter DB — Server Pagination"}),e.jsxs("p",{className:"text-[13px] text-gray-600 leading-relaxed",children:["Real data from the ",e.jsx("a",{href:"https://potterdb.com",target:"_blank",rel:"noopener",className:"text-indigo-500 hover:underline",children:"Potter DB"})," REST API with server-side pagination. ",b>0&&e.jsxs("span",{className:"text-gray-500",children:[b.toLocaleString()," total characters."]})]})]}),e.jsx("div",{style:{height:"600px"},children:e.jsx(I,{gridId:"potter-db-pagination",columns:z,data:t,getRowId:i=>i.id,isLoading:m,loadingMessage:"Fetching magical data from Potter DB...",emptyMessage:"No characters found",pagination:{pageIndex:n,pageSize:l,totalRows:b,manualPagination:!0,onPageChange:i=>{d(i),g(i,l)},onPageSizeChange:i=>{o(i),d(0),g(0,i)},pageSizeOptions:[10,20,50]},enableSorting:!0,enableColumnResize:!0})})]})}},L={render:()=>{const[t,u]=a.useState(0),[n,d]=a.useState(20),[l,o]=a.useState([]),[m,x]=a.useState([]),[b,f]=a.useState(!1),[p,g]=a.useState(!1),[i,c]=a.useState(!1),[r,P]=a.useState(!1),[N,k]=a.useState(0),_=a.useRef(!1),y=a.useCallback(async(s,S)=>{f(!0);try{const h=await C(s+1,S);o(h.characters),k(h.totalCount)}catch(h){console.error("Failed to fetch characters:",h)}finally{f(!1)}},[]),F=a.useCallback(async()=>{g(!0);let s=[],S=1;try{const h=await C(1,50);s=h.characters;const H=h.lastPage;for(S=2;S<=Math.min(H,20);S++){const U=await C(S,50);s=[...s,...U.characters]}x(s),k(s.length),c(!0),P(!0)}catch(h){console.error("Failed to fetch all characters:",h)}finally{g(!1)}},[]);a.useEffect(()=>{_.current||(_.current=!0,y(0,n))},[]);const $=r?m:l;return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("p",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Potter DB — Grouping with Load All"}),e.jsx("p",{className:"text-[13px] text-gray-600 leading-relaxed mb-3",children:"Demonstrates server pagination vs. client-side grouping. The API doesn't support server-side grouping — load all characters to enable it."}),!i&&!r&&e.jsxs("div",{className:"mb-3 p-3 bg-amber-50 border border-amber-200 rounded-lg",children:[e.jsxs("p",{className:"text-[13px] text-amber-900 mb-2",children:[e.jsx("strong",{children:"API limitation:"})," Grouping requires loading all characters into memory."]}),e.jsx("button",{onClick:F,disabled:p,className:"px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-[13px] font-medium",children:p?"Loading all characters...":`Load all ${N||"5000+"} characters for grouping`})]}),r&&e.jsxs("div",{className:"mb-3 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center justify-between",children:[e.jsxs("p",{className:"text-[13px] text-green-900",children:["✓ ",m.length," characters loaded. Grouping enabled client-side."]}),e.jsx("button",{onClick:()=>{P(!1),u(0),y(0,n)},className:"px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-[12px] font-medium",children:"Back to pagination"})]})]}),e.jsx("div",{style:{height:"600px"},children:e.jsx(I,{gridId:"potter-db-grouping",columns:z,data:$,getRowId:s=>s.id,isLoading:r?p:b,loadingMessage:"Fetching magical data from Potter DB...",emptyMessage:"No characters found",pagination:r?void 0:{pageIndex:t,pageSize:n,totalRows:N,manualPagination:!0,onPageChange:s=>{u(s),y(s,n)},onPageSizeChange:s=>{d(s),u(0),y(0,s)},pageSizeOptions:[10,20,50]},enableSorting:!0,enableGrouping:r,enableColumnResize:!0})})]})}},v={render:()=>{const[t,u]=a.useState([]),[n,d]=a.useState(!1),[l,o]=a.useState(!0),[m,x]=a.useState(0),[b,f]=a.useState(void 0),p=50,g=a.useCallback(async c=>{if(!n){d(!0);try{const r=await C(c+1,p);u(P=>c===0?r.characters:[...P,...r.characters]),f(r.totalCount),o(c+1<r.lastPage),x(c)}catch(r){console.error("Failed to fetch characters:",r)}finally{d(!1)}}},[n]);a.useEffect(()=>{g(0)},[]);const i=a.useCallback(({scrollPercentage:c})=>{c>.8&&l&&!n&&g(m+1)},[l,n,m,g]);return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5",children:[e.jsx("p",{className:"text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2",children:"Potter DB — Infinite Scroll"}),e.jsxs("p",{className:"text-[13px] text-gray-600 leading-relaxed",children:["Virtualized infinite scroll. Fetches ",p," characters per batch as you scroll down.",b&&` ${t.length.toLocaleString()} / ${b.toLocaleString()} loaded.`,!l&&t.length>0&&e.jsx("span",{className:"text-green-600 ml-1",children:"All characters loaded!"})]})]}),e.jsx("div",{style:{height:"600px"},children:e.jsx(I,{gridId:"potter-db-infinite",columns:z,data:t,getRowId:c=>c.id,isLoading:n&&t.length===0,emptyMessage:"No characters found",virtualizationThreshold:20,enableSorting:!0,enableGrouping:!0,enableColumnResize:!0,onScroll:i})})]})}};var D,j,R;w.parameters={...w.parameters,docs:{...(D=w.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [isLoading, setIsLoading] = useState(false);
    const [totalCount, setTotalCount] = useState(0);
    const hasLoadedRef = useRef(false);
    const loadPage = useCallback(async (page: number, size: number) => {
      setIsLoading(true);
      try {
        const result = await fetchCharacters(page + 1, size);
        setCharacters(result.characters);
        setTotalCount(result.totalCount);
      } catch (error) {
        console.error('Failed to fetch characters:', error);
      } finally {
        setIsLoading(false);
      }
    }, []);
    useEffect(() => {
      if (!hasLoadedRef.current) {
        hasLoadedRef.current = true;
        loadPage(0, pageSize);
      }
    }, []);
    return <div>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <p className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Potter DB — Server Pagination</p>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Real data from the <a href="https://potterdb.com" target="_blank" rel="noopener" className="text-indigo-500 hover:underline">Potter DB</a> REST API with server-side pagination. {totalCount > 0 && <span className="text-gray-500">{totalCount.toLocaleString()} total characters.</span>}
          </p>
        </div>
        <div style={{
        height: '600px'
      }}>
          <DataGrid gridId="potter-db-pagination" columns={characterColumns} data={characters} getRowId={row => row.id} isLoading={isLoading} loadingMessage="Fetching magical data from Potter DB..." emptyMessage="No characters found" pagination={{
          pageIndex,
          pageSize,
          totalRows: totalCount,
          manualPagination: true,
          onPageChange: newPage => {
            setPageIndex(newPage);
            loadPage(newPage, pageSize);
          },
          onPageSizeChange: newSize => {
            setPageSize(newSize);
            setPageIndex(0);
            loadPage(0, newSize);
          },
          pageSizeOptions: [10, 20, 50]
        }} enableSorting enableColumnResize />
        </div>
      </div>;
  }
}`,...(R=(j=w.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var A,E,M;L.parameters={...L.parameters,docs:{...(A=L.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [characters, setCharacters] = useState<Character[]>([]);
    const [allCharacters, setAllCharacters] = useState<Character[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingAll, setIsLoadingAll] = useState(false);
    const [loadedAll, setLoadedAll] = useState(false);
    const [groupingEnabled, setGroupingEnabled] = useState(false);
    const [totalCount, setTotalCount] = useState(0);
    const hasLoadedRef = useRef(false);
    const loadPage = useCallback(async (page: number, size: number) => {
      setIsLoading(true);
      try {
        const result = await fetchCharacters(page + 1, size);
        setCharacters(result.characters);
        setTotalCount(result.totalCount);
      } catch (error) {
        console.error('Failed to fetch characters:', error);
      } finally {
        setIsLoading(false);
      }
    }, []);
    const fetchAllCharacters = useCallback(async () => {
      setIsLoadingAll(true);
      let allData: Character[] = [];
      let page = 1;
      try {
        // Fetch first page to get total
        const first = await fetchCharacters(1, 50);
        allData = first.characters;
        const lastPage = first.lastPage;

        // Fetch remaining pages in batches
        for (page = 2; page <= Math.min(lastPage, 20); page++) {
          const result = await fetchCharacters(page, 50);
          allData = [...allData, ...result.characters];
        }
        setAllCharacters(allData);
        setTotalCount(allData.length);
        setLoadedAll(true);
        setGroupingEnabled(true);
      } catch (error) {
        console.error('Failed to fetch all characters:', error);
      } finally {
        setIsLoadingAll(false);
      }
    }, []);
    useEffect(() => {
      if (!hasLoadedRef.current) {
        hasLoadedRef.current = true;
        loadPage(0, pageSize);
      }
    }, []);
    const displayData = groupingEnabled ? allCharacters : characters;
    return <div>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <p className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Potter DB — Grouping with Load All</p>
          <p className="text-[13px] text-gray-600 leading-relaxed mb-3">
            Demonstrates server pagination vs. client-side grouping. The API doesn't support server-side grouping — load all characters to enable it.
          </p>

          {!loadedAll && !groupingEnabled && <div className="mb-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-[13px] text-amber-900 mb-2">
                <strong>API limitation:</strong> Grouping requires loading all characters into memory.
              </p>
              <button onClick={fetchAllCharacters} disabled={isLoadingAll} className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-[13px] font-medium">
                {isLoadingAll ? 'Loading all characters...' : \`Load all \${totalCount || '5000+'} characters for grouping\`}
              </button>
            </div>}

          {groupingEnabled && <div className="mb-3 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center justify-between">
              <p className="text-[13px] text-green-900">
                ✓ {allCharacters.length} characters loaded. Grouping enabled client-side.
              </p>
              <button onClick={() => {
            setGroupingEnabled(false);
            setPageIndex(0);
            loadPage(0, pageSize);
          }} className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-[12px] font-medium">
                Back to pagination
              </button>
            </div>}
        </div>

        <div style={{
        height: '600px'
      }}>
          <DataGrid gridId="potter-db-grouping" columns={characterColumns} data={displayData} getRowId={row => row.id} isLoading={groupingEnabled ? isLoadingAll : isLoading} loadingMessage="Fetching magical data from Potter DB..." emptyMessage="No characters found" pagination={groupingEnabled ? undefined : {
          pageIndex,
          pageSize,
          totalRows: totalCount,
          manualPagination: true,
          onPageChange: newPage => {
            setPageIndex(newPage);
            loadPage(newPage, pageSize);
          },
          onPageSizeChange: newSize => {
            setPageSize(newSize);
            setPageIndex(0);
            loadPage(0, newSize);
          },
          pageSizeOptions: [10, 20, 50]
        }} enableSorting enableGrouping={groupingEnabled} enableColumnResize />
        </div>
      </div>;
  }
}`,...(M=(E=L.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var B,G,T;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalCount, setTotalCount] = useState<number | undefined>(undefined);
    const pageSize = 50;
    const loadMore = useCallback(async (page: number) => {
      if (isLoading) return;
      setIsLoading(true);
      try {
        const result = await fetchCharacters(page + 1, pageSize);
        setCharacters(prev => page === 0 ? result.characters : [...prev, ...result.characters]);
        setTotalCount(result.totalCount);
        setHasMore(page + 1 < result.lastPage);
        setCurrentPage(page);
      } catch (error) {
        console.error('Failed to fetch characters:', error);
      } finally {
        setIsLoading(false);
      }
    }, [isLoading]);
    useEffect(() => {
      loadMore(0);
    }, []);
    const handleScroll = useCallback(({
      scrollPercentage
    }: {
      scrollPercentage: number;
    }) => {
      if (scrollPercentage > 0.8 && hasMore && !isLoading) {
        loadMore(currentPage + 1);
      }
    }, [hasMore, isLoading, currentPage, loadMore]);
    return <div>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <p className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Potter DB — Infinite Scroll</p>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Virtualized infinite scroll. Fetches {pageSize} characters per batch as you scroll down.
            {totalCount && \` \${characters.length.toLocaleString()} / \${totalCount.toLocaleString()} loaded.\`}
            {!hasMore && characters.length > 0 && <span className="text-green-600 ml-1">All characters loaded!</span>}
          </p>
        </div>
        <div style={{
        height: '600px'
      }}>
          <DataGrid gridId="potter-db-infinite" columns={characterColumns} data={characters} getRowId={row => row.id} isLoading={isLoading && characters.length === 0} emptyMessage="No characters found" virtualizationThreshold={20} enableSorting enableGrouping enableColumnResize onScroll={handleScroll} />
        </div>
      </div>;
  }
}`,...(T=(G=v.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};const Z=["PotterDBPagination","PotterDBWithGrouping","PotterDBInfiniteScroll"];export{v as PotterDBInfiniteScroll,w as PotterDBPagination,L as PotterDBWithGrouping,Z as __namedExportsOrder,Y as default};
