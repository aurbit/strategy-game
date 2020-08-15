import React from 'react'
import { Container, Col, Row, Card, Spinner } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'

import PlayerAvatar from 'shared/components/PlayerAvatar'

export default ({ avatars }) => {
  return (
    <Container className='mt-5'>
      <Row>
        {avatars.loading ? (
          <Spinner animation='grow' variant='warning' />
        ) : !avatars.list[0] ? (
          <Redirect to='/avatar/create' />
        ) : (
          <AvatarCard name={avatars.list[0].name} dna={avatars.list[0].dna} />
        )}
      </Row>
    </Container>
  )
}

const AvatarCard = ({ name, dna, id }) => {
  return (
    <Col className='mb-5' align='center'>
      {dna ? (
        <Card style={{ maxWidth: 600 }}>
          <div style={{ minHeight: 600 }}>
            <PlayerAvatar dna={dna} name={name} id={id} />
          </div>
          <Card.Body>
            <Link className='btn btn-primary' to='/planet'>
              Play Now
            </Link>
          </Card.Body>
        </Card>
      ) : (
        <Spinner animation='grow' variant='warning' />
      )}
    </Col>
  )
}
