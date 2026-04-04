import React from 'react';

interface StatusBadgeProps {
  status: 'Confirmed' | 'In Progress' | 'Assigning' | 'Not Yet Filled';
  size?: 'sm' | 'md';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'md' }) => {
  const statusConfig = {
    Confirmed: {
      bg: 'bg-emerald-100',
      text: 'text-emerald-800',
      dot: 'bg-emerald-500',
    },
    'In Progress': {
      bg: 'bg-blue-100',
      text: 'text-blue-800',
      dot: 'bg-blue-500',
    },
    Assigning: {
      bg: 'bg-amber-100',
      text: 'text-amber-800',
      dot: 'bg-amber-500',
    },
    'Not Yet Filled': {
      bg: 'bg-slate-100',
      text: 'text-slate-700',
      dot: 'bg-slate-400',
    },
  };

  const config = statusConfig[status];
  const sizeClasses = size === 'sm'
    ? 'px-2 py-1 text-xs'
    : 'px-3 py-1.5 text-sm';

  return (
    <div className={`inline-flex items-center gap-2 rounded-full ${config.bg} ${config.text} font-medium ${sizeClasses}`}>
      <span className={`inline-block w-2 h-2 rounded-full ${config.dot}`} />
      {status}
    </div>
  );
};

export default StatusBadge;
