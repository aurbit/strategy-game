import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import WalletContext, { initWallet, STATUS } from './shared/store/wallet'

import { Planet, Auth } from './pages'

export default props => {
  const { walletState, walletDispatch } = useRouteLogic(props)

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Auth walletState={walletState} walletDispatch={walletDispatch} />
        </Route>
        <Route path='/planet'>
          <Planet />
        </Route>
      </Switch>
    </Router>
  )
}

const useRouteLogic = props => {
  const walletState = WalletContext.useState()
  const walletDispatch = WalletContext.useDispatch()

  useEffect(() => {
    if (walletState.status === STATUS.INIT) {
      initWallet(walletDispatch)
    }
  })

  return { walletState, walletDispatch }
}
