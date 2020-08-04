import React from 'react'
import { utils } from 'web3'
import { Container, Col, Row, Card, Button, Spinner } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ACTIONS } from 'shared/store/avatar'
import {
  selectAvatars,
  selectGetAvatarsLoading,
  selectGetAvatarsSuccess
} from 'shared/store/avatar/selectors'
import { selectAddress } from 'shared/store/wallet/selectors'
import PlayerAvatar from 'shared/components/PlayerAvatar'
export default () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const avatars = useSelector(selectAvatars)
  const address = useSelector(selectAddress)

  const loading = useSelector(selectGetAvatarsLoading)
  const success = useSelector(selectGetAvatarsSuccess)

  const keys = Object.keys(avatars)

  React.useEffect(() => {
    if (address) dispatch(ACTIONS.getAvatarsRequest())
  }, [])

  const avatar = avatars[keys[keys.length - 1]]
  return (
    <Container className='mt-5'>
      <Row>
        {loading ? (
          <Spinner animation='grow' variant='warning' />
        ) : success ? (
          <AvatarCard name={avatar.name} dna={avatar.dna} />
        ) : (
          <Spinner animation='grow' variant='info' />
        )}
      </Row>
    </Container>
  )
}

const AvatarCard = ({ name, dna }) => {
  let toHex = utils.toHex(dna)
  let padLeft = utils.padLeft(toHex, 36)
  let dnaArray = utils.hexToBytes(padLeft)
  return (
    <Col className='mb-5'>
      <Card style={{ maxWidth: 600 }}>
        <PlayerAvatar dna={dnaArray} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{dna}</Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
