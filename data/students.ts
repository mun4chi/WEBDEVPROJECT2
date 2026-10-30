// StudentList.tsx was created by Munachi Amadike on 2026-10-28
// This file defines the shared Student interface and the starting student data.
// Each student has a unique numeric id, first and last name, grade, and average.
// The data includes students in every grade from 9 to 12 and at least two honour-roll averages.
// This data is used for the main student portal page


// information for each student.
export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  grade: number;
  average: number;
}

// starting data for the student portal.
export const students: Student[] = [
  { id: 1, firstName: "Munachi", lastName: "Amadike", grade: 10, average: 24 },
  { id: 2, firstName: "Noah", lastName: "Stelmack", grade: 11, average: 84 },
  { id: 3, firstName: "Sebastian", lastName: "Brown", grade: 12, average: 100 },
  { id: 4, firstName: "Liam", lastName: "Patel", grade: 9, average: 79 },
  { id: 5, firstName: "Mia", lastName: "Wilson", grade: 12, average: 88 },
  { id: 6, firstName: "Ethan", lastName: "Brown", grade: 11, average: 96 },
  { id: 7, firstName: "Sophia", lastName: "Garcia", grade: 10, average: 95 },
  { id: 8, firstName: "Lucas", lastName: "Thompson", grade: 9, average: 67 },
];
