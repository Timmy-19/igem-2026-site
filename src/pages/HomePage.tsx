import React from 'react';
import { Link } from 'react-router-dom';
import {
  PageHeader,
  SectionHeader,
  SummaryCard,
} from '../components';
import { workstreams, getWorkstreamsByTrack } from '../data/workstreams';
import { getLatestUpdate } from '../data/updates';

const HomePage: React.FC = () => {
  const latestUpdate = getLatestUpdate();
  const wetlabWorkstreams = getWorkstreamsByTrack('Wetlab');
  const drylabWorkstreams = getWorkstreamsByTrack('Drylab');
  const hpWorkstreams = getWorkstreamsByTrack('HP');

  return (
    <div>
      <PageHeader
        title="Plant Stress Bacterial Response System"
        subtitle="2026 iGEM Project Cohort Hub"
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Mission Section */}
        <section className="mb-16 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg p-8 border border-slate-200">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              We are engineering a safe microbial system that senses plant abiotic stress and
              activates protection only when needed.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/roadmap"
                className="inline-flex px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Roadmap
              </Link>
              <Link
                to="/ownership"
                className="inline-flex px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Ownership Dashboard
              </Link>
              <Link
                to="/workstreams"
                className="inline-flex px-6 py-3 bg-slate-600 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors"
              >
                Workstreams
              </Link>
            </div>
          </div>
        </section>

        {/* Current Phase Strip */}
        <section className="mb-16">
          <SectionHeader
            title="Current Phase Snapshot"
            description="Key metrics and status at a glance"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <SummaryCard
              title="Current Stage"
              value="Parallel Development"
              subtitle="Integrated execution"
              icon="🔧"
              color="blue"
            />
            <SummaryCard
              title="Timeline Window"
              value="Mar–Aug 2026"
              subtitle="6-month cohort"
              icon="📅"
              color="emerald"
            />
            <SummaryCard
              title="Active Workstreams"
              value={workstreams.length}
              subtitle={`Wetlab (${wetlabWorkstreams.length}), Drylab (${drylabWorkstreams.length}), HP (${hpWorkstreams.length})`}
              icon="⚙️"
              color="amber"
            />
            <SummaryCard
              title="Final Goal"
              value="Integrated System"
              subtitle="B. subtilis + validation"
              icon="🎯"
              color="slate"
            />
          </div>
        </section>

        {/* Big Picture Preview */}
        <section className="mb-16">
          <SectionHeader
            title="Project Pillars"
            description="Three core dimensions of our engineered solution"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Stress-Responsive Protection</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A threshold-based system that detects plant abiotic stress and activates protective
                mechanisms only when conditions warrant intervention.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Biosecurity & Control</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                An engineered biosecurity switch ensures safe containment and prevents uncontrolled
                proliferation of the microbial system in field environments.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Climate-Resilient Agriculture</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A sustainable tool for farmers to enhance crop resilience against drought, heat, and
                other environmental stressors in changing climate conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Workstream Preview */}
        <section className="mb-16">
          <SectionHeader
            title="Workstream Overview"
            subtitle="Six major workstream categories"
            description="Featured workstreams across Wetlab, Drylab, and Human Practice tracks"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workstreams.slice(0, 6).map((ws) => (
              <div key={ws.id} className="h-full">
                <div className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{ws.name}</h3>
                      <p className="text-xs font-medium text-blue-600 mt-1">{ws.track}</p>
                    </div>
                  </div>
                  {ws.description && (
                    <p className="text-sm text-slate-600 mb-4 flex-grow">{ws.description}</p>
                  )}
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-xs font-medium text-slate-500">Status</p>
                    <p className="text-sm font-semibold text-slate-700 mt-1">{ws.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/workstreams"
              className="inline-flex px-6 py-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View All Workstreams →
            </Link>
          </div>
        </section>

        {/* Ownership Preview */}
        <section className="mb-16 bg-blue-50 rounded-lg p-8 border border-blue-200">
          <SectionHeader
            title="Pipeline Ownership Model"
            description="Distributed leadership across project tracks"
          />
          <p className="text-slate-700 mb-6 leading-relaxed">
            Our project operates on a distributed pipeline ownership model where each major workstream
            has designated owners and contributors. This ensures clear accountability, enables parallel
            progress, and facilitates knowledge transfer across teams. Visit the Ownership Dashboard to
            see detailed role assignments and team structure.
          </p>
          <Link
            to="/ownership"
            className="inline-flex px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Explore Full Ownership Dashboard
          </Link>
        </section>

        {/* Latest Update Preview */}
        {latestUpdate && (
          <section className="mb-16">
            <SectionHeader
              title="Latest Project Update"
              subtitle={`Week ${latestUpdate.week}`}
            />
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-900">{latestUpdate.title}</h3>
                <p className="text-sm text-slate-500 mt-1">
                  {latestUpdate.date} • By {latestUpdate.author}
                </p>
              </div>

              <div className="mb-6 border-b border-slate-200 pb-6">
                <p className="text-slate-700 line-clamp-4">{latestUpdate.content}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-3">Key Highlights</h4>
                  <ul className="space-y-2">
                    {latestUpdate.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-emerald-600 font-bold flex-shrink-0">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-3">Next Week Goals</h4>
                  <ul className="space-y-2">
                    {latestUpdate.nextWeekGoals.slice(0, 3).map((goal, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <Link
                  to="/updates"
                  className="inline-flex text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  View All Updates →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Timeline Preview */}
        <section className="mb-16">
          <SectionHeader
            title="Project Timeline at a Glance"
            subtitle="March → August 2026 Convergence"
          />
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg p-8 border border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <div className="text-center">
                <p className="text-sm font-bold text-slate-600">March</p>
                <p className="text-lg font-bold text-slate-900">Kickoff & Planning</p>
              </div>
              <div className="flex-1 mx-4 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 rounded"></div>
              <div className="text-center">
                <p className="text-sm font-bold text-slate-600">August</p>
                <p className="text-lg font-bold text-slate-900">Final Integration & Validation</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center text-sm">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="font-bold text-blue-900">Month 1–2</p>
                <p className="text-blue-700">Wetlab prep, modeling setup</p>
              </div>
              <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                <p className="font-bold text-emerald-900">Month 3–4</p>
                <p className="text-emerald-700">Parallel design & execution</p>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="font-bold text-amber-900">Month 5–6</p>
                <p className="text-amber-700">Integration & validation</p>
              </div>
              <div className="p-4 bg-slate-200 rounded-lg border border-slate-300">
                <p className="font-bold text-slate-900">Final</p>
                <p className="text-slate-700">Presentation & results</p>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/roadmap"
              className="inline-flex px-6 py-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View Detailed Roadmap →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
