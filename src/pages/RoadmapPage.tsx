import React from 'react';
import { PageHeader, SectionHeader, TimelineRow } from '../components';
import { getRoadmapTracksByType } from '../data/roadmap';

const RoadmapPage: React.FC = () => {
  const wetlabTracks = getRoadmapTracksByType('Wetlab');
  const drylabTracks = getRoadmapTracksByType('Drylab');
  const hpTracks = getRoadmapTracksByType('HP');

  const convertMilestoneToPhase = (milestone: any) => {
    let status: 'Confirmed' | 'In Progress' | 'Assigning' | 'Not Yet Filled';
    if (milestone.status === 'Completed') {
      status = 'Confirmed';
    } else if (milestone.status === 'In Progress') {
      status = 'In Progress';
    } else {
      status = 'Not Yet Filled';
    }
    return {
      months: `${milestone.startMonth}-${milestone.endMonth}`,
      label: milestone.name,
      status,
    };
  };

  return (
    <div>
      <PageHeader
        title="Project Roadmap"
        subtitle="March to August: Parallel development toward one integrated system"
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Master Timeline Overview */}
        <section className="mb-16">
          <SectionHeader
            title="Execution Timeline"
            subtitle="6-Month Convergence Model"
            description="Four major wetlab streams, four drylab tracks, and four human practice workstreams execute in parallel, with key convergence points in mid-project and final integration phases."
          />

          {/* Month Headers */}
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg border border-slate-200 overflow-hidden">
            <div className="flex gap-4 px-6 py-4">
              <div className="w-48 flex-shrink-0" />
              <div className="flex-1">
                <div className="grid gap-1" style={{ gridTemplateColumns: 'repeat(6, minmax(0, 1fr))' }}>
                  {['March', 'April', 'May', 'June', 'July', 'August'].map((month) => (
                    <div key={month} className="text-center">
                      <p className="text-sm font-bold text-slate-900">{month}</p>
                      <p className="text-xs text-slate-600 mt-0.5">{month.slice(0, 3)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* WETLAB TRACKS */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm mt-8 overflow-hidden">
            <div className="bg-blue-50 border-b border-slate-200 px-6 py-4">
              <h3 className="text-lg font-bold text-slate-900">Wetlab Execution Tracks</h3>
              <p className="text-sm text-slate-600 mt-1">
                Four parallel streams: Biosecurity Circuit, Stress Circuit, Model Establishing, Protectant Development
              </p>
            </div>

            <div className="p-6">
              {wetlabTracks.map((track) => (
                <TimelineRow
                  key={track.id}
                  trackName={track.name}
                  phases={track.milestones.map(convertMilestoneToPhase)}
                />
              ))}
            </div>
          </div>

          {/* DRYLAB TRACKS */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm mt-8 overflow-hidden">
            <div className="bg-emerald-50 border-b border-slate-200 px-6 py-4">
              <h3 className="text-lg font-bold text-slate-900">Drylab Execution Tracks</h3>
              <p className="text-sm text-slate-600 mt-1">
                Four parallel design and modeling tracks: Hardware, sensors, logic circuits, and plant stress prediction
              </p>
            </div>

            <div className="p-6">
              {drylabTracks.map((track) => (
                <TimelineRow
                  key={track.id}
                  trackName={track.name}
                  phases={track.milestones.map(convertMilestoneToPhase)}
                />
              ))}
            </div>
          </div>

          {/* HP TRACKS */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm mt-8 overflow-hidden">
            <div className="bg-amber-50 border-b border-slate-200 px-6 py-4">
              <h3 className="text-lg font-bold text-slate-900">Human Practice & Outreach Tracks</h3>
              <p className="text-sm text-slate-600 mt-1">
                Business planning, documentation, visual communication, and stakeholder engagement
              </p>
            </div>

            <div className="p-6">
              {hpTracks.map((track) => (
                <TimelineRow
                  key={track.id}
                  trackName={track.name}
                  phases={track.milestones.map(convertMilestoneToPhase)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Convergence Points */}
        <section className="mb-16">
          <SectionHeader
            title="Critical Convergence Points"
            description="Where parallel streams merge and integrated work begins"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mid-Project Convergence */}
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg border border-blue-200 p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600">
                    <span className="text-white text-xl font-bold">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900">Mid-Project Convergence</h3>
                  <p className="text-sm text-slate-600 mt-1">May–June</p>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm text-slate-700">
                <p>
                  <strong>Wetlab:</strong> Biosecurity and Stress circuits reach cloning/validation phase; Model and Protectant streams enter testing
                </p>
                <p>
                  <strong>Drylab:</strong> Hardware designs finalized; Gene circuit simulations complete; Mathematical models parameterized
                </p>
                <p>
                  <strong>HP:</strong> Business model framework established; Wiki architecture deployed; Visual brand guidelines finalized
                </p>
                <p className="pt-2 text-emerald-700 font-semibold">
                  Integration milestone: Begin integrating sensor hardware with bacterial systems
                </p>
              </div>
            </div>

            {/* Final Integration & Validation */}
            <div className="bg-gradient-to-br from-emerald-50 to-slate-50 rounded-lg border border-emerald-200 p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-600">
                    <span className="text-white text-xl font-bold">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900">Final Integrated Validation</h3>
                  <p className="text-sm text-slate-600 mt-1">July–August</p>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm text-slate-700">
                <p>
                  <strong>Wetlab:</strong> Complete fine-tuning of all circuits; System validation in hydroponic environment
                </p>
                <p>
                  <strong>Drylab:</strong> Final model refinements; Hardware integration testing; All digital components deployed
                </p>
                <p>
                  <strong>HP:</strong> Business pitch finalized; Complete wiki deployment; Stakeholder validation presentations
                </p>
                <p className="pt-2 text-emerald-700 font-semibold">
                  System validation: Integrated B. subtilis + hardware + digital model in controlled field conditions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Monthly Breakdown */}
        <section className="mb-16">
          <SectionHeader
            title="Monthly Breakdown"
            description="What each track is delivering in each phase"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* March */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">March: Kickoff & Foundation</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-blue-700 mb-2">Wetlab</p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Biosecurity circuit concept comparison begins</li>
                    <li>• Stress circuit literature review and gene selection</li>
                    <li>• Model organism culture setup initiated</li>
                    <li>• Protectant candidate evaluation starts</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-emerald-700 mb-2">Drylab</p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Hydroponic system design begins</li>
                    <li>• Sensor specification and selection</li>
                    <li>• Gene circuit logic gate definitions</li>
                    <li>• Math model framework established</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-amber-700 mb-2">HP</p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Market research initiated</li>
                    <li>• Wiki architecture designed</li>
                    <li>• Brand identity and design guidelines</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* April */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">April: Design & Planning Phase 2</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-blue-700 mb-2">Wetlab</p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Biosecurity circuit concept selection complete</li>
                    <li>• Stress circuit cloning in E. coli begins</li>
                    <li>• Model refinement phase 1 starts</li>
                    <li>• Protectant design and cloning initiated</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-emerald-700 mb-2">Drylab</p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Hydroponic CAD models refined</li>
                    <li>• PCB and electronics design begins</li>
                    <li>• Gene circuit simulation and modeling</li>
                    <li>• Math model parameter estimation starts</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-amber-700 mb-2">HP</p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Wiki content creation phase 1</li>
                    <li>• Design asset creation begins</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* May */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">May: Development Phase 1</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-blue-700 mb-2">Wetlab</p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Biosecurity circuit cloning and validation</li>
                    <li>• Stress circuit transformation to B. subtilis</li>
                    <li>• Model refinement phase 1 continues</li>
                    <li>• Protectant testing begins</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-emerald-700 mb-2">Drylab</p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Hydroponic prototype fabrication begins</li>
                    <li>• Electronics PCB layout completed</li>
                    <li>• Circuit simulations optimized</li>
                    <li>• Parameter estimation continues</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-amber-700 mb-2">HP</p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Wiki content creation ongoing</li>
                    <li>• Business model framework development</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* June */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">June: Development Phase 2 & Integration</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-blue-700 mb-2">Wetlab</p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Biosecurity circuit fine-tuning begins</li>
                    <li>• Stress circuit validation in B. subtilis complete</li>
                    <li>• Protectant refinement phase starts</li>
                    <li>• All circuits ready for integration</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-emerald-700 mb-2">Drylab</p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Hydroponic testing and optimization</li>
                    <li>• Sensor integration and calibration</li>
                    <li>• Circuit documentation complete</li>
                    <li>• Model validation begins</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-amber-700 mb-2">HP</p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Wiki architecture deployed</li>
                    <li>• Brand guidelines finalized</li>
                    <li>• Business model framework complete</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* July */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">July: Integration & Refinement</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-blue-700 mb-2">Wetlab</p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Circuit fine-tuning continues</li>
                    <li>• Model refinement phase 2 active</li>
                    <li>• Integrated system assembly in progress</li>
                    <li>• Validation experiments design</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-emerald-700 mb-2">Drylab</p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Final hardware integration testing</li>
                    <li>• Model refinement and validation</li>
                    <li>• System performance benchmarking</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-amber-700 mb-2">HP</p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Wiki refinement and maintenance</li>
                    <li>• Business pitch deck development</li>
                    <li>• Stakeholder presentation prep</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* August */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">August: Final Validation & Completion</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-blue-700 mb-2">Wetlab</p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• All circuits assembly and testing complete</li>
                    <li>• Integrated system validation in hydroponic environment</li>
                    <li>• Results compilation and analysis</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-emerald-700 mb-2">Drylab</p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Hardware-software integration complete</li>
                    <li>• Model validation against experimental data</li>
                    <li>• Performance documentation finalized</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-amber-700 mb-2">HP</p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Business pitch finalized and presented</li>
                    <li>• Complete wiki deployment</li>
                    <li>• Presentation materials ready</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Status Legend */}
        <section className="mb-8">
          <SectionHeader title="Status Color Legend" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded bg-emerald-500 mt-1"></div>
              <div>
                <p className="font-semibold text-slate-900">Confirmed</p>
                <p className="text-sm text-slate-600">Complete or locked in</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded bg-blue-500 mt-1"></div>
              <div>
                <p className="font-semibold text-slate-900">In Progress</p>
                <p className="text-sm text-slate-600">Actively executing</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded bg-amber-500 mt-1"></div>
              <div>
                <p className="font-semibold text-slate-900">Assigning</p>
                <p className="text-sm text-slate-600">Ownership not finalized</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded bg-slate-300 mt-1"></div>
              <div>
                <p className="font-semibold text-slate-900">Not Yet Filled</p>
                <p className="text-sm text-slate-600">Scheduled for later</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RoadmapPage;
