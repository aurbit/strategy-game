import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Map, Planet } from './pages'

const RouteContainer = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Map />
        </Route>
        <Route exact path='/planet'>
          <Planet />
        </Route>
      </Switch>
    </Router>
  )
}

export default RouteContainer
