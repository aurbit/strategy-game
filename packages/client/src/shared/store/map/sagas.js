import { takeLatest, call, put } from 'redux-saga/effects'
import { PLANETS } from 'shared/store/planet/index'
import bitmap from 'shared/utils/bitmap'
import { ACTIONS, TYPES } from './index'
// Move to ENV Variables?
const FLEEK_BUCKET_URL = 'https://xhad-team-bucket.storage.fleek.co'

const MAP_URL = {
  EARTH: `${FLEEK_BUCKET_URL}/earth-map.json`
}

function* getMap(action) {
  const { planet } = action.payload
  let url = ''
  switch (planet) {
    case PLANETS.EARTH:
      url = MAP_URL.EARTH
      break
    default:
      throw new Error('Invalid planet')
  }
  try {
    const result = yield call(callMapApi, url)
    const grid = bitmap(result)
    yield put(ACTIONS.getMapSuccess({ grid }))
  } catch (err) {
    yield put(ACTIONS.getMapFailure({ error: err }))
  }
}

const callMapApi = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => {
      throw err
    })
}

export function* rootMapSagas() {
  yield takeLatest(TYPES.GET_MAP_REQUEST, getMap)
}
