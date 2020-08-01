import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './shared/styles/index.css'
import Routes from './root-routes'
import * as serviceWorker from './serviceWorker'
import WalletContext from 'shared/store/wallet'
import Web3Context from 'shared/store/web3'
import PlanetContext from 'shared/store/planet'
import TokenContext from 'shared/store/token'
import { Provider } from 'react-redux'
import { store } from './store'
// String mode kept on bringing warnins about findDom ref with UI Lib
ReactDOM.render(
  <TokenContext.Provider>
    <Web3Context.Provider>
      <WalletContext.Provider>
        <PlanetContext.Provider>
          <Provider store={store}>
            <Routes />
          </Provider>
        </PlanetContext.Provider>
      </WalletContext.Provider>
    </Web3Context.Provider>{' '}
  </TokenContext.Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
