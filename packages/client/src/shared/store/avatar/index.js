import { makeAction, createReducer } from 'shared/utils/redux-utils'

const INITIAL_STATE = {
  loading: { get: null, mint: null },
  success: { get: null, mint: null },
  error: { get: null, mint: null },
  auras: []
}

export const AVATAR_EVENTS = {
  Mined: 'Mined',
  Minted: 'Minted'
}

// Action Types
export const TYPES = {
  CALL_MINT_AVATAR: 'CALL_MINT_AVATAR',
  CALL_MINT_AVATAR_SUCCESS: 'CALL_MINT_AVATAR_SUCCESS',
  CALL_MINT_AVATAR_FAILURE: 'CALL_MINT_AVATAR_FAILURE',
  GET_AVATARS_REQUEST: 'GET_AVATARS_REQUEST',
  GET_AVATARS_SUCCESS: 'GET_AVATARS_SUCCESS',
  GET_AVATARS_FAILURE: 'GET_AVATARS_FAILURE'
}

// Action Creators
export const ACTIONS = {
  callMintAvatar: makeAction(TYPES.CALL_MINT_AVATAR, 'payload'),
  callMintAvatarSuccess: makeAction(TYPES.CALL_MINT_AVATAR_SUCCESS, 'payload'),
  callMintAvatarFailure: makeAction(TYPES.CALL_MINT_AVATAR_FAILURE, 'payload'),
  getAvatarsRequest: makeAction(TYPES.GET_AVATARS_REQUEST, 'payload'),
  getAvatarsSuccess: makeAction(TYPES.GET_AVATARS_SUCCESS, 'payload'),
  getAvatarsFailure: makeAction(TYPES.GET_AVATARS_FAILURE, 'payload')
}

// Reducer
export const avatarReducer = createReducer(INITIAL_STATE, {
  [TYPES.CALL_MINT_AVATAR]: state => {
    return {
      ...state,
      loading: { ...state.loading, mint: true },
      success: { ...state.success, mint: null },
      error: { ...state.error, mint: null }
    }
  },
  [TYPES.CALL_MINT_AVATAR_SUCCESS]: (state, action) => {
    const auras = Array.from(state.auras)
    auras.push(action.payload)
    return {
      ...state,
      auras,
      loading: { ...state.loading, mint: false },
      success: { ...state.success, mint: true },
      error: { ...state.error, mint: null }
    }
  },
  [TYPES.CALL_MINT_AVATAR_FAILURE]: (state, action) => {
    return {
      ...state,
      loading: { ...state.loading, mint: false },
      success: { ...state.success, mint: false },
      error: { ...state.error, mint: action.payload }
    }
  },
  [TYPES.GET_AVATARS_REQUEST]: state => {
    return {
      ...state,
      loading: { ...state.loading, get: true },
      success: { ...state.success, get: null },
      error: { ...state.error, get: null }
    }
  },
  [TYPES.GET_AVATARS_SUCCESS]: (state, action) => {
    return {
      ...state,
      auras: action.payload,
      loading: { ...state.loading, get: false },
      success: { ...state.success, get: true },
      error: { ...state.error, get: null }
    }
  },
  [TYPES.GET_AVATARS_FAILURE]: (state, action) => {
    return {
      ...state,
      loading: { ...state.loading, get: false },
      success: { ...state.sucess, get: false },
      error: { ...state.error, get: action.payload }
    }
  }
})
