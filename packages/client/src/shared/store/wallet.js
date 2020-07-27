import contextFactory, { STATUS } from 'shared/context/factory'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from '@walletconnect/qrcode-modal'

export const availableWallets = {
  METAMASK: 'METAMASK',
  WALLET_CONNECT: 'WALLET_CONNECT'
}

const initialState = {
  status: STATUS.INIT,
  activeWallet: null,
  wallets: {
    [availableWallets.METAMASK]: null,
    [availableWallets.WALLET_CONNECT]: null
  }
}

export { STATUS }

const actions = {
  INIT_WALLET: 'INIT_WALLET',
  SET_WALLET: 'SET_WALLET',
  SET_WALLET_FAILED: 'SET_WALLET_FAILED',
  UNSET_WALLET: 'UNSET_WALLET'
}

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.INIT_WALLET: {
      return {
        ...state,
        status: STATUS.IDLE,
        activeWallet: null,
        wallets: {
          [availableWallets.METAMASK]: null,
          [availableWallets.WALLET_CONNECT]: null
        }
      }
    }
    case actions.SET_WALLET: {
      const { vendor, wallet } = action.payload
      const walletMap = { [vendor]: wallet }
      const newWallets = Object.assign(state.wallets, walletMap)
      return {
        ...state,
        status: STATUS.IDLE,
        activeWallet: action.payload.vendor,
        wallets: newWallets
      }
    }
    case actions.SET_WALLET_FAILED: {
      return {
        ...state,
        status: STATUS.IDLE,
        activeWallet: null,
        wallets: {
          [availableWallets.METAMASK]: null,
          [availableWallets.WALLET_CONNECT]: null
        }
      }
    }
    case actions.UNSET_WALLET: {
      const { vendor } = action.payload
      const { activeWallet, wallets } = state

      const newActiveWallet = activeWallet === vendor ? null : activeWallet
      const walletMap = { [vendor]: null }
      const newWallets = Object.assign(wallets, walletMap)

      return {
        ...state,
        status: STATUS.IDLE,
        activeWallet: newActiveWallet,
        wallets: newWallets
      }
    }
    default:
      break
  }
}

export const initWallet = async dispatch => {
  // check if any wallets have been connected
  // check if metamask is connected
  dispatch({ type: actions.INIT_WALLET })
  if (window.ethereum.selectedAddress) {
    dispatch({
      type: actions.SET_WALLET,
      payload: { vendor: availableWallets.METAMASK, wallet: window.ethereum }
    })
  }

  // check for wallet-connect
  const connector = new WalletConnect({
    bridge: 'https://bridge.walletconnect.org', // Required
    qrcodeModal: QRCodeModal
  })

  if (connector.connected) {
    dispatch({
      type: actions.SET_WALLET,
      payload: { vendor: availableWallets.WALLET_CONNECT, wallet: connector }
    })
  }
}

// sets the wallet vendor to the map of available
// wallets and sets this wallet as active
export const setWallet = async (dispatch, vendor) => {
  switch (vendor) {
    // metamask case
    case availableWallets.METAMASK: {
      const { ethereum } = window
      ethereum.request({ method: 'eth_requestAccounts' })

      const interval = setInterval(() => {
        if (window.ethereum.selectedAddress) {
          dispatch({
            type: actions.SET_WALLET,
            payload: { vendor, wallet: ethereum }
          })
          clearInterval(interval)
        }
      }, 100)

      // TODO need to move or clean up the wallet
      // event handling
      ethereum.on('connect', () =>
        dispatch({
          type: actions.SET_WALLET,
          payload: { vendor, wallet: window.ethereum }
        })
      )
      ethereum.on('accountsChanged', accounts => {})

      ethereum.on('chainChanged', chainId => {
        window.location.reload()
      })

      ethereum.on('disconnected', () => {
        console.log('ereh')
        window.location.reload()
      })

      break
    }

    // wallet-connect case
    case availableWallets.WALLET_CONNECT: {
      // Create a connector
      const connector = new WalletConnect({
        bridge: 'https://bridge.walletconnect.org', // Required
        qrcodeModal: QRCodeModal
      })

      // Check if connection is already established
      // create new session
      if (!connector.connected) {
        connector.createSession()

        // Subscribe to connection events
        connector.on('connect', (error, payload) => {
          if (error) {
            dispatch({ type: actions.SET_WALLET_FAILED })
          } else {
            dispatch({
              type: actions.SET_WALLET,
              payload: { vendor, wallet: connector }
            })
            // // Get provided accounts and chainId
            // const { accounts, chainId } = payload.params[0]
          }
        })

        // TODO
        // need to clean up all of this wallet events code
        connector.on('session_update', (error, payload) => {
          if (error) {
            throw error
          }

          // Get updated accounts and chainId
          // const { accounts, chainId } = payload.params[0]
        })

        connector.on('disconnect', (error, payload) => {
          if (error) {
            throw error
          }

          dispatch({
            type: actions.UNSET_WALLET,
            payload: { vendor: availableWallets.WALLET_CONNECT }
          })
        })
        break
      } else {
        dispatch({
          type: actions.SET_WALLET,
          payload: {
            vendor,
            wallet: connector
          }
        })
        break
      }
    }
    default: {
      dispatch({ type: actions.SET_WALLET_FAILED })
      break
    }
  }
}

export default contextFactory('Wallet', initialState, reducer)
