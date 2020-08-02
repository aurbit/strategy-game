// Place these into a folder - Incase a store starts having many actions / sagas etc
// We can easily split them up into separate files
import { makeAction, createReducer } from 'shared/utils/redux-utils'

export const PLANETS = {
  EARTH: 'EARTH',
  MARS: 'MARS',
  VENUS: 'VENUS'
}

const initialState = {
  onPlanet: PLANETS.EARTH
}

// Action Types
const TYPES = {
  SET_PLANET: 'SET_PLANET'
}

// Action Creators
export const ACTIONS = {
  changePlanet: makeAction(TYPES.SET_PLANET, 'payload')
}

// Reducer
export const planetReducer = createReducer(initialState, {
  [TYPES.SET_PLANET]: (state, action) => {
    return { ...state, onPlanet: action.payload }
  }
})

// Selectors
export const selectCurrentPlanet = (state) => state.planet.onPlanet
