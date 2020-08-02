import { makeAction, createReducer } from 'shared/utils/redux-utils'

const INITIAL_STATE = {
  loading: false,
  tokens: []
}

// Action Types
const TYPES = {
  AVATAR_REQUEST: 'AVATAR_REQUEST'
}

// Action Creators
export const ACTIONS = {
  fetchAvatarRequest: makeAction(TYPES.AVATAR_REQUEST, 'payload')
}

// Reducer
export const avatarReducer = createReducer(INITIAL_STATE, {
  [TYPES.AVATAR_REQUEST]: (state, action) => {
    return { ...state, loading: true }
  }
})
