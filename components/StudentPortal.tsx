"use client"
/* 
    StudentPortal component written by Noah Stelmack 10/28/2026. 
    This component takes the data from StudentList and displays it. 
    It owns the state for all items in the student list, as well as the search text.
    Displays all 3 sections of student data (Stats, Students, Add Student).
*/
import { useState } from "react";
import { students as startingStudents } from "@/data/students"
import type { Student } from "@/data/students";
import StudentList from "@/components/StudentList";
import SearchBox from "./SearchBox";
import AddStudentForm from "./AddStudentForm";

const StudentPortal = () => {
    const [studentList, setStudentList] = useState<Student[]>(startingStudents);
    const [query, setQuery] = useState("");
    
    const handleRemove = (id: number) => {
        setStudentList((currentStudents) => currentStudents.filter((student) => student.id !== id));
    }; 

    const handleAdd = (id: number, firstName: string, lastName: string, grade: number, average: number) => {
        const newStudent = { id, firstName, lastName, grade, average };
        setStudentList([...studentList, newStudent]);
    };

    const filteredStudents = studentList.filter((student) => {
        const fullName = `${student.firstName} ${student.lastName}`
        return fullName.toLowerCase().includes(query.toLowerCase());});

    const clearAll = () => {
        setStudentList([]);
    }  

    return (

        <div className="w-full">
            <div className="flex items-center gap-2 justify-center">
                <SearchBox query={query} onQuery={setQuery} />
                <button
                type="button"

                onClick={() => clearAll()}
                className= "rounded-lg border m-2 h-12 text-nowrap border-red-300 px-3 py-0 text-sm font-medium text-red-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition cursor-pointer"
                >Clear all</button>
            </div>

            {/* INSERT STATS PANEL HERE!!!!!!! */}

            <StudentList students={filteredStudents} onRemove={handleRemove} />
            <AddStudentForm onAdd={handleAdd}/>
        </div>

    )
};
export default StudentPortal