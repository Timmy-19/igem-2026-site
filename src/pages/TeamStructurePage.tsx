import { useState } from 'react';

interface Student {
  name: string;
  major: 'Wetlab' | 'Drylab' | 'HP';
  minor: 'Wetlab' | 'Drylab' | 'HP' | '';
  area: string;
}

const allStudents: Student[] = [
  { name: 'Sara Chen', major: 'Wetlab', minor: 'HP', area: 'Stress Circuit Design' },
  { name: 'Chloe Wu', major: 'Wetlab', minor: 'Drylab', area: 'Gene Circuits' },
  { name: 'Abigail Lin', major: 'Wetlab', minor: 'HP', area: 'Biosecurity' },
  { name: 'Abby Tsai', major: 'Wetlab', minor: 'Drylab', area: 'Protectant Development' },
  { name: 'Audrey Hsieh', major: 'Wetlab', minor: 'HP', area: 'Wetlab Ops' },
  { name: 'Olivia Lin', major: 'Wetlab', minor: 'Drylab', area: 'Stress Response' },
  { name: 'Sophie Liu', major: 'Wetlab', minor: 'Drylab', area: 'Molecular Biology' },
  { name: 'Joshua Hong', major: 'Wetlab', minor: 'Drylab', area: 'Cloning' },
  { name: 'Abby Kao', major: 'Wetlab', minor: 'HP', area: 'Integration' },
  { name: 'Ethan Chang', major: 'Wetlab', minor: '', area: 'Protectant Testing' },
  { name: 'Ryan Yuan', major: 'Wetlab', minor: '', area: 'B. subtilis Ops' },
  { name: 'Alex Li', major: 'Wetlab', minor: 'Drylab', area: 'Model Organism' },
  { name: 'Phoebe Chen', major: 'Wetlab', minor: 'HP', area: 'Stress Assays' },
  { name: 'Naomi Lin', major: 'Wetlab', minor: 'Drylab', area: 'Data Analysis' },
  { name: 'Sarah Chou', major: 'Wetlab', minor: 'HP', area: 'Lab Management' },
  { name: 'Ryan Wei', major: 'Wetlab', minor: 'Drylab', area: 'Documentation' },
  { name: 'Sophie Huang', major: 'Wetlab', minor: 'Drylab', area: 'Quality Control' },
  { name: 'Sophie Chen', major: 'Wetlab', minor: 'Drylab', area: 'Data Tracking' },
  { name: 'Sophia Yeh', major: 'Wetlab', minor: 'HP', area: 'Mentoring' },
  { name: 'Eva Zhong', major: 'Drylab', minor: 'Wetlab', area: 'Simulations' },
  { name: 'Felix Yu', major: 'Drylab', minor: '', area: 'Electronics & CAD' },
  { name: 'Anna Chuang', major: 'Drylab', minor: '', area: 'Math Modeling' },
  { name: 'Anton Lin', major: 'Drylab', minor: '', area: 'Hardware Lead' },
  { name: 'Ethan Liu', major: 'Drylab', minor: 'Wetlab', area: 'Systems Integration' },
  { name: 'Noah Tau', major: 'Drylab', minor: '', area: 'Sensor Integration' },
  { name: 'Audrey Chu', major: 'Drylab', minor: 'Wetlab', area: 'Circuit Design' },
  { name: 'Jacquelyn', major: 'Drylab', minor: 'Wetlab', area: 'Gene Circuit Design' },
  { name: 'Mia Guo', major: 'HP', minor: 'Drylab', area: 'Business Planning' },
  { name: 'Olivia Du', major: 'HP', minor: 'Drylab', area: 'Communications' },
  { name: 'Renée Kuo', major: 'HP', minor: 'Wetlab', area: 'Outreach' },
  { name: 'Sophia Lin', major: 'HP', minor: '', area: 'Leadership' },
];

