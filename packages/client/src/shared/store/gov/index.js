import { makeAction, createReducer } from 'shared/utils/redux-utils'

const INITIAL_STATE = {
  planets: {
    loading: false,
    error: false,
    list: []
  }
}

export const GOV_EVENTS = {}

// Action Types
export const TYPES = {
  GET_PLANETS_REQUEST: 'GET_PLANETS_REQUEST'
}

// Action Creators
export const ACTIONS = {
  getPlanets: makeAction(TYPES.CALL_MINT_AVATAR, 'payload')
}

// Reducer
export const govReducer = createReducer(INITIAL_STATE, {
  [TYPES.CALL_MINT_AVATAR]: state => {
    return {
      ...state,
      loading: { ...state.loading, mint: true },
      success: { ...state.success, mint: null },
      error: { ...state.error, mint: null }
    }
  }
})
