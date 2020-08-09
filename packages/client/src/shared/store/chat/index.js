import { makeAction, createReducer } from 'shared/utils/redux-utils'
import { ThreadService } from './thread-service'
const INITIAL_STATE = {
  chatProvider: null
}

// Action Types
const TYPES = {
  INIT_CHAT: 'INIT_CHAT'
}

// Action Creators
export const ACTIONS = {
  initChat: makeAction(TYPES.INIT_CHAT)
}

// Reducer
export const chatReducer = createReducer(INITIAL_STATE, {
  [TYPES.INIT_CHAT]: (state, action) => {
    const chat = new ThreadService()
    return { ...state, chatProvider: chat }
  }
})

// Selectors
export const selectChat = (state) => state.chat.chatProvider
