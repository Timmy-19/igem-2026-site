import React, { useState, useMemo } from 'react';
import {
  PageHeader,
  SectionHeader,
  SummaryCard,
  OwnershipTable,
  FilterBar,
  StatusBadge,
} from '../components';
import { pipelines } from '../data/pipelines';
import { teamMembers } from '../data/teams';

const OwnershipDashboardPage: React.FC = () => {
  // Filter states
  const [areaFilter, setAreaFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // Calculate summary metrics
  const activePipelinesCount = pipelines.length;

  const confirmedOwnersCount = pipelines.filter(p => p.status === 'Confirmed').length;

  const tasksInProgressCount = pipelines.reduce((acc, p) => {
    return acc + p.tasks.filter(t => t.status === 'In Progress').length;
  }, 0);

  const itemsAssigningCount = pipelines.filter(p => p.status === 'Assigning').length;

  const integrationCriticalCount = pipelines.reduce((acc, p) => {
    return acc + p.tasks.filter(t => t.priority === 'Critical').length;
  }, 0);

  // Prepare pipeline board data
  const pipelineData = useMemo(() => {
    return pipelines
      .filter(p => !areaFilter || p.track === areaFilter)
      .filter(p => !statusFilter || p.status === statusFilter)
      .map(p => ({
        pipeline: p.name,
        area: p.track,
        owners: p.owners.length > 0 ? p.owners.join(', ') : 'Assigning',
        contributors: p.contributors.slice(0, 2).join(', ') + (p.contributors.length > 2 ? `, +${p.contributors.length - 2}` : ''),
        status: <StatusBadge status={p.status} />,
        milestone: p.lastUpdated,
      }));
  }, [areaFilter, statusFilter]);

  // Prepare task data
  const taskData = useMemo(() => {
    const allTasks: Array<{
      task: string;
      pipeline: string;
      owner: string;
      contributors: string;
      deadline: string;
      status: React.ReactNode;
      dependency: string;
      notes: string;
    }> = [];
    pipelines.forEach(pipeline => {
      pipeline.tasks.forEach(task => {
        allTasks.push({
          task: task.title,
          pipeline: pipeline.name,
          owner: task.owner || 'TBD',
          contributors: task.contributors.join(', ') || '-',
          deadline: task.dueDate,
          status: <StatusBadge status={task.status as any} size="sm" />,
          dependency: task.dependencies.length > 0 ? 'Yes' : 'No',
          notes: task.blockers || task.notes || '-',
        });
      });
    });
    return allTasks.slice(0, 12);
  }, []);

  // Prepare student execution data
  const studentData = useMemo(() => {
    const studentMap = new Map();

    // Build student info
    teamMembers.forEach(member => {
      if (!studentMap.has(member.name)) {
        const majorTrack = member.tracks.find(t => t.affiliationType === 'Major')?.track;
        const minorTrack = member.tracks.find(t => t.affiliationType === 'Minor')?.track;

        studentMap.set(member.name, {
          student: member.name,
          majorTeam: majorTrack || 'HP',
          minorTeam: minorTrack || '-',
          focus: member.executionGroups?.[0] || member.dryLabTracks?.[0] || 'General',
          role: member.executionGroups ? 'Execution Lead' : (member.dryLabTracks ? 'Track Lead' : 'Contributor'),
          update: 'On schedule',
        });
      }
    });

    return Array.from(studentMap.values()).slice(0, 15);
  }, []);

  // Calculate instructor alerts
  const pipelinesAtRisk = pipelines.filter(p => {
    const hasBlociedTasks = p.tasks.some(t => t.blockers);
    return p.status === 'Assigning' || hasBlociedTasks;
  });

  const tasksOverdue = pipelines.reduce((acc, p) => {
    const today = new Date().toISOString().split('T')[0];
    return acc + p.tasks.filter(t => t.dueDate < today && t.status !== 'Completed').length;
  }, 0);

  const unresolvedDeps = pipelines.reduce((acc, p) => {
    return acc + p.tasks.filter(t => t.dependencies.length > 0 && t.status === 'Not Started').length;
  }, 0);

  const ownershipGaps = pipelines.filter(p => p.owners.length === 0).length;

  const integrationBottlenecks = pipelines.reduce((acc, p) => {
    return acc + p.tasks.filter(t => t.priority === 'Critical' && t.status === 'Not Started').length;
  }, 0);

  return (
    <div>
      <PageHeader
        title="Ownership Dashboard"
        subtitle="Operations Hub: Pipeline Ownership, Task Tracking & Execution Status"
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Summary Cards Row */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <SummaryCard
              title="Active Pipelines"
              value={activePipelinesCount}
              icon="📊"
              color="blue"
            />
            <SummaryCard
              title="Confirmed Owners"
              value={confirmedOwnersCount}
              subtitle="pipelines"
              icon="✓"
              color="emerald"
            />
            <SummaryCard
              title="Tasks In Progress"
              value={tasksInProgressCount}
              icon="⚙️"
              color="blue"
            />
            <SummaryCard
              title="Items Being Assigned"
              value={itemsAssigningCount}
              subtitle="pipelines"
              icon="👥"
              color="amber"
            />
            <SummaryCard
              title="Critical Tasks"
              value={integrationCriticalCount}
              icon="⚡"
              color="amber"
            />
          </div>
        </section>

        {/* Filter Bar */}
        <section className="mb-12">
          <FilterBar
            filters={[
              {
                label: 'Area',
                options: [
                  { label: 'Wetlab', value: 'Wetlab' },
                  { label: 'Drylab', value: 'Drylab' },
                  { label: 'HP', value: 'HP' },
                ],
                value: areaFilter,
                onChange: setAreaFilter,
              },
              {
                label: 'Status',
                options: [
                  { label: 'Confirmed', value: 'Confirmed' },
                  { label: 'In Progress', value: 'In Progress' },
                  { label: 'Assigning', value: 'Assigning' },
                ],
                value: statusFilter,
                onChange: setStatusFilter,
              },
            ]}
          />
        </section>

        {/* Pipeline Ownership Board */}
        <section className="mb-16">
          <SectionHeader
            title="Pipeline Ownership Board"
            description="Current ownership status and pipeline contributors"
          />
          <OwnershipTable
            columns={[
              { key: 'pipeline', label: 'Pipeline', sortable: true },
              { key: 'area', label: 'Area', sortable: true },
              { key: 'owners', label: 'Current Owner(s)', sortable: false },
              { key: 'contributors', label: 'Contributors', sortable: false },
              { key: 'status', label: 'Status', sortable: false },
              { key: 'milestone', label: 'Last Updated', sortable: true },
            ]}
            data={pipelineData}
          />
        </section>

        {/* Task Ownership Board */}
        <section className="mb-16">
          <SectionHeader
            title="Task Ownership Board"
            description="Critical and in-progress tasks with owners and dependencies"
          />
          <OwnershipTable
            columns={[
              { key: 'task', label: 'Task', sortable: true },
              { key: 'pipeline', label: 'Pipeline', sortable: true },
              { key: 'owner', label: 'Task Owner', sortable: true },
              { key: 'contributors', label: 'Contributors', sortable: false },
              { key: 'deadline', label: 'Deadline', sortable: true },
              { key: 'status', label: 'Status', sortable: false },
              { key: 'dependency', label: 'Has Dependency', sortable: false },
              { key: 'notes', label: 'Notes', sortable: false },
            ]}
            data={taskData}
          />
        </section>

        {/* Student Execution Table */}
        <section className="mb-16">
          <SectionHeader
            title="Student Execution Table"
            description="Team member assignments and current focus areas"
          />
          <OwnershipTable
            columns={[
              { key: 'student', label: 'Student', sortable: true },
              { key: 'majorTeam', label: 'Major Team', sortable: true },
              { key: 'minorTeam', label: 'Minor Team', sortable: true },
              { key: 'focus', label: 'Current Focus', sortable: true },
              { key: 'role', label: 'Ownership Role', sortable: true },
              { key: 'update', label: 'Weekly Update', sortable: false },
            ]}
            data={studentData}
          />
        </section>

        {/* Instructor Panel */}
        <section>
          <SectionHeader
            title="Instructor Panel"
            description="Key metrics and alerts requiring attention"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Pipelines At Risk</h3>
              <p className="text-3xl font-bold text-amber-600 mb-2">{pipelinesAtRisk.length}</p>
              <p className="text-sm text-slate-600">
                {pipelinesAtRisk.length > 0 ? pipelinesAtRisk.map(p => p.name).join(', ') : 'All pipelines on track'}
              </p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Tasks Overdue</h3>
              <p className="text-3xl font-bold text-red-600 mb-2">{tasksOverdue}</p>
              <p className="text-sm text-slate-600">Tasks past deadline</p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Unresolved Dependencies</h3>
              <p className="text-3xl font-bold text-amber-600 mb-2">{unresolvedDeps}</p>
              <p className="text-sm text-slate-600">Tasks waiting on dependencies</p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Ownership Gaps</h3>
              <p className="text-3xl font-bold text-amber-600 mb-2">{ownershipGaps}</p>
              <p className="text-sm text-slate-600">Pipelines without assigned owners</p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Integration Bottlenecks</h3>
              <p className="text-3xl font-bold text-red-600 mb-2">{integrationBottlenecks}</p>
              <p className="text-sm text-slate-600">Critical tasks not started</p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Total Team Members</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">{teamMembers.length}</p>
              <p className="text-sm text-slate-600">Active team members</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OwnershipDashboardPage;
