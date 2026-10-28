//* This component receives the students currently matching the search text.
 //* It uses map to create one StudentCard for each student and gives each card a unique key.
 //* The onRemove callback is passed to each card so the parent can update the main list.
 
 

import type { Student } from "@/data/students";
import StudentCard from "@/components/StudentCard";

// props required to display a list and request student removal.
interface StudentListProps {
  students: Student[];
  onRemove: (id: number) => void;
}

// renders the matching student cards or an empty state.
const StudentList = ({ students, onRemove }: StudentListProps) => {


  // empty-state message when no students match.
  if (students.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
        No students to show. Try another search or add a student.
      </p>
    );
  }

  // student cards in a responsive grid.
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default StudentList;