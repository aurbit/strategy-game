import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Planet from './planet.container'
import { PlanetContext } from './planet.contex'
import Navbar from '../../shared/components/Layout/Navbar'

function PlanetPage () {
  return (
    <PlanetContext.Provider>
      <Navbar />
      <Switch>
        <Route path='/'>
          <Planet />
        </Route>
        <Route path='/leaderboard'>{/* <PlanetLeaderboard /> */}</Route>
      </Switch>
    </PlanetContext.Provider>
  )
}

export default PlanetPage
