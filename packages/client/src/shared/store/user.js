import contextFactory, { STATUS } from 'shared/context/factory'

const initialState = {
  status: STATUS.INIT,
  networkType: null,
  account: null
}

const actions = {
  INIT_USER: 'INIT_USER'
}

export function reducer (state, action) {
  switch (action.type) {
    case actions.INIT_USER:
      return {
        ...state,
        status: STATUS.IDLE,
        account: action.payload.account,
        networkType: action.payload.networkType
      }

    default:
      break
  }
}

export function initUser (dispatch, data) {
  dispatch({ type: actions.INIT_USER, payload: data })
}

export default contextFactory('User', initialState, reducer)
