import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
export default function StudentList() {
    useEffect(() => {
        getAllStudent();
        getStudentById(1); // Thay số 1 bằng id mà bạn muốn kiểm tra
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
    
  return (
    <div>StudentList</div>
  )
}
