import { useState } from 'react';

interface Update {
  week: string;
  title: string;
  dateRange: string;
  summary: string;
  highlights: string[];
  workstreams: Record<string, string>;
  blockers: string[];
  nextSteps: string[];
}

const updates: Update[] = [
  {
    week: 'Week 3',
    title: 'Building Project Infrastructure',
    dateRange: 'Mar 16-22, 2026',
    summary: 'Execution groups confirmed, drylab tracks assigned, pipeline ownership framework established.',
    highlights: ['Wetlab Groups A and B finalized', 'Drylab track owners confirmed', 'Wiki structure planning began', 'Ownership dashboard framework designed'],
    workstreams: { biosecurity: 'Concept comparison initiated', stress: 'Literature review ongoing', model: 'B. subtilis culture started', protectant: 'Evaluation criteria defined', drylab: 'Hydroponic prototype v1 underway', hp: 'Wiki architecture drafted' },
    blockers: ['Biosecurity circuit ownership still being assigned'],
    nextSteps: ['Finalize all pipeline owners', 'Begin stress circuit cloning protocol']
  },
  {
    week: 'Week 2',
    title: 'Stress Model Planning',
    dateRange: 'Mar 9-15, 2026',
    summary: 'Literature review began across all Wetlab streams. Module concepts defined. Initial protectant research.',
    highlights: ['Stress circuit lit review started', 'Trehalose pathway reviewed', 'Biosecurity switch design concepts compared', 'Math model framework outlined'],
    workstreams: { biosecurity: 'Design concepts under comparison', stress: 'Literature review in progress', model: 'Organism culture planning', protectant: 'Trehalose and novel options scoped', drylab: 'Hardware requirements listed', hp: 'Team roles discussed' },
    blockers: ['Some pipeline owners still TBD'],
    nextSteps: ['Confirm execution group membership', 'Begin E. coli cloning protocols']
  },
  {
    week: 'Week 1',
    title: 'Kickoff and Project Framing',
    dateRange: 'Mar 2-8, 2026',
    summary: 'Team formed, mission defined, initial research directions set, communication channels established.',
    highlights: ['Project mission statement finalized', 'Team structure established', 'Four wetlab workstreams scoped', 'Drylab and HP parallel tracks identified'],
    workstreams: { biosecurity: 'Not yet started', stress: 'Not yet started', model: 'Not yet started', protectant: 'Not yet started', drylab: 'Initial planning', hp: 'Team forming' },
    blockers: ['All ownership pending assignment'],
    nextSteps: ['Begin literature reviews', 'Confirm team assignments']
  }
];

export default function WeeklyUpdatesPage() {
  const [expandedWeek, setExpandedWeek] = useState<string | null>('Week 3');

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div style={{ background: 'linear-gradient(135deg, #0f2a05 0%, #2d6618 100%)' }} className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <span className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1 text-sm mb-6">
            Progress
          </span>
          <h1 className="text-5xl font-bold mb-4">Weekly Updates</h1>
          <p className="text-xl text-white/80">Progress archive and narrative record</p>
        </div>
      </div>

      <section className="py-20 px-6" style={{ backgroundColor: '#f8faf5' }}>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {updates.map((update) => {
              const isExpanded = expandedWeek === update.week;
              return (
                <div key={update.week} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                  {/* Header */}
                  <div
                    onClick={() => setExpandedWeek(isExpanded ? null : update.week)}
                    className="p-6 cursor-pointer hover:bg-gray-50 transition-colors border-l-4"
                    style={{ borderLeftColor: '#779E45' }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-bold rounded-full px-3 py-1" style={{ background: '#779E45' + '20', color: '#779E45' }}>
                            {update.week}
                          </span>
                          <span className="text-sm text-gray-600">{update.dateRange}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{update.title}</h3>
                        <p className="text-gray-700 mt-2">{update.summary}</p>
                      </div>
                      <div className="text-2xl ml-4 flex-shrink-0">
                        {isExpanded ? '▼' : '▶'}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="border-t border-slate-200 px-6 py-6 space-y-6">
                      {/* Highlights */}
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Highlights</h4>
                        <ul className="space-y-2">
                          {update.highlights.map((h, idx) => (
                            <li key={idx} className="flex gap-3 text-gray-700">
                              <span className="text-green-600 flex-shrink-0">✓</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Workstreams Progress Grid */}
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Workstream Progress</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {Object.entries(update.workstreams).map(([name, progress]) => (
                            <div key={name} className="bg-gray-50 rounded-lg p-3">
                              <div className="text-xs font-semibold text-gray-600 mb-1">{name}</div>
                              <div className="text-sm text-gray-900">{progress}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Blockers */}
                      {update.blockers.length > 0 && (
                        <div>
                          <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                            <span className="text-amber-600">⚠</span> Blockers
                          </h4>
                          <ul className="space-y-2">
                            {update.blockers.map((b, idx) => (
                              <li key={idx} className="text-amber-900 text-sm">{b}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Next Steps */}
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Next Steps</h4>
                        <ul className="space-y-2">
                          {update.nextSteps.map((step, idx) => (
                            <li key={idx} className="flex gap-3 text-gray-700 text-sm">
                              <span className="font-bold text-gray-400 flex-shrink-0">{idx + 1}.</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
