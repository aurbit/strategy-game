import React from 'react'
import { Col, Row } from 'react-bootstrap'

import WalletContext from 'shared/store/wallet'
import PlanetContext from 'shared/store/planet'

const styles = {
  container: {
    backgroundColor: '#e1e1e9',
    height: '100%'
  }
}
export default ({ mapReady }) => {
  const { address } = WalletContext.useState()
  const { planetName } = PlanetContext.useState()

  return mapReady ? (
    <Row style={styles.container}>
      <Col>
        <Row>Planet: {planetName}</Row>
        <Row>Wallet Address: {address}</Row>
      </Col>
    </Row>
  ) : null
}
