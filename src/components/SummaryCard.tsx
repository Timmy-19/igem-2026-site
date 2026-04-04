import React from 'react';

interface SummaryCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: string;
  color?: 'blue' | 'emerald' | 'amber' | 'slate';
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  color = 'blue',
}) => {
  const colorConfig = {
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-900',
      accent: 'text-blue-600',
    },
    emerald: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-900',
      accent: 'text-emerald-600',
    },
    amber: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-900',
      accent: 'text-amber-600',
    },
    slate: {
      bg: 'bg-slate-50',
      border: 'border-slate-200',
      text: 'text-slate-900',
      accent: 'text-slate-600',
    },
  };

  const config = colorConfig[color];

  return (
    <div className={`rounded-lg border ${config.bg} ${config.border} p-6 shadow-sm hover:shadow-md transition-shadow`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-600 mb-2">{title}</p>
          <p className={`text-3xl font-bold ${config.text} mb-1`}>{value}</p>
          {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}
        </div>
        {icon && (
          <div className={`text-3xl ${config.accent}`}>
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default SummaryCard;
