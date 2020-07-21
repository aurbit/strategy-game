import { getRequest } from '../../shared/services/http'
import contextFactory, { STATUS } from '../../shared/context/factory'

const initialState = {
  status: STATUS.INIT,
  name: 'Earth',
  message: {
    planet: null
  },
  error: {
    planet: null
  }
}

// the action constants
const actions = {
  SET_PLANET: 'SET_PLANET'
}

// the state reducer switch
export function reducer (state, action) {
  switch (action.type) {
    case actions.SET_PLANET:
      return {
        ...state,
        status: STATUS.IDLE,
        name: action.payload,
        message: {
          planet: `You are now on planet ${action.payload}!`
        },
        error: {
          planet: null
        }
      }

    default:
      break
  }
}

// changes the planet
export function changePlanet (dispatch, name) {
  dispatch({ type: actions.SET_PLANET, payload: name })
}

export async function getRequestExample (dispatch) {
  try {
    dispatch({ type: 'actions.GET_EXAMPLE_REQUEST' })
    const url = 'https://api.google.com'
    const result = await getRequest(url)

    if (result.status === 200) {
      const data = await result.json()
      dispatch({ type: 'actions.GET_EXAMPLE_SUCCESS', payload: data })
    } else {
      dispatch({ type: 'actions.GET_EXAMPLE_FAILURE' })
    }
  } catch (err) {
    dispatch({
      type: 'actions.GET_EXAMPLE_FAILURE',
      payload: 'Failed to get example request'
    })
  }
}

export const PlanetContext = contextFactory('Planet', initialState, reducer)
