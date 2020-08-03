import React from 'react'
import { Container } from 'react-bootstrap'
import PlayerAvatar from 'shared/components/PlayerAvatar'
import { useHistory } from 'react-router-dom'

export default () => {
  const history = useHistory()
  // should have dna in the url
  var name = 'Gary'
  var dna = [
    40,
    69,
    60,
    165,
    228,
    239,
    117,
    68,
    239,
    5,
    4,
    239,
    153,
    5,
    2,
    9,
    3,
    1
  ]
  return (
    <Container>
      <PlayerAvatar name={name} dna={dna} />
    </Container>
  )
}
