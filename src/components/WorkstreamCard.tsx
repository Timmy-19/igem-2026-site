import React, { useState } from 'react';
import StatusBadge from './StatusBadge';

interface WorkstreamObject {
  id?: string;
  name: string;
  description: string;
  timeline: string;
  status: 'Confirmed' | 'In Progress' | 'Assigning' | 'Not Yet Filled';
  owners: string[];
  contributors: string[];
  nextMilestone: string;
}

interface WorkstreamCardProps {
  workstream: WorkstreamObject;
}

const WorkstreamCard: React.FC<WorkstreamCardProps> = ({ workstream }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6">
      <div className="mb-4">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-slate-900">{workstream.name}</h3>
          <StatusBadge status={workstream.status} size="sm" />
        </div>
        <p className="text-sm text-slate-600 line-clamp-2">{workstream.description}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-slate-200">
        <div>
          <p className="text-xs font-medium text-slate-500 mb-1">Timeline</p>
          <p className="text-sm text-slate-700">{workstream.timeline}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-slate-500 mb-1">Next Milestone</p>
          <p className="text-sm text-slate-700">{workstream.nextMilestone}</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-xs font-medium text-slate-500 mb-2">Owners</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {workstream.owners.map((owner) => (
            <span
              key={owner}
              className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium"
            >
              {owner}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
      >
        {isExpanded ? '▼ Hide Contributors' : '▶ Show Contributors'}
      </button>

      {isExpanded && (
        <div className="mt-3 pt-3 border-t border-slate-200">
          <p className="text-xs font-medium text-slate-500 mb-2">Contributors</p>
          <div className="flex flex-wrap gap-2">
            {workstream.contributors.map((contributor) => (
              <span
                key={contributor}
                className="inline-block px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full"
              >
                {contributor}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkstreamCard;
