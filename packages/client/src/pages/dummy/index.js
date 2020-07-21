import React from 'react'
import { Switch, Route } from 'react-router-dom'
import DummyPage from './Dummy'

const RouteContainer = () => {
  return (
    <Switch>
      <Route exact path="/dummy">
        <DummyPage />
      </Route>
    </Switch>
  )
}

export default RouteContainer
