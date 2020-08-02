// Place these into a folder - Incase a store starts having many actions / sagas etc
// We can easily split them up into separate files
import { makeAction, createReducer } from 'shared/utils/redux-utils'
import { utils } from 'web3'

const INITIAL_STATE = {
  balance: 0,
  error: false,
  errMsg: ''
}

// Action Types
const TYPES = {
  SET_AUR_BALANCE: 'SET_AUR_BALANCE',
  SET_AUR_BALANCE_ERROR: 'SET_AUR_BALANCE_ERROR'
}

// Action Creators
export const ACTIONS = {
  setAurBalance: makeAction(TYPES.SET_AUR_BALANCE, 'payload'),
  setAurBalanceError: makeAction(TYPES.SET_AUR_BALANCE_ERROR, 'payload')
}

// Reducer
export const tokenReducer = createReducer(INITIAL_STATE, {
  [TYPES.SET_AUR_BALANCE]: (state, action) => {
    return {
      ...state,
      balance: utils.fromWei(action.payload),
      error: false,
      errMsg: ''
    }
  },
  [TYPES.SET_AUR_BALANCE_ERROR]: (state, action) => {
    return { ...state, error: true, errMsg: action.payload }
  }
})

// Selectors
export const selectBalance = (state) => state.token.balance
