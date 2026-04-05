export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div style={{ background: 'linear-gradient(135deg, #0f2a05 0%, #2d6618 100%)' }} className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <span className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1 text-sm mb-6">
            Planning
          </span>
          <h1 className="text-5xl font-bold mb-4">Project Roadmap</h1>
          <p className="text-xl text-white/80">March to August: Parallel development toward one integrated system</p>
        </div>
      </div>

      <section className="py-20 px-6" style={{ backgroundColor: '#f8faf5' }}>
        <div className="max-w-6xl mx-auto">
          {/* Month Headers */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex gap-1 min-w-max">
              <div className="w-32 flex-shrink-0" />
              {['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'].map((m) => (
                <div key={m} className="w-24 text-center font-bold text-gray-700">
                  {m}
                </div>
              ))}
            </div>
          </div>

          {/* WETLAB SECTION */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ background: '#3b82f6' }}></span>
              Wetlab Tracks
            </h3>
            <div className="space-y-3">
              {[
                { name: 'Biosecurity Circuit', blocks: [1, 1, 1, 1] },
                { name: 'Stress Circuit', blocks: [1, 1, 1, 1, 1] },
                { name: 'Model Establishing', blocks: [1, 1, 1, 1, 1, 1] },
                { name: 'Protectant Development', blocks: [1, 1, 1, 1, 1, 1] },
              ].map((track) => (
                <div key={track.name} className="flex gap-1">
                  <div className="w-32 font-semibold text-gray-900 flex-shrink-0">{track.name}</div>
                  <div className="flex gap-1 flex-1">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="h-8 rounded flex-1"
                        style={{ background: track.blocks[i] ? '#3b82f6' : '#e5e7eb' }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DRYLAB SECTION */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ background: '#10b981' }}></span>
              Drylab Tracks
            </h3>
            <div className="space-y-3">
              {[
                { name: 'Hydroponic System', blocks: [1, 1, 1, 1, 1] },
                { name: 'Soil Metrics HW', blocks: [1, 1, 1, 1, 1, 1] },
                { name: 'Gene Circuit Design', blocks: [1, 1, 1, 1, 1] },
                { name: 'Math Model', blocks: [1, 1, 1, 1, 1, 1] },
              ].map((track) => (
                <div key={track.name} className="flex gap-1">
                  <div className="w-32 font-semibold text-gray-900 flex-shrink-0">{track.name}</div>
                  <div className="flex gap-1 flex-1">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="h-8 rounded flex-1"
                        style={{ background: track.blocks[i] ? '#10b981' : '#e5e7eb' }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* HP SECTION */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ background: '#f59e0b' }}></span>
              Human Practice Tracks
            </h3>
            <div className="space-y-3">
              {[
                { name: 'Business Plan', blocks: [1, 1, 1, 1, 1] },
                { name: 'Wiki/Documentation', blocks: [1, 1, 1, 1, 1, 1] },
                { name: 'Art Design/Comms', blocks: [1, 1, 1, 1, 1] },
                { name: 'Stakeholder Framing', blocks: [1, 1, 1, 1, 1, 1] },
              ].map((track) => (
                <div key={track.name} className="flex gap-1">
                  <div className="w-32 font-semibold text-gray-900 flex-shrink-0">{track.name}</div>
                  <div className="flex gap-1 flex-1">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="h-8 rounded flex-1"
                        style={{ background: track.blocks[i] ? '#f59e0b' : '#e5e7eb' }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Convergence Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Convergence Milestones</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Mid-Project Convergence</h3>
                  <p className="text-gray-600 text-sm mt-1">May-June</p>
                </div>
              </div>
              <p className="text-gray-700 mt-4">Circuits reach validation phase. Hardware designs finalized. Wiki architecture deployed. Begin integrating sensor hardware with bacterial systems.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Final Integration</h3>
                  <p className="text-gray-600 text-sm mt-1">July-August</p>
                </div>
              </div>
              <p className="text-gray-700 mt-4">All circuits assembly complete. Hardware-software integrated. Model validated. System tested in hydroponic environment. Full deployment ready.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-20 px-6" style={{ backgroundColor: '#f8faf5' }}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">6-Month Parallel Execution</h3>
            <p className="text-lg text-gray-700">
              All teams work simultaneously on their track. Regular synchronization meetings ensure data flows between wetlab, drylab, and human practice.
              The roadmap converges twice: at mid-project for initial integration, and at project end for full validation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
