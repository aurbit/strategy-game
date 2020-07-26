import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

export default props => {
  const requestConnect = () =>
    window.ethereum.request({ method: 'eth_requestAccounts' })

  return (
    <Row onClick={requestConnect}>
      <Col>
        <Image width={70} height={50} src='images/metamask-logo.png' />
      </Col>
      <Col></Col>
    </Row>
  )
}
