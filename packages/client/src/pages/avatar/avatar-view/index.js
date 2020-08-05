import React from 'react'
import { utils } from 'web3'
import { Container, Col, Row, Card, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
  // need to transform the dna to a byte array
  let toHex = utils.toHex(dna)
  let padLeft = utils.padLeft(toHex, 36)
  let dnaArray = utils.hexToBytes(padLeft)
  return (
    <Col className='mb-5' align='center'>
      <Card style={{ maxWidth: 600 }}>
        <div style={{ minHeight: 600 }}>
          <PlayerAvatar dna={dnaArray} />
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{dna}</Card.Text>
          <Link className='btn btn-primary' to='/planet'>
            Play Now
          </Link>
        </Card.Body>
      </Card>
    </Col>
  )
}
