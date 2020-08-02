// Place these into a folder - Incase a store starts having many actions / sagas etc
// We can easily split them up into separate files

import { makeAction, createReducer } from 'shared/utils/redux-utils'

export const WALLETS = {
  METAMASK: 'METAMASK',
  WALLET_CONNECT: 'WALLET_CONNECT'
}

const initialState = {
  activeWallet: null,
  address: null,
  network: null,
  wallets: {
    [WALLETS.METAMASK]: null,
    [WALLETS.WALLET_CONNECT]: null
  }
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
    const { vendor, wallet, address } = action.payload
    const walletMap = { [vendor]: wallet }
    const newWallets = Object.assign(state.wallets, walletMap)
    const newState = Object.assign(state, {
      activeWallet: vendor,
      wallets: newWallets,
      address
    })
    return newState
  },
  [TYPES.UNSET_WALLET]: (state, action) => {
    const { vendor } = action.payload
    const { activeWallet, wallets } = state
    const newActiveWallet = activeWallet === vendor ? null : activeWallet
    const walletMap = { [vendor]: null }
    const newWallets = Object.assign(wallets, walletMap)

    return {
      ...state,
      activeWallet: newActiveWallet,
      wallets: newWallets
    }
  },
  [TYPES.SET_ADDRESS]: (state, action) => {
    return {
      ...state,
      address: action.payload.address
    }
  }
})

export const selectAddress = (state) => state.wallet.address
