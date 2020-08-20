// Place these into a folder - Incase a store starts having many actions / sagas etc
// We can easily split them up into separate files
import { makeAction, createReducer } from 'shared/utils/redux-utils'

export const NETWORKS = {
  DEVELOPMENT: 'development',
  MAINNET: 'mainnet',
  ROPSTEN: 'ropsten',
  RINKEBY: 'rinkeby',
  KOVAN: 'kovan',
  MATIC_MUMBAI: 'matic_mumbai',
  MATIC: 'matic'
}

const INITIAL_STATE = {
  network: NETWORKS.DEVELOPMENT,
  provider: null,
  avatarArtifacts: null,
  planetArtifacts: null,
  tokenArtifacts: null,
  avatarContract: null,
  planetContract: null,
  tokenContract: null,
  avatarEvents: [],
  planetEvents: [],
  tokenEvents: [],
  transactions: []
}

// Action Types
export const TYPES = {
  INIT_CHAIN: 'INIT_CHAIN',
  SET_NETWORK: 'SET_NETWORK',
  TOKEN_EVENT: 'CONTRACT_EVENT',
  PLANET_EVENT: 'PLANET_EVENT',
  GOV_EVENT: 'GOV_EVENT',
  INIT_PROVIDER: 'INIT_PROVIDER',
  SET_PROVIDER: 'SET_PROVIDER',
  INIT_ARTIFACTS: 'INIT_ARTIFACTS',
  SET_ARTIFACTS: 'SET_ARTIFACTS',
  INIT_CONTRACTS: 'INIT_CONTRACTS',
  SET_CONTRACTS: 'SET_CONTRACTS',
  CALL_MINT_AVATAR: 'CALL_MINT_AVATAR',
  NEW_TRANSACTION: 'NEW_TRANSACTION',
  AVATAR_CONTRACT_EVENT: 'AVATAR_CONTRACT_EVENT',
  PLANET_CONTRACT_EVENT: 'PLANET_CONTRACT_EVENT',
  TOKEN_CONTRACT_EVENT: 'TOKEN_CONTRACT_EVENT'
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
  callMintAvatar: makeAction(TYPES.CALL_MINT_AVATAR, 'payload'),
  newTransaction: makeAction(TYPES.NEW_TRANSACTION, 'payload'),
  avatarEvent: makeAction(TYPES.AVATAR_CONTRACT_EVENT, 'payload'),
  planetEvent: makeAction(TYPES.PLANET_CONTRACT_EVENT, 'payload'),
  tokenEvent: makeAction(TYPES.TOKEN_CONTRACT_EVENT, 'payload')
}

// Reducer
export const chainReducer = createReducer(INITIAL_STATE, {
  [TYPES.SET_NETWORK]: (state, action) => {
    const network = action.payload
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
  },
  [TYPES.NEW_TRANSACTION]: (state, action) => {
    const transactions = Array.from(state.transactions)
    transactions.push(action.payload)
    return { ...state, transactions }
  },
  [TYPES.AVATAR_CONTRACT_EVENT]: (state, action) => {
    const avatarEvents = Array.from(state.avatarEvents)
    avatarEvents.push(action.payload)
    return { ...state, avatarEvents }
  },
  [TYPES.PLANET_CONTRACT_EVENT]: (state, action) => {
    const planetEvents = Array.from(state.planetEvents)
    planetEvents.push(action.payload)
    return { ...state, planetEvents }
  },
  [TYPES.TOKEN_CONTRACT_EVENT]: (state, action) => {
    const tokenEvents = Array.from(state.tokenEvents)
    tokenEvents.push(action.payload)
    return { ...state, tokenEvents }
  }
})
