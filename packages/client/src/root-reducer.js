import { combineReducers } from 'redux'

import { avatarReducer } from 'shared/store/avatar/index'
import { tokenReducer } from 'shared/store/token/index'
import { walletReducer } from 'shared/store/wallet/index'
import { planetReducer } from 'shared/store/planet/index'
import { mapReducer } from 'shared/store/map/index'
import { chatReducer } from 'shared/store/chat'
import { chainReducer } from 'shared/store/chain'

const rootReducer = combineReducers({
  avatar: avatarReducer,
  chain: chainReducer,
  token: tokenReducer,
  wallet: walletReducer,
  planet: planetReducer,
  map: mapReducer,
  chat: chatReducer
})

export default rootReducer
