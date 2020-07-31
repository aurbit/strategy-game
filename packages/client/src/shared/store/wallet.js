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
  address: null,
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
  UNSET_WALLET: 'UNSET_WALLET',
  SET_ADDRESS: 'SET_ADDRESS'
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
      const { vendor, wallet, address } = action.payload
      const walletMap = { [vendor]: wallet }
      const newWallets = Object.assign(state.wallets, walletMap)
      const newState = Object.assign(state, {
        status: STATUS.IDLE,
        activeWallet: vendor,
        wallets: newWallets,
        address
      })
      return newState
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

    case actions.SET_ADDRESS: {
      return {
        ...state,
        address: action.payload
      }
    }
    default:
      break
  }
}

const WalletContext = contextFactory('Wallet', initialState, reducer)

export default WalletContext
// Control Functions here

export const initWallet = async dispatch => {
  // check if any wallets have been connected
  // check if metamask is connected

  dispatch({ type: actions.INIT_WALLET })

  if (window.ethereum) {
    const { ethereum } = window
    dispatch({
      type: actions.SET_WALLET,
      payload: {
        vendor: availableWallets.METAMASK,
        wallet: ethereum
      }
    })

    window.ethereum.on('disconnect', () => {
      dispatch({
        type: actions.UNSET_WALLET,
        payload: { vendor: availableWallets.METAMASK }
      })
    })

    window.ethereum.on('chainChanged', chainId => {
      switch (chainId) {
        case '0x3': {
          alert('We currently on support Local Development Chain on 7545')
          break
        }

        case '0x1': {
          alert('We currently on support Local Development Chain on 7545')
          break
        }
        case '0x2a': {
          alert('We currently on support Local Development Chain on 7545')
          break
        }

        case '0x4': {
          alert('We currently on support Local Development Chain on 7545')
          break
        }
        default: {
          alert('We currently on support Local Development Chain on 7545')
          break
        }
      }
    })

    window.ethereum.on('accountsChanged', data => {
      dispatch({ type: actions.SET_ADDRESS, payload: data[0] })
    })

    if (ethereum.selectedAddress) {
      dispatch({ type: actions.SET_ADDRESS, payload: ethereum.selectedAddress })
    }
  }

  // check for wallet-connect
  const connector = new WalletConnect({
    bridge: 'https://bridge.walletconnect.org', // Required
    qrcodeModal: QRCodeModal
  })

  if (connector.connected) {
    // Check if connection is already established

    // Subscribe to connection events
    connector.on('connect', (error, payload) => {
      if (error) {
        throw error
      }

      // Get provided accounts and chainId
      const { accounts } = payload.params[0]
      dispatch({ type: actions.SET_ADDRESS, payload: accounts[0] })
    })

    connector.on('session_update', (error, payload) => {
      if (error) {
        throw error
      }

      // Get updated accounts and chainId
      const { accounts } = payload.params[0]
      dispatch({ type: actions.SET_ADDRESS, payload: accounts[0] })
    })

    connector.on('disconnect', (error, payload) => {
      if (error) {
        throw error
      }

      // Delete connector
      dispatch({
        type: actions.SET_ADDRESS,
        payload: 'Connect Wallet'
      })
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
      if (!ethereum.selectedAddress) {
        ethereum.enable()
      }

      // waits for a selected wallet
      const interval = setInterval(() => {
        if (ethereum.selectedAddress) {
          dispatch({
            type: actions.SET_WALLET,
            payload: {
              vendor,
              wallet: ethereum,
              address: ethereum.selectedAddress
            }
          })
          clearInterval(interval)
        }
      }, 1)

      if (ethereum?.selectedAddress) {
        dispatch({
          type: actions.SET_ADDRESS,
          payload: ethereum?.selectedAddress
        })
      }

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
              wallet: connector,
              payload: { vendor, address: connector._accounts[0] }
            })
          }
        })
        break
      }

      dispatch({
        type: actions.SET_WALLET,
        payload: {
          vendor,
          wallet: connector,
          address: connector._accounts[0]
        }
      })

      dispatch({
        type: actions.SET_ADDRESS,
        payload: connector._accounts[0]
      })

      break
    }
    default: {
      dispatch({ type: actions.SET_WALLET_FAILED })
      break
    }
  }
}

export const unSetWallet = (dispatch, vendor) => {
  dispatch({ type: actions.UNSET_WALLET, payload: { vendor } })
}

export const setWalletAddress = (dispatch, address) => {
  dispatch({ type: actions.SET_ADDRESS, payload: address })
}
