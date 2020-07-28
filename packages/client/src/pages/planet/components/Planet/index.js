import React from 'react'
import Navbar from 'shared/components/Layout/Navbar'
import { Container, Col, Row } from 'react-bootstrap'
import ControlPanel from 'pages/planet/components/ControlPanel'
import Map from 'pages/planet/components/Map'
import MapContext from 'shared/store/map'

const styles = {
  row: {
    margin: 0
  },
  col: {
    marginLeft: 2,

    padding: 0
  },
  control: {
    backgroundColor: '#fff',
    border: '2px solid #4d4d1d',
    marginLeft: 1
  }
}

export default props => {
  return (
    <MapContext.Provider>
      <Navbar />
      <Container fluid>
        <Row style={styles.row}>
          <Col style={styles.col} md='auto'>
            <Map />
          </Col>
          <Col style={styles.control}>
            <ControlPanel />
          </Col>
        </Row>
      </Container>
    </MapContext.Provider>
  )
}
