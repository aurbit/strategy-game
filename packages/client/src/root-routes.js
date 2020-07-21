import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Map, Planet, Dummy } from './pages'

const RouteContainer = () => {
  return (
    <Router>
      <Switch>
        <Route path="/planet">
          <Planet />
        </Route>
        <Route path="/dummy">
          <Dummy />
        </Route>
        <Route exact path="/">
          <Map />
        </Route>
      </Switch>
    </Router>
  )
}

export default RouteContainer
