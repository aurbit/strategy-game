import React from 'react'
import { usePlanet } from 'shared/services/Aurbit'
import { Button } from 'react-bootstrap'

export default () => {
  const { planetName } = usePlanet()

  return <Button variant='no-style'>{planetName}</Button>
}
