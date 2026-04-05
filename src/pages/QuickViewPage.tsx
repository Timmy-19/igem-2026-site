export default function QuickViewPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header - Light Green */}
      <div style={{ background: 'linear-gradient(135deg, #a8d66a 0%, #779E45 100%)' }} className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Quick View</h1>
          <p className="text-xl text-white/90">For parents, instructors, and external viewers</p>
        </div>
      </div>

      <section className="py-20 px-6" style={{ backgroundColor: '#f8faf5' }}>
        <div className="max-w-6xl mx-auto">
          {/* Project Summary */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-10 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Summary</h2>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              We are engineering a <span className="font-bold">Bacillus subtilis chassis</span> with a stress-responsive circuit that detects when plants experience drought, heat, or salinity stress above a critical threshold and automatically activates protective compounds only when needed. This threshold-based approach minimizes metabolic cost and environmental impact while providing robust protection during critical conditions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <div className="text-3xl font-bold text-blue-700 mb-2">6</div>
                <div className="text-gray-700">Duration: Months (Mar-Aug 2026)</div>
              </div>
              <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
                <div className="text-3xl font-bold text-emerald-700 mb-2">33</div>
                <div className="text-gray-700">Team Members</div>
              </div>
              <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
                <div className="text-3xl font-bold text-amber-700 mb-2">13</div>
                <div className="text-gray-700">Workstreams (Wetlab, Drylab, HP)</div>
              </div>
            </div>
          </div>

          {/* Current Phase */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Current Phase</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Parallel Pipeline Development</h3>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">Progress</span>
                <span className="text-sm font-semibold text-gray-700">40%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              All teams executing in parallel on their major workstreams. Wetlab establishing baseline stress models, optimizing genetic circuits, and testing protectants. Drylab designing hardware and mathematical models. HP building business case and communicating with stakeholders.
            </p>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-blue-900"><span className="font-bold">Timeline:</span> Mid-project convergence targeted for June. Final integration and validation July-August.</p>
            </div>
          </div>

          {/* Highlights */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Highlights</h2>
          <div className="space-y-4 mb-12">
            {[
              'Threshold-activated protection: System responds only when stress exceeds critical level',
              'Modular design: Stress circuit, protectant module, and biosecurity switch engineered independently then integrated',
              'Real-world validation: Testing in hydroponic environment with live plant stress models',
              'Responsible innovation: Biosecurity switch and containment protocols built in from day one',
              'Interdisciplinary approach: Wetlab, Drylab, and Human Practice teams collaborating on shared milestones',
            ].map((highlight, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="text-green-600 text-2xl flex-shrink-0">✓</div>
                <div className="text-gray-800 text-lg">{highlight}</div>
              </div>
            ))}
          </div>

          {/* Timeline Snapshot */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Timeline</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-12">
            <div className="flex items-center justify-between gap-4 mb-6">
              {['Kickoff', 'Foundation', 'Development', 'Integration', 'Validation', 'Completion'].map((phase, idx) => (
                <div key={idx} className="text-center flex-1">
                  <div className={`rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2 font-bold text-sm ${
                    idx === 2 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {idx + 1}
                  </div>
                  <div className="text-xs font-semibold text-gray-700">{phase}</div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-blue-400 via-green-500 to-purple-600 h-2 rounded-full"></div>
            <div className="flex justify-between text-xs text-gray-600 mt-4">
              <span>March</span>
              <span>April</span>
              <span>May</span>
              <span>June</span>
              <span>July</span>
              <span>August</span>
            </div>
          </div>

          {/* Workstream Status */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Workstream Status</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Wetlab */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="bg-blue-50 border-b border-slate-100 px-6 py-4">
                <h3 className="text-xl font-bold text-blue-900">Wetlab</h3>
              </div>
              <div className="p-6 space-y-3">
                {['Biosecurity Circuit', 'Stress Circuit', 'Model Establishing', 'Protectant Development'].map((ws, idx) => (
                  <div key={idx} className="flex items-center justify-between pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                    <span className="text-sm text-gray-700">{ws}</span>
                    <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                      idx === 0 ? 'badge-assigning' : 'badge-in-progress'
                    }`}>
                      {idx === 0 ? 'Assigning' : 'In Progress'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Drylab */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="bg-emerald-50 border-b border-slate-100 px-6 py-4">
                <h3 className="text-xl font-bold text-emerald-900">Drylab</h3>
              </div>
              <div className="p-6 space-y-3">
                {['Hydroponic System', 'Soil Metrics HW', 'Gene Circuit Design', 'Math Model'].map((ws) => (
                  <div key={ws} className="flex items-center justify-between pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                    <span className="text-sm text-gray-700">{ws}</span>
                    <span className="text-xs px-2 py-1 rounded-full font-semibold badge-confirmed">
                      Confirmed
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* HP */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="bg-amber-50 border-b border-slate-100 px-6 py-4">
                <h3 className="text-xl font-bold text-amber-900">Human Practice</h3>
              </div>
              <div className="p-6 space-y-3">
                {['Business Plan', 'Wiki Setup', 'Art Design', 'Stakeholder Framing'].map((ws, idx) => (
                  <div key={ws} className="flex items-center justify-between pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                    <span className="text-sm text-gray-700">{ws}</span>
                    <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                      idx === 0 || idx === 3 ? 'badge-assigning' : 'badge-in-progress'
                    }`}>
                      {idx === 0 || idx === 3 ? 'Assigning' : 'In Progress'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Questions?</h3>
            <p className="text-lg text-gray-700">Contact us at <span className="font-semibold">igem2026stress@gmail.com</span></p>
          </div>
        </div>
      </section>
    </div>
  );
}
