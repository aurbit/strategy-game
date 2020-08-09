import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { ACTIONS as PLANET_ACTIONS } from 'shared/store/planet'
import { ACTIONS as MAP_ACTIONS } from 'shared/store/map'

import ControlPanel from 'pages/planet/components/ControlPanel'
import Map from 'pages/planet/components/Map'
import { selectActiveTile } from 'shared/store/map/selectors'
import { selectAvatar } from 'shared/store/avatar/selectors'

export default props => {
  const [mapReady, setMapReady] = React.useState(false)
  const [hoverTile, setHoverTile] = React.useState(0)
  const activeTile = useSelector(selectActiveTile)
  const avatar = useSelector(selectAvatar)
  const dispatch = useDispatch()

  // get the tile price
  React.useEffect(() => {
    dispatch(PLANET_ACTIONS.getTileFeeRequest())
  }, [dispatch])

  React.useEffect(() => {
    dispatch(PLANET_ACTIONS.getTilesRequest())
  }, [dispatch])

  React.useEffect(() => {
    dispatch(MAP_ACTIONS.getMap('EARTH'))
  }, [dispatch])

  React.useEffect(() => {
    dispatch(PLANET_ACTIONS.getPlayersRequest())
  }, [dispatch])

  const handleIsPlayingRequest = id => {
    dispatch(PLANET_ACTIONS.getIsPlayingRequest(id))
  }
  const handleCreateNewPlayer = () => {
    dispatch(PLANET_ACTIONS.callNewPlayerRequest(avatar))
  }

  const handleBuyTileClick = () => {
    dispatch(PLANET_ACTIONS.callBuyTileRequest(activeTile))
  }

  const handleGetPlayersClick = () => {
    dispatch(PLANET_ACTIONS.getPlayersRequest())
  }

  const handleGetTilesClick = () => {
    dispatch(PLANET_ACTIONS.getTilesRequest())
  }

  const handleAerialAttack = (tile, amount) => {
    dispatch(PLANET_ACTIONS.aerialAttackRequest({ tile, amount }))
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
            activeTile={activeTile}
          />
        </Col>
        <Col style={styles.control}>
          {avatar ? (
            <ControlPanel
              mapReady={mapReady}
              hoverTile={hoverTile}
              handleBuyTileClick={handleBuyTileClick}
              handleCreateNewPlayer={handleCreateNewPlayer}
              handleGetPlayersClick={handleGetPlayersClick}
              handleGetTilesClick={handleGetTilesClick}
              handleIsPlayingRequest={handleIsPlayingRequest}
              handleAerialAttack={handleAerialAttack}
              avatar={avatar}
            />
          ) : null}
        </Col>
        )
      </Row>
    </Container>
  )
}

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
