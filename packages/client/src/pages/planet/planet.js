import React, { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { ACTIONS, TYPES } from 'shared/store/planet'
import ControlPanel from 'pages/planet/components/ControlPanel'
import Map from 'pages/planet/components/Map'

const styles = {
  row: {
    margin: 0
  },
  col: {
    marginLeft: 2,

    padding: 0
  },
  control: {
    padding: 1
  }
}

export default props => {
  const [mapReady, setMapReady] = useState(false)
  const [hoverTile, setHoverTile] = useState(0)

  const dispatch = useDispatch()

  // get the tile price
  React.useEffect(() => {
    dispatch(ACTIONS.getTileFeeRequest())
  }, [])

  const handleBuyTileClick = () => {
    // get Buy the Tile
  }
  return (
    <Container fluid style={{ backgroundColor: 'black' }}>
      <Row style={styles.row}>
        <Col style={styles.col} md={window.innerWidth <= 1000 ? 12 : 'auto'}>
          <Map
            mapReady={mapReady}
            setMapReady={setMapReady}
            hoverTile={hoverTile}
            setHoverTile={setHoverTile}
          />
        </Col>
        <Col style={styles.control}>
          <ControlPanel mapReady={mapReady} hoverTile={hoverTile} />
        </Col>
      </Row>
    </Container>
  )
}
