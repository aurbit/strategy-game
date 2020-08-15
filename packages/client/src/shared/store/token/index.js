// Place these into a folder - Incase a store starts having many actions / sagas etc
// We can easily split them up into separate files
import { makeAction, createReducer } from 'shared/utils/redux-utils'

const INITIAL_STATE = {
  balance: {
    loading: false,
    error: null,
    value: 0
  },
  sendPlanetAur: {
    loading: false,
    error: null,
    result: null
  }
}

// Action Types
export const TYPES = {
  WALLET_AUR_BALANCE_REQUEST: 'WALLET_AUR_BALANCE_REQUEST',
  WALLET_AUR_BALANCE_SUCCESS: 'WALLET_AUR_BALANCE_SUCCESS',
  WALLET_AUR_BALANCE_FAILURE: 'WALLET_AUR_BALANCE_FAILURE',
  SEND_PLANET_AUR_REQUEST: 'SEND_PLANET_AUR_REQUEST',
  SEND_PLANET_AUR_SUCCESS: 'SEND_PLANET_AUR_SUCCESS',
  SEND_PLANET_AUR_FAILURE: 'SEND_PLANET_AUR_FAILURE'
}

// Action Creators
export const ACTIONS = {
  setAurBalance: makeAction(TYPES.SET_AUR_BALANCE, 'payload'),
  setAurBalanceError: makeAction(TYPES.SET_AUR_BALANCE_ERROR, 'payload'),
  getAurBalanceRequest: makeAction(TYPES.WALLET_AUR_BALANCE_REQUEST, 'payload'),
  getAurBalanceSuccess: makeAction(TYPES.WALLET_AUR_BALANCE_SUCCESS, 'payload'),
  getAurBalanceFailure: makeAction(TYPES.WALLET_AUR_BALANCE_FAILURE, 'payload'),
  sendPlanetAurRequest: makeAction(TYPES.SEND_PLANET_AUR_REQUEST, 'payload'),
  sendPlanetAurSuccess: makeAction(TYPES.SEND_PLANET_AUR_SUCCESS, 'payload'),
  sendPlanetAurFailure: makeAction(TYPES.SEND_PLANET_AUR_FAILURE, 'payload')
}

// Reducer
export const tokenReducer = createReducer(INITIAL_STATE, {
  [TYPES.WALLET_AUR_BALANCE_REQUEST]: (state, action) => {
    const balance = { loading: true, error: null, value: 0 }
    return { ...state, balance }
  },
  [TYPES.WALLET_AUR_BALANCE_SUCCESS]: (state, action) => {
    const balance = {
      loading: false,
      error: null,
      value: action?.payload
    }
    return { ...state, balance }
  },
  [TYPES.WALLET_AUR_BALANCE_FAILURE]: (state, action) => {
    const balance = { loading: false, error: action?.payload, value: 0 }
    return { ...state, balance }
  },
  [TYPES.SET_AUR_BALANCE_ERROR]: (state, action) => {
    return { ...state, error: true, errMsg: action?.payload }
  },
  [TYPES.SEND_PLANET_AUR_REQUEST]: state => {
    const sendPlanetAur = { loading: true, error: null, result: null }
    return { ...state, sendPlanetAur }
  },
  [TYPES.SEND_PLANET_AUR_SUCCESS]: (state, action) => {
    const result = action.payload
    const sendPlanetAur = { loading: false, error: null, result }
    return { ...state, sendPlanetAur }
  },
  [TYPES.SEND_PLANET_AUR_FAILURE]: (state, action) => {
    const error = action.payload
    const sendPlanetAur = { loading: false, error, result: null }
    return { ...state, sendPlanetAur }
  }
})
