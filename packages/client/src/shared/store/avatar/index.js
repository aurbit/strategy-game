// Place these into a folder - Incase a store starts having many actions / sagas etc
// We can easily split them up into separate files
import { takeLatest } from 'redux-saga/effects'
import { makeAction, createReducer } from 'shared/utils/redux-utils'

const initialState = {
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
export const avatarReducer = createReducer(initialState, {
  [TYPES.AVATAR_REQUEST]: (state, action) => {
    return { ...state, loading: true }
  }
})

// Sagas

function* fetchAvatar() {
  console.log('FETCHING')
}

export function* rootAvatarSagas() {
  yield takeLatest(TYPES.AVATAR_REQUEST, fetchAvatar)
}
