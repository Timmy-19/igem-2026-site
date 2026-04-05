import { useState } from 'react';

type Track = 'All' | 'Wetlab' | 'Drylab' | 'HP';
type Status = 'Confirmed' | 'In Progress' | 'Assigning' | 'Not Yet Filled';

interface Workstream {
  id: string;
  name: string;
  description: string;
  timeline: string;
  status: Status;
  owners: string[];
  contributors: string[];
  nextMilestone: string;
  track: 'Wetlab' | 'Drylab' | 'HP';
}

const workstreams: Workstream[] = [
  { id: '1', name: 'Biosecurity Circuit', description: 'Development of biosecurity circuit for plant protection system', timeline: 'Mar-Aug', status: 'Assigning', owners: [], contributors: ['Wetlab Group A'], nextMilestone: 'Concept comparison', track: 'Wetlab' },
  { id: '2', name: 'Stress Circuit', description: 'Engineering stress-response circuits in B. subtilis', timeline: 'Mar-Jun', status: 'In Progress', owners: [], contributors: ['Wetlab Group A'], nextMilestone: 'E. coli cloning', track: 'Wetlab' },
  { id: '3', name: 'Model Establishing', description: 'Establishing baseline plant stress models and characterization', timeline: 'Mar-Aug', status: 'In Progress', owners: [], contributors: ['Wetlab Group B'], nextMilestone: 'B. subtilis culture', track: 'Wetlab' },
  { id: '4', name: 'Protectant Development', description: 'Development and testing of protective compounds', timeline: 'Mar-Aug', status: 'In Progress', owners: [], contributors: ['Wetlab Group B'], nextMilestone: 'Protectant evaluation', track: 'Wetlab' },
  { id: '5', name: 'Hydroponic System', description: 'Design and build controlled growing environment', timeline: 'Mar-Aug', status: 'Confirmed', owners: ['Anton Lin', 'Ethan Liu', 'Noah Tau'], contributors: ['Felix Yu', 'Anna Chuang'], nextMilestone: 'Prototype v2', track: 'Drylab' },
  { id: '6', name: 'Soil Metrics Hardware', description: 'Develop sensor systems for soil monitoring', timeline: 'Mar-Aug', status: 'Confirmed', owners: ['Anton Lin', 'Noah Tau'], contributors: ['Anna Chuang', 'Jacquelyn'], nextMilestone: 'Sensor calibration', track: 'Drylab' },
  { id: '7', name: 'Gene Circuit Design', description: 'Design and simulate genetic circuits', timeline: 'Mar-Jun', status: 'Confirmed', owners: ['Jacquelyn', 'Felix Yu'], contributors: ['Audrey Chu', 'Eva Zhong', 'Ethan Liu'], nextMilestone: 'Logic diagram v1', track: 'Drylab' },
  { id: '8', name: 'Math Model', description: 'Build mathematical model of system behavior', timeline: 'Mar-Aug', status: 'Confirmed', owners: ['Ethan Liu', 'Anna Chuang'], contributors: [], nextMilestone: 'Model framework', track: 'Drylab' },
  { id: '9', name: 'Business Plan', description: 'Develop commercialization strategy and market analysis', timeline: 'Mar-Aug', status: 'Assigning', owners: [], contributors: ['HP Core Group'], nextMilestone: 'Market analysis', track: 'HP' },
  { id: '10', name: 'Wiki Setup', description: 'Build and maintain project wiki and documentation', timeline: 'Mar-Aug', status: 'In Progress', owners: [], contributors: ['HP Core Group'], nextMilestone: 'Site structure', track: 'HP' },
  { id: '11', name: 'Art Design', description: 'Create visual identity and communications materials', timeline: 'Mar-Aug', status: 'In Progress', owners: [], contributors: ['HP Core Group'], nextMilestone: 'Visual identity', track: 'HP' },
  { id: '12', name: 'Stakeholder Framing', description: 'Identify and engage with key stakeholders', timeline: 'Mar-Aug', status: 'Assigning', owners: [], contributors: ['HP Core Group'], nextMilestone: 'Stakeholder map', track: 'HP' },
];

