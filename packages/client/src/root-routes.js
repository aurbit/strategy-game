import React from 'react'
import MetaMaskOnboarding from '@metamask/onboarding'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProtectedRoutes from 'shared/components/ProtectedRoutes'
import Web3Context, { initWeb3 } from 'shared/store/web3'
import { Map, Planet, Auth } from './pages'

export default () => {
  const { dispatchInitWeb3, web3 } = useWeb3()
  React.useEffect(() => {
    // Init Web3 Context
    console.log('INIT WEB3')
    dispatchInitWeb3()
  }, [])
  if (!web3) {
    return null
  }
  // React.useEffect(() => {
  //   if (!MetaMaskOnboarding.isMetaMaskInstalled()) {
  //     dispatchCheckMetamask(false)
  //   } else {
  //     dispatchCheckMetamask(true)
  //   }
  // }, [])

  console.log('HMM', web3.currentProvider)
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Auth />
        </Route>
        <ProtectedRoutes
          isMetamaskInstalled={MetaMaskOnboarding.isMetaMaskInstalled()}
          accounts={[]}
          component={AuthenticatedRoutes}
        />
      </Switch>
    </Router>
  )
}

const AuthenticatedRoutes = () => {
  return (
    <Switch>
      <Route path="/map">
        <Map />
      </Route>
      <Route path="/planet">
        <Planet />
      </Route>
    </Switch>
  )
}

const useWeb3 = () => {
  const dispatch = Web3Context.useDispatch()
  const { web3 } = Web3Context.useState()

  const dispatchInitWeb3 = (name) => initWeb3(dispatch, name)
  return {
    web3,
    dispatchInitWeb3
  }
}
