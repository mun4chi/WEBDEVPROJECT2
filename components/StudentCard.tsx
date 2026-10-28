//* This component displays one student's full name and grade.
 //* It receives a Student object and a removal callback through typed props.
 //* Local state controls only this card's Show details and Hide details behavior.
 


"use client";

import { useState } from "react";
import type { Student } from "@/data/students";

// Props passed down from StudentList.
interface StudentCardProps {
  student: Student;
  onRemove: (id: number) => void;
}

// displays one student card and its optional details.
const StudentCard = ({ student, onRemove }: StudentCardProps) => {
  
  const [showDetails, setShowDetails] = useState(false);
  const isHonourRoll = student.average >= 80;

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      {/* Student summary */}
      <h3 className="text-lg font-semibold text-slate-900">
        {student.firstName} {student.lastName}
      </h3>
      <p className="mt-1 text-sm text-slate-600">Grade {student.grade}</p>

      
      {showDetails && (
        <div className="mt-4 border-t border-slate-200 pt-3">
          <p className="text-sm text-slate-700">
            Average: <span className="font-semibold">{student.average}%</span>
          </p>
          {isHonourRoll && (
            <span className="mt-2 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
              Honour Roll
            </span>
          )}
        </div>
      )}

      
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setShowDetails(!showDetails)}
          className="rounded-lg bg-blue-700 px-3 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {showDetails ? "Hide details" : "Show details"}
        </button>
        <button
          type="button"
          onClick={() => onRemove(student.id)}
          className="rounded-lg border border-red-300 px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Remove
        </button>
      </div>
    </article>
  );
};

export default StudentCard;