import React from 'react'
import { useSelector } from 'react-redux'
import { Col, Row, Button } from 'react-bootstrap'
import { selectActiveTile } from 'shared/store/map/selectors'

export default ({
  mapReady,
  handleBuyTileClick,
  handleCreateNewPlayer,
  handleGetPlayersClick,
  handleGetTilesClick,
  handleIsPlayingClick
}) => {
  const activeTile = useSelector(selectActiveTile)
  const [activeMenu, setActiveMenu] = React.useState(0)

  return mapReady ? (
    <Col
      className='col-sm-12 d-none d-sm-flex flex-column'
      style={styles.container}
    >
      <Row className='flex-grow-2' style={styles.menu}>
        <Col
          className={activeMenu === 0 ? 'btn btn-dark' : 'btn btn-light'}
          style={styles.menuButton}
          onClick={() => setActiveMenu(0)}
        >
          <b>MAP</b>
        </Col>
        <Col
          className={activeMenu === 1 ? 'btn btn-dark' : 'btn btn-light'}
          style={styles.menuButton}
          onClick={() => setActiveMenu(1)}
        >
          <b>AURA</b>
        </Col>
      </Row>
      <Row className='flex-grow-1' style={styles.info}>
        {activeMenu === 0 ? (
          <div style={styles.info}>
            {activeTile ? (
              <Col>
                <Row>Tile Number: {activeTile}</Row>
                <Row>
                  <button onClick={handleBuyTileClick}>BUY {activeTile}</button>
                </Row>
              </Col>
            ) : (
              <Col>No Tile Selected</Col>
            )}
          </div>
        ) : (
          <Col style={styles.info}>
            <Row className='m-3'>
              <Button onClick={handleCreateNewPlayer}>Join Game</Button>
            </Row>
            <Row className='m-3'>
              <Button onClick={handleGetPlayersClick}>Get Players</Button>
            </Row>
            <Row className='m-3'>
              <Button onClick={handleGetTilesClick}>Get Tiles</Button>
            </Row>
            <Row className='m-3'>
              <Button onClick={handleIsPlayingClick}>Is Playing?</Button>
            </Row>
          </Col>
        )}
      </Row>
      <Row className='flex-grow-1' style={styles.messages}>
        CHAT BOX
      </Row>
    </Col>
  ) : null
}

const styles = {
  container: {
    border: '1px solid gray',
    backgroundColor: '#e1e1e9',
    height: '100%',
    flex: 'flex-column'
  },
  menu: {
    height: 50,
    textAlign: 'center'
  },
  menuButton: {
    borderRight: '1px solid gray',
    borderRadius: 0
  },
  info: {
    paddingTop: '5px'
  },
  messages: {
    border: '1px solid gray'
  }
}