const statusClasses: Record<Status, string> = {
  'Confirmed': 'badge-confirmed',
  'In Progress': 'badge-in-progress',
  'Assigning': 'badge-assigning',
  'Not Yet Filled': 'badge-not-filled',
};

const trackColors: Record<'Wetlab' | 'Drylab' | 'HP', string> = {
  'Wetlab': '#3b82f6',
  'Drylab': '#10b981',
  'HP': '#f59e0b',
};

export default function WorkstreamsPage() {
  const [filterTrack, setFilterTrack] = useState<Track>('All');

  const filtered = filterTrack === 'All' ? workstreams : workstreams.filter(w => w.track === filterTrack);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div style={{ background: 'linear-gradient(135deg, #0f2a05 0%, #2d6618 100%)' }} className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <span className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1 text-sm mb-6">
            Execution
          </span>
          <h1 className="text-5xl font-bold mb-4">Workstreams</h1>
          <p className="text-xl text-white/80">What we're building and who's driving each pipeline</p>
        </div>
      </div>

      <section className="py-20 px-6" style={{ backgroundColor: '#f8faf5' }}>
        <div className="max-w-6xl mx-auto">
          {/* Filter Bar */}
          <div className="flex gap-3 mb-12 flex-wrap">
            {(['All', 'Wetlab', 'Drylab', 'HP'] as Track[]).map((track) => (
              <button
                key={track}
                onClick={() => setFilterTrack(track)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  filterTrack === track
                    ? 'bg-gray-900 text-white'
                    : 'bg-white border border-slate-200 text-gray-700 hover:border-gray-400'
                }`}
              >
                {track}
              </button>
            ))}
          </div>

          {/* Workstream Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filtered.map((ws) => {
              const sc = statusClasses[ws.status];
              return (
                <div
                  key={ws.id}
                  className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow"
                  style={{ borderLeftColor: trackColors[ws.track], borderLeftWidth: '4px' }}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs font-semibold rounded-full px-2 py-1" style={{ background: trackColors[ws.track] + '20', color: trackColors[ws.track] }}>
                        {ws.track}
                      </span>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${sc}`}>
                        {ws.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{ws.name}</h3>
                    <p className="text-sm text-gray-700 mb-4 line-clamp-2">{ws.description}</p>
                    <div className="text-xs text-gray-600 space-y-1 mb-4">
                      <p><span className="font-semibold">Timeline:</span> {ws.timeline}</p>
                      <p><span className="font-semibold">Next milestone:</span> {ws.nextMilestone}</p>
                      <p><span className="font-semibold">Contributors:</span> {ws.contributors.length > 0 ? ws.contributors.join(', ') : 'Being assigned'}</p>
                    </div>
                    {ws.owners.length > 0 && (
                      <p className="text-xs text-gray-700 pt-3 border-t border-slate-100">
                        <span className="font-semibold">Owners:</span> {ws.owners.join(', ')}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Wetlab Groups */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Wetlab Execution Groups</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Group A: Plant, Chassis & Gene Circuits</h3>
              <div className="flex flex-wrap gap-2">
                {['Sara Chen', 'Chloe Wu', 'Abigail Lin', 'Abby Tsai', 'Audrey Hsieh', 'Olivia Lin', 'Sophie Liu', 'Joshua Hong', 'Abby Kao'].map((name) => (
                  <span key={name} className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-medium">
                    {name}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Group B: Stress & Protectants</h3>
              <div className="flex flex-wrap gap-2">
                {['Ethan Chang', 'Ryan Yuan', 'Alex Li', 'Phoebe Chen', 'Naomi Lin', 'Sarah Chou', 'Ryan Wei', 'Sophie Huang', 'Sophie Chen', 'Sophia Yeh'].map((name) => (
                  <span key={name} className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-medium">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
