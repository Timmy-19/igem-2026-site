import React, { useMemo, useState } from 'react';
import {
  PageHeader,
  SectionHeader,
  StudentTable,
} from '../components';
import { teamMembers } from '../data/teams';

interface Student {
  id: string;
  name: string;
  majorTeam: string;
  minorTeam?: string;
  primaryArea: string;
  currentFocus: string;
}

const TeamStructurePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Convert team members to student format
  const students: Student[] = useMemo(() => {
    return teamMembers.map((member) => {
      const majorTrack = member.tracks.find(t => t.affiliationType === 'Major');
      const minorTrack = member.tracks.find(t => t.affiliationType === 'Minor');

      const trackToLabel = (track: string): string => {
        switch (track) {
          case 'WETLAB':
            return 'Wetlab';
          case 'DRYLAB':
            return 'Drylab';
          case 'HP':
            return 'Human Practice';
          default:
            return track;
        }
      };

      const primaryArea = majorTrack ? trackToLabel(majorTrack.track) : 'N/A';
      const minorArea = minorTrack ? trackToLabel(minorTrack.track) : undefined;

      // Determine current focus based on execution groups/tracks
      let currentFocus = '';
      if (member.executionGroups && member.executionGroups.length > 0) {
        currentFocus = member.executionGroups.join(', ');
      } else if (member.dryLabTracks && member.dryLabTracks.length > 0) {
        currentFocus = member.dryLabTracks.slice(0, 2).join(', ');
      } else {
        currentFocus = 'Team coordination';
      }

      return {
        id: member.id,
        name: member.name,
        majorTeam: primaryArea,
        minorTeam: minorArea,
        primaryArea,
        currentFocus,
      };
    });
  }, []);

  // Filter students by search
  const filteredStudents = useMemo(() => {
    if (!searchQuery.trim()) {
      return students;
    }
    const query = searchQuery.toLowerCase();
    return students.filter(
      (student) =>
        student.name.toLowerCase().includes(query) ||
        student.majorTeam.toLowerCase().includes(query) ||
        (student.minorTeam && student.minorTeam.toLowerCase().includes(query))
    );
  }, [students, searchQuery]);

  // Calculate team statistics
  const wetlabMajor = teamMembers.filter(m =>
    m.tracks.some(t => t.track === 'WETLAB' && t.affiliationType === 'Major')
  ).length;
  const wetlabMinor = teamMembers.filter(m =>
    m.tracks.some(t => t.track === 'WETLAB' && t.affiliationType === 'Minor')
  ).length;

  const drylabMajor = teamMembers.filter(m =>
    m.tracks.some(t => t.track === 'DRYLAB' && t.affiliationType === 'Major')
  ).length;
  const drylabMinor = teamMembers.filter(m =>
    m.tracks.some(t => t.track === 'DRYLAB' && t.affiliationType === 'Minor')
  ).length;

  const hpMajor = teamMembers.filter(m =>
    m.tracks.some(t => t.track === 'HP' && t.affiliationType === 'Major')
  ).length;
  const hpMinor = teamMembers.filter(m =>
    m.tracks.some(t => t.track === 'HP' && t.affiliationType === 'Minor')
  ).length;

  return (
    <div>
      <PageHeader
        title="Team Structure"
        subtitle="Organization and student assignments"
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Overview Section */}
        <section className="mb-16">
          <SectionHeader
            title="How We're Organized"
            description="Our project uses both a major / minor team structure and a pipeline-based execution structure. Students build depth through their major team, contribute across boundaries through their minor team, and take responsibility through ownership of specific project pipelines and tasks. Some ownership roles are already confirmed, while others are still being assigned as project plans become more defined."
          />
        </section>

        {/* Team Organization Cards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Organizational Teams</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Wetlab Card */}
            <div className="bg-white rounded-lg border border-blue-200 shadow-sm hover:shadow-md transition-shadow p-8">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-4 h-4 rounded-full bg-blue-500" />
                  <h3 className="text-2xl font-bold text-slate-900">Wetlab</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Experimental biology and strain development
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-xs font-medium text-slate-500 mb-2">Major Members</p>
                  <p className="text-2xl font-bold text-blue-600">{wetlabMajor}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {teamMembers
                      .filter(m =>
                        m.tracks.some(
                          t => t.track === 'WETLAB' && t.affiliationType === 'Major'
                        )
                      )
                      .map((member) => (
                        <span
                          key={member.id}
                          className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium"
                        >
                          {member.name}
                        </span>
                      ))}
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-4">
                  <p className="text-xs font-medium text-slate-500 mb-2">Minor Contributors</p>
                  <p className="text-xl font-bold text-blue-600 mb-3">{wetlabMinor}</p>
                  <div className="flex flex-wrap gap-2">
                    {teamMembers
                      .filter(m =>
                        m.tracks.some(
                          t => t.track === 'WETLAB' && t.affiliationType === 'Minor'
                        )
                      )
                      .map((member) => (
                        <span
                          key={member.id}
                          className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
                        >
                          {member.name}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Drylab Card */}
            <div className="bg-white rounded-lg border border-emerald-200 shadow-sm hover:shadow-md transition-shadow p-8">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-4 h-4 rounded-full bg-emerald-500" />
                  <h3 className="text-2xl font-bold text-slate-900">Drylab</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Computational modeling and hardware design
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-xs font-medium text-slate-500 mb-2">Major Members</p>
                  <p className="text-2xl font-bold text-emerald-600">{drylabMajor}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {teamMembers
                      .filter(m =>
                        m.tracks.some(
                          t => t.track === 'DRYLAB' && t.affiliationType === 'Major'
                        )
                      )
                      .map((member) => (
                        <span
                          key={member.id}
                          className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full font-medium"
                        >
                          {member.name}
                        </span>
                      ))}
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-4">
                  <p className="text-xs font-medium text-slate-500 mb-2">Minor Contributors</p>
                  <p className="text-xl font-bold text-emerald-600 mb-3">{drylabMinor}</p>
                  <div className="flex flex-wrap gap-2">
                    {teamMembers
                      .filter(m =>
                        m.tracks.some(
                          t => t.track === 'DRYLAB' && t.affiliationType === 'Minor'
                        )
                      )
                      .map((member) => (
                        <span
                          key={member.id}
                          className="inline-block px-3 py-1 bg-emerald-100 text-emerald-600 text-xs rounded-full"
                        >
                          {member.name}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            {/* HP Card */}
            <div className="bg-white rounded-lg border border-amber-200 shadow-sm hover:shadow-md transition-shadow p-8">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-4 h-4 rounded-full bg-amber-500" />
                  <h3 className="text-2xl font-bold text-slate-900">Human Practice</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Stakeholder engagement and broader context
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-xs font-medium text-slate-500 mb-2">Major Members</p>
                  <p className="text-2xl font-bold text-amber-600">{hpMajor}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {teamMembers
                      .filter(m =>
                        m.tracks.some(t => t.track === 'HP' && t.affiliationType === 'Major')
                      )
                      .map((member) => (
                        <span
                          key={member.id}
                          className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-xs rounded-full font-medium"
                        >
                          {member.name}
                        </span>
                      ))}
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-4">
                  <p className="text-xs font-medium text-slate-500 mb-2">Minor Contributors</p>
                  <p className="text-xl font-bold text-amber-600 mb-3">{hpMinor}</p>
                  <div className="flex flex-wrap gap-2">
                    {teamMembers
                      .filter(m =>
                        m.tracks.some(t => t.track === 'HP' && t.affiliationType === 'Minor')
                      )
                      .map((member) => (
                        <span
                          key={member.id}
                          className="inline-block px-3 py-1 bg-amber-100 text-amber-600 text-xs rounded-full"
                        >
                          {member.name}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Student Directory */}
        <section>
          <SectionHeader
            title="Student Directory"
            description="Searchable directory of all team members and their affiliations"
          />

          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by name, team, or focus area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <StudentTable students={filteredStudents} />
        </section>
      </div>
    </div>
  );
};

export default TeamStructurePage;
