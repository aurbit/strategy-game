import contextFactory, { STATUS } from 'shared/context/factory'
import { availablePlanets } from './planet'
import bitmap from 'shared/utils/bitmap'

const FLEEK_BUCKET_URL = 'https://xhad-team-bucket.storage.fleek.co'

export { STATUS }

const availableMaps = {
  EARTH: `${FLEEK_BUCKET_URL}/earth-map.json`
}

const initialState = {
  map: {
    status: STATUS.INIT,
    tiles: []
  }
}

const actions = {
  GET_MAP_REQUEST: 'GET_MAP_REQUEST',
  GET_MAP_SUCCESS: 'GET_MAP_SUCCESS',
  GET_MAP_FAILED: 'GET_MAP_FAILED'
}

export function reducer (state, action) {
  switch (action.type) {
    case actions.GET_MAP_REQUEST:
      return {
        ...state,
        map: {
          status: STATUS.GETTING,
          grid: []
        }
      }
    case actions.GET_MAP_SUCCESS:
      return {
        ...state,
        map: {
          status: STATUS.IDLE,
          grid: action.payload
        }
      }
    case actions.GET_MAP_FAILED:
      return {
        ...state,
        map: {
          status: STATUS.IDLE,
          grid: []
        }
      }
    default:
      break
  }
}

export const getMap = async (dispatch, planet) => {
  dispatch({ type: actions.GET_MAP_REQUEST })
  switch (planet) {
    case availablePlanets.EARTH: {
      const result = await fetch(availableMaps.EARTH)
      const body = await result.json()
      const grid = await bitmap(body)
      return result.status === 200
        ? dispatch({ type: actions.GET_MAP_SUCCESS, payload: grid })
        : dispatch({ type: actions.GET_MAP_FAILED })
    }
  }
}

export default contextFactory('Map', initialState, reducer)
