import React from 'react'
import { useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import { selectAddress } from 'shared/store/wallet'
import { selectCurrentPlanet } from 'shared/store/planet'

const styles = {
  container: {
    backgroundColor: '#e1e1e9',
    height: '100%'
  }
}
export default ({ mapReady }) => {
  const address = useSelector(selectAddress)
  const planetName = useSelector(selectCurrentPlanet)

  return mapReady ? (
    <Row style={styles.container}>
      <Col>
        <Row>Planet: {planetName}</Row>
        <Row>Wallet Address: {address}</Row>
      </Col>
    </Row>
  ) : null
}
