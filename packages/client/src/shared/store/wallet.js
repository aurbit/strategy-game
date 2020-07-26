import contextFactory, { STATUS } from 'shared/context/factory'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from '@walletconnect/qrcode-modal'

const initialState = {
  status: STATUS.INIT,
  vendor: null,
  wallet: null
}

export { STATUS }

const actions = {
  SET_WALLET_VENDOR: 'SET_WALLET_VENDOR',
  SET_WALLET_VENDOR_FAILED: 'SET_WALLET_VENDOR_FAILED'
}

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_WALLET_VENDOR: {
      return {
        ...state,
        status: STATUS.IDLE,
        vendor: action.payload.vendor,
        wallet: action.payload.wallet
      }
    }
    case actions.SET_WALLET_VENDOR_FAILED: {
      return {
        ...state,
        status: STATUS.IDLE,
        vendor: null,
        wallet: null
      }
    }
    default:
      break
  }
}

export const setWalletVendor = async (dispatch, vendor) => {
  switch (vendor) {
    case 'metamask': {
      const { ethereum } = window
      ethereum.request({ method: 'eth_requestAccounts' })
      dispatch({
        type: actions.SET_WALLET_VENDOR,
        payload: { vendor, wallet: ethereum }
      })
      ethereum.on('connect', () =>
        dispatch({
          type: actions.SET_WALLET_VENDOR,
          payload: { vendor, wallet: window.ethereum }
        })
      )
      ethereum.on('accountsChanged', accounts => {})

      ethereum.on('chainChanged', chainId => {
        window.location.reload()
      })

      break
    }
    case 'wallet-connect': {
      // Create a connector
      const connector = new WalletConnect({
        bridge: 'https://bridge.walletconnect.org', // Required
        qrcodeModal: QRCodeModal
      })

      // Check if connection is already established
      if (!connector.connected) {
        // create new session
        connector.createSession()
        dispatch({
          type: actions.SET_WALLET_VENDOR,
          payload: { vendor, wallet: connector }
        })
      }

      // Subscribe to connection events
      connector.on('connect', (error, payload) => {
        if (error) {
          dispatch({ type: actions.SET_WALLET_VENDOR_FAILED })
        } else {
          dispatch({
            type: actions.SET_WALLET_VENDOR,
            payload: { vendor, wallet: connector }
          })
          // // Get provided accounts and chainId
          // const { accounts, chainId } = payload.params[0]
        }
      })
    }
    default: {
      dispatch({ type: actions.SET_WALLET_VENDOR_FAILED })
      break
    }
  }
}

export default contextFactory('Wallet', initialState, reducer)
