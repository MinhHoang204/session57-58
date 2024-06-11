import React from 'react'
import { useState, useEffect } from 'react';
import NewStudentForm from './NewStudentForm';
import axios from 'axios';
export default function StudentList() {
    const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:3000/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleDeleteClick = (student) => {
    setSelectedStudent(student);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (selectedStudent) {
      try {
        await axios.delete(`http://localhost:3000/students/${selectedStudent.id}`);
        setStudents(students.filter((s) => s.id !== selectedStudent.id));
        setIsDeleteModalOpen(false);
        setSelectedStudent(null);
      } catch (error) {
        console.error('Error deleting student:', error);
      }
    }
  };

  const handleAddClick = () => {
    setIsAddFormOpen(true);
  };

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };
  return (
    <div>
    <h1>Quản lý sinh viên</h1>
    <button onClick={handleAddClick}>Thêm mới sinh viên</button>
    {isAddFormOpen && (
      <NewStudentForm
        onClose={() => setIsAddFormOpen(false)}
        onStudentAdded={handleAddStudent}
      />
    )}
  </div>
  )
}
