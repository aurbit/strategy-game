import React from 'react'
import { useSelector } from 'react-redux'
import { Col, Row, Button, Spinner, Container } from 'react-bootstrap'
import { selectActiveTile } from 'shared/store/map/selectors'
import { selectAurBalance } from 'shared/store/planet/selectors'
import PlayerAvatar from 'shared/components/PlayerAvatar'
import SendAurToAvatar from 'shared/components/SendAurToAvatar'
import ShowTile from './ShowTile'

export default ({
  mapReady,
  handleBuyTileClick,
  handleCreateNewPlayer,
  handleGetPlayersClick,
  handleGetTilesClick,
  handleIsPlayingClick,
  handleAerialAttack,
  handleAllocateTokensClick,
  handleDeallocateTokensClick,
  avatar
}) => {
  const activeTile = useSelector(selectActiveTile)
  const aurBalance = useSelector(selectAurBalance)
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
          onClick={() => {
            setActiveMenu(0)
          }}
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
              <ShowTile activeTile={activeTile} />
            ) : avatar ? (
              <Col>
                <Row>
                  <ShowPlayerInfo
                    dna={avatar.dna}
                    name={avatar.name}
                    id={avatar.id}
                  />
                </Row>
                <Row>
                  <b>Available: </b>
                  {aurBalance ? aurBalance : <Spinner />} AUR
                </Row>
              </Col>
            ) : (
              <Spinner animation='grow' />
            )}
          </Col>
        ) : (
          <Row>
            <Col style={styles.info}>
              <Row className='m-3'>
                <Button onClick={handleCreateNewPlayer}>Join Game</Button>
              </Row>
              {/* <Row className='m-3'>
                <Button onClick={handleGetPlayersClick}>Get Players</Button>
              </Row>
              <Row className='m-3'>
                <Button onClick={handleGetTilesClick}>Get Tiles</Button>
              </Row>
              <Row className='m-3'>
                <Button onClick={handleIsPlayingClick}>Is Playing?</Button>
              </Row> */}
              <Row className='m-3'>
                <Button onClick={handleBuyTileClick}>BUY {activeTile}</Button>
              </Row>
              <hr />
              <Row>
                <AerialAttackComponent
                  handleAerialAttack={handleAerialAttack}
                />
              </Row>
              <Row className='m-3'>
                <SendAurToAvatar />
              </Row>
              <Row>
                <AllocateTokens
                  handleAllocateTokensClick={handleAllocateTokensClick}
                  handleDeallocateTokensClick={handleDeallocateTokensClick}
                />
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

const AllocateTokens = ({
  handleAllocateTokensClick,
  handleDeallocateTokensClick
}) => {
  const [index, setIndex] = React.useState()
  const [amount, setAmount] = React.useState()
  const [type, setType] = React.useState(0)

  const handleUpdateIndex = ev => {
    ev.preventDefault()
    setIndex(ev.target.value)
  }
  const handleUpdateAmount = ev => {
    ev.preventDefault()
    setAmount(ev.target.value)
  }
  const handleClick = () => {
    handleAllocateTokensClick({ index, amount })
  }

  return (
    <Container>
      <Row className='m-3'>
        <input
          style={{ padding: 5 }}
          id='allocate-tokens-index'
          value={index}
          onChange={handleUpdateIndex}
          placeholder='Index of Token to Allocate'
        />
      </Row>
      <Row className='m-3'>
        <input
          style={{ padding: 5 }}
          id='allocate-tokens-amount'
          value={amount}
          onChange={handleUpdateAmount}
          placeholder='Amount of AUR to allocate'
        />
      </Row>
      <Row className='m-3'>
        <Button onClick={handleClick} type='submit'>
          Aerial Attack
        </Button>
      </Row>
    </Container>
  )
}

const DeallocateTokens = () => {
  return <Container></Container>
}
const AerialAttackComponent = ({ handleAerialAttack }) => {
  return (
    <Container>
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
    </Container>
  )
}

const ShowPlayerInfo = ({ dna, name, id }) => {
  return (
    <>
      {dna && name && id ? (
        <PlayerAvatar dna={dna} name={name} id={id} />
      ) : null}
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
