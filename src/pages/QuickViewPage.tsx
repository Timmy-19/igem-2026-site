import React, { useMemo } from 'react';
import {
  PageHeader,
  SectionHeader,
  StatusBadge,
} from '../components';
import { getLatestUpdate } from '../data/updates';
import { workstreams, getWorkstreamsByTrack } from '../data/workstreams';

const QuickViewPage: React.FC = () => {
  const latestUpdate = getLatestUpdate();
  const wetlabWorkstreams = getWorkstreamsByTrack('Wetlab');
  const drylabWorkstreams = getWorkstreamsByTrack('Drylab');
  const hpWorkstreams = getWorkstreamsByTrack('HP');

  // Get current phase - determine based on latest update
  const getCurrentPhase = (): string => {
    if (!latestUpdate || latestUpdate.week === 1) {
      return 'Project Kickoff';
    } else if (latestUpdate.week <= 3) {
      return 'Infrastructure Setup';
    } else if (latestUpdate.week <= 6) {
      return 'Core Development';
    } else if (latestUpdate.week <= 9) {
      return 'Integration & Testing';
    } else {
      return 'Refinement & Validation';
    }
  };

  // Get roadmap phases
  const roadmapPhases = useMemo(() => {
    return [
      { month: 'March', phase: 'Planning & Setup', color: 'bg-blue-50 border-blue-200' },
      { month: 'April', phase: 'Development Begins', color: 'bg-emerald-50 border-emerald-200' },
      { month: 'May', phase: 'Active Development', color: 'bg-amber-50 border-amber-200' },
      { month: 'June', phase: 'Optimization', color: 'bg-purple-50 border-purple-200' },
      { month: 'July', phase: 'Testing & Refinement', color: 'bg-pink-50 border-pink-200' },
      { month: 'August', phase: 'Final Validation', color: 'bg-indigo-50 border-indigo-200' },
    ];
  }, []);

  const workstreamStatusSummary = useMemo(() => {
    const statusCounts = {
      'Confirmed': workstreams.filter(ws => ws.status === 'Confirmed').length,
      'In Progress': workstreams.filter(ws => ws.status === 'In Progress').length,
      'Assigning': workstreams.filter(ws => ws.status === 'Assigning').length,
      'Not Yet Filled': workstreams.filter(ws => ws.status === 'Not Yet Filled').length,
    };
    return statusCounts;
  }, []);

  return (
    <div>
      <PageHeader
        title="Quick View"
        subtitle="For parents, instructors, and external viewers"
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Project Summary */}
        <section className="mb-16 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Project Summary</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            We are engineering a safe, living microbial system that senses plant abiotic stress
            (drought and heat) and activates protective measures only when needed. Our integrated
            approach combines synthetic biology, hardware engineering, and stakeholder engagement
            to develop a practical solution for sustainable agriculture.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="px-4 py-2 bg-white rounded-lg border border-slate-200">
              <p className="text-xs font-medium text-slate-600">Duration</p>
              <p className="text-base font-bold text-slate-900">Mar - Aug 2026</p>
            </div>
            <div className="px-4 py-2 bg-white rounded-lg border border-slate-200">
              <p className="text-xs font-medium text-slate-600">Team Size</p>
              <p className="text-base font-bold text-slate-900">30+ Students</p>
            </div>
            <div className="px-4 py-2 bg-white rounded-lg border border-slate-200">
              <p className="text-xs font-medium text-slate-600">Tracks</p>
              <p className="text-base font-bold text-slate-900">3 Collaborative Teams</p>
            </div>
          </div>
        </section>

        {/* Current Phase */}
        <section className="mb-16">
          <SectionHeader title="Current Phase" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <p className="text-sm font-medium text-slate-600 mb-2">Phase</p>
              <p className="text-2xl font-bold text-blue-600 mb-4">{getCurrentPhase()}</p>
              <p className="text-xs text-slate-500">
                Week {latestUpdate?.week || 1} of the 26-week project timeline
              </p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <p className="text-sm font-medium text-slate-600 mb-2">Workstreams Active</p>
              <p className="text-2xl font-bold text-emerald-600 mb-4">{workstreams.length}</p>
              <p className="text-xs text-slate-500">
                Across Wetlab, Drylab, and Human Practice
              </p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <p className="text-sm font-medium text-slate-600 mb-2">Progress</p>
              <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{
                    width: `${latestUpdate ? (latestUpdate.week / 26) * 100 : 0}%`,
                  }}
                />
              </div>
              <p className="text-xs text-slate-500">
                {latestUpdate ? Math.round((latestUpdate.week / 26) * 100) : 0}% Complete
              </p>
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="mb-16">
          <SectionHeader title="Key Highlights" />
          {latestUpdate ? (
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-8">
              <div className="space-y-3">
                {latestUpdate.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold text-emerald-700">✓</span>
                    </div>
                    <p className="text-base text-slate-700 leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-slate-500">
              Project updates coming soon
            </div>
          )}
        </section>

        {/* Roadmap Snapshot */}
        <section className="mb-16">
          <SectionHeader title="Timeline Snapshot" description="Project execution phases" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {roadmapPhases.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-lg border p-6 ${item.color}`}
              >
                <p className="text-sm font-bold text-slate-700 mb-2">{item.month}</p>
                <p className="text-base font-semibold text-slate-900">{item.phase}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Latest Update Summary */}
        {latestUpdate && (
          <section className="mb-16">
            <SectionHeader
              title="Latest Update"
              subtitle={`Week ${latestUpdate.week}`}
            />
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {latestUpdate.title}
                </h3>
                <p className="text-sm text-slate-500 mb-6">
                  Updated {new Date(latestUpdate.date).toLocaleDateString()} by {latestUpdate.author}
                </p>
                <p className="text-base text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {latestUpdate.content.substring(0, 300)}...
                </p>
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-sm font-bold text-slate-700 mb-3">Next Week Goals</p>
                  <ul className="space-y-2">
                    {latestUpdate.nextWeekGoals.slice(0, 3).map((goal, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-slate-700">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Workstreams Overview */}
        <section className="mb-16">
          <SectionHeader title="Workstreams Overview" description="Status snapshot across all tracks" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Wetlab */}
            <div className="bg-white rounded-lg border border-blue-200 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <h3 className="text-lg font-bold text-slate-900">Wetlab</h3>
              </div>
              <div className="space-y-3">
                {wetlabWorkstreams.map((ws) => (
                  <div key={ws.id} className="flex items-center justify-between gap-2">
                    <p className="text-sm font-medium text-slate-700 flex-1">{ws.name}</p>
                    <StatusBadge status={ws.status} size="sm" />
                  </div>
                ))}
              </div>
            </div>

            {/* Drylab */}
            <div className="bg-white rounded-lg border border-emerald-200 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <h3 className="text-lg font-bold text-slate-900">Drylab</h3>
              </div>
              <div className="space-y-3">
                {drylabWorkstreams.map((ws) => (
                  <div key={ws.id} className="flex items-center justify-between gap-2">
                    <p className="text-sm font-medium text-slate-700 flex-1">{ws.name}</p>
                    <StatusBadge status={ws.status} size="sm" />
                  </div>
                ))}
              </div>
            </div>

            {/* HP */}
            <div className="bg-white rounded-lg border border-amber-200 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <h3 className="text-lg font-bold text-slate-900">Human Practice</h3>
              </div>
              <div className="space-y-3">
                {hpWorkstreams.map((ws) => (
                  <div key={ws.id} className="flex items-center justify-between gap-2">
                    <p className="text-sm font-medium text-slate-700 flex-1">{ws.name}</p>
                    <StatusBadge status={ws.status} size="sm" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Workstream Status Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
              <p className="text-xs font-medium text-emerald-700 mb-1">Confirmed</p>
              <p className="text-2xl font-bold text-emerald-900">
                {workstreamStatusSummary['Confirmed']}
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <p className="text-xs font-medium text-blue-700 mb-1">In Progress</p>
              <p className="text-2xl font-bold text-blue-900">
                {workstreamStatusSummary['In Progress']}
              </p>
            </div>
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <p className="text-xs font-medium text-amber-700 mb-1">Assigning</p>
              <p className="text-2xl font-bold text-amber-900">
                {workstreamStatusSummary['Assigning']}
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <p className="text-xs font-medium text-slate-700 mb-1">Not Yet Filled</p>
              <p className="text-2xl font-bold text-slate-900">
                {workstreamStatusSummary['Not Yet Filled']}
              </p>
            </div>
          </div>
        </section>

        {/* Contact & Information Footer */}
        <section className="border-t border-slate-200 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Questions?</h3>
              <p className="text-slate-700 mb-6">
                For more information about our project, team, or to get involved, please reach out to
                our team leads.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">📧</div>
                  <div>
                    <p className="text-xs font-medium text-slate-600">Email</p>
                    <p className="text-sm text-blue-600 font-semibold">igem2026@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">📋</div>
                  <div>
                    <p className="text-xs font-medium text-slate-600">Project Wiki</p>
                    <p className="text-sm text-blue-600 font-semibold">
                      wiki.igem2026.example.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/team-structure"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    → Team Structure & Directory
                  </a>
                </li>
                <li>
                  <a
                    href="/resources"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    → Resources & Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="/workstreams"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    → Detailed Workstreams
                  </a>
                </li>
                <li>
                  <a
                    href="/updates"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    → Weekly Updates
                  </a>
                </li>
                <li>
                  <a
                    href="/roadmap"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    → Detailed Roadmap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QuickViewPage;
