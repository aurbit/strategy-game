import React from 'react'
import { getRequest } from '../../shared/services/http'
import logger from 'use-reducer-logger'

const PlanetContext = React.createContext()
// status to handle status context
export const PLANET_STATUS = {
  INIT: 'INIT',
  IDLE: 'IDLE',
  GETTING: 'GETTING'
}

const initialState = {
  status: PLANET_STATUS.INIT,
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
export function planetReducer (state, action) {
  switch (action.type) {
    case actions.SET_PLANET:
      return {
        ...state,
        status: PLANET_STATUS.IDLE,
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

// the reducer context with logging
export function usePlanetReducer () {
  const thisReducer =
    process.env.NODE_ENV === 'development'
      ? logger(planetReducer)
      : planetReducer
  const memoizedReducer = React.useCallback(thisReducer, [])
  return React.useReducer(memoizedReducer, initialState)
}

// the context provider
export function PlanetProvider ({ children }) {
  const { Provider } = PlanetContext
  const [state, dispatch] = usePlanetReducer()
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

// the state context
export function usePlanetState () {
  const { state } = React.useContext(PlanetContext)
  if (state === undefined) {
    throw new Error('usePlanetState must be used in a PlanetProvider')
  }
  return state
}

// state reduction dispatch context
export function usePlanetDispatch () {
  const { dispatch } = React.useContext(PlanetContext)
  if (dispatch === undefined) {
    throw new Error('usePlanetState must be used in a PlanetProvider')
  }
  return dispatch
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
