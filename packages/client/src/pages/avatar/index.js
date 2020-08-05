import React from 'react'
import AvatarView from './avatar-view'
import CreateAvatar from './create-avatar'
import { Route, Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectActiveIndex, selectAvatars } from 'shared/store/avatar/selectors'
import { selectAddress } from 'shared/store/wallet/selectors'
import { ACTIONS } from 'shared/store/avatar'

function AvatarContainer () {
  // need to get the list of all the avtars from the connect wallet
  // need to check for avatars from the dna in the url

  const activeIndex = useSelector(selectActiveIndex)
  const avatars = useSelector(selectAvatars)
  const address = useSelector(selectAddress)
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (address && !activeIndex) dispatch(ACTIONS.getAvatarsRequest())
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
