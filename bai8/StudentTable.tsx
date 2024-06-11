import React from 'react'
import StudentItem from './StudentItem'
export default function StudentTable(students) {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Tên sinh viên</th>
          <th>Email</th>
          <th>Địa chỉ</th>
          <th>Số điện thoại</th>
          <th>Lựa chọn</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <StudentItem key={student.id} student={student} onDeleteClick={onDeleteClick} />
        ))}
      </tbody>
    </table>
  )
}
