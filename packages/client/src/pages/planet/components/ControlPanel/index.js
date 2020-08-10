import React from 'react'
import { useSelector } from 'react-redux'
import { Col, Row, Button, Container } from 'react-bootstrap'
import { selectActiveTile } from 'shared/store/map/selectors'
import PlayerAvatar from 'shared/components/PlayerAvatar'
import SendAurToAvatar from 'shared/components/SendAurToAvatar'

export default ({
  mapReady,
  handleBuyTileClick,
  handleCreateNewPlayer,
  handleGetPlayersClick,
  handleGetTilesClick,
  handleIsPlayingClick,
  handleAerialAttack,
  avatar
}) => {
  const activeTile = useSelector(selectActiveTile)
  const [activeMenu, setActiveMenu] = React.useState(0)

  return mapReady ? (
    <Container
      fluid
      className='col-sm-12 d-none d-sm-flex flex-column'
      style={styles.container}
    >
      <Row className='flex-grow-2' style={styles.menu}>
        <Button
          className={activeMenu === 0 ? 'btn btn-dark' : 'btn btn-light'}
          style={styles.menuButton}
          onClick={() => setActiveMenu(0)}
        >
          <b>INFO</b>
        </Button>
        <Button
          className={activeMenu === 1 ? 'btn btn-dark' : 'btn btn-light'}
          style={styles.menuButton}
          onClick={() => setActiveMenu(1)}
        >
          <b>CONTROLS</b>
        </Button>
      </Row>
      <Row className='flex-grow-1' style={styles.info}>
        {activeMenu === 0 ? (
          <Col>
            {activeTile ? (
              <Col>
                <Row>Tile Number: {activeTile}</Row>
                <Row>
                  <Button onClick={handleBuyTileClick}>BUY {activeTile}</Button>
                </Row>
              </Col>
            ) : (
              <ShowPlayerInfo
                dna={avatar.dna}
                name={avatar.name}
                id={avatar.id}
              />
            )}
          </Col>
        ) : (
          <Row>
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
              <Row className='m-3'>
                <Button onClick={handleBuyTileClick}>BUY {activeTile}</Button>
              </Row>
              <hr />
              <Row className='m-3'>
                <input
                  style={{ padding: 5 }}
                  id='tile-to-aerial-attack'
                  placeholder='Tile Number to Attack'
                />
              </Row>
              <Row className='m-3'>
                <input
                  style={{ padding: 5 }}
                  id='aerial-attack-amount'
                  placeholder='AUR Amount'
                />
              </Row>
              <Row className='m-3'>
                <Button
                  onClick={ev =>
                    handleAerialAttack(
                      document.getElementById('tile-to-aerial-attack'),
                      document.getElementById('aerial-attack-amount')
                    )
                  }
                  type='submit'
                >
                  Aerial Attack
                </Button>
              </Row>
              <Row>
                <SendAurToAvatar />
              </Row>
            </Col>
          </Row>
        )}
      </Row>
      <Row className='flex-grow-1' style={styles.messages}>
        TEXTILE CHAT
      </Row>
    </Container>
  ) : null
}

const ShowPlayerInfo = ({ dna, name, id }) => {
  return (
    <>
      <PlayerAvatar dna={dna} name={name} id={id} />
    </>
  )
}

const styles = {
  container: {
    border: '1px solid gray',
    backgroundColor: '#e1e1e9',
    // paddignBottom: 30,
    height: '100%'
  },
  menu: {
    height: 50,
    textAlign: 'center'
  },
  menuButton: {
    borderRadius: 0,
    margin: 10
  },
  info: {
    paddingTop: 20
  },
  messages: {
    border: '1px solid gray',
    padding: 20
  }
}
