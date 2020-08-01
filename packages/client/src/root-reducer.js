import { combineReducers } from 'redux'

import { avatarReducer } from 'shared/store/avatar/index'

// right now we have only 1 reducer, but lets use this format of combineReducers so you can add more later if you need to.
const rootReducer = combineReducers({
  avatar: avatarReducer
})

export default rootReducer
