import React from 'react'
import { Toast } from 'react-bootstrap'

const ToastComponent = ({ isOpen, title, text }) => {
  return (
    <Toast show={isOpen} style={{ position: 'absolute', bottom: 30 }}>
      {title && <Toast.Header>{title}</Toast.Header>}
      <Toast.Body>{text}</Toast.Body>
    </Toast>
  )
}

export default ToastComponent
