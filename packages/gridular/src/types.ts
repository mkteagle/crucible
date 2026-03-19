import { ReactNode } from 'react';
import type { CSSProperties } from 'react';

export type SortDirection = 'asc' | 'desc' | null;

export interface ColumnDef<T = any> {
  id: string;
  header: string;
  key: string;
  width?: number;
  enableSorting?: boolean;
  enableFiltering?: boolean;
  enableResize?: boolean;
  enableGrouping?: boolean;
  enableColumnMenu?: boolean; // Enable overflow menu for this column
  filterFn?: (row: T, columnId: string, filterValue: string) => boolean;
  sortFn?: (a: T, b: T, columnId: string) => number;

  // Styling - supports both Tailwind and TSS-React
  headerClassName?: string;
  cellClassName?: string;
  headerStyle?: CSSProperties;
  cellStyle?: CSSProperties;

  // Rendering
  renderCell?: (row: T) => ReactNode;
  cell?: (row: T) => ReactNode;
  render?: (row: T) => ReactNode;
  groupFormatter?: (value: any) => string;

  // Custom filter UI
  renderFilterMenu?: (props: FilterMenuRenderProps<T>) => ReactNode;

  // Custom column menu items
  columnMenuItems?: ColumnMenuItem[];

  // Custom column menu rendering
  renderColumnMenu?: (props: ColumnMenuRenderProps<T>) => ReactNode;

  // Internal
  index?: number;
}

export interface FilterMenuRenderProps<T = any> {
  column: ColumnDef<T>;
  filterValue: string;
  onFilterChange: (value: string) => void;
  onClose: () => void;
  isFiltered: boolean;
}

export interface ColumnMenuItem {
  id: string;
  label: string | ReactNode;
  icon?: ReactNode;
  onClick: (columnId: string) => void;
  disabled?: boolean;
  danger?: boolean;
  // Advanced customization
  className?: string;
  shortcut?: string; // Keyboard shortcut display
  subMenu?: ColumnMenuItem[]; // Nested menu items
  separator?: boolean; // Add separator before this item
  render?: (props: ColumnMenuItemRenderProps) => ReactNode; // Full custom render
}

export interface ColumnMenuItemRenderProps {
  item: ColumnMenuItem;
  columnId: string;
  isDisabled: boolean;
  onSelect: () => void;
}

export interface ColumnMenuRenderProps<T = any> {
  column: ColumnDef<T>;
  items: ColumnMenuItem[];
  defaultItems: {
    filter?: ReactNode;
    hideColumn?: ReactNode;
  };
  onClose: () => void;
}

export interface SortState {
  column: string;
  direction: 'asc' | 'desc';
}

export interface FilterState {
  [columnId: string]: string;
}

export interface RowSelectionState {
  [rowId: string]: boolean;
}

export interface PaginationState {
  pageIndex: number;
  pageSize: number;
}

export interface GroupingState {
  groupByColumns: string[];
  expandedGroups: Record<string, boolean>;
}

/**
 * Class overrides for grid styling
 * Supports both Tailwind classes (string) and TSS-React objects
 */
export interface GridClasses {
  // Container
  container?: string;
  containerStyle?: CSSProperties;

  // Header
  header?: string;
  headerStyle?: CSSProperties;
  headerCell?: string;
  headerCellStyle?: CSSProperties;

  // Body & Rows
  body?: string;
  bodyStyle?: CSSProperties;
  row?: string;
  rowStyle?: CSSProperties;
  selectedRow?: string;
  selectedRowStyle?: CSSProperties;
  hoveredRow?: string;
  hoveredRowStyle?: CSSProperties;

  // Cells
  cell?: string;
  cellStyle?: CSSProperties;
  selectedCell?: string;
  selectedCellStyle?: CSSProperties;

  // Expandable Rows
  expandedRow?: string;
  expandedRowStyle?: CSSProperties;

