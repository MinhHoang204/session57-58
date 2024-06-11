import React from 'react'

export default function StudentItem(student, onDeleteClick) {
  return (
    <tr>
    <td>
      <input type="checkbox" />
    </td>
    <td>{student.student_name}</td>
    <td>{student.email}</td>
    <td>{student.address}</td>
    <td>{student.phone}</td>
    <td>
      <button>Edit</button>
      <button onClick={() => onDeleteClick(student.id)}>Delete</button>
    </td>
  </tr>
  )
}
