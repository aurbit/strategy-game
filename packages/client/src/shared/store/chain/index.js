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

const INITIAL_STATE = {
  network: NETWORKS.DEVELOPMENT
}

// Action Types
const TYPES = {
  INIT_CHAIN: 'INIT_CHAIN',
  SET_NETWORK: 'SET_NETWORK',
  TOKEN_EVENT: 'CONTRACT_EVENT',
  PLANET_EVENT: 'PLANET_EVENT',
  AVATAR_EVENT: 'AVATAR_EVENT',
  GOV_EVENT: 'GOV_EVENT'
}

// Action Creators
export const ACTIONS = {
  initChain: makeAction(TYPES.INIT_CHAIN, 'payload'),
  setNetwork: makeAction(TYPES.SET_NETWORK, 'payload'),
  contractEvent: makeAction(TYPES.CONTACT_EVENT, 'payload')
}

// Reducer
export const chainReducer = createReducer(INITIAL_STATE, {
  [TYPES.SET_NETWORK]: (state, action) => {
    const { network } = action.payload
    return { ...state, network }
  }
})
