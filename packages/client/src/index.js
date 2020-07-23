import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './shared/styles/index.css'
import Routes from './root-routes'
import * as serviceWorker from './serviceWorker'
import UserContext from 'shared/store/user'
import Web3Context from 'shared/store/web3'

import 'shared/utils/web3-listeners'

// String mode kept on bringing warnins about findDom ref with UI Lib
ReactDOM.render(
  <Web3Context.Provider>
    <UserContext.Provider>
      <Routes />
    </UserContext.Provider>
  </Web3Context.Provider>,

  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
