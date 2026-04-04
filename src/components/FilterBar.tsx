import React from 'react';

interface FilterOption {
  label: string;
  value: string;
}

interface Filter {
  label: string;
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
}

interface FilterBarProps {
  filters: Filter[];
}

const FilterBar: React.FC<FilterBarProps> = ({ filters }) => {
  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-4 mb-6">
      <div className="flex items-center flex-wrap gap-4">
        {filters.map((filter, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <label className="text-sm font-medium text-slate-700">
              {filter.label}
            </label>
            <select
              value={filter.value}
              onChange={(e) => filter.onChange(e.target.value)}
              className="px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-700 bg-white hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="">All</option>
              {filter.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
