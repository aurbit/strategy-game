import React from 'react'
// import styles from './planet.module.css'

import { changePlanet, PlanetContext } from './planet.contex'

function PlanetContainer () {
  // useLogic function to abstract messy code below return
  const { planetState, goToPlanet } = usePlanetLogic()

  return (
    <div className='Planet'>
      <p>You are now on planet {planetState.name}!</p>
      <button onClick={() => goToPlanet('Jupiter')}>Jupiter</button>
      <button onClick={() => goToPlanet('Earth')}>Earth</button>
    </div>
  )
}

// contain all of the component logic here
// so the render and view code is
// easier to reason about. Export what you
// need into the main function.

function usePlanetLogic () {
  const planetDispatch = PlanetContext.useDispatch()
  const planetState = PlanetContext.useState()

  const goToPlanet = name => changePlanet(planetDispatch, name)
  return { planetState, goToPlanet }
}

// Wrap the Component in it's context provider
export default PlanetContainer