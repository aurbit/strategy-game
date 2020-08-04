import { makeAction, createReducer } from 'shared/utils/redux-utils'

const INITIAL_STATE = {
  loading: false,
  success: null,
  errMsg: null,
  tokens: []
}

// Action Types
export const TYPES = {
  CALL_MINT_AVATAR: 'CALL_MINT_AVATAR',
  CALL_MINT_AVATAR_SUCCESS: 'CALL_MINT_AVATAR_SUCCESS',
  CALL_MINT_AVATAR_FAILURE: 'CALL_MINT_AVATAR_FAILURE'
}

// Action Creators
export const ACTIONS = {
  callMintAvatar: makeAction(TYPES.CALL_MINT_AVATAR, 'payload'),
  callMintAvatarSuccess: makeAction(TYPES.CALL_MINT_AVATAR_SUCCESS, 'payload'),
  callMintAvatarFailure: makeAction(TYPES.CALL_MINT_AVATAR_FAILURE, 'payload')
}

// Reducer
export const avatarReducer = createReducer(INITIAL_STATE, {
  [TYPES.CALL_MINT_AVATAR]: state => {
    return { ...state, loading: true, success: null, errMsg: null }
  },
  [TYPES.CALL_MINT_AVATAR_SUCCESS]: (state, action) => {
    const tokens = Array.from(state.tokens)
    tokens.push(action.payload)
    return { loading: false, success: true, tokens, errMsg: null }
  },
  [TYPES.CALL_MINT_AVATAR_FAILURE]: (state, action) => {
    return { ...state, loading: false, success: false, errMsg: action.payload }
  }
})