  // Pagination
  pagination?: string;
  paginationStyle?: CSSProperties;
  paginationButton?: string;
  paginationButtonStyle?: CSSProperties;
  pageInfo?: string;
  pageInfoStyle?: CSSProperties;

  // States
  emptyState?: string;
  emptyStateStyle?: CSSProperties;
  loadingState?: string;
  loadingStateStyle?: CSSProperties;

  // Controls
  toolbar?: string;
  toolbarStyle?: CSSProperties;
  columnManager?: string;
  columnManagerStyle?: CSSProperties;
  columnManagerTrigger?: string;
  columnManagerTriggerStyle?: CSSProperties;
  columnManagerContent?: string;
  columnManagerContentStyle?: CSSProperties;
  columnManagerItem?: string;
  columnManagerItemStyle?: CSSProperties;
  groupManager?: string;
  groupManagerStyle?: CSSProperties;
  groupManagerTrigger?: string;
  groupManagerTriggerStyle?: CSSProperties;
  groupManagerContent?: string;
  groupManagerContentStyle?: CSSProperties;
  groupManagerItem?: string;
  groupManagerItemStyle?: CSSProperties;
  filterMenu?: string;
  filterMenuStyle?: CSSProperties;
  filterMenuHeader?: string;
  filterMenuHeaderStyle?: CSSProperties;
  filterMenuInput?: string;
  filterMenuInputStyle?: CSSProperties;
  filterMenuActions?: string;
  filterMenuActionsStyle?: CSSProperties;
  columnMenu?: string;
  columnMenuStyle?: CSSProperties;
  columnMenuTrigger?: string;
  columnMenuTriggerStyle?: CSSProperties;
  columnMenuItem?: string;
  columnMenuItemStyle?: CSSProperties;

  // Resize handle
  resizeHandle?: string;
  resizeHandleStyle?: CSSProperties;
  resizeHandleActive?: string;
  resizeHandleActiveStyle?: CSSProperties;

  // Sort & Filter icons
  sortIcon?: string;
  sortIconStyle?: CSSProperties;
  sortIconActive?: string;
  sortIconActiveStyle?: CSSProperties;
  filterIcon?: string;
  filterIconStyle?: CSSProperties;
  filterIconActive?: string;
  filterIconActiveStyle?: CSSProperties;

  // Skeleton loading
  skeleton?: string;
  skeletonStyle?: CSSProperties;
}

export interface VirtualizedGridProps<T = any> {
  // Required Data
  columns: ColumnDef<T>[];
  data: T[];

  // Pagination - if provided, enables pagination mode
  // Auto-virtualizes if total rows exceed virtualizationThreshold
  pagination?: {
    pageIndex: number;
    pageSize: number;
    totalRows: number;
    onPageChange?: (page: number) => void;
    onPageSizeChange?: (size: number) => void;
    pageSizeOptions?: number[];
    // If true, assumes data prop contains only the current page's data
    // If false (default), will slice the data array based on pageIndex/pageSize
    manualPagination?: boolean;
  };

  // Virtualization
  virtualizationThreshold?: number; // Default: 20 (auto-enable virtualization past this many rows)
  rowHeight?: number; // Default: 72
  groupRowHeight?: number; // Default: 44
  overscan?: number; // Default: 5

  // Sorting
  sortState?: SortState | null;
  onSortChange?: (sortState: SortState | null) => void;
  enableSorting?: boolean; // Default: false
  sortIconVariant?: 'arrows' | 'chevrons'; // Default: 'arrows'

  // Filtering
  filterState?: FilterState;
  onFilterChange?: (filterState: FilterState) => void;
  enableFiltering?: boolean; // Default: false
  renderFilterMenu?: (props: FilterMenuRenderProps) => ReactNode; // Custom filter menu renderer

  // Row Selection
  selectedRows?: RowSelectionState;
  onRowSelectionChange?: (selectedRows: RowSelectionState) => void;
  enableRowSelection?: boolean; // Default: false

  // Cell Selection
  enableCellSelection?: boolean; // Default: false
  selectedCell?: { rowId: string; columnId: string } | null;
  onCellSelect?: (rowId: string, columnId: string) => void;

