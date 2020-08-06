import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import PlanetSelect from './components/PlanetSelect'
import Planet from './planet'
import { ACTIONS as AVATAR_ACTIONS } from 'shared/store/avatar'
import { selectAddress } from 'shared/store/wallet/selectors'

function PlanetPage () {
  const address = useSelector(selectAddress)
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (address) {
      dispatch(AVATAR_ACTIONS.getAvatarsRequest())
    }
  }, [address])

  return (
    <Switch>
      {/* <Route exact path="/planet">
        <PlanetSelect />
      </Route> */}
      <Route path='/planet'>
        <Planet />
      </Route>
    </Switch>
  )
}

export default PlanetPage
