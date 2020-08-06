// Place these into a folder - Incase a store starts having many actions / sagas etc
// We can easily split them up into separate files

import { makeAction, createReducer } from 'shared/utils/redux-utils'

export const WALLETS = {
  METAMASK: 'METAMASK',
  WALLET_CONNECT: 'WALLET_CONNECT'
}

const initialState = {
  vendor: null,
  address: null
}

// Action Types
export const TYPES = {
  INIT_WALLET: 'INIT_WALLET',
  SET_WALLET: 'SET_WALLET',
  SET_WALLET_FAILED: 'SET_WALLET_FAILED',
  UNSET_WALLET: 'UNSET_WALLET',
  SET_ADDRESS: 'SET_ADDRESS',
  SET_NETWORK: 'SET_NETWORK'
}

// Action Creators
export const ACTIONS = {
  initWallet: makeAction(TYPES.INIT_WALLET),
  setWallet: makeAction(TYPES.SET_WALLET, 'payload'),
  unSetWallet: makeAction(TYPES.UNSET_WALLET, 'payload'),
  setNetwork: makeAction(TYPES.SET_NETWORK, 'payload'),
  setAddress: makeAction(TYPES.SET_ADDRESS, 'payload')
}

// Reducer
export const walletReducer = createReducer(initialState, {
  [TYPES.SET_WALLET]: (state, action) => {
    // if (window.ethereum && !window.ethereum.enabled()) window.ethereum.connect()
    const { vendor } = action.payload

    if (window?.ethereum && !window?.ethereum.selectedAddress) {
      return window.ethereum.enable()
    }
    const address =
      vendor === WALLETS.METAMASK
        ? window.ethereum.selectedAddress
        : vendor === WALLETS.WALLET_CONNECT
        ? window.connector._accounts[0]
        : 'Disconnected'
    const newState = Object.assign(state, {
      vendor,
      address
    })
    return newState
  },
  [TYPES.UNSET_WALLET]: (state, action) => {
    const { vendor } = action.payload
    const newVendor = state.vendor === vendor ? null : vendor
    const newAddress = state.vendor === vendor ? null : state.address
    return {
      vendor: newVendor,
      address: newAddress
    }
  },
  [TYPES.SET_ADDRESS]: (state, action) => {
    return {
      ...state,
      address: action.payload.address
    }
  }
})

export const selectAddress = state => state.wallet.address
