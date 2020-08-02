import { makeAction, createReducer } from 'shared/utils/redux-utils'

const INITIAL_STATE = {
  grid: [],
  activeTile: null
}

// Action Types
export const TYPES = {
  GET_MAP_REQUEST: 'GET_MAP_REQUEST',
  GET_MAP_SUCCESS: 'GET_MAP_SUCCESS',
  GET_MAP_FAILED: 'GET_MAP_FAILED',
  SET_ACTIVE_TILE: 'SET_ACTIVE_TILE'
}

// Action Creators
export const ACTIONS = {
  setActiveTile: makeAction(TYPES.SET_ACTIVE_TILE, 'payload'),
  getMap: makeAction(TYPES.GET_MAP_REQUEST, 'payload'),
  getMapSuccess: makeAction(TYPES.GET_MAP_SUCCESS, 'payload'),
  getMapFailure: makeAction(TYPES.GET_MAP_FAILED, 'payload')
}

// Reducer
export const mapReducer = createReducer(INITIAL_STATE, {
  [TYPES.GET_MAP_REQUEST]: (state, action) => {
    return { ...state, map: { ...state.map, loading: true } }
  },
  [TYPES.GET_MAP_SUCCESS]: (state, action) => {
    return {
      ...state,
      map: { ...state.map, loading: false, grid: action.payload.grid }
    }
  },
  [TYPES.GET_MAP_FAILED]: (state, action) => {
    return { ...state, map: { ...state.map, loading: false } }
  },
  [TYPES.SET_ACTIVE_TILE]: (state, action) => {
    const newMap = Object.assign(state.map, { activeTile: action.payload })
    return {
      ...state,
      map: newMap
    }
  }
})
