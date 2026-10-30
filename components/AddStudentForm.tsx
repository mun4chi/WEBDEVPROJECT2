"use client";
import { useState } from "react";

/* 
    AddStudentForm component written by Noah Stelmack 10/28/2026. 
    This component is responsible for displaying an input form to the user and taking values to create a student object out of them.
    As per the assignment document, input validation is not implemented using zod, or any other method, and therefor is limited. 
    This component does not create student data itself. 
    It passes the data via callback to the StudentPortal component.
*/

interface AddStudentFormProps {
    onAdd: (firstName: string, lastName: string, grade: number, average: number) => void;
};

const AddStudentForm = ({ onAdd }: AddStudentFormProps) => {
    
    //States:
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [grade, setGrade] = useState(9);
    const [average, setAverage] = useState(70);

    //Handlers:
    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };
    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };
    
    const handleGradeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGrade(Number(event.target.value));
    };

    const handleAverageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAverage(Number(event.target.value))
    }



    const handleClick = () => {
        if (firstName === "" || lastName === "") { return }

        onAdd(firstName, lastName, grade, average);

        setFirstName("");
        setLastName("");
        setGrade(9);
        setAverage(70);
    }

    
    return (
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 mt-5">
            <div className="mb-2">
                <h2 className="text-slate-900 text-2xl font-bold mb-1">Add a Student:</h2>
                <p className="text-slate-500">Enter the student&apos;s details below:</p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            
        {/* First Name */}
        <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder="Student's First Name"
            className="w-full rounded-lg border border-slate-300 px-4 py-2
            text-slate-900 focus:border-blue-500 focus:outline-none"
        />
        {/* Last Name */}
        <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            placeholder="Student's Last Name"
            className="rounded-lg border border-slate-300 px-4 py-2
            text-slate-900 focus:border-blue-500 focus:outline-none"
        />
        {/* Grade */}
        <input
            type="text"
            value={grade}
            onChange={handleGradeChange}
            className="rounded-lg border border-slate-300 px-4 py-2
            text-slate-900 focus:border-blue-500 focus:outline-none"
        />
        {/* Average */}
        <input
            type="text"
            value={average}
            onChange={handleAverageChange}
            className="rounded-lg border border-slate-300 px-4 py-2
            text-slate-900 focus:border-blue-500 focus:outline-none"
        />

            
        <button
            onClick={handleClick}
            className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white
            hover:bg-blue-700 transition cursor-pointer"
        >Add Student
        </button>
        </div>
    </article>
    );
};
export default AddStudentForm