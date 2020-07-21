import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Planet from './planet.container'
import { PlanetContext } from './planet.contex'

function PlanetPage () {
  return (
    <PlanetContext.Provider>
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
