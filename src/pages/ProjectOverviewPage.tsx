import React from 'react';
import { PageHeader, SectionHeader } from '../components';
import { getWorkstreamsByTrack } from '../data/workstreams';

const ProjectOverviewPage: React.FC = () => {
  const wetlabWorkstreams = getWorkstreamsByTrack('Wetlab');
  const drylabWorkstreams = getWorkstreamsByTrack('Drylab');
  const hpWorkstreams = getWorkstreamsByTrack('HP');

  return (
    <div>
      <PageHeader title="Project Overview" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Problem Section */}
        <section className="mb-16">
          <SectionHeader
            title="The Problem: Plant Abiotic Stress"
            description="Why this challenge matters for agriculture and food security"
          />
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-8">
            <p className="text-slate-700 leading-relaxed mb-6">
              Plant abiotic stress—including drought, heat, cold, and nutrient deficiencies—poses one of
              the greatest threats to global crop productivity. Climate change is intensifying the frequency
              and severity of these stress events, making agricultural resilience increasingly critical.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Current approaches to plant protection rely heavily on:
            </p>
            <ul className="space-y-3 mb-6 ml-4">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-slate-700">
                  <strong>Constitutive (continuous) protection:</strong> Applying treatments
                  indiscriminately, which is costly, environmentally taxing, and often produces
                  diminishing returns or phytotoxicity
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-slate-700">
                  <strong>Passive adaptation:</strong> Relying on slow conventional breeding, which is
                  time-intensive and difficult to scale
                </span>
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              There is a critical need for a smarter, responsive system that can detect stress in real time
              and activate protective mechanisms only when needed, minimizing waste and environmental impact.
            </p>
          </div>
        </section>

        {/* Central Idea */}
        <section className="mb-16 bg-emerald-50 rounded-lg p-8 border border-emerald-200">
          <SectionHeader
            title="Our Central Idea: Threshold-Activated Support"
            subtitle="Smart, responsive bioengineering"
          />
          <p className="text-slate-700 leading-relaxed mb-6">
            We are engineering a safe, plant-associated bacterial system that <strong>senses plant stress
            signals</strong> and <strong>activates protective compounds only above a defined stress
            threshold</strong>.
          </p>
          <p className="text-slate-700 leading-relaxed">
            This threshold-based approach ensures:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white rounded-lg p-4 border border-emerald-200">
              <p className="font-bold text-emerald-900 mb-2">Efficiency</p>
              <p className="text-sm text-slate-700">
                Resources deployed only when plants genuinely need intervention
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-emerald-200">
              <p className="font-bold text-emerald-900 mb-2">Safety</p>
              <p className="text-sm text-slate-700">
                No continuous bioactivity; protective compounds remain dormant under normal conditions
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-emerald-200">
              <p className="font-bold text-emerald-900 mb-2">Sustainability</p>
              <p className="text-sm text-slate-700">
                Reduces chemical inputs and aligns with regenerative agriculture goals
              </p>
            </div>
          </div>
        </section>

        {/* Engineering Logic */}
        <section className="mb-16">
          <SectionHeader
            title="Engineering Logic: Why Threshold Over Constitutive?"
            description="Comparative analysis of design approaches"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-red-50 border-b border-red-200 px-6 py-4">
                <h3 className="font-bold text-red-900">Constitutive (Always-On)</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                    <span className="text-slate-700 text-sm">
                      Constant metabolic burden on host organism
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                    <span className="text-slate-700 text-sm">
                      Unnecessary protection during optimal conditions
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                    <span className="text-slate-700 text-sm">
                      Risk of phytotoxicity from continuous high doses
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                    <span className="text-slate-700 text-sm">
                      Higher costs per application cycle
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border border-emerald-200 shadow-sm overflow-hidden">
              <div className="bg-emerald-50 border-b border-emerald-200 px-6 py-4">
                <h3 className="font-bold text-emerald-900">Threshold-Based (Smart Response)</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold flex-shrink-0">✓</span>
                    <span className="text-slate-700 text-sm">
                      Activates only when stress signals cross a set threshold
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold flex-shrink-0">✓</span>
                    <span className="text-slate-700 text-sm">
                      Minimal metabolic cost during normal growing conditions
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold flex-shrink-0">✓</span>
                    <span className="text-slate-700 text-sm">
                      Reduced risk of phytotoxicity through dose-matching
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold flex-shrink-0">✓</span>
                    <span className="text-slate-700 text-sm">
                      Better alignment with real crop requirements
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final Deliverable Callout */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg p-8 text-white shadow-lg">
            <h2 className="text-2xl font-bold mb-4">The End Deliverable</h2>
            <p className="text-lg leading-relaxed">
              The end deliverable of the project is a <strong>Bacillus subtilis chassis</strong> containing:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <p className="font-bold mb-2">1. Stress-Responsive Circuit</p>
                <p className="text-sm">Engineered genetic circuit that detects plant stress signals</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <p className="font-bold mb-2">2. Biosecurity Switch</p>
                <p className="text-sm">Control mechanism ensuring safe containment and limited proliferation</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <p className="font-bold mb-2">3. Optimized Protectant System</p>
                <p className="text-sm">Validated protective compounds deployed only when threshold is met</p>
              </div>
            </div>
            <p className="text-sm mt-6 border-t border-white/20 pt-4 opacity-90">
              All components validated against a defined subject stress model in controlled laboratory
              conditions before field trials.
            </p>
          </div>
        </section>

        {/* How the Project is Built: System Diagram */}
        <section className="mb-16">
          <SectionHeader
            title="How the Project is Built"
            subtitle="Integrated system architecture"
            description="The project follows a modular pipeline architecture that converges toward final integration"
          />

          {/* System Flow Diagram */}
          <div className="bg-slate-50 rounded-lg p-8 border border-slate-200 mb-8">
            <div className="space-y-6">
              {/* Input */}
              <div className="flex items-center justify-center">
                <div className="bg-blue-600 text-white font-bold px-6 py-4 rounded-lg text-center max-w-xs">
                  <p className="text-sm mb-1">SUBJECT STRESS MODEL</p>
                  <p className="text-lg">Plant abiotic stress environment</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-slate-400"></div>
              </div>

              {/* Stress Detection */}
              <div className="flex items-center justify-center">
                <div className="bg-blue-100 border-2 border-blue-600 text-blue-900 font-bold px-6 py-4 rounded-lg text-center max-w-xs">
                  <p className="text-sm mb-1">STRESS-RESPONSE CIRCUIT</p>
                  <p className="text-lg">Detects stress signals</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-slate-400"></div>
              </div>

              {/* Protection Module */}
              <div className="flex items-center justify-center">
                <div className="bg-emerald-100 border-2 border-emerald-600 text-emerald-900 font-bold px-6 py-4 rounded-lg text-center max-w-xs">
                  <p className="text-sm mb-1">PROTECTANT MODULE</p>
                  <p className="text-lg">Deploys protective compounds</p>
                </div>
              </div>

              {/* Arrow with biosecurity note */}
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-1 h-8 bg-gradient-to-b from-emerald-400 to-slate-400"></div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded px-3 py-2 text-xs text-amber-900 font-semibold max-w-48 text-center">
                  BIOSECURITY SWITCH monitors &amp; controls
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-1 h-8 bg-gradient-to-b from-emerald-400 to-slate-400"></div>
                </div>
              </div>

              {/* Biosecurity */}
              <div className="flex items-center justify-center">
                <div className="bg-amber-100 border-2 border-amber-600 text-amber-900 font-bold px-6 py-4 rounded-lg text-center max-w-xs">
                  <p className="text-sm mb-1">BIOSECURITY CONTROL</p>
                  <p className="text-lg">Ensures safe containment</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="w-1 h-8 bg-gradient-to-b from-amber-400 to-slate-400"></div>
              </div>

              {/* Final Output */}
              <div className="flex items-center justify-center">
                <div className="bg-green-600 text-white font-bold px-6 py-4 rounded-lg text-center max-w-xs">
                  <p className="text-sm mb-1">INTEGRATED B. SUBTILIS SYSTEM</p>
                  <p className="text-lg">Validated stress-response chassis</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-slate-700 text-center italic">
            All modules are engineered in parallel, with continuous integration feedback
          </p>
        </section>

        {/* Parallel Build Logic */}
        <section className="mb-16">
          <SectionHeader
            title="Parallel Build Logic"
            subtitle="Four integrated workstream tracks"
            description="Wetlab, Drylab, and HP teams execute in parallel with synchronized milestones"
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Wetlab Track */}
            <div className="rounded-lg border-2 border-blue-300 shadow-sm overflow-hidden">
              <div className="bg-blue-100 border-b-2 border-blue-300 px-6 py-4">
                <h3 className="font-bold text-blue-900 text-lg">WETLAB</h3>
                <p className="text-blue-700 text-xs mt-1">{wetlabWorkstreams.length} Workstreams</p>
              </div>
              <div className="p-6 space-y-3">
                {wetlabWorkstreams.map((ws) => (
                  <div key={ws.id} className="text-sm">
                    <p className="font-semibold text-slate-900">{ws.name}</p>
                    <p className="text-xs text-slate-500 mt-1">{ws.status}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Drylab Track */}
            <div className="rounded-lg border-2 border-emerald-300 shadow-sm overflow-hidden">
              <div className="bg-emerald-100 border-b-2 border-emerald-300 px-6 py-4">
                <h3 className="font-bold text-emerald-900 text-lg">DRYLAB</h3>
                <p className="text-emerald-700 text-xs mt-1">{drylabWorkstreams.length} Workstreams</p>
              </div>
              <div className="p-6 space-y-3">
                {drylabWorkstreams.map((ws) => (
                  <div key={ws.id} className="text-sm">
                    <p className="font-semibold text-slate-900">{ws.name}</p>
                    <p className="text-xs text-slate-500 mt-1">{ws.status}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* HP Track */}
            <div className="rounded-lg border-2 border-amber-300 shadow-sm overflow-hidden">
              <div className="bg-amber-100 border-b-2 border-amber-300 px-6 py-4">
                <h3 className="font-bold text-amber-900 text-lg">HUMAN PRACTICE</h3>
                <p className="text-amber-700 text-xs mt-1">{hpWorkstreams.length} Workstreams</p>
              </div>
              <div className="p-6 space-y-3">
                {hpWorkstreams.map((ws) => (
                  <div key={ws.id} className="text-sm">
                    <p className="font-semibold text-slate-900">{ws.name}</p>
                    <p className="text-xs text-slate-500 mt-1">{ws.status}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Integration Point */}
            <div className="rounded-lg border-2 border-slate-300 bg-slate-50 shadow-sm overflow-hidden">
              <div className="bg-slate-200 border-b-2 border-slate-300 px-6 py-4">
                <h3 className="font-bold text-slate-900 text-lg">INTEGRATION</h3>
                <p className="text-slate-600 text-xs mt-1">Data Flow Hub</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2">
                    <span className="font-bold">•</span>
                    <span>Cross-track sync meetings</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">•</span>
                    <span>Shared parameter database</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">•</span>
                    <span>Milestone convergence</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">•</span>
                    <span>Final validation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why iGEM */}
        <section className="mb-16 bg-slate-50 rounded-lg p-8 border border-slate-200">
          <SectionHeader
            title="Why This Is an iGEM Project"
            description="Alignment with the iGEM mission and values"
          />

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Synthetic Biology Innovation</h3>
              <p className="text-slate-700 leading-relaxed">
                We are applying foundational synthetic biology principles—modular design, genetic
                circuit engineering, and standardized biological parts—to create a novel solution for
                an agricultural challenge. Our approach mirrors the iGEM philosophy of turning
                engineering principles into biological systems.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Safety & Security First</h3>
              <p className="text-slate-700 leading-relaxed">
                Our biosecurity switch and threshold-based activation embody the iGEM commitment to
                responsible innovation. We design containment and control into our system from the
                start, ensuring safe deployment and preventing unintended environmental impacts.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Real-World Impact</h3>
              <p className="text-slate-700 leading-relaxed">
                Rather than working solely in laboratory abstractions, we ground our project in the
                tangible challenges farmers face with climate-driven stress. Our human practice track
                ensures stakeholder engagement and implementation feasibility from day one.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Interdisciplinary Collaboration</h3>
              <p className="text-slate-700 leading-relaxed">
                Our integrated Wetlab, Drylab, and HP structure mirrors the iGEM ethos of
                interdisciplinary teamwork. Engineers, biologists, and social scientists work
                together to build a solution that is scientifically sound, technically feasible, and
                socially responsible.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectOverviewPage;
