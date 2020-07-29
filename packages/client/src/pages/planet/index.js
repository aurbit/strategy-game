import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PlanetSelect from './components/PlanetSelect'
import PlanetContext from 'shared/store/planet'
import Planet from './components/Planet'

function PlanetPage () {
  return (
    <PlanetContext.Provider>
      <Switch>
        <Route exact path='/planet'>
          <PlanetSelect />
        </Route>
        <Route path='/:planetName'>
          <Planet />
        </Route>
      </Switch>
    </PlanetContext.Provider>
  )
}

export default PlanetPage
