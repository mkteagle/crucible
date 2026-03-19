import type { Meta, StoryObj } from '@storybook/react';
import { useState, useCallback, useEffect, useRef } from 'react';
import { DataGrid } from '../../DataGrid';
import type { ColumnDef } from '../../types';
import '../../index.css';

// Potter DB REST API Types
interface Character {
  id: string;
  name: string;
  born: string | null;
  house: string | null;
  gender: string | null;
  species: string | null;
  bloodStatus: string | null;
  slug: string;
}

interface PotterDBResponse {
  data: Array<{
    id: string;
    attributes: {
      slug: string;
      name: string;
      born: string | null;
      house: string | null;
      gender: string | null;
      species: string | null;
      blood_status: string | null;
    };
  }>;
  meta: {
    pagination: {
      current: number;
      next: number | null;
      last: number;
      records: number;
    };
  };
}

const BASE_URL = 'https://api.potterdb.com/v1';

const fetchCharacters = async (page: number, pageSize: number): Promise<{ characters: Character[]; totalCount: number; lastPage: number }> => {
  const url = `${BASE_URL}/characters?page[number]=${page}&page[size]=${pageSize}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  const json: PotterDBResponse = await response.json();
  return {
    characters: json.data.map((item) => ({
      id: item.id,
      slug: item.attributes.slug,
      name: item.attributes.name,
      born: item.attributes.born,
      house: item.attributes.house,
      gender: item.attributes.gender,
      species: item.attributes.species,
      bloodStatus: item.attributes.blood_status,
    })),
    totalCount: json.meta.pagination.records,
    lastPage: json.meta.pagination.last,
  };
};

const characterColumns: ColumnDef<Character>[] = [
  {
    id: 'name',
    key: 'name',
    header: 'Name',
    width: 250,
    enableSorting: true,
    render: (row) => row.name || 'N/A',
  },
  {
    id: 'house',
    key: 'house',
    header: 'House',
    width: 150,
    enableSorting: true,
    enableGrouping: true,
    render: (row) => row.house || 'Unknown',
  },
  {
    id: 'species',
    key: 'species',
    header: 'Species',
    width: 150,
    render: (row) => row.species || 'Unknown',
  },
  {
    id: 'gender',
    key: 'gender',
    header: 'Gender',
    width: 120,
    render: (row) => row.gender || 'Unknown',
  },
  {
    id: 'bloodStatus',
    key: 'bloodStatus',
    header: 'Blood Status',
    width: 160,
    render: (row) => row.bloodStatus || 'Unknown',
  },
  {
    id: 'born',
    key: 'born',
    header: 'Born',
    width: 180,
    render: (row) => row.born || 'Unknown',
  },
];

const meta: Meta<typeof DataGrid> = {
  title: 'Gridular/Examples/Server Pagination (Potter DB)',
  component: DataGrid,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{
        padding: '2rem',
        fontFamily: '"DM Sans", system-ui, sans-serif',
        minHeight: '100vh',
        background: '#f5f5f5',
      }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DataGrid>;

export const PotterDBPagination: Story = {
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

    return (
      <div>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <p className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Potter DB — Server Pagination</p>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Real data from the <a href="https://potterdb.com" target="_blank" rel="noopener" className="text-indigo-500 hover:underline">Potter DB</a> REST API with server-side pagination. {totalCount > 0 && <span className="text-gray-500">{totalCount.toLocaleString()} total characters.</span>}
          </p>
        </div>
        <div style={{ height: '600px' }}>
          <DataGrid
            gridId="potter-db-pagination"
            columns={characterColumns}
            data={characters}
            getRowId={(row) => row.id}
            isLoading={isLoading}
            loadingMessage="Fetching magical data from Potter DB..."
            emptyMessage="No characters found"
            pagination={{
              pageIndex,
              pageSize,
              totalRows: totalCount,
              manualPagination: true,
              onPageChange: (newPage) => {
                setPageIndex(newPage);
                loadPage(newPage, pageSize);
              },
              onPageSizeChange: (newSize) => {
                setPageSize(newSize);
                setPageIndex(0);
                loadPage(0, newSize);
              },
              pageSizeOptions: [10, 20, 50],
            }}
            enableSorting
            enableColumnResize
          />
        </div>
      </div>
    );
  },
};

export const PotterDBWithGrouping: Story = {
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

    return (
      <div>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <p className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Potter DB — Grouping with Load All</p>
          <p className="text-[13px] text-gray-600 leading-relaxed mb-3">
            Demonstrates server pagination vs. client-side grouping. The API doesn't support server-side grouping — load all characters to enable it.
          </p>

          {!loadedAll && !groupingEnabled && (
            <div className="mb-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-[13px] text-amber-900 mb-2">
                <strong>API limitation:</strong> Grouping requires loading all characters into memory.
              </p>
              <button
                onClick={fetchAllCharacters}
                disabled={isLoadingAll}
                className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-[13px] font-medium"
              >
                {isLoadingAll ? 'Loading all characters...' : `Load all ${totalCount || '5000+'} characters for grouping`}
              </button>
            </div>
          )}

          {groupingEnabled && (
            <div className="mb-3 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center justify-between">
              <p className="text-[13px] text-green-900">
                ✓ {allCharacters.length} characters loaded. Grouping enabled client-side.
              </p>
              <button
                onClick={() => { setGroupingEnabled(false); setPageIndex(0); loadPage(0, pageSize); }}
                className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-[12px] font-medium"
              >
                Back to pagination
              </button>
            </div>
          )}
        </div>

        <div style={{ height: '600px' }}>
          <DataGrid
            gridId="potter-db-grouping"
            columns={characterColumns}
            data={displayData}
            getRowId={(row) => row.id}
            isLoading={groupingEnabled ? isLoadingAll : isLoading}
            loadingMessage="Fetching magical data from Potter DB..."
            emptyMessage="No characters found"
            pagination={groupingEnabled ? undefined : {
              pageIndex,
              pageSize,
              totalRows: totalCount,
              manualPagination: true,
              onPageChange: (newPage) => { setPageIndex(newPage); loadPage(newPage, pageSize); },
              onPageSizeChange: (newSize) => { setPageSize(newSize); setPageIndex(0); loadPage(0, newSize); },
              pageSizeOptions: [10, 20, 50],
            }}
            enableSorting
            enableGrouping={groupingEnabled}
            enableColumnResize
          />
        </div>
      </div>
    );
  },
};

export const PotterDBInfiniteScroll: Story = {
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

    useEffect(() => { loadMore(0); }, []);

    const handleScroll = useCallback(({ scrollPercentage }: { scrollPercentage: number }) => {
      if (scrollPercentage > 0.8 && hasMore && !isLoading) {
        loadMore(currentPage + 1);
      }
    }, [hasMore, isLoading, currentPage, loadMore]);

    return (
      <div>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <p className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Potter DB — Infinite Scroll</p>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Virtualized infinite scroll. Fetches {pageSize} characters per batch as you scroll down.
            {totalCount && ` ${characters.length.toLocaleString()} / ${totalCount.toLocaleString()} loaded.`}
            {!hasMore && characters.length > 0 && <span className="text-green-600 ml-1">All characters loaded!</span>}
          </p>
        </div>
        <div style={{ height: '600px' }}>
          <DataGrid
            gridId="potter-db-infinite"
            columns={characterColumns}
            data={characters}
            getRowId={(row) => row.id}
            isLoading={isLoading && characters.length === 0}
            emptyMessage="No characters found"
            virtualizationThreshold={20}
            enableSorting
            enableGrouping
            enableColumnResize
            onScroll={handleScroll}
          />
        </div>
      </div>
    );
  },
};
