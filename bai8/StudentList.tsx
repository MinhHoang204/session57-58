import React from 'react'
import axios from 'axios';
import StudentTable from './StudentTable';
import DeleteModal from './DeleteModal';
import { useState, useEffect } from 'react';
export default function StudentList() {
    const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);

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

  const handleDeleteClick = (studentId) => {
    setStudentToDelete(studentId);
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
    setStudentToDelete(null);
  };

  const handleConfirm = async () => {
    try {
      await axios.delete(`http://localhost:3000/students/${studentToDelete}`);
      setStudents(students.filter(student => student.id !== studentToDelete));
      setShowModal(false);
      setStudentToDelete(null);
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div>
      <h1>Quản lý sinh viên</h1>
      <button>Thêm mới sinh viên</button>
      <StudentTable students={students} onDeleteClick={handleDeleteClick} />
      <DeleteModal 
        show={showModal} 
        studentId={studentToDelete} 
        onCancel={handleCancel} 
        onConfirm={handleConfirm} 
      />
    </div>
  )
}
