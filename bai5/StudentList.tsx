import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
export default function StudentList() {
  useEffect(() => {
    getAllStudent();
  }, []);

  const getAllStudent = async () => {
    try {
      const response = await axios.get('http://localhost:3000/students');
      console.log('All students:', response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const getStudentById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/students/${id}`);
      if (response.data) {
        console.log('Student found:', response.data);
      } else {
        console.log('Không tìm thấy bản ghi');
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log('Không tìm thấy bản ghi');
      } else {
        console.error('Error fetching student:', error);
      }
    }
  };

  const removeById = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/students/${id}`);
      console.log('Student removed:', response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log('Không tìm thấy bản ghi');
      } else {
        console.error('Error removing student:', error);
      }
    }
  };

  const createStudent = async () => {
    const newStudent = {
      id: 6,  
      student_name: 'Nguyen Van A',
      email: 'nguyenvana@example.com',
      address: '123 Nguyen Trai, Hanoi',
      phone: '0123456789',
      status: true,
      created_at: new Date().toISOString()
    };

    try {
      const response = await axios.post('http://localhost:3000/students', newStudent);
      console.log('Student created:', response.data);
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };
  return (
    <div>
      <h1>Student List</h1>
      <button onClick={createStudent}>Create Student</button>
    </div>
  )
}
