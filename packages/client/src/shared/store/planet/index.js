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
    result: null
  },
  newPlayer: {
    loading: false,
    error: null,
    result: null
  },
  isPlaying: {
    loading: false,
    error: null,
    result: null
  },
  players: {
    loading: false,
    error: null,
    result: null
  },
  tiles: {
    loading: false,
    error: null,
    result: null
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
  CALL_BUY_TILE_FAILURE: 'CALL_BUY_TILE_FAILURE',
  CALL_NEW_PLAYER_REQUEST: 'CALL_NEW_PLAYER_REQUEST',
  CALL_NEW_PLAYER_SUCCESS: 'CALL_NEW_PLAYER_SUCCESS',
  CALL_NEW_PLAYER_FAILURE: 'CALL_NEW_PLAYER_FAILURE',
  GET_IS_PLAYING_REQUEST: 'GET_IS_PLAYING_REQUEST',
  GET_IS_PLAYING_SUCCESS: 'GET_IS_PLAYING_SUCCESS',
  GET_IS_PLAYING_FAILURE: 'GET_IS_PLAYING_FAILURE',
  GET_PLAYERS_REQUEST: 'GET_PLAYERS_REQUEST',
  GET_PLAYERS_SUCCESS: 'GET_PLAYERS_SUCCESS',
  GET_PLAYERS_FAILURE: 'GET_PLAYERS_FAILURE',
  GET_TILES_REQUEST: 'GET_TILES_REQUEST',
  GET_TILES_SUCCESS: 'GET_TILES_SUCCESS',
  GET_TILES_FAILURE: 'GET_TILES_FAILURE'
}

// Action Creators
export const ACTIONS = {
  changePlanet: makeAction(TYPES.SET_PLANET, 'payload'),
  getTileFeeRequest: makeAction(TYPES.GET_TILE_FEE_REQUEST, 'payload'),
  getTileFeeSuccess: makeAction(TYPES.GET_TILE_FEE_SUCCESS, 'payload'),
  getTileFeeFailure: makeAction(TYPES.GET_TILE_FEE_FAILURE, 'payload'),
  callBuyTileRequest: makeAction(TYPES.CALL_BUY_TILE_REQUEST, 'payload'),
  callBuyTileSuccess: makeAction(TYPES.CALL_BUY_TILE_SUCCESS, 'payload'),
  callBuyTileFailure: makeAction(TYPES.CALL_BUY_TILE_FAILURE, 'payload'),
  callNewPlayerRequest: makeAction(TYPES.CALL_NEW_PLAYER_REQUEST, 'payload'),
  callNewPlayerSuccess: makeAction(TYPES.CALL_NEW_PLAYER_SUCCESS, 'payload'),
  callNewPlayerFailure: makeAction(TYPES.CALL_NEW_PLAYER_FAILURE, 'payload'),
  getIsPlayingRequest: makeAction(TYPES.GET_IS_PLAYING_REQUEST, 'payload'),
  getIsPlayingSuccess: makeAction(TYPES.GET_IS_PLAYING_SUCCESS, 'payload'),
  getIsPlayingFailure: makeAction(TYPES.GET_IS_PLAYING_FAILURE, 'payload'),
  getPlayersRequest: makeAction(TYPES.GET_PLAYERS_REQUEST, 'payload'),
  getPlayersSuccess: makeAction(TYPES.GET_PLAYERS_SUCCESS, 'payload'),
  getPlayersFailure: makeAction(TYPES.GET_PLAYERS_FAILURE, 'payload'),
  getTilesRequest: makeAction(TYPES.GET_TILES_REQUEST, 'payload'),
  getTilesSuccess: makeAction(TYPES.GET_TILES_SUCCESS, 'payload'),
  getTilesFailure: makeAction(TYPES.GET_TILES_FAILURE, 'payload')
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
    return { ...state, buyTile: { loading: true, error: null, result: null } }
  },
  [TYPES.CALL_BUY_TILE_SUCCESS]: (state, action) => {
    const buyTile = { loading: false, error: null, result: action.payload }
    return { ...state, buyTile }
  },
  [TYPES.CALL_BUY_TILE_FAILURE]: (state, action) => {
    const buyTile = { loading: false, error: action.payload, message: null }
    return { ...state, buyTile }
  },
  [TYPES.CALL_NEW_PLAYER_REQUEST]: state => {
    return { ...state, newPlayer: { loading: true, error: null, result: null } }
  },
  [TYPES.CALL_NEW_PLAYER_SUCCESS]: (state, action) => {
    const newPlayer = { loading: false, error: null, result: action.payload }
    return { ...state, newPlayer }
  },
  [TYPES.CALL_NEW_PLAYER_FAILURE]: (state, action) => {
    const newPlayer = { loading: false, error: action.payload, message: null }
    return { ...state, newPlayer }
  },
  [TYPES.GET_IS_PLAYING_REQUEST]: state => {
    return { ...state, isPlaying: { loading: true, error: null, result: null } }
  },
  [TYPES.GET_IS_PLAYING_SUCCESS]: (state, action) => {
    const isPlaying = { loading: false, error: null, result: action.payload }
    return { ...state, isPlaying }
  },
  [TYPES.GET_IS_PLAYING_FAILURE]: (state, action) => {
    const isPlaying = { loading: false, error: action.payload, message: null }
    return { ...state, isPlaying }
  },
  [TYPES.GET_PLAYERS_REQUEST]: state => {
    return { ...state, players: { loading: true, error: null, result: null } }
  },
  [TYPES.GET_PLAYERS_SUCCESS]: (state, action) => {
    const players = { loading: false, error: null, result: action.payload }
    return { ...state, players }
  },
  [TYPES.GET_IS_PLAYING_FAILURE]: (state, action) => {
    const players = { loading: false, error: action.payload, result: null }
    return { ...state, players }
  },
  [TYPES.GET_TILES_REQUEST]: state => {
    return { ...state, tiles: { loading: true, error: null, result: null } }
  },
  [TYPES.GET_TILES_SUCCESS]: (state, action) => {
    const tiles = { loading: false, error: null, result: action.payload }
    return { ...state, tiles }
  },
  [TYPES.GET_TILES_FAILURE]: (state, action) => {
    const tiles = { loading: false, error: action.payload, result: null }
    return { ...state, tiles }
  }
})

// Selectors
export const selectCurrentPlanet = state => state.planet.onPlanet
