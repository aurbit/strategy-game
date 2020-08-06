// Place these into a folder - Incase a store starts having many actions / sagas etc
// We can easily split them up into separate files

import { makeAction, createReducer } from 'shared/utils/redux-utils'

export const NETWORKS = {
  DEVELOPMENT: 'development',
  MAINNET: 'mainnet',
  ROPSTEN: 'ropsten',
  RINKEBY: 'rinkeby',
  KOVAN: 'kovan'
}

const initialState = {
  loading: false,
  error: null,
  success: null,
  address: null,
  network: null
}

// Action Types
export const TYPES = {
  INIT_WALLET_REQUEST: 'INIT_WALLET_REQUEST',
  INIT_WALLET_SUCCESS: 'INIT_WALLET_SUCCESS',
  INIT_WALLET_FAILURE: 'INIT_WALLET_FAILURE',
  SET_WALLET_REQUEST: 'SET_WALLET_REQUEST',
  SET_WALLET_SUCCESS: 'SET_WALLET_SUCCESS',
  SET_WALLET_FAILURE: 'SET_WALLET_FAILURE',
  UNSET_WALLET: 'UNSET_WALLET',
  SET_ADDRESS: 'SET_ADDRESS',
  SET_NETWORK: 'SET_NETWORK'
}

// Action Creators
export const ACTIONS = {
  initWalletRequest: makeAction(TYPES.INIT_WALLET_REQUEST, 'payload'),
  initWalletSuccess: makeAction(TYPES.INIT_WALLET_SUCCESS, 'payload'),
  initWalletFailure: makeAction(TYPES.INIT_WALLET_FAILURE, 'payload'),
  setWalletRequest: makeAction(TYPES.INIT_WALLET_REQUEST, 'payload'),
  setWalletSuccess: makeAction(TYPES.INIT_WALLET_SUCCESS, 'payload'),
  setWalletFailure: makeAction(TYPES.INIT_WALLET_FAILURE, 'payload'),
  unSetWallet: makeAction(TYPES.UNSET_WALLET, 'payload'),
  setNetwork: makeAction(TYPES.SET_NETWORK, 'payload'),
  setAddress: makeAction(TYPES.SET_ADDRESS, 'payload')
}

// Reducer
export const walletReducer = createReducer(initialState, {
  [TYPES.INIT_WALLET_REQUEST]: (state, action) => {
    return {
      laoding: true,
      error: null,
      success: false,
      vendor: null,
      address: null,
      network: null
    }
  },
  [TYPES.INIT_WALLET_SUCCESS]: (state, action) => {
    return {
      laoding: false,
      error: null,
      success: true,
      vendor: action.payload.vendor,
      address: action.payload.address,
      network: action.payload.network
    }
  },
  [TYPES.INIT_WALLET_FAILURE]: (state, action) => {
    return {
      loading: false,
      error: action.payload,
      success: false,
      vendor: null,
      address: null,
      network: null
    }
  },

  [TYPES.UNSET_WALLET]: (state, action) => {
    return {
      ...state,
      address: null,
      network: null
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
