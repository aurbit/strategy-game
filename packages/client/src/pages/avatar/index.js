import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import AvatarView from './avatar-view'
import CreateAvatar from './create-avatar'
import { ACTIONS } from 'shared/store/avatar'
import { useDispatch, useSelector } from 'react-redux'
import { selectAddress } from 'shared/store/wallet/selectors'
import { selectActiveIndex, selectAvatars } from 'shared/store/avatar/selectors'

function AvatarContainer () {
  // need to get the list of all the avtars from the connect wallet
  // need to check for avatars from the dna in the url
  const address = useSelector(selectAddress)
  const activeIndex = useSelector(selectActiveIndex)
  const avatars = useSelector(selectAvatars)
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (address) dispatch(ACTIONS.getAvatarsRequest())
  }, [address])

  return (
    <Switch>
      <Route exact path='/avatar/create'>
        <CreateAvatar />
      </Route>
      <Route exact path='/avatar/'>
        <AvatarView avatar={avatars.list[activeIndex]} />
      </Route>
    </Switch>
  )
}

export default AvatarContainer
