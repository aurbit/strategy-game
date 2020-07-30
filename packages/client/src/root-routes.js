import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'

import WalletContext, { initWallet, STATUS } from './shared/store/wallet'
import Web3Context, {
  setProvider,
  availableNetworks
} from './shared/store/web3'

import { Planet, Auth, CreateAvatar } from './pages'

export default () => {
  const { status: walletStatus } = WalletContext.useState()
  const walletDispatch = WalletContext.useDispatch()

  useEffect(() => {
    if (walletStatus === STATUS.INIT) {
      initWallet(walletDispatch)
    }
  })

  const { status: web3Status } = Web3Context.useState()
  const web3Dispatch = Web3Context.useDispatch()

  useEffect(() => {
    if (web3Status === STATUS.INIT) {
      setProvider(web3Dispatch, availableNetworks.DEVELOPMENT)
    }
  })

  // we need to instantiate the wallet and web3 libraries first
  const initialized = web3Status === STATUS.IDLE && walletStatus === STATUS.IDLE

  return initialized ? (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Auth />
        </Route>
        <Route path='/planet'>
          <Planet />
        </Route>
        <Route path='/avatar'>
          <CreateAvatar />
        </Route>
      </Switch>
    </Router>
  ) : (
    <Spinner animation='grow' variant='warning' />
  )
}
