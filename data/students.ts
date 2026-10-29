//* This file defines the shared Student interface and the starting student data.
 //* Each student has a unique numeric id, first and last name, grade, and average.
 //* The data includes students in every grade from 9 to 12 and at least two honour-roll averages.


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
  { id: 1, firstName: "Munachi", lastName: "Amadike", grade: 12, average: 92 },
  { id: 2, firstName: "Noah", lastName: "Stelmack", grade: 11, average: 84 },
  { id: 3, firstName: "Sebastian", lastName: "Brown", grade: 10, average: 76 },
  { id: 4, firstName: "Jason", lastName: "Derulo", grade: 9, average: 79 },
  { id: 5, firstName: "Micheal", lastName: "Jordan", grade: 12, average: 88 },
  { id: 6, firstName: "Steve", lastName: "Jobs", grade: 11, average: 71 },
  { id: 7, firstName: "Julia", lastName: "Roberts", grade: 10, average: 95 },
  { id: 8, firstName: "Hans", lastName: "Zimmermann", grade: 9, average: 67 },
];