  // Column Resize
  enableColumnResize?: boolean; // Default: false
  columnWidths?: Record<string, number>;
  onColumnWidthsChange?: (widths: Record<string, number>) => void;

  // Column Reorder
  enableColumnReorder?: boolean; // Default: false
  columnOrder?: string[];
  onColumnOrderChange?: (order: string[]) => void;

  // Column Menu
  enableColumnMenu?: boolean; // Default: false - enables overflow menu on columns
  defaultColumnMenuItems?: ColumnMenuItem[]; // Default menu items for all columns
  onColumnAction?: (action: string, columnId: string) => void; // Callback for column actions
  renderColumnMenu?: (props: ColumnMenuRenderProps) => ReactNode; // Custom column menu renderer
  renderColumnMenuTrigger?: (props: { column: ColumnDef; onClick: () => void }) => ReactNode; // Custom trigger button

  // Grouping
  enableGrouping?: boolean; // Default: false
  groupingState?: GroupingState;
  onGroupingChange?: (groupingState: GroupingState) => void;
  renderGroupRow?: (props: GroupRowRenderProps) => ReactNode;
  hideGroupingUI?: boolean; // Default: false - hides the grouping pills and controls while keeping grouping functionality

  // Expandable Rows
  enableExpandableRows?: boolean; // Default: false
  expandedRows?: Record<string, boolean>;
  onExpandedRowsChange?: (expandedRows: Record<string, boolean>) => void;
  renderExpandedRow?: (row: T) => ReactNode;
  expandedRowHeight?: number; // Default: 200 - height added when row is expanded

  // UI State
  isLoading?: boolean;
  emptyMessage?: string; // Default: "No data available"
  loadingMessage?: string; // Default: "Loading..."

  // Styling - Tailwind classes
  className?: string;
  classes?: GridClasses;

  // Custom Rendering
  renderCell?: (props: { value: any; row: T; column: ColumnDef<T>; rowIndex: number }) => ReactNode;
  renderRow?: (props: { row: T; rowIndex: number; cells: ReactNode[]; defaultRow: ReactNode }) => ReactNode;
  renderRowComponent?: (props: import('./components/DataGridRow').DataGridRowProps<T>) => ReactNode;
  renderHeaderCell?: (props: { column: ColumnDef<T>; columnIndex: number; sortDirection?: SortDirection; isFiltered?: boolean }) => ReactNode;
  renderHeader?: (props: { column: ColumnDef<T>; sortDirection?: SortDirection }) => ReactNode;
  renderSortIcon?: (props: { isSorted: boolean; sortDirection?: SortDirection }) => ReactNode;
  renderFilterIcon?: (props: { isFiltered: boolean }) => ReactNode;

  // Callbacks
  onRowClick?: (row: T, index: number, event: React.MouseEvent<HTMLDivElement>) => void;
  onRowMouseDown?: (row: T, index: number, event: React.MouseEvent<HTMLDivElement>) => void;
  onRowMouseEnter?: (row: T, index: number, event: React.MouseEvent<HTMLDivElement>) => void;
  getRowId?: (row: T) => string;
  onScroll?: (event: { scrollTop: number; scrollHeight: number; clientHeight: number; scrollPercentage: number }) => void;

  // Context Menu
  contextMenuContent?: (row: T, column: ColumnDef<T>) => ReactNode;

  // Advanced
  gridId?: string; // For persistence
  hideColumnManager?: boolean;
  hideGroupControls?: boolean;
}

export interface GroupRowRenderProps {
  groupKey: string;
  columnId: string;
  value: any;
  depth: number;
  isExpanded: boolean;
  onToggleExpand: () => void;
  count: number;
}

export interface GridPreferences {
  columnWidths: Record<string, number>;
  columnOrder: string[];
  hiddenColumns: string[];
  groupByColumns: string[];
  expandedGroups: Record<string, boolean>;
}
