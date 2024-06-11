import React from 'react'

export default function DeleteModal( show, studentId, onCancel, onConfirm ) {
    if (!show) {
        return null;
    }
    
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Xóa nhân viên</h2>
        <p>Bạn chắc chắn muốn xóa sinh viên <strong>{studentId}</strong>?</p>
        <button onClick={onCancel}>Hủy</button>
        <button onClick={onConfirm}>Xóa</button>
      </div>
    </div>
  )
}
