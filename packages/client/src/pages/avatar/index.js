import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MyAvatars from './avatar-list'
import CreateAvatar from './create-avatar'
import AvatarView from './avatar-view'

function AvatarContainer () {
  // need to get the list of all the avtars from the connect wallet
  // need to check for avatars from the dna in the url

  return (
    <Switch>
      <Route exact path='/avatar/create'>
        <CreateAvatar />
      </Route>
      <Route exact path='/avatar/:address/:avatarId'>
        <AvatarView />
      </Route>
      <Route exact path='/avatar/:address'>
        <MyAvatars />
      </Route>
    </Switch>
  )
}

export default AvatarContainer
