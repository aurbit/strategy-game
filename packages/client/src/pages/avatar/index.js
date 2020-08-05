import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import AvatarView from './avatar-view'
import CreateAvatar from './create-avatar'
import { ACTIONS } from 'shared/store/avatar'
import { useDispatch, useSelector } from 'react-redux'
import { selectAddress } from 'shared/store/wallet/selectors'
import { selectLatestAvatar } from 'shared/store/avatar/selectors'

function AvatarContainer () {
  // need to get the list of all the avtars from the connect wallet
  // need to check for avatars from the dna in the url
  const address = useSelector(selectAddress)
  const avatar = useSelector(selectLatestAvatar)
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (address) dispatch(ACTIONS.getAvatarsRequest())
  }, [])

  return (
    <Switch>
      <Route exact path='/avatar/create'>
        <CreateAvatar />
      </Route>
      <Route exact path='/avatar/'>
        {avatar ? (
          <AvatarView avatar={avatar} />
        ) : (
          <Spinner animation='grow' variant='warning' />
        )}
      </Route>
    </Switch>
  )
}

export default AvatarContainer
