type Status = 'Confirmed' | 'In Progress' | 'Assigning' | 'Not Yet Filled';

interface Pipeline {
  name: string;
  area: string;
  owners: string;
  contributors: string;
  status: Status;
  milestone: string;
}

const pipelines: Pipeline[] = [
  { name: 'Biosecurity Circuit', area: 'Wetlab', owners: 'Assigning', contributors: 'Wetlab Group A', status: 'Assigning' as const, milestone: 'Concept comparison' },
  { name: 'Stress Circuit', area: 'Wetlab', owners: 'Assigning', contributors: 'Wetlab Group A', status: 'In Progress' as const, milestone: 'E. coli cloning' },
  { name: 'Model Establishing', area: 'Wetlab', owners: 'Assigning', contributors: 'Wetlab Group B', status: 'In Progress' as const, milestone: 'B. subtilis culture' },
  { name: 'Protectant Development', area: 'Wetlab/Drylab', owners: 'Assigning', contributors: 'Wetlab Group B + Drylab', status: 'In Progress' as const, milestone: 'Protectant evaluation' },
  { name: 'Hydroponic System', area: 'Drylab', owners: 'Anton Lin, Ethan Liu, Noah Tau', contributors: 'Felix Yu, Anna Chuang', status: 'Confirmed' as const, milestone: 'Prototype v2' },
  { name: 'Soil Metric Hardware', area: 'Drylab', owners: 'Anton Lin, Noah Tau', contributors: 'Anna Chuang, Jacquelyn', status: 'Confirmed' as const, milestone: 'Sensor calibration' },
  { name: 'Gene Circuit Design', area: 'Drylab', owners: 'Jacquelyn, Felix Yu', contributors: 'Audrey Chu, Eva Zhong, Ethan Liu', status: 'Confirmed' as const, milestone: 'Logic diagram v1' },
  { name: 'Math Model', area: 'Drylab', owners: 'Ethan Liu, Anna Chuang', contributors: 'TBD', status: 'Confirmed' as const, milestone: 'Model framework' },
  { name: 'Business Plan', area: 'HP', owners: 'Assigning', contributors: 'HP Core Group', status: 'Assigning' as const, milestone: 'Market analysis' },
  { name: 'Wiki Setup', area: 'HP', owners: 'Assigning', contributors: 'HP Core Group', status: 'In Progress' as const, milestone: 'Site structure' },
  { name: 'Art Design', area: 'HP', owners: 'Assigning', contributors: 'HP Core Group', status: 'In Progress' as const, milestone: 'Visual identity' },
  { name: 'Stakeholder Framing', area: 'HP', owners: 'Assigning', contributors: 'HP Core Group', status: 'Assigning' as const, milestone: 'Stakeholder map' },
];

const statusClasses: Record<Status, string> = {
  'Confirmed': 'badge-confirmed',
  'In Progress': 'badge-in-progress',
  'Assigning': 'badge-assigning',
  'Not Yet Filled': 'badge-not-filled',
};

const students = [
  { name: 'Sara Chen', major: 'Wetlab', minor: 'HP', role: 'Lead, Stress Circuit Design' },
  { name: 'Ethan Liu', major: 'Drylab', minor: 'Wetlab', role: 'Math Model & Hydroponic Systems' },
  { name: 'Anton Lin', major: 'Drylab', minor: '', role: 'Hardware Lead, Sensors' },
  { name: 'Jacquelyn', major: 'Drylab', minor: 'Wetlab', role: 'Gene Circuit Design' },
  { name: 'Felix Yu', major: 'Drylab', minor: '', role: 'Electronics & CAD' },
  { name: 'Anna Chuang', major: 'Drylab', minor: '', role: 'Modeling & Simulation' },
  { name: 'Noah Tau', major: 'Drylab', minor: '', role: 'Hardware Integration' },
  { name: 'Audrey Chu', major: 'Drylab', minor: 'Wetlab', role: 'Circuit Simulations' },
];

export default function OwnershipDashboardPage() {
  const confirmedCount = pipelines.filter(p => p.status === 'Confirmed').length;
  const inProgressCount = pipelines.filter(p => p.status === 'In Progress').length;
  const assigningCount = pipelines.filter(p => p.status === 'Assigning').length;

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div style={{ background: 'linear-gradient(135deg, #0f2a05 0%, #2d6618 100%)' }} className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <span className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1 text-sm mb-6">
            Oversight
          </span>
          <h1 className="text-5xl font-bold mb-4">Ownership Dashboard</h1>
          <p className="text-xl text-white/80">Pipeline and task ownership at a glance</p>
        </div>
      </div>

      <section className="py-20 px-6" style={{ backgroundColor: '#f8faf5' }}>
        <div className="max-w-6xl mx-auto">
          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 text-center">
              <div className="text-3xl font-bold text-gray-900">{pipelines.length}</div>
              <div className="text-sm text-gray-600 mt-1">Active Pipelines</div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 text-center">
              <div className="text-3xl font-bold text-gray-900">{confirmedCount}</div>
              <div className="text-sm text-gray-600 mt-1">Confirmed Owners</div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 text-center">
              <div className="text-3xl font-bold text-gray-900">{inProgressCount}</div>
              <div className="text-sm text-gray-600 mt-1">In Progress</div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 text-center">
              <div className="text-3xl font-bold text-gray-900">{assigningCount}</div>
              <div className="text-sm text-gray-600 mt-1">Being Assigned</div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 text-center">
              <div className="text-3xl font-bold text-gray-900">4</div>
              <div className="text-sm text-gray-600 mt-1">Integration Critical</div>
            </div>
          </div>

          {/* Pipeline Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Pipeline</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Area</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Owner(s)</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Contributors</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Next Milestone</th>
                  </tr>
                </thead>
                <tbody>
                  {pipelines.map((p, idx) => (
                    <tr key={idx} className="border-b border-slate-100 hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{p.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{p.area}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{p.owners}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{p.contributors}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${statusClasses[p.status]}`}>
                          {p.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">{p.milestone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Student Execution Table */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Student Leads</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Student</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Major Team</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Minor Team</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((s, idx) => (
                    <tr key={idx} className="border-b border-slate-100 hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{s.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{s.major}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{s.minor || '—'}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{s.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Instructor Panel */}
          <div style={{ background: '#1B1B1B' }} className="rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Instructor Overview</h3>
            <div className="space-y-3 text-sm">
              <p><span className="font-semibold">Ownership Gaps:</span> 6 pipelines still assigning owners</p>
              <p><span className="font-semibold">Integration Milestone:</span> System convergence target Jun-Aug</p>
              <p><span className="font-semibold">Critical Path:</span> Stress circuit + protectant + biosecurity switch</p>
              <p><span className="font-semibold">Status:</span> No overdue critical tasks logged</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
