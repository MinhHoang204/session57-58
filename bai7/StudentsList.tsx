import React from 'react'
import StudentsTable from './StudentsTable';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function StudentsList(students) {
    const StudentList = () => {
        const [students, setStudents] = useState([]);
      
        useEffect(() => {
          const getAllStudents = async () => {
            try {
              const response = await axios.get('http://localhost:3000/students');
              setStudents(response.data);
            } catch (error) {
              console.error('Error fetching students:', error);
            }
          };
      
          getAllStudents();
        }, []);
    }    
  return (
    <div>
      <h1>Quản lý sinh viên</h1>
      <button>Thêm mới sinh viên</button>
      <StudentsTable students={students} />
    </div>
  )
}
