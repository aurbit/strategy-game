import React from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { selectTiles } from 'shared/store/planet/selectors'
import { selectGetAvatar } from 'shared/store/avatar/selectors'
import { useSelector, useDispatch } from 'react-redux'
import { ACTIONS as AVATAR_ACTIONS } from 'shared/store/avatar'
import PlayerAvatar from 'shared/components/PlayerAvatar'

export default ({ activeTile }) => {
  // check if tile is owned, show owner
  const tiles = useSelector(selectTiles)
  const [tileInd, setTileInd] = React.useState(0)
  const dispatch = useDispatch()

  React.useEffect(() => {
    for (let i in tiles.result) {
      if (tiles.result[i].ind == activeTile) {
        dispatch(AVATAR_ACTIONS.getAvatarRequest(tiles.result[i].owner))
        return setTileInd(i)
      }

      if (i == tiles.result.length - 1) {
        setTileInd(null)
      }
    }
  })

  // for showting the avatar

  return (
    <div>
      <Container>
        {tileInd ? (
          <div>
            <TileOwned {...tiles.result[tileInd]} />
          </div>
        ) : (
          <div>
            Index: {tileInd}
            <TileUnowned activeTile={activeTile} />
          </div>
        )}
      </Container>
    </div>
  )
}

const TileOwned = ({ ind, owner, bal, LastMineBlockTime }) => {
  const gotAvatar = useSelector(selectGetAvatar)

  return (
    <>
      {gotAvatar ? (
        <Col>
          <Row>
            <h3># {ind}</h3>
          </Row>
          <Row className='mt-1'>Owner: {gotAvatar.name}</Row>
          <Row>
            {gotAvatar.dna ? (
              <PlayerAvatar dna={gotAvatar.dna} id={gotAvatar.avatarId} />
            ) : (
              <Spinner animation='grow' variant='warning' />
            )}
          </Row>
          <Row>Tile Number: {ind}</Row>
          <Row>Owner AvatarId: {owner}</Row>
          <Row>Allocated AUR: {bal}</Row>
          <Row>Last Mined Block: {LastMineBlockTime}</Row>
        </Col>
      ) : (
        <Spinner animation='grow' />
      )}
    </>
  )
}

const TileUnowned = ({ activeTile }) => {
  return (
    <Col>
      <Row>Tile Number: {activeTile}</Row>
      <Row>This tile does not have an owner.</Row>
    </Col>
  )
}
