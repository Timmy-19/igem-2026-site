import React, { useState } from 'react';
import { PageHeader, SectionHeader, WorkstreamCard, FilterBar } from '../components';
import { workstreams, getWorkstreamsByTrack } from '../data/workstreams';

interface WorkstreamObject {
  id?: string;
  name: string;
  description: string;
  timeline: string;
  status: 'Confirmed' | 'In Progress' | 'Assigning' | 'Not Yet Filled';
  owners: string[];
  contributors: string[];
  nextMilestone: string;
}

// Enhanced workstream data with timeline, contributors, and milestone info
const workstreamDetails: Record<string, WorkstreamObject> = {
  'biosecurity-circuit': {
    name: 'Biosecurity Circuit',
    description: 'Development of biosecurity circuit for plant protection system',
    timeline: 'Mar–Aug',
    status: 'Assigning',
    owners: [],
    contributors: [],
    nextMilestone: 'Concept comparison (Mar–Apr)',
  },
  'stress-circuit': {
    name: 'Stress Circuit',
    description: 'Engineering stress-response circuits in B. subtilis',
    timeline: 'Mar–Jun',
    status: 'In Progress',
    owners: [],
    contributors: [],
    nextMilestone: 'E. coli cloning (Apr–May)',
  },
  'model-establishing': {
    name: 'Model Establishing',
    description: 'Establishing baseline plant stress models and characterization',
    timeline: 'Mar–Aug',
    status: 'In Progress',
    owners: [],
    contributors: [],
    nextMilestone: 'Iterative refinement phase 1 (Apr–Jun)',
  },
  'protectant-development': {
    name: 'Protectant Development',
    description: 'Development and testing of protective compounds',
    timeline: 'Mar–Aug',
    status: 'In Progress',
    owners: [],
    contributors: [],
    nextMilestone: 'Design & cloning phase (Apr–Jun)',
  },
  'integrated-system-validation': {
    name: 'Integrated System Validation',
    description: 'Validation of complete integrated system in field conditions',
    timeline: 'Jul–Aug',
    status: 'Not Yet Filled',
    owners: [],
    contributors: [],
    nextMilestone: 'Begin validation experiments (Jul)',
  },
  'hydroponic-system-boxes': {
    name: 'Hydroponic System Boxes',
    description: 'Design and fabrication of hydroponic growing boxes',
    timeline: 'Mar–Jul',
    status: 'Confirmed',
    owners: ['Anton Lin', 'Ethan Liu', 'Noah Tau'],
    contributors: [],
    nextMilestone: 'Prototype fabrication (May–Jun)',
  },
  'soil-metrics-sensor-hardware': {
    name: 'Soil Metrics Sensor Hardware',
    description: 'Hardware development for soil moisture and nutrient sensors',
    timeline: 'Mar–Jul',
    status: 'Confirmed',
    owners: ['Anton Lin', 'Noah Tau'],
    contributors: [],
    nextMilestone: 'PCB design completion (Apr–Jun)',
  },
  'gene-circuit-logic-design': {
    name: 'In Silico Gene Circuit Logic Design',
    description: 'Computational design and simulation of gene circuits',
    timeline: 'Mar–Jun',
    status: 'Confirmed',
    owners: ['Jacquelyn', 'Felix Yu'],
    contributors: [],
    nextMilestone: 'Simulation & modeling (Apr–May)',
  },
  'mathematical-model-plant': {
    name: 'Mathematical Model of Plant Stress System',
    description: 'Development of predictive mathematical models for plant stress response',
    timeline: 'Mar–Jul',
    status: 'Confirmed',
    owners: ['Ethan Liu', 'Anna Chuang'],
    contributors: [],
    nextMilestone: 'Parameter estimation (Apr–Jun)',
  },
  'business-plan': {
    name: 'Business Plan',
    description: 'Development of business model and commercialization strategy',
    timeline: 'Mar–Sep',
    status: 'Assigning',
    owners: [],
    contributors: [],
    nextMilestone: 'Business model development (May–Jul)',
  },
  'wiki-setup-documentation': {
    name: 'Wiki Setup / Documentation Architecture',
    description: 'Creation and organization of project documentation and wiki',
    timeline: 'Mar–Aug',
    status: 'In Progress',
    owners: [],
    contributors: [],
    nextMilestone: 'Content creation phase 1 (Apr–Jun)',
  },
  'art-design-visual': {
    name: 'Art Design / Visual Communication',
    description: 'Visual branding, design, and communication materials',
    timeline: 'Mar–Aug',
    status: 'In Progress',
    owners: [],
    contributors: [],
    nextMilestone: 'Design asset creation (Apr–Jun)',
  },
  'stakeholder-implementation': {
    name: 'Stakeholder / Implementation Framing',
    description: 'Stakeholder engagement and implementation strategy development',
    timeline: 'Mar–Aug',
    status: 'Assigning',
    owners: [],
    contributors: [],
    nextMilestone: 'Strategy framework (Apr–May)',
  },
};

