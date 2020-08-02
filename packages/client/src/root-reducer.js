import { combineReducers } from 'redux'

import { avatarReducer } from 'shared/store/avatar/index'
import { tokenReducer } from 'shared/store/token/index'
import { walletReducer } from 'shared/store/wallet/index'
import { planetReducer } from 'shared/store/planet/index'
import { mapReducer } from 'shared/store/map/index'

const rootReducer = combineReducers({
  avatar: avatarReducer,
  token: tokenReducer,
  wallet: walletReducer,
  planet: planetReducer,
  map: mapReducer
})

export default rootReducer