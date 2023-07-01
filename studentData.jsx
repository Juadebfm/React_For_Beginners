import React from 'react';
import studentsData from './students.json';

const StudentCard = ({ student }) => {
  const { id, name, age, grade, address } = student;

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Grade: {grade}</p>
      <p>Address: {address}</p>
    </div>
  );
};

const StudentList = () => {
  return (
    <div className="student-list">
      {studentsData.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentList;
