import { makeAction, createReducer } from 'shared/utils/redux-utils'

const INITIAL_STATE = {
  activeIndex: null,
  avatars: {
    loading: false,
    error: null,
    list: []
  },
  mintAvatar: {
    loading: false,
    error: null,
    result: null
  },
  getDna: {
    loading: false,
    error: null,
    result: null
  },
  getAvatar: {
    loading: false,
    error: null,
    result: null
  }
}

export const AVATAR_EVENTS = {
  Mined: 'Mined',
  Minted: 'Minted'
}

// Action Types
export const TYPES = {
  CALL_MINT_AVATAR_REQUEST: 'CALL_MINT_AVATAR_REQUEST',
  CALL_MINT_AVATAR_SUCCESS: 'CALL_MINT_AVATAR_SUCCESS',
  CALL_MINT_AVATAR_FAILURE: 'CALL_MINT_AVATAR_FAILURE',
  GET_AVATARS_REQUEST: 'GET_AVATARS_REQUEST',
  GET_AVATARS_SUCCESS: 'GET_AVATARS_SUCCESS',
  GET_AVATARS_FAILURE: 'GET_AVATARS_FAILURE',
  SET_ACTIVE_INDEX: 'SET_ACTIVE_INDEX',
  GET_AVATAR_DNA_REQUEST: 'GET_AVATAR_DNA_REQUEST',
  GET_AVATAR_DNA_SUCCESS: 'GET_AVATAR_DNA_SUCCESS',
  GET_AVATAR_DNA_FAILURE: 'GET_AVATAR_DNA_FAILURE',
  GET_AVATAR_REQUEST: 'GET_AVATAR_REQUEST',
  GET_AVATAR_SUCCESS: 'GET_AVATAR_SUCCESS',
  GET_AVATAR_FAILURE: 'GET_AVATAR_FAILURE'
}

// Action Creators
export const ACTIONS = {
  callMintAvatarRequest: makeAction(TYPES.CALL_MINT_AVATAR_REQUEST, 'payload'),
  callMintAvatarSuccess: makeAction(TYPES.CALL_MINT_AVATAR_SUCCESS, 'payload'),
  callMintAvatarFailure: makeAction(TYPES.CALL_MINT_AVATAR_FAILURE, 'payload'),
  getAvatarsRequest: makeAction(TYPES.GET_AVATARS_REQUEST, 'payload'),
  getAvatarsSuccess: makeAction(TYPES.GET_AVATARS_SUCCESS, 'payload'),
  getAvatarsFailure: makeAction(TYPES.GET_AVATARS_FAILURE, 'payload'),
  setActiveIndex: makeAction(TYPES.SET_ACTIVE_INDEX, 'payload'),
  getAvatarDnaRequest: makeAction(TYPES.GET_AVATARS_REQUEST, 'payload'),
  getAvatarDnaSuccess: makeAction(TYPES.GET_AVATARS_SUCCESS, 'payload'),
  getAvatarDnaFailure: makeAction(TYPES.GET_AVATARS_FAILURE, 'payload'),
  getAvatarRequest: makeAction(TYPES.GET_AVATAR_REQUEST, 'payload'),
  getAvatarSuccess: makeAction(TYPES.GET_AVATAR_SUCCESS, 'payload'),
  getAvatarFailure: makeAction(TYPES.GET_AVATAR_FAILURE, 'payload')
}

// Reducer
export const avatarReducer = createReducer(INITIAL_STATE, {
  [TYPES.CALL_MINT_AVATAR_REQUEST]: state => {
    const mintAvatar = { loading: true, error: null, result: null }
    return { ...state, mintAvatar }
  },
  [TYPES.CALL_MINT_AVATAR_SUCCESS]: (state, action) => {
    const list = Array.from(state.avatars.list)
    const mintAvatar = { loading: false, error: null, result: action.payload }
    list.push(action.payload)
    const avatars = Object.assign({}, { ...state.avatars, list })
    return { ...state, avatars, mintAvatar }
  },
  [TYPES.CALL_MINT_AVATAR_FAILURE]: (state, action) => {
    const mintAvatar = { loading: false, error: action.payload, result: null }
    return { ...state, mintAvatar }
  },
  [TYPES.GET_AVATARS_REQUEST]: state => {
    const avatars = { loading: true, error: null, list: [] }
    return { ...state, avatars }
  },
  [TYPES.GET_AVATARS_SUCCESS]: (state, action) => {
    const avatars = {
      laoding: false,
      error: null,
      list: action.payload,
      success: true
    }
    const activeIndex = action.payload.length - 1
    return { ...state, avatars, activeIndex }
  },
  [TYPES.GET_AVATARS_FAILURE]: (state, action) => {
    const avatars = { loading: false, error: action.payload, list: [] }
    return { ...state, avatars }
  },
  [TYPES.SET_ACTIVE_INDEX]: (state, action) => {
    return { ...state, activeIndex: action.payload }
  },
  [TYPES.GET_AVATAR_DNA_REQUEST]: (state, action) => {
    const getDna = { loading: true, error: null, result: null }
    return { ...state, getDna }
  },
  [TYPES.GET_AVATAR_DNA_SUCCESS]: (state, action) => {
    const getDna = { loading: false, error: null, result: null }
    return { ...state, getDna }
  },
  [TYPES.GET_AVATAR_DNA_FAILURE]: (state, action) => {
    const getDna = { loading: false, error: null, result: null }
    return { ...state, getDna }
  },
  [TYPES.GET_AVATAR_REQUEST]: (state, action) => {
    const getAvatar = { loading: true, error: null, result: null }
    return { ...state, getAvatar }
  },
  [TYPES.GET_AVATAR_SUCCESS]: (state, action) => {
    const result = action.payload
    const getAvatar = { loading: false, error: null, result }
    return { ...state, getAvatar }
  },
  [TYPES.GET_AVATAR_FAILURE]: (state, action) => {
    const getAvatar = { loading: false, error: null, result: null }
    return { ...state, getAvatar }
  }
})
