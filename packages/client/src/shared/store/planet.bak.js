import contextFactory, { STATUS } from 'shared/context/factory'

export const availablePlanets = {
  EARTH: 'EARTH',
  MARS: 'MARS',
  VENUS: 'VENUS'
}

const initialState = {
  status: STATUS.INIT,
  onPlanet: availablePlanets.EARTH
}

const actions = {
  SET_PLANET: 'SET_PLANET'
}

export function reducer (state, action) {
  switch (action.type) {
    case actions.SET_PLANET: {
      return {
        ...state,
        status: STATUS.IDLE,
        onPlanet: action.payload
      }
    }

    default:
      break
  }
}

// changes the planet
export function changePlanet (dispatch, planetName) {
  dispatch({ type: actions.SET_PLANET, payload: planetName })
}

export default contextFactory('Planet', initialState, reducer)
