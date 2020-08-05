// Place these into a folder - Incase a store starts having many actions / sagas etc
// We can easily split them up into separate files
import { makeAction, createReducer } from 'shared/utils/redux-utils'

export const PLANETS = {
  EARTH: 'EARTH',
  MARS: 'MARS',
  VENUS: 'VENUS'
}

const initialState = {
  onPlanet: PLANETS.EARTH,
  tileFee: {
    loading: false,
    error: null,
    value: 0
  },
  buyTile: {
    loading: false,
    error: null,
    message: null
  }
}

// Action Types
export const TYPES = {
  SET_PLANET: 'SET_PLANET',
  GET_TILE_FEE_REQUEST: 'GET_TILE_FEE_REQUEST',
  GET_TILE_FEE_SUCCESS: 'GET_TILE_FEE_SUCCESS',
  GET_TILE_FEE_FAILURE: 'GET_TILE_FEE_FAILURE',
  CALL_BUY_TILE_REQUEST: 'CALL_BUY_TILE_REQUEST',
  CALL_BUY_TILE_SUCCESS: 'CALL_BUY_TILE_SUCCESS',
  CALL_BUY_TILE_FAILURE: 'CALL_BUY_TILE_FAILURE'
}

// Action Creators
export const ACTIONS = {
  changePlanet: makeAction(TYPES.SET_PLANET, 'payload'),
  getTileFeeRequest: makeAction(TYPES.GET_TILE_FEE_REQUEST, 'payload'),
  getTileFeeSuccess: makeAction(TYPES.GET_TILE_FEE_SUCCESS, 'payload'),
  getTileFeeFailure: makeAction(TYPES.GET_TILE_FEE_FAILURE, 'payload'),
  callBuyTileRequest: makeAction(TYPES.CALL_BUY_TILE_REQUEST, 'payload'),
  callBuyTileSuccess: makeAction(TYPES.CALL_BUY_TILE_SUCCESS, 'payload'),
  callBuyTileFailure: makeAction(TYPES.CALL_BUY_TILE_FAILURE, 'payload')
}

// Reducer
export const planetReducer = createReducer(initialState, {
  [TYPES.SET_PLANET]: (state, action) => {
    return { ...state, onPlanet: action.payload }
  },
  [TYPES.GET_TILE_FEE_REQUEST]: state => {
    return { ...state, tileFee: { loading: true, error: null, value: 0 } }
  },
  [TYPES.GET_TILE_FEE_SUCCESS]: (state, action) => {
    const tileFee = { loading: false, error: null, value: action.payload }
    return { ...state, tileFee }
  },
  [TYPES.GET_TILE_FEE_FAILURE]: (state, action) => {
    const tileFee = { loading: false, error: action.payload, value: 0 }
    return { ...state, tileFee }
  },
  [TYPES.CALL_BUY_TILE_REQUEST]: state => {
    return { ...state, buyTile: { loading: true, error: null, message: null } }
  },
  [TYPES.CALL_BUY_TILE_SUCCESS]: (state, action) => {
    const buyTile = { loading: false, error: null, message: action.payload }
    return { ...state, buyTile }
  },
  [TYPES.CALL_BUY_TILE_FAILURE]: (state, action) => {
    const buyTile = { loading: false, error: action.payload, message: null }
    return { ...state, buyTile }
  }
})

// Selectors
export const selectCurrentPlanet = state => state.planet.onPlanet
