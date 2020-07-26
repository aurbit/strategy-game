import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProtectedRoutes from 'shared/components/ProtectedRoutes'
import Web3Context, { setNetwork, STATUS } from './shared/store/web3'
import WalletContext from './shared/store/wallet'

import { Planet, Auth } from './pages'

export default props => {
  // const { walletVendor } = useRouteLogic()

  return (
    <WalletContext.Provider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Auth />
          </Route>
          <ProtectedRoutes component={AuthenticatedRoutes} />
        </Switch>
      </Router>
    </WalletContext.Provider>
  )
}

const AuthenticatedRoutes = () => {
  return (
    <Switch>
      <Route path='/planet'>
        <Planet />
      </Route>
    </Switch>
  )
}

const useRouteLogic = () => {
  const { status: web3Status } = Web3Context.useState()
  const web3Dispatch = Web3Context.useDispatch()

  useEffect(() => {
    if (web3Status === STATUS.INIT) {
      setNetwork(web3Dispatch, 'mainnet')
    }
  })
}
