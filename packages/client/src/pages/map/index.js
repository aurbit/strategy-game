import React from 'react'
import styles from './index.module.css'
import logo from './logo.svg'
import './App.css'
import Web3Context from 'shared/store/web3'
import Navbar from 'shared/components/Layout/Navbar'

function App() {
  const { account, network } = useWeb3()
  return (
    <div className="App">
      <Navbar account={account} network={network} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className={styles.helloWorld}>CSS MODULE TEST</div>
      </header>
    </div>
  )
}

const useWeb3 = () => {
  const { network, account } = Web3Context.useState()

  return {
    account,
    network
  }
}

export default App
