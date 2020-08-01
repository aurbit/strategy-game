// Place these into a folder - Incase a store starts having many actions / sagas etc
// We can easily split them up into separate files
import { makeAction, createReducer } from 'shared/utils/redux-utils'

const NETWORKS = {
  DEVELOPMENT: 'development',
  MAINNET: 'mainnet',
  ROPSTEN: 'ropsten',
  RINKEBY: 'rinkeby',
  KOVAN: 'kovan'
}

const INITIAL_STATE = {
  network: null,
  web3: null
}

// Action Types
const TYPES = {
  SET_NETWORK: 'SET_NETWORK'
}

// Action Creators
export const ACTIONS = {
  setNetwork: makeAction(TYPES.SET_NETWORK, 'payload')
}

// Reducer
export const avatarReducer = createReducer(INITIAL_STATE, {
  [TYPES.SET_AUR_BALANCE]: (state, action) => {
    return {
      ...state,
      network: action.payload.network,
      web3: action.payload.web3
    }
  }
})
