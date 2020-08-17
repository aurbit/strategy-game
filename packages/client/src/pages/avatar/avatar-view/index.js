import React from 'react'
import { Container, Col, Row, Card, Spinner } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ACTIONS as AVATAR_ACTIONS } from 'shared/store/avatar'

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
          <AvatarList avatars={avatars} />
        )}
      </Row>
    </Container>
  )
}

const AvatarList = ({ avatars }) => {
  const dispatch = useDispatch()
  const handleSetAvatar = index => {
    dispatch(AVATAR_ACTIONS.setActiveIndex(index))
  }
  return avatars.list.map((avatar, index) => (
    <Col key={index} className='mb-5' md={4} align='center'>
      <Card style={{ maxWidth: 500 }}>
        <div style={{ minHeight: 400 }}>
          <PlayerAvatar dna={avatar.dna} name={avatar.name} id={avatar.id} />
        </div>
        <Card.Body>
          <Link
            className='btn btn-primary'
            to='/planet'
            onClick={() => handleSetAvatar(index)}
          >
            Play {avatar.name}
          </Link>
        </Card.Body>
      </Card>
      )
    </Col>
  ))
}
