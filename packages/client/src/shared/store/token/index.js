// Place these into a folder - Incase a store starts having many actions / sagas etc
// We can easily split them up into separate files
import { makeAction, createReducer } from 'shared/utils/redux-utils'

const INITIAL_STATE = {
  balance: {
    loading: false,
    error: null,
    value: 0
  }
}

// Action Types
export const TYPES = {
  GET_AUR_BALANCE_REQUEST: 'GET_AUR_BALANCE_REQUEST',
  GET_AUR_BALANCE_SUCCESS: 'GET_AUR_BALANCE_SUCCESS',
  GET_AUR_BALANCE_FAILURE: 'GET_AUR_BALANCE_FAILURE'
}

// Action Creators
export const ACTIONS = {
  setAurBalance: makeAction(TYPES.SET_AUR_BALANCE, 'payload'),
  setAurBalanceError: makeAction(TYPES.SET_AUR_BALANCE_ERROR, 'payload'),
  getAurBalanceRequest: makeAction(TYPES.GET_AUR_BALANCE_REQUEST, 'payload'),
  getAurBalanceSuccess: makeAction(TYPES.GET_AUR_BALANCE_SUCCESS, 'payload'),
  getAurBalanceFailure: makeAction(TYPES.GET_AUR_BALANCE_FAILURE, 'payload')
}

// Reducer
export const tokenReducer = createReducer(INITIAL_STATE, {
  [TYPES.GET_AUR_BALANCE_REQUEST]: (state, action) => {
    const balance = { loading: true, error: null, value: 0 }
    return { ...state, balance }
  },
  [TYPES.GET_AUR_BALANCE_SUCCESS]: (state, action) => {
    const balance = {
      loading: false,
      error: null,
      value: action?.payload
    }
    return { ...state, balance }
  },
  [TYPES.GET_AUR_BALANCE_FAILURE]: (state, action) => {
    const balance = { loading: false, error: action?.payload, value: 0 }
    return { ...state, balance }
  },

  [TYPES.SET_AUR_BALANCE_ERROR]: (state, action) => {
    return { ...state, error: true, errMsg: action?.payload }
  }
})

// Selectors
