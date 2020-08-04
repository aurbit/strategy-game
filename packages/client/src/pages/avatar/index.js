import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AvatarView from './avatar-view'
import CreateAvatar from './create-avatar'

function AvatarContainer () {
  // need to get the list of all the avtars from the connect wallet
  // need to check for avatars from the dna in the url

  return (
    <Switch>
      <Route exact path='/avatar/create'>
        <CreateAvatar />
      </Route>
      <Route exact path='/avatar/'>
        <AvatarView />
      </Route>
    </Switch>
  )
}

export default AvatarContainer
