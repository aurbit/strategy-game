import React from 'react'
import { utils } from 'web3'
import { Container, Col, Row, Card, Button, Spinner } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import PlayerAvatar from 'shared/components/PlayerAvatar'

export default ({ avatar }) => {
  return (
    <Container className='mt-5'>
      <Row>
        {!avatar ? (
          <Spinner animation='grow' variant='warning' />
        ) : (
          <AvatarCard name={avatar.name} dna={avatar.dna} />
        )}
      </Row>
    </Container>
  )
}

const AvatarCard = ({ name, dna }) => {
  const history = useHistory()
  const handleRouteClick = () => {
    history.push('/planet')
  }
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
          <Button variant='primary' onClick={handleRouteClick}>
            Play Now
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
