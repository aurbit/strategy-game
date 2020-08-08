import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import Navbar from 'shared/components/Layout/Navbar'
import { ACTIONS as WALLET_ACTIONS } from 'shared/store/wallet'
import { selectWalletInitalized } from 'shared/store/wallet/selectors'
import { Planet, Auth, CreateAvatar, Avatar, TestPage } from './pages'

import { ACTIONS as CHAIN_ACTIONS } from 'shared/store/chain'
import { selectChainInitialzed } from 'shared/store/chain/selectors'
import { ACTIONS as AVATAR_ACTIONS } from 'shared/store/avatar'
import { selectAddress } from 'shared/store/wallet/selectors'
import { ACTIONS as TOKEN_ACTIONS } from 'shared/store/token'



export default () => {
  // init the wallets
  const dispatch = useDispatch()
  const walletReady = useSelector(selectWalletInitalized)
  const providersReady = useSelector(selectChainInitialzed)
  const address = useSelector(selectAddress)

  React.useEffect(() => {
    dispatch(WALLET_ACTIONS.initWalletRequest())
  }, [WALLET_ACTIONS])

  React.useEffect(() => {
    // BEGIN TO INIT PROVIDER
    dispatch(CHAIN_ACTIONS.initProvider())
    // START TO INIT ARTIFACTS - store/chain/sagas - check initArtifacts() function
    dispatch(CHAIN_ACTIONS.initArtifacts())
    // CREATE CONTRACT BASED ON ARTIFACTS - store/chain/sagas - check initContracts() function
    dispatch(CHAIN_ACTIONS.initContracts())
  }, [])

  // Check if the user has any avatars
  React.useEffect(() => {
    if (address) dispatch(AVATAR_ACTIONS.getAvatarsRequest())
  }, [address])

  React.useEffect(() => {
    if (providersReady) {
      dispatch(TOKEN_ACTIONS.getAurBalanceRequest())
    }
  }, [providersReady, address])
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
