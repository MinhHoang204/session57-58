import React from 'react'

export default function StudentsItem(student) {
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
        <button>Delete</button>
      </td>
    </tr>
  )
}
