import React from 'react'
import StudentsItem from './StudentsItem'
export default function StudentsTable(students) {
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
          <StudentsItem key={student.id} student={student} />
        ))}
      </tbody>
    </table>
  )
}
