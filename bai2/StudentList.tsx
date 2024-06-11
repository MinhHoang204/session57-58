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
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };
  return (
    <div>
      <h1>StudentList</h1>
    </div>
  )
}