const WetlabExecutionGroups = {
  groupA: {
    name: 'Group A: Plant Chassis & Gene Circuits',
    description: 'Focused on establishing the biological foundation and circuit logic',
    members: ['Plant Lead', 'Chassis Engineer', 'Gene Circuit Designer'],
  },
  groupB: {
    name: 'Group B: Stress Response & Protectants',
    description: 'Focused on stress-response mechanisms and protective compound development',
    members: ['Stress Response Lead', 'Protectant Developer', 'Testing Lead'],
  },
};

const DrylabExecutionTracks = {
  major: {
    name: 'Major Tracks',
    members: [
      'Anton Lin (Hydroponic Systems)',
      'Ethan Liu (Mathematical Modeling)',
      'Noah Tau (Sensor Hardware)',
      'Jacquelyn (Gene Circuit Design)',
      'Felix Yu (Circuit Simulation)',
      'Anna Chuang (Stress Response Modeling)',
    ],
  },
  minor: {
    name: 'Supporting Members',
    members: [
      'Software Integration Support',
      'Data Analysis & Visualization',
      'Hardware Testing & Debugging',
    ],
  },
};

const WorkstreamsPage: React.FC = () => {
  const [filterTrack, setFilterTrack] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const wetlabWorkstreams = getWorkstreamsByTrack('Wetlab');
  const drylabWorkstreams = getWorkstreamsByTrack('Drylab');
  const hpWorkstreams = getWorkstreamsByTrack('HP');

  const filterWorkstreams = (items: any[]) => {
    return items.filter((ws) => {
      const trackMatch = !filterTrack || ws.track === filterTrack;
      const statusMatch = !filterStatus || ws.status === filterStatus;
      return trackMatch && statusMatch;
    });
  };

  const filteredWetlab = filterWorkstreams(wetlabWorkstreams);
  const filteredDrylab = filterWorkstreams(drylabWorkstreams);
  const filteredHP = filterWorkstreams(hpWorkstreams);

  const filters = [
    {
      label: 'Track',
      options: [
        { label: 'Wetlab', value: 'Wetlab' },
        { label: 'Drylab', value: 'Drylab' },
        { label: 'HP', value: 'HP' },
      ],
      value: filterTrack,
      onChange: setFilterTrack,
    },
    {
      label: 'Status',
      options: [
        { label: 'Confirmed', value: 'Confirmed' },
        { label: 'In Progress', value: 'In Progress' },
        { label: 'Assigning', value: 'Assigning' },
        { label: 'Not Yet Filled', value: 'Not Yet Filled' },
      ],
      value: filterStatus,
      onChange: setFilterStatus,
    },
  ];

  return (
    <div>
      <PageHeader
        title="Workstreams & Execution Teams"
        subtitle="Detailed view of all active workstreams, teams, and implementation tracks"
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Filter Bar */}
        <section className="mb-8">
          <FilterBar filters={filters} />
        </section>

        {/* WETLAB SECTION */}
        {(!filterTrack || filterTrack === 'Wetlab') && (
          <section className="mb-16">
            <SectionHeader
              title="Wetlab Workstreams"
              subtitle="Four parallel execution streams"
              description="Core biological engineering and experimental validation"
            />

            {filteredWetlab.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {filteredWetlab.map((ws) => (
                  <WorkstreamCard
                    key={ws.id}
                    workstream={{
                      id: ws.id,
                      name: ws.name,
                      description: ws.description || '',
                      timeline: workstreamDetails[ws.id]?.timeline || 'Mar–Aug',
                      status: ws.status,
                      owners: ws.owners,
                      contributors: workstreamDetails[ws.id]?.contributors || [],
                      nextMilestone: workstreamDetails[ws.id]?.nextMilestone || 'TBD',
                    }}
                  />
                ))}
              </div>
            )}

            {/* Wetlab Execution Groups */}
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg border border-blue-200 p-8 mt-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Wetlab Execution Groups</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Group A */}
                <div className="bg-white rounded-lg border border-slate-200 p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {WetlabExecutionGroups.groupA.name}
                  </h4>
                  <p className="text-sm text-slate-600 mb-4">
                    {WetlabExecutionGroups.groupA.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-slate-500 uppercase">Members</p>
                    <div className="flex flex-wrap gap-2">
                      {WetlabExecutionGroups.groupA.members.map((member) => (
                        <span
                          key={member}
                          className="px-3 py-1.5 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Group B */}
                <div className="bg-white rounded-lg border border-slate-200 p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {WetlabExecutionGroups.groupB.name}
                  </h4>
                  <p className="text-sm text-slate-600 mb-4">
                    {WetlabExecutionGroups.groupB.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-slate-500 uppercase">Members</p>
                    <div className="flex flex-wrap gap-2">
                      {WetlabExecutionGroups.groupB.members.map((member) => (
                        <span
                          key={member}
                          className="px-3 py-1.5 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-slate-700">
                  <strong>Convergence Strategy:</strong> Both groups execute in parallel during Months 1–4,
                  with Group A establishing baseline models and Group B developing stress responses. In Months 5–6,
                  the groups converge to integrate circuits into a single B. subtilis strain, then validate
                  in the hydroponic system during Months 7–8.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* DRYLAB SECTION */}
        {(!filterTrack || filterTrack === 'Drylab') && (
          <section className="mb-16">
            <SectionHeader
              title="Drylab Workstreams"
              subtitle="Four design and modeling tracks"
              description="Hardware design, computational simulation, and mathematical modeling"
            />

            {filteredDrylab.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {filteredDrylab.map((ws) => (
                  <WorkstreamCard
                    key={ws.id}
                    workstream={{
                      id: ws.id,
                      name: ws.name,
                      description: ws.description || '',
                      timeline: workstreamDetails[ws.id]?.timeline || 'Mar–Jul',
                      status: ws.status,
                      owners: ws.owners,
                      contributors: workstreamDetails[ws.id]?.contributors || [],
                      nextMilestone: workstreamDetails[ws.id]?.nextMilestone || 'TBD',
                    }}
                  />
                ))}
              </div>
            )}

            {/* Drylab Execution Tracks */}
            <div className="bg-gradient-to-r from-emerald-50 to-slate-50 rounded-lg border border-emerald-200 p-8 mt-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Drylab Execution Tracks</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Major Tracks */}
                <div className="bg-white rounded-lg border border-slate-200 p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {DrylabExecutionTracks.major.name}
                  </h4>
                  <p className="text-sm text-slate-600 mb-4">
                    Lead design and modeling responsibilities
                  </p>
                  <div className="space-y-2">
                    {DrylabExecutionTracks.major.members.map((member) => (
                      <div
                        key={member}
                        className="px-3 py-2 bg-emerald-50 text-emerald-800 text-sm rounded-lg border border-emerald-200 font-medium"
                      >
                        {member}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Minor Tracks */}
                <div className="bg-white rounded-lg border border-slate-200 p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {DrylabExecutionTracks.minor.name}
                  </h4>
                  <p className="text-sm text-slate-600 mb-4">
                    Supporting and cross-cutting roles
                  </p>
                  <div className="space-y-2">
                    {DrylabExecutionTracks.minor.members.map((member) => (
                      <div
                        key={member}
                        className="px-3 py-2 bg-slate-50 text-slate-700 text-sm rounded-lg border border-slate-200 font-medium"
                      >
                        {member}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                <p className="text-sm text-slate-700">
                  <strong>Integration Points:</strong> Hydroponic system and Sensor Hardware converge in Months 5–6
                  for prototype integration. Gene Circuit Design and Mathematical Model deliver optimized designs by
                  Month 6 for integration with wetlab circuits. Final system testing uses all drylab outputs by Month 8.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* HP SECTION */}
        {(!filterTrack || filterTrack === 'HP') && (
          <section className="mb-16">
            <SectionHeader
              title="Human Practice & Outreach Workstreams"
              subtitle="Four supporting tracks"
              description="Business strategy, documentation, visual communication, and stakeholder engagement"
            />

            {filteredHP.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredHP.map((ws) => (
                  <WorkstreamCard
                    key={ws.id}
                    workstream={{
                      id: ws.id,
                      name: ws.name,
                      description: ws.description || '',
                      timeline: workstreamDetails[ws.id]?.timeline || 'Mar–Aug',
                      status: ws.status,
                      owners: ws.owners,
                      contributors: workstreamDetails[ws.id]?.contributors || [],
                      nextMilestone: workstreamDetails[ws.id]?.nextMilestone || 'TBD',
                    }}
                  />
                ))}
              </div>
            )}
          </section>
        )}

        {/* Empty State */}
        {filteredWetlab.length === 0 && filteredDrylab.length === 0 && filteredHP.length === 0 && (
          <div className="bg-slate-50 rounded-lg border border-slate-200 p-12 text-center">
            <p className="text-slate-600 font-medium">No workstreams match the selected filters.</p>
            <button
              onClick={() => {
                setFilterTrack('');
                setFilterStatus('');
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Summary Stats */}
        <section className="mt-16 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg border border-slate-200 p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Workstream Summary</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">{wetlabWorkstreams.length}</p>
                <p className="text-lg font-semibold text-slate-900 mt-2">Wetlab Workstreams</p>
                <p className="text-sm text-slate-600 mt-1">Parallel execution of 4 major tracks</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-600">{drylabWorkstreams.length}</p>
                <p className="text-lg font-semibold text-slate-900 mt-2">Drylab Workstreams</p>
                <p className="text-sm text-slate-600 mt-1">Design and modeling tracks</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-amber-600">{hpWorkstreams.length}</p>
                <p className="text-lg font-semibold text-slate-900 mt-2">HP Workstreams</p>
                <p className="text-sm text-slate-600 mt-1">Communication & business</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-slate-100 rounded-lg">
            <p className="text-sm text-slate-700">
              <strong>Total Active Workstreams:</strong> {workstreams.length} across all tracks,
              executing from March to September 2026 with convergence points in mid-project and final validation phases.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WorkstreamsPage;
