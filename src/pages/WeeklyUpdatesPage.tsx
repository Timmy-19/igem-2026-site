import React, { useState, useMemo } from 'react';
import {
  PageHeader,
  SectionHeader,
  UpdateCard,
  FilterBar,
} from '../components';

interface UpdateWithDetails {
  id?: string;
  weekTitle: string;
  dateRange: string;
  summary: string;
  detail?: string;
  workstreams?: Array<{
    name: string;
    progress: string;
  }>;
  milestones?: string[];
  blockers?: string[];
  nextSteps?: string[];
}

const WeeklyUpdatesPage: React.FC = () => {
  const [trackFilter, setTrackFilter] = useState('');

  // Enrich updates with additional structure for display
  const enhancedUpdates: UpdateWithDetails[] = [
    {
      id: 'update-week-1',
      weekTitle: 'Week 1: Kickoff and Project Framing',
      dateRange: 'Mar 2-8, 2026',
      summary: 'Team formed, mission defined, initial research conducted, communication systems established across all three tracks.',
      workstreams: [
        { name: 'Biosecurity', progress: 'Scope finalized, literature review planned' },
        { name: 'Stress Circuits', progress: 'Initial gene selection underway' },
        { name: 'Protectant Development', progress: 'Candidate screening planned' },
        { name: 'Drylab', progress: 'Hardware requirements documented' },
        { name: 'Math Model', progress: 'Framework design initiated' },
        { name: 'HP', progress: 'Stakeholder outreach begun' },
      ],
      milestones: [
        'All three tracks fully mobilized and aligned',
        'Project charter and success metrics finalized',
        'Team working agreements established',
        'First integrated planning session completed',
      ],
      blockers: [
        'Coordinating across three complex workstreams with different methodologies',
        'Ensuring adequate resource allocation across tracks',
      ],
      nextSteps: [
        'Complete literature review for stress circuit design',
        'Finalize hydroponic system specifications',
        'Conduct initial market research interviews',
        'Set up project documentation wiki structure',
      ],
    },
    {
      id: 'update-week-2',
      weekTitle: 'Week 2: Stress Model Planning and Module Concept Development',
      dateRange: 'Mar 9-15, 2026',
      summary: 'Comprehensive stress pathway literature review completed, mathematical modeling framework initiated, protectant screening assays launched, stakeholder engagement expanding.',
      workstreams: [
        { name: 'Biosecurity', progress: 'Literature review 50% complete' },
        { name: 'Stress Circuits', progress: 'Gene selection completed, cloning prep underway' },
        { name: 'Protectant Development', progress: 'Screening assays initiated, 20% progress' },
        { name: 'Drylab', progress: 'Hardware CAD started, sensor selection finalized' },
        { name: 'Math Model', progress: 'Parameter estimation from literature begun' },
        { name: 'HP', progress: 'Brand identity workshop completed, 5 interviews conducted' },
      ],
      milestones: [
        'Completed comprehensive stress pathway literature review',
        'Mathematical model framework design initiated',
        'Protectant screening assays planned and partially set up',
        'First round of stakeholder interviews completed (5 interviews)',
        'Brand identity workshop with design team',
      ],
      blockers: [
        'Literature review revealed complexity in stress response pathways requiring expanded scope',
        'Protectant availability constraints for initial screening',
        'Coordinating Wetlab and Drylab modeling efforts with different timescales',
      ],
      nextSteps: [
        'Begin cloning of stress-responsive genes in E. coli',
        'Establish baseline organism cultures',
        'Finalize sensor hardware specifications',
        'Draft business plan outline',
        'Complete wiki navigation structure',
      ],
    },
    {
      id: 'update-week-3',
      weekTitle: 'Week 3: Building Project Infrastructure and Execution Structure',
      dateRange: 'Mar 16-22, 2026',
      summary: 'Robust infrastructure established: hydroponic CAD modeling, sensor hardware design, gene circuit simulation, baseline cultures established, wiki launched with 15 articles.',
      workstreams: [
        { name: 'Biosecurity', progress: 'Design phase initiated, 25% complete' },
        { name: 'Stress Circuits', progress: 'E. coli cloning prep finalized' },
        { name: 'Protectant Development', progress: 'Mechanism characterization planning' },
        { name: 'Drylab', progress: 'Hydroponic CAD 40% complete, PCB layout started' },
        { name: 'Math Model', progress: 'Simulation environment operational' },
        { name: 'HP', progress: 'Wiki launched, stakeholder personas developed' },
      ],
      milestones: [
        'Hydroponic system CAD models 40% complete',
        'Sensor hardware BOM finalized and ordered',
        'Gene circuit simulation environment fully operational',
        'Baseline organisms cultured and characterized',
        'Stress model plants established in growth chambers',
        'Project wiki launched with 15 initial articles',
        'Stakeholder personas developed from 12 interviews',
        'First integrated data architecture review completed',
      ],
      blockers: [
        'PCB design complexity requiring extended timeline by 1 week',
        'Some organisms showing slower growth than expected; adjusted media',
        'Need for better cross-team documentation of assumptions and parameters',
      ],
      nextSteps: [
        'Complete first transformation of E. coli with stress genes',
        'Begin protectant efficacy screening',
        'Achieve 70% completion on hydroponic CAD',
        'Start PCB fabrication layout',
        'Conduct second round of stakeholder interviews (10 target)',
        'Draft initial wiki content on methodology',
      ],
    },
  ];

  // Map updates by track
  const updatesByTrack = useMemo(() => {
    if (!trackFilter) return enhancedUpdates;

    // Simple track-based filtering for enhanced updates
    return enhancedUpdates.filter(update => {
      if (trackFilter === 'Biosecurity') return update.weekTitle?.includes('Biosecurity') || update.workstreams?.some(w => w.name === 'Biosecurity');
      if (trackFilter === 'Stress') return update.weekTitle?.includes('Stress') || update.workstreams?.some(w => w.name === 'Stress Circuits');
      if (trackFilter === 'Protectant') return update.workstreams?.some(w => w.name === 'Protectant Development');
      if (trackFilter === 'Drylab') return update.workstreams?.some(w => w.name === 'Drylab');
      if (trackFilter === 'Model') return update.workstreams?.some(w => w.name === 'Math Model');
      if (trackFilter === 'HP') return update.workstreams?.some(w => w.name === 'HP');
      return true;
    });
  }, [trackFilter]);

  // Convert enhanced updates to UpdateCard format
  const updateCardsData = updatesByTrack.map(update => ({
    id: update.id || '',
    weekTitle: update.weekTitle || '',
    dateRange: update.dateRange || '',
    summary: update.summary || '',
    detail: `
Workstream Progress:
${update.workstreams?.map(w => `• ${w.name}: ${w.progress}`).join('\n') || ''}

Major Milestones:
${update.milestones?.map(m => `• ${m}`).join('\n') || ''}

Blockers & Challenges:
${update.blockers?.map(b => `• ${b}`).join('\n') || ''}

Next Steps:
${update.nextSteps?.map(s => `• ${s}`).join('\n') || ''}

[Image Placeholder]
    `,
  }));

  return (
    <div>
      <PageHeader
        title="Weekly Updates"
        subtitle="Progress Archive: Project milestones, workstream updates, and key achievements"
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Overview Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Update Feed</h2>
            <p className="text-lg text-slate-700">
              Track project progress across all workstreams. Each weekly update captures major milestones,
              progress by workstream, blockers, and upcoming objectives.
            </p>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="mb-12">
          <FilterBar
            filters={[
              {
                label: 'Workstream',
                options: [
                  { label: 'Biosecurity', value: 'Biosecurity' },
                  { label: 'Stress Circuits', value: 'Stress' },
                  { label: 'Protectant Development', value: 'Protectant' },
                  { label: 'Drylab', value: 'Drylab' },
                  { label: 'Math Model', value: 'Model' },
                  { label: 'HP', value: 'HP' },
                ],
                value: trackFilter,
                onChange: setTrackFilter,
              },
            ]}
          />
        </section>

        {/* Updates Feed */}
        <section className="space-y-6">
          {updateCardsData.length === 0 ? (
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-8 text-center">
              <p className="text-slate-600">No updates match the selected filter.</p>
            </div>
          ) : (
            updateCardsData.map((update) => (
              <UpdateCard key={update.id} update={update} />
            ))
          )}
        </section>

        {/* Summary Statistics */}
        <section className="mt-16">
          <SectionHeader
            title="Update Summary"
            description="Key metrics across all weeks"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <h3 className="text-sm font-medium text-slate-600 mb-2">Total Updates</h3>
              <p className="text-3xl font-bold text-blue-600 mb-1">{enhancedUpdates.length}</p>
              <p className="text-xs text-slate-500">weeks tracked</p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <h3 className="text-sm font-medium text-slate-600 mb-2">Workstreams</h3>
              <p className="text-3xl font-bold text-emerald-600 mb-1">6</p>
              <p className="text-xs text-slate-500">active tracks</p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <h3 className="text-sm font-medium text-slate-600 mb-2">Latest Update</h3>
              <p className="text-lg font-bold text-slate-900 mb-1">Week 3</p>
              <p className="text-xs text-slate-500">Mar 16-22, 2026</p>
            </div>
          </div>
        </section>

        {/* Key Achievements Section */}
        <section className="mt-16">
          <SectionHeader
            title="Key Achievements to Date"
            description="Highlights across all projects and workstreams"
          />
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Wetlab</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>✓ Comprehensive stress pathway literature review completed</li>
                  <li>✓ Baseline organism cultures established and characterized</li>
                  <li>✓ Stress model plants established in growth chambers</li>
                  <li>✓ E. coli cloning prep finalized, ready for transformation</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Drylab</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>✓ Hydroponic system CAD models 40% complete</li>
                  <li>✓ Sensor hardware BOM finalized and ordered</li>
                  <li>✓ Gene circuit simulation environment operational</li>
                  <li>✓ PCB design layout initiated with extended timeline</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-4">HP</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>✓ Project wiki launched with 15 initial articles</li>
                  <li>✓ 12 stakeholder interviews completed</li>
                  <li>✓ Brand identity and visual guidelines developed</li>
                  <li>✓ Stakeholder personas created from interview data</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Infrastructure</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>✓ Team working agreements established</li>
                  <li>✓ Cross-track integration points identified</li>
                  <li>✓ Weekly meeting cadence and communication protocols set</li>
                  <li>✓ Project success metrics defined</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Priorities */}
        <section className="mt-16 mb-12">
          <SectionHeader
            title="Upcoming Priorities"
            description="Focus areas for the next phase"
          />
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Immediate (Next 2 Weeks)</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>→ Complete first E. coli transformation with stress genes</li>
                  <li>→ Launch protectant efficacy screening</li>
                  <li>→ Achieve 70% completion on hydroponic CAD</li>
                  <li>→ Begin PCB fabrication layout finalization</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Medium-term (4-6 Weeks)</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>→ Complete biosecurity circuit design phase</li>
                  <li>→ Finalize sensor hardware PCB and initiate fabrication</li>
                  <li>→ Conduct second round of stakeholder interviews</li>
                  <li>→ Draft comprehensive wiki content on methodology</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WeeklyUpdatesPage;
