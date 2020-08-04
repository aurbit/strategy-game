import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import Navbar from 'shared/components/Layout/Navbar'
import { ACTIONS } from 'shared/store/wallet'
import { selectWalletInitalized } from 'shared/store/wallet/selectors'
import { Planet, Auth, Avatar } from './pages'

export default () => {
  // init the wallets
  const dispatch = useDispatch()
  const initialized = useSelector(selectWalletInitalized)

  useEffect(() => {
    dispatch(ACTIONS.initWallet())
  }, [dispatch])

  return initialized ? (
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
