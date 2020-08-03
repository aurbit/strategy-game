import { combineReducers } from 'redux'

import { avatarReducer } from 'shared/store/avatar'
import { tokenReducer } from 'shared/store/token'
import { walletReducer } from 'shared/store/wallet'
import { planetReducer } from 'shared/store/planet'
import { mapReducer } from 'shared/store/map'
import { chainReducer } from 'shared/store/chain'

const rootReducer = combineReducers({
  avatar: avatarReducer,
  chain: chainReducer,
  token: tokenReducer,
  wallet: walletReducer,
  planet: planetReducer,
  map: mapReducer
})

export default rootReducer
