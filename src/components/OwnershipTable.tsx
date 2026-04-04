import React, { useState, useMemo } from 'react';

interface Column {
  key: string;
  label: string;
  sortable?: boolean;
}

interface OwnershipTableProps {
  columns: Column[];
  data: Record<string, string | number | React.ReactNode>[];
  onSort?: (key: string, direction: 'asc' | 'desc') => void;
}

const OwnershipTable: React.FC<OwnershipTableProps> = ({ columns, data, onSort }) => {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const sortedData = useMemo(() => {
    if (!sortKey) return data;

    const sorted = [...data].sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });

    return sorted;
  }, [data, sortKey, sortDirection]);

  const handleSort = (key: string) => {
    const column = columns.find((col) => col.key === key);
    if (!column?.sortable) return;

    if (sortKey === key) {
      const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
      setSortDirection(newDirection);
      onSort?.(key, newDirection);
    } else {
      setSortKey(key);
      setSortDirection('asc');
      onSort?.(key, 'asc');
    }
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
      <table className="w-full bg-white">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            {columns.map((column) => (
              <th
                key={column.key}
                onClick={() => handleSort(column.key)}
                className={`px-6 py-3 text-left text-sm font-semibold text-slate-700 ${
                  column.sortable ? 'cursor-pointer hover:bg-slate-100' : ''
                } transition-colors`}
              >
                <div className="flex items-center gap-2">
                  {column.label}
                  {column.sortable && sortKey === column.key && (
                    <span className="text-xs text-slate-500">
                      {sortDirection === 'asc' ? '▲' : '▼'}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-4 text-center text-slate-500">
                No data available
              </td>
            </tr>
          ) : (
            sortedData.map((row, rowIdx) => (
              <tr key={rowIdx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors last:border-b-0">
                {columns.map((column) => (
                  <td key={`${rowIdx}-${column.key}`} className="px-6 py-4 text-sm text-slate-700">
                    {row[column.key] ?? '-'}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OwnershipTable;
