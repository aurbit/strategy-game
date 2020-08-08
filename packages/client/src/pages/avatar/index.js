import React from 'react'
import AvatarView from './avatar-view'
import CreateAvatar from './create-avatar'
import { Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAvatars } from 'shared/store/avatar/selectors'

function AvatarContainer () {
  // need to get the list of all the avtars from the connect wallet
  // need to check for avatars from the dna in the url

  const avatars = useSelector(selectAvatars)

  return (
    <Switch>
      <Route exact path='/avatar/create'>
        <CreateAvatar />
      </Route>
      <Route exact path='/avatar'>
        <AvatarView avatars={avatars} />
      </Route>
    </Switch>
  )
}

export default AvatarContainer
