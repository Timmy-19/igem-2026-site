import { ArrowRight } from 'lucide-react';

export default function ProjectOverviewPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div style={{ background: 'linear-gradient(135deg, #0f2a05 0%, #2d6618 100%)' }} className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <span className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1 text-sm mb-6">
            Foundation
          </span>
          <h1 className="text-5xl font-bold mb-4">Project Overview</h1>
          <p className="text-xl text-white/80">The science and engineering behind our system</p>
        </div>
      </div>

      {/* Problem Card Section */}
      <section className="py-20 px-6" style={{ backgroundColor: '#f8faf5' }}>
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Plant Abiotic Stress Matters</h2>
            <p className="text-lg text-gray-700 mb-8">
              Abiotic stresses—drought, extreme heat, and salinity—devastate global crop yields annually.
              These environmental pressures affect food security for over 800 million people and impose massive
              economic costs on agricultural systems worldwide.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200">
                <div className="text-4xl font-bold text-emerald-700 mb-2">70%</div>
                <div className="text-gray-700">Crop loss from abiotic stress annually</div>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border border-amber-200">
                <div className="text-4xl font-bold text-amber-700 mb-2">800M+</div>
                <div className="text-gray-700">Food-insecure people affected</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <div className="text-4xl font-bold text-blue-700 mb-2">$300B</div>
                <div className="text-gray-700">Annual economic loss</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Our Approach</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Explanation */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Threshold-Activated Protection</h3>
              <p className="text-lg text-gray-700 mb-4">
                We're engineering a biological system that detects when plant stress exceeds a critical threshold
                and automatically triggers protective responses. The system remains dormant under normal conditions,
                activating only when truly needed.
              </p>
              <p className="text-lg text-gray-700">
                This threshold-based logic mimics natural plant resilience mechanisms, ensuring minimal metabolic
                overhead while providing robust protection when conditions become extreme.
              </p>
            </div>

            {/* Right: Logic Diagram Card */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 border border-emerald-200">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-emerald-700">
                    1
                  </div>
                  <div className="text-gray-800 font-semibold">Stress Detected</div>
                </div>

                <div className="flex justify-center">
                  <div className="w-1 h-8 bg-emerald-700"></div>
                </div>

                <div className="bg-white rounded-lg p-4 border-2 border-emerald-700">
                  <div className="font-bold text-emerald-700 text-center">Threshold Crossed?</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-1 h-6 bg-emerald-700"></div>
                    <div className="text-sm font-bold text-emerald-700">Yes</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-1 h-6 bg-gray-400"></div>
                    <div className="text-sm font-bold text-gray-500">No</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-600 text-white rounded-lg p-4 text-center font-semibold">
                    Activate Protection
                  </div>
                  <div className="bg-gray-300 text-gray-600 rounded-lg p-4 text-center font-semibold">
                    Remain Dormant
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverable Callout */}
      <section className="py-20 px-6" style={{ backgroundColor: '#f8faf5' }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ background: '#0f2a05' }} className="rounded-2xl p-12 text-white">
            <h3 className="text-2xl font-bold mb-4">The End Deliverable</h3>
            <p className="text-lg leading-relaxed">
              A <span className="font-semibold">Bacillus subtilis chassis</span> containing a stress-responsive circuit,
              a biosecurity switch, and an optimized protectant system, validated against a defined subject stress model.
            </p>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">System Architecture</h2>
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 min-w-max">
              {[
                { label: 'Subject Stress Model', color: 'from-blue-500 to-blue-600' },
                { label: 'Stress-Response Circuit', color: 'from-emerald-500 to-emerald-600' },
                { label: 'Protectant Module', color: 'from-amber-500 to-amber-600' },
                { label: 'Biosecurity Switch', color: 'from-red-500 to-red-600' },
                { label: 'Final Integrated Validation', color: 'from-purple-500 to-purple-600' },
              ].map((box, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className={`bg-gradient-to-br ${box.color} rounded-lg p-6 text-white font-semibold text-center min-w-max flex-shrink-0`}>
                    <div className="w-40">{box.label}</div>
                  </div>
                  {idx < 4 && (
                    <ArrowRight className="text-gray-400 flex-shrink-0" size={24} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why iGEM */}
      <section className="py-20 px-6" style={{ backgroundColor: '#f8faf5' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Why iGEM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Engineering Iteration', desc: 'Build, test, learn, and refine across cycles' },
              { title: 'Measurable Performance', desc: 'Quantify every step with rigorous validation' },
              { title: 'Responsible Implementation', desc: 'Integrate safety, ethics, and security from day one' },
              { title: 'Human-Centered Design', desc: 'Engage stakeholders and design for real impact' },
            ].map((card, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-700">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
