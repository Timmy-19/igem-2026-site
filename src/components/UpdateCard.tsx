import React, { useState } from 'react';

interface UpdateObject {
  id?: string;
  weekTitle: string;
  dateRange: string;
  summary: string;
  detail?: string;
}

interface UpdateCardProps {
  update: UpdateObject;
}

const UpdateCard: React.FC<UpdateCardProps> = ({ update }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-6 cursor-pointer hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-base font-bold text-slate-900 mb-1">{update.weekTitle}</h3>
            <p className="text-sm text-slate-500 mb-3">{update.dateRange}</p>
            <p className="text-sm text-slate-700 line-clamp-2">{update.summary}</p>
          </div>
          <div className="text-2xl text-slate-400 flex-shrink-0">
            {isExpanded ? '▼' : '▶'}
          </div>
        </div>
      </div>

      {isExpanded && update.detail && (
        <div className="border-t border-slate-200 bg-slate-50 p-6">
          <div className="prose prose-sm max-w-none text-slate-700">
            {typeof update.detail === 'string' ? (
              <p className="whitespace-pre-wrap text-sm leading-relaxed">{update.detail}</p>
            ) : (
              update.detail
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateCard;
