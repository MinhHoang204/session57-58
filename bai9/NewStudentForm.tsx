import React from 'react'
import { useState } from 'react';
import axios from 'axios';
export default function NewStudentForm(onClose, onStudentAdded) {
    const [student, setStudent] = useState({
        student_name: '',
        email: '',
        address: '',
        phone: '',
        status: true,
        created_at: new Date(),
      });
      const [errors, setErrors] = useState({});
    
      const validate = () => {
        const newErrors = {};
        if (!student.student_name) newErrors.student_name = 'Tên sinh viên không được để trống';
        if (!student.email) {
          newErrors.email = 'Email không được để trống';
        } else if (!/\S+@\S+\.\S+/.test(student.email)) {
          newErrors.email = 'Email không đúng định dạng';
        }
        if (!student.phone) {
          newErrors.phone = 'Số điện thoại không được để trống';
        } else if (!/^\d+$/.test(student.phone)) {
          newErrors.phone = 'Số điện thoại chỉ được phép nhập số';
        }
        return newErrors;
      };
    
      const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }
    
        try {
          const response = await axios.post('http://localhost:3000/students', student);
          onStudentAdded(response.data);
          onClose();
        } catch (error) {
          console.error('Error adding student:', error);
        }
      };
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Thêm mới sinh viên</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Tên sinh viên</label>
            <input
              type="text"
              name="student_name"
              value={student.student_name}
              onChange={handleChange}
            />
            {errors.student_name && <p className="error">{errors.student_name}</p>}
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={student.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <label>Địa chỉ</label>
            <input
              type="text"
              name="address"
              value={student.address}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Số điện thoại</label>
            <input
              type="text"
              name="phone"
              value={student.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
          <div>
            <button type="button" onClick={onClose}>Hủy</button>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  )
}
