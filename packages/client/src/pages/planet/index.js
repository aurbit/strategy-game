import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Planet from './planet'

function PlanetPage () {
  return (
    <Switch>
      {/* <Route exact path="/planet">
        <PlanetSelect />
      </Route> */}
      <Route path='/planet'>
        <Planet />
      </Route>
    </Switch>
  )
}

export default PlanetPage
