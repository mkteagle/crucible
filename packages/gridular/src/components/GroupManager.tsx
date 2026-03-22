import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownCheckboxItem,
  DropdownItem,
  DropdownSeparator,
} from '@crucible-ui/popover';
import { Layers } from 'lucide-react';
import { cn, tssToInlineStyles } from '../lib/utils';
import type { ColumnDef, GridClasses } from '../types';

interface GroupManagerProps<T> {
  columns: ColumnDef<T>[];
  groupByColumns: string[];
  updateGroupByColumns: (groupByColumns: string[]) => void;
  align?: 'start' | 'center' | 'end';
  className?: string;
  classes?: GridClasses;
}

export function GroupManager<T>({
  columns,
  groupByColumns,
  updateGroupByColumns,
  align = 'start',
  className,
  classes,
}: GroupManagerProps<T>) {
  const groupableColumns = columns.filter(
    (col) => col.enableGrouping !== false
  );

  const toggleColumnGrouping = (columnId: string) => {
    if (groupByColumns.includes(columnId)) {
      updateGroupByColumns(groupByColumns.filter((id) => id !== columnId));
    } else {
      updateGroupByColumns([...groupByColumns, columnId]);
    }
  };

  return (
    <div className={cn(classes?.groupManager, className)} style={tssToInlineStyles(classes?.groupManagerStyle)}>
      <Dropdown placement="bottom" align={align}>
        <DropdownTrigger>
          <button
            className={cn(
              "inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-black/[0.1] rounded-lg hover:bg-gray-50 hover:border-indigo-300 transition-colors shadow-sm",
              classes?.groupManagerTrigger
            )}
            style={tssToInlineStyles(classes?.groupManagerTriggerStyle)}
          >
            <Layers className="h-3 w-3 mr-1.5 text-copper" />
            <span>Group by</span>
          </button>
        </DropdownTrigger>

        <DropdownContent
          className={cn(
            "z-[9999] w-56 rounded-md border border-black/[0.08] bg-white shadow-lg max-h-[80vh] overflow-auto",
            classes?.groupManagerContent
          )}
          style={tssToInlineStyles(classes?.groupManagerContentStyle)}
        >
          <div className="p-2">
            {groupableColumns.length > 0 ? (
              groupableColumns.map((column) => {
                const isGrouped = groupByColumns.includes(column.id);

                return (
                  <DropdownCheckboxItem
                    key={column.id}
                    checked={isGrouped}
                    onCheckedChange={() => toggleColumnGrouping(column.id)}
                    className={cn(
                      "flex items-center px-3 py-2 text-sm rounded hover:bg-gray-50 cursor-pointer text-gray-800 transition-colors outline-none select-none",
                      classes?.groupManagerItem
                    )}
                    style={tssToInlineStyles(classes?.groupManagerItemStyle)}
                  >
                    <span className="flex items-center flex-1">
                      <span className="mr-2 h-4 w-4 flex items-center justify-center border border-indigo-300 rounded">
                        {isGrouped && (
                          <svg
                            className="w-3 h-3 text-indigo-500"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                      <span className="font-medium">{column.header}</span>
                    </span>
                  </DropdownCheckboxItem>
                );
              })
            ) : (
              <div className="px-3 py-2 text-sm text-gray-500">
                No groupable columns
              </div>
            )}

            {groupByColumns.length > 0 && (
              <>
                <DropdownSeparator className="my-2 h-0.5 bg-black/[0.06]" />
                <DropdownItem
                  onSelect={() => updateGroupByColumns([])}
                  className="flex items-center w-full px-3 py-2 text-sm rounded hover:bg-gray-50 cursor-pointer text-gray-800 font-medium transition-colors outline-none select-none"
                >
                  Clear all groups
                </DropdownItem>
              </>
            )}
          </div>
        </DropdownContent>
      </Dropdown>
    </div>
  );
}
