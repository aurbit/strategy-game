import React from 'react'
import MetaMaskOnboarding from '@metamask/onboarding'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProtectedRoutes from 'shared/components/ProtectedRoutes'
import UserContext, { initUser, setMetamaskStatus } from 'shared/store/user'
import { Map, Planet, Auth } from './pages'
import Web3 from 'web3'

export default () => {
  const {
    dispatchCheckMetamask,
    account,
    isMetamaskInstalled
  } = useUserContext()
  React.useEffect(() => {
    if (!MetaMaskOnboarding.isMetaMaskInstalled()) {
      dispatchCheckMetamask(false)
    }
  }, [])
  // React.useEffect(() => {
  //   try {
  //     const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545')

  //     web3.eth
  //       .getAccounts()
  //       .then((accounts) => {
  //         web3.eth.net.getNetworkType().then((network) => {
  //           dispatchInitUser({
  //             account: accounts[0],
  //             networkType: network
  //           })
  //         })
  //       })
  //       .catch((err) => {
  //         console.log('HMM: ', err)
  //         web3.eth.net.isListening().then((x) => console.log('LIOST: ', x))
  //       })
  //   } catch (err) {
  //     console.log('ERRO: ', err)
  //   }
  // }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Auth />
        </Route>
        <ProtectedRoutes
          isMetaMaskInstalled={isMetamaskInstalled}
          accounts={account}
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

const useUserContext = () => {
  const dispatch = UserContext.useDispatch()
  const { account, isMetamaskInstalled } = UserContext.useState()

  const dispatchInitUser = (name) => initUser(dispatch, name)
  const dispatchCheckMetamask = (status) => setMetamaskStatus(dispatch, status)
  return {
    dispatchInitUser,
    dispatchCheckMetamask,
    account,
    isMetamaskInstalled
  }
}
