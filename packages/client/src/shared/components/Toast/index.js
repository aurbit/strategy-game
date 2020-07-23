import React from 'react'
import { Toast, ToastBody, ToastHeader } from 'reactstrap'

const ToastComponent = ({ isOpen, title, text }) => {
  return (
    <Toast isOpen={isOpen} style={{ position: 'absolute', bottom: 30 }}>
      {title && <ToastHeader>{title}</ToastHeader>}
      <ToastBody>{text}</ToastBody>
    </Toast>
  )
}

export default ToastComponent
