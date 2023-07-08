import React from "react";
import studentsData from "@/studentBiodata.json";
import Navbar from "@/components/Navbar";

const StudentCard = ({ student }) => {
  const { id, name, age, grade, address } = student;

  return (
    <div className="border border-slate-300 p-6">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Grade: {grade}</p>
      <p>Address: {address}</p>
    </div>
  );
};

const About = () => {
  return (
    <>
      <header className="flex items-center justify-between">
        <h1 className="text-2xl capitalize">Students List</h1>
        <Navbar />
      </header>
      <div className="grid grid-cols-4 items-center justify-center mt-16 gap-6">
        {studentsData.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </>
  );
};

export default About;
