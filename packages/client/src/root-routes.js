import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import Navbar from 'shared/components/Layout/Navbar'

import TokenContext, { getAurBalance } from 'shared/store/token'
import WalletContext, { initWallet, STATUS } from 'shared/store/wallet'

import { Planet, Auth, CreateAvatar, Avatar, TestPage } from './pages'

export default () => {
  // init the wallets
  const { status: walletStatus } = WalletContext.useState()
  const walletDispatch = WalletContext.useDispatch()
  useEffect(() => {
    if (walletStatus === STATUS.INIT) {
      initWallet(walletDispatch)
    }
  })

  // we need to instantiate the wallet and web3 libraries first
  const initialized = walletStatus === STATUS.IDLE

  return initialized ? (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Auth />
          </Route>
          <Route path="/planet">
            <Planet />
          </Route>
          <Route path="/create-avatar">
            <CreateAvatar />
          </Route>
          <Route path="/avatar">
            <Avatar />
          </Route>
          <Route path="/test">
            <TestPage />
          </Route>
        </Switch>
      </Router>
    </div>
  ) : (
    <Spinner animation="grow" variant="warning" />
  )
}
