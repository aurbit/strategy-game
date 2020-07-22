import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './shared/styles/index.css'
import Routes from './root-routes'
import * as serviceWorker from './serviceWorker'
import UserContext from 'shared/store/user'

import 'shared/utils/web3-listeners'

ReactDOM.render(
  <React.StrictMode>
    <UserContext.Provider>
      <Routes />
    </UserContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
