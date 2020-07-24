import React from 'react'
import MetaMaskOnboarding from '@metamask/onboarding'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProtectedRoutes from 'shared/components/ProtectedRoutes'
import Web3Context, {
  initWeb3,
  updateNetwork,
  updateAccount
} from 'shared/store/web3'
import { Map, Planet, Auth } from './pages'
import Web3 from 'web3'

export default () => {
  const [loading, setLoading] = React.useState(true)
  const {
    dispatchUpdateNetwork,
    dispatchInitWeb3,
    dispatchUpdateAccount,
    isMetamaskInstalled,
    account,
    web3
  } = useWeb3()
  React.useEffect(() => {
    // Init Web3 Context
    initWeb()
  }, [])

  // React.useEffect(() => {
  //   setInterval(async function () {
  //     if (web3) {
  //       const newAccount = await web3.eth.getAccounts()
  //       const previousAccount = account
  //       console.log("NEW:l ", newAccount)
  //       console.log('prev', previousAccount)
  //       if (newAccount.length !== previousAccount.length) {
  //         dispatchUpdateAccount(newAccount)
  //       }
  //     }
  //   }, 1500)
  // }, [web3])

  React.useEffect(() => {
    // Attach listeners if meta mask is installed - THis may be subject to change
    // Metamask will stop injecting in future
    if (isMetamaskInstalled) {
      console.log('HIT')
      window.ethereum.on('accountsChanged', function (accounts) {
        dispatchUpdateAccount(accounts)
      })

      window.ethereum.on('networkChanged', async function (netId) {
        const network = await web3.eth.net.getNetworkType()
        dispatchUpdateNetwork({
          id: netId,
          network
        })
      })
    }
  }, [isMetamaskInstalled])

  async function initWeb() {
    // State management not working - Doing API Call here
    try {
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
      const account = await web3.eth.getAccounts()
      const network = await web3.eth.net.getNetworkType()
      const isMetamaskInstalled = MetaMaskOnboarding.isMetaMaskInstalled()
      dispatchInitWeb3({
        web3,
        account,
        network,
        isMetamaskInstalled
      })
      setLoading(false)
    } catch (e) {
      // Handle Error
      console.log('ERROR:', e)
    }
  }

  if (loading) {
    return null
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Auth />
        </Route>
        <ProtectedRoutes
          isMetamaskInstalled={isMetamaskInstalled}
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

const useWeb3 = () => {
  const dispatch = Web3Context.useDispatch()
  const { web3, account, isMetamaskInstalled } = Web3Context.useState()

  const dispatchInitWeb3 = (data) => initWeb3(dispatch, data)
  const dispatchUpdateNetwork = (data) => updateNetwork(dispatch, data)
  const dispatchUpdateAccount = (data) => updateAccount(dispatch, data)
  return {
    web3,
    account,
    isMetamaskInstalled,
    dispatchInitWeb3,
    dispatchUpdateNetwork,
    dispatchUpdateAccount
  }
}
