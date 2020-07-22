import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProtectedRoutes from 'shared/components/ProtectedRoutes'
import UserContext, { initUser } from 'shared/store/user'
import { Map, Planet, Auth } from './pages'
import Web3 from 'web3'

export default () => {
  const { dispatchInitUser, account } = useUserContext()

  React.useEffect(() => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545')
    web3.eth
      .getAccounts()
      .then((accounts) => {
        web3.eth.net.getNetworkType().then(network => {
          dispatchInitUser({
            account: accounts[0],
            networkType: network
          })
        })
      })
      .catch((err) => {
        console.log('HMM: ', err)
      })
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Auth />
        </Route>
        <ProtectedRoutes accounts={account} component={AuthenticatedRoutes} />
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

function useUserContext () {
  const dispatch = UserContext.useDispatch()
  const { account } = UserContext.useState()

  const dispatchInitUser = (name) => initUser(dispatch, name)
  return { dispatchInitUser, account }
}
