import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Planet from './planet.container'
import { PlanetProvider } from './planet.contex'

function PlanetPage () {
  return (
    <PlanetProvider>
      <Switch>
        <Route exact path='/'>
          <Planet />
        </Route>
        <Route path='/leaderboard'>{/* <PlanetLeaderboard /> */}</Route>
      </Switch>
    </PlanetProvider>
  )
}

export default PlanetPage
