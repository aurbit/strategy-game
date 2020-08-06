import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { ACTIONS as PLANET_ACTIONS, TYPES } from 'shared/store/planet'
import ControlPanel from 'pages/planet/components/ControlPanel'
import Map from 'pages/planet/components/Map'
import { selectActiveTile } from 'shared/store/map/selectors'

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
  const [mapReady, setMapReady] = React.useState(false)
  const [hoverTile, setHoverTile] = React.useState(0)
  const activeTile = useSelector(selectActiveTile)
  const dispatch = useDispatch()

  // get the tile price
  React.useEffect(() => {
    dispatch(PLANET_ACTIONS.getTileFeeRequest())
  }, [])

  const handleBuyTileClick = () => {
    // get Buy the Tile
    dispatch(PLANET_ACTIONS.callBuyTileRequest(activeTile))
  }
  return (
    <Container fluid style={{ backgroundColor: 'black' }}>
      <Row style={styles.row}>
        <Col style={styles.col} md={window.innerWidth <= 1000 ? 12 : 'auto'}>
          <Map
            setMapReady={setMapReady}
            hoverTile={hoverTile}
            setHoverTile={setHoverTile}
            activeTile={activeTile}
          />
        </Col>
        <Col style={styles.control}>
          {mapReady ? (
            <ControlPanel
              mapReady={mapReady}
              hoverTile={hoverTile}
              handleBuyTileClick={handleBuyTileClick}
            />
          ) : null}
        </Col>
      </Row>
    </Container>
  )
}
