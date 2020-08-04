import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import Navbar from 'shared/components/Layout/Navbar'
import { ACTIONS as WALLET_ACTIONS } from 'shared/store/wallet'
import { selectWalletInitalized } from 'shared/store/wallet/selectors'
import { ACTIONS as CHAIN_ACTIONS } from 'shared/store/chain'
import { selectChainInitialzed } from 'shared/store/chain/selectors'

import { Planet, Auth, Avatar, TestPage } from './pages'

export default () => {
  // init the wallets
  const dispatch = useDispatch()
  const walletReady = useSelector(selectWalletInitalized)
  const providersReady = useSelector(selectChainInitialzed)

  React.useEffect(() => {
    dispatch(WALLET_ACTIONS.initWallet())
  }, [])

  React.useEffect(() => {
    // BEGIN TO INIT PROVIDER
    dispatch(CHAIN_ACTIONS.initProvider())
    // START TO INIT ARTIFACTS - store/chain/sagas - check initArtifacts() function
    dispatch(CHAIN_ACTIONS.initArtifacts())
    // CREATE CONTRACT BASED ON ARTIFACTS - store/chain/sagas - check initContracts() function
    dispatch(CHAIN_ACTIONS.initContracts())
  }, [])

  return walletReady && providersReady ? (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Auth />
          </Route>
          <Route path='/planet'>
            <Planet />
          </Route>
          <Route path='/avatar'>
            <Avatar />
          </Route>
          <Route path='/test'>
            <TestPage />
          </Route>
        </Switch>
      </Router>
    </div>
  ) : (
    <Spinner animation='grow' variant='warning' />
  )
}
