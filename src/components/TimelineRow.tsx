import React from 'react';

interface Phase {
  months: string;
  label: string;
  status: 'Confirmed' | 'In Progress' | 'Assigning' | 'Not Yet Filled';
}

interface TimelineRowProps {
  trackName: string;
  category?: string;
  phases: Phase[];
}

const TimelineRow: React.FC<TimelineRowProps> = ({ trackName, category, phases }) => {
  const months = ['March', 'April', 'May', 'June', 'July', 'August'];
  const monthsCount = months.length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-emerald-500';
      case 'In Progress':
        return 'bg-blue-500';
      case 'Assigning':
        return 'bg-amber-500';
      case 'Not Yet Filled':
        return 'bg-slate-300';
      default:
        return 'bg-slate-200';
    }
  };

  const parseMonthRange = (monthRange: string): [number, number] => {
    const parts = monthRange.split('-').map((m) => m.trim());
    const startIndex = months.findIndex((m) => m === parts[0]);
    const endIndex = months.findIndex((m) => m === parts[1]);
    return [startIndex, endIndex];
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <div className="border-b border-slate-200 py-4 last:border-b-0">
      <div className="flex gap-4">
        <div className="w-48 flex-shrink-0">
          <h4 className="text-sm font-bold text-slate-900">{trackName}</h4>
          {category && <p className="text-xs text-slate-500 mt-1">{category}</p>}
        </div>

        <div className="flex-1">
          <div className="grid gap-2">
            {phases.map((phase, phaseIdx) => {
              const [startIdx, endIdx] = parseMonthRange(phase.months);

              return (
                <div key={phaseIdx} className="grid gap-1" style={{ gridTemplateColumns: `repeat(${monthsCount}, minmax(0, 1fr))` }}>
                  {Array.from({ length: monthsCount }).map((_, idx) => {
                    const isActive = idx >= startIdx && idx <= endIdx;
                    return (
                      <div key={idx} className={`h-8 rounded ${isActive ? getStatusColor(phase.status) : 'bg-transparent'}`}>
                        {isActive && idx === startIdx && (
                          <div className="h-full flex items-center px-2">
                            <span className="text-xs font-medium text-white truncate">{phase.label}</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          <div className="grid gap-1 mt-2" style={{ gridTemplateColumns: `repeat(${monthsCount}, minmax(0, 1fr))` }}>
            {months.map((month) => (
              <div key={month} className="text-xs text-slate-500 text-center font-medium">
                {month.slice(0, 3)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineRow;
