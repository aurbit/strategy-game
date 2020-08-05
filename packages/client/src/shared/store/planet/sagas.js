import { store } from 'store'
import { TYPES, ACTIONS } from './index'
import { takeLatest, put, select } from 'redux-saga/effects'
import { selectPlanetContract } from 'shared/store/chain/selectors'

function * getTileFee () {
  const contract = yield select(selectPlanetContract)
  try {
    const result = yield contract.methods.TileBuyFee().call()
    yield put(ACTIONS.getTileFeeSuccess(result))
  } catch (err) {
    yield put(ACTIONS.getTileFeeFailure({ error: err }))
  }
}
export function * rootPlanetSagas () {
  yield takeLatest(TYPES.GET_TILE_FEE_REQUEST, getTileFee)
}
