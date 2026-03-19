import type { Meta, StoryObj } from '@storybook/react';
import { useState, useMemo } from 'react';
import { DataGrid } from '../../DataGrid';
import type { ColumnDef } from '../../types';
import '../../index.css';

const generatePersonData = (count: number) => {
  const firstNames = ['Aria', 'Elias', 'Luna', 'Felix', 'Nova', 'Atlas', 'Iris', 'Jasper', 'Stella', 'Oscar'];
  const lastNames = ['Sterling', 'Blackwood', 'Montgomery', 'Fitzgerald', 'Ashworth', 'Kingsley', 'Beaumont', 'Hartwell', 'Sinclair', 'Windsor'];
  const departments = ['Design', 'Engineering', 'Marketing', 'Sales', 'Operations'];
  const statuses = ['Active', 'On Leave', 'Remote', 'In Office'];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`,
    email: `${firstNames[i % firstNames.length].toLowerCase()}.${lastNames[i % lastNames.length].toLowerCase()}@example.com`,
    department: departments[i % departments.length],
    status: statuses[i % statuses.length],
    salary: 60000 + Math.floor(Math.random() * 140000),
    joinDate: new Date(2018 + (i % 6), i % 12, (i % 28) + 1).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }),
    projects: Math.floor(Math.random() * 10) + 1,
    performance: (Math.random() * 5).toFixed(1),
  }));
};

const peopleColumns: ColumnDef[] = [
  { id: 'id', key: 'id', header: 'ID', width: 80, enableSorting: true },
  { id: 'name', key: 'name', header: 'Full Name', width: 200, enableSorting: true, enableFiltering: true },
  { id: 'email', key: 'email', header: 'Email Address', width: 280, enableFiltering: true },
  { id: 'department', key: 'department', header: 'Department', width: 150, enableSorting: true, enableFiltering: true, enableGrouping: true },
  { id: 'status', key: 'status', header: 'Status', width: 120, enableSorting: true, enableGrouping: true },
  {
    id: 'salary',
    key: 'salary',
    header: 'Annual Salary',
    width: 150,
    enableSorting: true,
    render: (item) => `$${item.salary.toLocaleString()}`
  },
  { id: 'joinDate', key: 'joinDate', header: 'Join Date', width: 140 },
  { id: 'projects', key: 'projects', header: 'Projects', width: 100, enableSorting: true },
];

const meta: Meta<typeof DataGrid> = {
  title: 'Gridular/Features/Pagination',
  component: DataGrid,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{
        padding: '2rem', fontFamily: '"DM Sans", system-ui, sans-serif',
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

export const WithPagination: Story = {
  render: () => {
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const data = useMemo(() => generatePersonData(1000), []);

    return (
      <div style={{ height: '700px' }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">Pagination</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Grid with pagination controls. Auto-virtualizes when page size exceeds threshold.
          </p>
        </div>
        <DataGrid
          gridId="pagination-example"
          columns={peopleColumns}
          data={data}
          pagination={{
            pageIndex,
            pageSize,
            totalRows: data.length,
            onPageChange: setPageIndex,
            onPageSizeChange: (size) => {
              setPageSize(size);
              setPageIndex(0);
            },
            pageSizeOptions: [10, 20, 50, 100],
          }}
          enableSorting
        />
      </div>
    );
  },
};
