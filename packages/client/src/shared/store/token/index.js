// Place these into a folder - Incase a store starts having many actions / sagas etc
// We can easily split them up into separate files
import { makeAction, createReducer } from 'shared/utils/redux-utils'
import { utils } from 'web3'

const INITIAL_STATE = {
  balance: 0
}

// Action Types
const TYPES = {
  SET_AUR_BALANCE: 'SET_AUR_BALANCE'
}

// Action Creators
export const ACTIONS = {
  setAurBalance: makeAction(TYPES.SET_AUR_BALANCE, 'payload')
}

// Reducer
export const avatarReducer = createReducer(INITIAL_STATE, {
  [TYPES.SET_AUR_BALANCE]: (state, action) => {
    return { ...state, balance: utils.fromWei(action.payload) }
  }
})
