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
  network: NETWORKS.DEVELOPMENT,
  provider: null,
  avatarArtifacts: null,
  planetArtifacts: null,
  tokenArtifacts: null,
  avatarContract: null,
  planetContract: null,
  tokenContract: null
}

// Action Types
export const TYPES = {
  INIT_CHAIN: 'INIT_CHAIN',
  SET_NETWORK: 'SET_NETWORK',
  TOKEN_EVENT: 'CONTRACT_EVENT',
  PLANET_EVENT: 'PLANET_EVENT',
  AVATAR_EVENT: 'AVATAR_EVENT',
  GOV_EVENT: 'GOV_EVENT',
  INIT_PROVIDER: 'INIT_PROVIDER',
  SET_PROVIDER: 'SET_PROVIDER',
  INIT_ARTIFACTS: 'INIT_ARTIFACTS',
  SET_ARTIFACTS: 'SET_ARTIFACTS',
  INIT_CONTRACTS: 'INIT_CONTRACTS',
  SET_CONTRACTS: 'SET_CONTRACTS',
  CALL_MINT_AVATAR: 'CALL_MINT_AVATAR'
}

// INIT Actions will be used to trigger a SAGA - Do required logic in Saga - then use SET Action to dispatch this into reducer

// Action Creators
export const ACTIONS = {
  initChain: makeAction(TYPES.INIT_CHAIN, 'payload'),
  setNetwork: makeAction(TYPES.SET_NETWORK, 'payload'),
  contractEvent: makeAction(TYPES.CONTACT_EVENT, 'payload'),
  initProvider: makeAction(TYPES.INIT_PROVIDER),
  setProvider: makeAction(TYPES.SET_PROVIDER, 'payload'),
  initArtifacts: makeAction(TYPES.INIT_ARTIFACTS),
  setArtifacts: makeAction(TYPES.SET_ARTIFACTS, 'payload'),
  initContracts: makeAction(TYPES.INIT_CONTRACTS),
  setContracts: makeAction(TYPES.SET_CONTRACTS, 'payload'),
  callMintAvatar: makeAction(TYPES.CALL_MINT_AVATAR, 'payload')
}

// Reducer
export const chainReducer = createReducer(INITIAL_STATE, {
  [TYPES.SET_NETWORK]: (state, action) => {
    const { network } = action.payload
    return { ...state, network }
  },
  [TYPES.SET_PROVIDER]: (state, action) => {
    return { ...state, provider: action.payload.provider }
  },
  [TYPES.SET_ARTIFACTS]: (state, action) => {
    return {
      ...state,
      avatarArtifacts: action.payload.avatar,
      planetArtifacts: action.payload.planet,
      tokenArtifacts: action.payload.token
    }
  },
  [TYPES.SET_CONTRACTS]: (state, action) => {
    return {
      ...state,
      avatarContract: action.payload.avatar,
      planetContract: action.payload.planet,
      tokenContract: action.payload.token
    }
  }
})
