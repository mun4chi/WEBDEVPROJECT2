
/*
StatsPanel.tsx was created by Sebastian Brown during October 29, 2026

This component displays the stats for the school portal.
It receives the Student list through props.
It calculates the total students, honour roll students, and grade 12 students
The output is the three cards.
*/


import type { Student } from "@/data/students";

// Defines the props this component receives.

interface StatsPanelProps {
  students: Student[];
}

const StatsPanel = ({ students }: StatsPanelProps) => {
  
  // Calculates the statistics from the student list.

  const totalStudents = students.length;

  const honourRoll = students.filter((student) => student.average >= 80).length;

  const grade12Students = students.filter((student) => student.grade === 12).length;

  return (
    <div>
      <h2 className="mb-5 text-2xl font-bold">
        School Overview
      </h2>

      {/* Display the statistics in a grid col */}
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">

        <div className="rounded-xl bg-white p-6 shadow-md">
          <h3 className="text-sm text-slate-500">
            Total Students
          </h3>
          <p className="mt-2 text-3xl font-bold text-blue-900">
            {totalStudents}
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md">
          <h3 className="text-sm text-slate-500">
            Honour Roll
          </h3>
          <p className="mt-2 text-3xl font-bold text-blue-900">
            {honourRoll}
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md">
          <h3 className="text-sm text-slate-500">
            Grade 12 Students
          </h3>
          <p className="mt-2 text-3xl font-bold text-blue-900">
            {grade12Students}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;
