import { store } from 'store'
import { TYPES, ACTIONS, WALLETS } from './index'
import { takeLatest, put } from 'redux-saga/effects'

import {
  ethereumEventListeners,
  walletConnectListeners
} from './window-listeners'

function * initWallet () {
  if (window.ethereum) {
    const { ethereum } = window
    yield put(
      ACTIONS.setWallet({
        vendor: WALLETS.METAMASK,
        wallet: ethereum
      })
    )
    // Attach ethereum event listeners
    ethereumEventListeners()

    if (ethereum.selectedAddress) {
      yield put(
        ACTIONS.setAddress({
          address: ethereum.selectedAddress
        })
      )
    }
    // Attach wallet connect listeners
    walletConnectListeners()
  }
}

function setWallet (vendor) {
  switch (vendor) {
    case WALLETS.METAMASK:
      handleMetaMask(vendor)
      break
    case WALLETS.WALLET_CONNECT:
      handleWalletConnect()
      break
    default:
    // throw new Error('Invalid Wallet')
  }
}

function handleMetaMask (vendor) {
  const { ethereum } = window
  if (!ethereum.selectedAddress) {
    ethereum.enable()
  }

  // waits for a selected wallet
  const interval = setInterval(() => {
    if (ethereum.selectedAddress) {
      store.dispatch(
        ACTIONS.setWallet({
          vendor,
          wallet: ethereum,
          address: ethereum.selectedAddress
        })
      )
      clearInterval(interval)
    }
  }, 1)

  if (ethereum?.selectedAddress) {
    store.dispatch(
      ACTIONS.setAddress({
        address: ethereum?.selectedAddress
      })
    )
  }
}

function handleWalletConnect () {
  if (window?.connector.connected) {
    // Check if connection is already established

    const { connector } = window
    // Subscribe to connection events

    store.dispatch(ACTIONS.setAddress({ address: connector._accounts[0] }))
    connector.on('connect', (error, payload) => {
      if (error) {
        throw error
      }

      // Get provided accounts and chainId
      const { accounts } = payload.params[0]
      store.dispatch(
        ACTIONS.setAddress({
          address: accounts[0]
        })
      )
    })

    connector.on('session_update', (error, payload) => {
      if (error) {
        throw error
      }

      // Get updated accounts and chainId
      const { accounts } = payload.params[0]
      store.dispatch(
        ACTIONS.setAddress({
          address: accounts[0]
        })
      )
    })

    connector.on('disconnect', (error, payload) => {
      if (error) {
        throw error
      }
      store.dispatch(
        ACTIONS.setAddress({
          address: 'Connect Wallet'
        })
      )
      // Delete connector
    })
  }
}

export function * rootWalletSagas () {
  yield takeLatest(TYPES.INIT_WALLET, initWallet)
  yield takeLatest(TYPES.SET_WALLET, setWallet)
}

// Util Functions
