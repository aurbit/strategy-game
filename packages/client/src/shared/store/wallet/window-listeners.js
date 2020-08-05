import { store } from 'store'
import { ACTIONS, WALLETS } from './index'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from '@walletconnect/qrcode-modal'
import { NETWORKS } from 'shared/store/chain'

export const ethereumEventListeners = () => {
  window.ethereum.on('chainChanged', chainId => {
    console.log(chainId)
    switch (chainId) {
      case '0x3': {
        store.dispatch(ACTIONS.setNetwork({ network: NETWORKS.ROPSTEN }))
        break
      }
      case '0x1': {
        store.dispatch(ACTIONS.setNetwork({ network: NETWORKS.MAINNET }))
        break
      }
      case '0x2a': {
        store.dispatch(ACTIONS.setNetwork({ network: NETWORKS.KOVAN }))
        break
      }

      case '0x4': {
        store.dispatch(ACTIONS.setNetwork({ network: NETWORKS.RINKEBY }))
        break
      }
      default: {
        store.dispatch(ACTIONS.setNetwork({ network: NETWORKS.DEVELOPMENT }))
        break
      }
    }
  })

  window.ethereum.on('disconnect', () => {
    store.dispatch(ACTIONS.setNetwork({ vendor: WALLETS.METAMASK }))
  })

  window.ethereum.on('accountsChanged', data => {
    store.dispatch(ACTIONS.setAddress({ address: data[0] }))
  })
}

export const walletConnectListeners = () => {
  // Should this live here?
  window.connector = new WalletConnect({
    bridge: 'https://bridge.walletconnect.org', // Required
    qrcodeModal: QRCodeModal
  })

  const { connector } = window

  // Check if connection is already established
  // Subscribe to connection events
  connector.on('connect', (error, payload) => {
    if (error) {
      throw error
    }

    // Get provided accounts and chainId
    store.dispatch(ACTIONS.setWallet({ vendor: WALLETS.WALLET_CONNECT }))
  })

  connector.on('session_update', (error, payload) => {
    if (error) {
      throw error
    }

    // Get updated accounts and chainId
    const { accounts } = payload.params[0]
    store.dispatch(ACTIONS.setAddress({ address: accounts[0] }))
  })

  connector.on('disconnect', (error, payload) => {
    if (error) {
      throw error
    }

    // Delete connector
    store.dispatch(ACTIONS.setAddress({ address: 'Connect Wallet' }))
  })

  connector.on('error', console.log)
}
