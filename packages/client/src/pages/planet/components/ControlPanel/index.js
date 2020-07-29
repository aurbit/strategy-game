import React from 'react'
import { Col, Row } from 'react-bootstrap'

import { usePlanet, useWallet } from 'shared/services/Aurbit'

const styles = {
  container: {
    backgroundColor: '#e1e1e9',
    height: '100%'
  }
}
export default ({ mapReady }) => {
  const { planetName } = usePlanet()
  const { selectedAddress } = useWallet()

  return mapReady ? (
    <Row style={styles.container}>
      <Col>
        <Row>Planet: {planetName}</Row>
        <Row>Wallet Address: {selectedAddress}</Row>
      </Col>
    </Row>
  ) : null
}
