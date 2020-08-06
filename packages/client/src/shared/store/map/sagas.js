import { takeLatest, call, put, select } from 'redux-saga/effects'
import { PLANETS } from 'shared/store/planet/index'
import { selectPlanetContract } from 'shared/store/chain/selectors'

import bitmap from 'shared/utils/bitmap'
import { ACTIONS, TYPES } from './index'

function * getMap () {
  const contract = yield select(selectPlanetContract)
  try {
    const result = yield contract.methods.getMap().call()
    const grid = bitmap(result)
    yield put(ACTIONS.getMapSuccess({ grid }))
  } catch (err) {
    yield put(ACTIONS.getMapFailure({ error: err }))
  }
}

export function * rootMapSagas () {
  yield takeLatest(TYPES.GET_MAP_REQUEST, getMap)
}
