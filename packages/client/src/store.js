import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import logger from 'redux-logger'
import { rootWalletSagas } from 'shared/store/wallet/sagas'
import { rootMapSagas } from 'shared/store/map/sagas'
import { rootChainSagas } from 'shared/store/chain/sagas'
import { rootAvatarSagas } from 'shared/store/avatar/sagas'
import rootReducer from './root-reducer'
// we need an initialState otherwise , store will freak out
const initialState = {}

const sagaMiddleware = createSagaMiddleware()

function * rootSaga () {
  yield all([
    rootWalletSagas(),
    rootMapSagas(),
    rootChainSagas(),
    rootAvatarSagas()
  ])
}

// redux sagas is a middleware that we apply to the store
export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware, logger)
)
sagaMiddleware.run(rootSaga)

export default store