export default function TeamStructurePage() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredStudents = allStudents.filter(s =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.area.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const wetlabMajor = allStudents.filter(s => s.major === 'Wetlab');
  const drylabMajor = allStudents.filter(s => s.major === 'Drylab');
  const hpMajor = allStudents.filter(s => s.major === 'HP');

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div style={{ background: 'linear-gradient(135deg, #0f2a05 0%, #2d6618 100%)' }} className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <span className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1 text-sm mb-6">
            Organization
          </span>
          <h1 className="text-5xl font-bold mb-4">Team Structure</h1>
          <p className="text-xl text-white/80">Major/Minor team system and pipeline-based execution</p>
        </div>
      </div>

      <section className="py-20 px-6" style={{ backgroundColor: '#f8faf5' }}>
        <div className="max-w-6xl mx-auto">
          {/* Explanation Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-10 mb-12">
            <p className="text-lg text-gray-800 leading-relaxed">
              Our project uses both a <span className="font-bold">major / minor team structure</span> and a <span className="font-bold">pipeline-based execution structure</span>. Students build depth through their major team, contribute across boundaries through their minor team, and take responsibility through ownership of specific project pipelines and tasks. Some ownership roles are already confirmed, while others are still being assigned as project plans become more defined.
            </p>
          </div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Wetlab */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="bg-blue-50 border-b border-slate-100 px-6 py-4">
                <h3 className="text-xl font-bold text-blue-900">Wetlab</h3>
                <p className="text-sm text-blue-700 mt-1">{wetlabMajor.length} Major Members</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-600 mb-3">MAJOR TEAM</p>
                  <div className="flex flex-wrap gap-2">
                    {wetlabMajor.map(s => (
                      <span key={s.name} className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-xs font-semibold">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-600 mb-3">MINOR CONTRIBUTORS</p>
                  <div className="flex flex-wrap gap-2">
                    {allStudents
                      .filter(s => s.minor === 'Wetlab' && s.major !== 'Wetlab')
                      .map(s => (
                        <span key={s.name} className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs">
                          {s.name}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Drylab */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="bg-emerald-50 border-b border-slate-100 px-6 py-4">
                <h3 className="text-xl font-bold text-emerald-900">Drylab</h3>
                <p className="text-sm text-emerald-700 mt-1">{drylabMajor.length} Major Members</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-600 mb-3">MAJOR TEAM</p>
                  <div className="flex flex-wrap gap-2">
                    {drylabMajor.map(s => (
                      <span key={s.name} className="px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full text-xs font-semibold">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-600 mb-3">MINOR CONTRIBUTORS</p>
                  <div className="flex flex-wrap gap-2">
                    {allStudents
                      .filter(s => s.minor === 'Drylab' && s.major !== 'Drylab')
                      .map(s => (
                        <span key={s.name} className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs">
                          {s.name}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            {/* HP */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="bg-amber-50 border-b border-slate-100 px-6 py-4">
                <h3 className="text-xl font-bold text-amber-900">Human Practice</h3>
                <p className="text-sm text-amber-700 mt-1">{hpMajor.length} Major Members</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-600 mb-3">MAJOR TEAM</p>
                  <div className="flex flex-wrap gap-2">
                    {hpMajor.map(s => (
                      <span key={s.name} className="px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-semibold">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-600 mb-3">MINOR CONTRIBUTORS</p>
                  <div className="flex flex-wrap gap-2">
                    {allStudents
                      .filter(s => s.minor === 'HP' && s.major !== 'HP')
                      .map(s => (
                        <span key={s.name} className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs">
                          {s.name}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Student Directory */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Student Directory</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-8">
            <input
              type="text"
              placeholder="Search by name or area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-gray-900"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Major Team</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Minor Team</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Primary Area</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((s, idx) => (
                  <tr key={idx} className="border-b border-slate-100 hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{s.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{s.major}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{s.minor || '—'}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{s.area}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
