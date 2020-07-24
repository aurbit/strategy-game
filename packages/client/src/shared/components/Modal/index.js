import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const ModalComponent = ({ isOpen, toggle, title, children, keyboard = false }) => {
  return (
    <Modal centered keyboard={keyboard} isOpen={isOpen} toggle={toggle}>
      {title && <ModalHeader toggle={toggle}>{title}</ModalHeader>}
      {children}
    </Modal>
  )
}

const Body = ({ children }) => {
  return <ModalBody>{children}</ModalBody>
}

const Footer = ({ children, toggle }) => {
  if (children) {
    return <ModalFooter>{children}</ModalFooter>
  }
  return (
    <ModalFooter>
      <Button color="primary" onClick={toggle}>
        Okay
      </Button>{' '}
      <Button color="secondary" onClick={toggle}>
        Cancel
      </Button>
    </ModalFooter>
  )
}

ModalComponent.Body = Body
ModalComponent.Footer = Footer

export default ModalComponent
