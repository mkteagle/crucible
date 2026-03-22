import type { Meta, StoryObj } from '@storybook/react';
import { useState, useCallback } from 'react';
import { DataGrid } from '../../DataGrid';
import type { ColumnDef } from '../../types';
import '../../index.css';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: string;
}

const initialProducts: Product[] = [
  { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: 89.99, stock: 45, status: 'Active' },
  { id: 2, name: 'Ergonomic Keyboard', category: 'Electronics', price: 129.99, stock: 23, status: 'Active' },
  { id: 3, name: 'Standing Desk Mat', category: 'Office', price: 49.99, stock: 0, status: 'Out of Stock' },
  { id: 4, name: 'USB-C Hub', category: 'Electronics', price: 59.99, stock: 67, status: 'Active' },
  { id: 5, name: 'Desk Organizer', category: 'Office', price: 34.99, stock: 12, status: 'Active' },
  { id: 6, name: 'Monitor Light Bar', category: 'Electronics', price: 79.99, stock: 8, status: 'Low Stock' },
  { id: 7, name: 'Notebook Set', category: 'Stationery', price: 19.99, stock: 150, status: 'Active' },
  { id: 8, name: 'Webcam HD', category: 'Electronics', price: 99.99, stock: 31, status: 'Active' },
  { id: 9, name: 'Cable Management Kit', category: 'Office', price: 24.99, stock: 0, status: 'Out of Stock' },
  { id: 10, name: 'Desk Lamp', category: 'Office', price: 64.99, stock: 19, status: 'Active' },
];

const meta: Meta<typeof DataGrid> = {
  title: 'Gridular/Features/Cell Editing',
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

export const CellEditing: Story = {
  render: () => {
    const [data, setData] = useState<Product[]>(initialProducts);
    const [editLog, setEditLog] = useState<string[]>([]);

    const columns: ColumnDef<Product>[] = [
      { id: 'id', key: 'id', header: 'ID', width: 70 },
      {
        id: 'name',
        key: 'name',
        header: 'Product Name',
        width: 220,
        enableEditing: true,
        editType: 'text',
        validateEdit: (value: any) => {
          if (!value || String(value).trim().length === 0) return 'Name is required';
          if (String(value).length > 50) return 'Max 50 characters';
          return true;
        },
      },
      {
        id: 'category',
        key: 'category',
        header: 'Category',
        width: 150,
        enableEditing: true,
        editType: 'select',
        editOptions: ['Electronics', 'Office', 'Stationery', 'Furniture'],
      },
      {
        id: 'price',
        key: 'price',
        header: 'Price',
        width: 120,
        enableEditing: true,
        editType: 'number',
        validateEdit: (value: any) => {
          const num = Number(value);
          if (isNaN(num) || num <= 0) return 'Price must be positive';
          if (num > 10000) return 'Max price is $10,000';
          return true;
        },
        render: (row: Product) => `$${row.price.toFixed(2)}`,
      },
      {
        id: 'stock',
        key: 'stock',
        header: 'Stock',
        width: 100,
        enableEditing: true,
        editType: 'number',
        validateEdit: (value: any) => {
          const num = Number(value);
          if (isNaN(num) || num < 0) return 'Stock cannot be negative';
          return true;
        },
      },
      {
        id: 'status',
        key: 'status',
        header: 'Status',
        width: 140,
        enableEditing: true,
        editType: 'select',
        editOptions: ['Active', 'Low Stock', 'Out of Stock', 'Discontinued'],
      },
    ];

    const handleCellEditEnd = useCallback(
      (rowId: string, columnId: string, newValue: any, oldValue: any) => {
        setData((prev) =>
          prev.map((row) => {
            if (String(row.id) === rowId) {
              return { ...row, [columnId]: newValue };
            }
            return row;
          })
        );
        setEditLog((prev) => [
          `Row ${rowId} / ${columnId}: "${oldValue}" -> "${newValue}"`,
          ...prev.slice(0, 9),
        ]);
      },
      []
    );

    return (
      <div style={{ height: '700px' }}>
        <div className="mb-5 rounded-xl bg-white border border-black/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] p-5">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-2">
            Editable Cells
          </h3>
          <p className="text-[13px] text-gray-600 leading-relaxed mb-3">
            Double-click any cell to edit. Supports text, number, and select inputs with validation.
            Press <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-gray-100 rounded border border-black/[0.07]">Enter</kbd> to commit,{' '}
            <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-gray-100 rounded border border-black/[0.07]">Escape</kbd> to cancel.
          </p>
          {editLog.length > 0 && (
            <div className="mt-3 p-3 bg-gray-50 rounded-lg border border-black/[0.05]">
              <div className="text-[10px] font-mono uppercase tracking-[0.08em] text-gray-400 mb-1.5">Edit Log</div>
              {editLog.map((log, i) => (
                <div key={i} className="text-[12px] text-gray-500 font-mono leading-relaxed">
                  {log}
                </div>
              ))}
            </div>
          )}
        </div>
        <DataGrid
          gridId="cell-editing"
          columns={columns}
          data={data}
          enableCellEditing
          onCellEditEnd={handleCellEditEnd}
        />
      </div>
    );
  },
};
