import React from 'react';
import OwnershipTable from './OwnershipTable';

interface Student {
  id: string;
  name: string;
  majorTeam: string;
  minorTeam?: string;
  primaryArea: string;
  currentFocus: string;
}

interface StudentTableProps {
  students: Student[];
}

const StudentTable: React.FC<StudentTableProps> = ({ students }) => {
  const columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'majorTeam', label: 'Major Team', sortable: true },
    { key: 'minorTeam', label: 'Minor Team', sortable: false },
    { key: 'primaryArea', label: 'Primary Area', sortable: true },
    { key: 'currentFocus', label: 'Current Focus', sortable: false },
  ];

  const data = students.map((student) => ({
    name: student.name,
    majorTeam: (
      <span className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium">
        {student.majorTeam}
      </span>
    ),
    minorTeam: student.minorTeam ? (
      <span className="inline-block px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full">
        {student.minorTeam}
      </span>
    ) : (
      <span className="text-slate-400">—</span>
    ),
    primaryArea: student.primaryArea,
    currentFocus: student.currentFocus,
  }));

  return (
    <OwnershipTable
      columns={columns}
      data={data}
    />
  );
};

export default StudentTable;
