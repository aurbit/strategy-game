import contextFactory, { STATUS } from 'shared/context/factory'

const initialState = {
  status: STATUS.INIT,
  isMetamaskInstalled: false,
  networkType: null,
  account: null
}

const actions = {
  INIT_USER: 'INIT_USER',
  CHECK_METAMASK: 'CHECK_METAMASK'
}

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.INIT_USER:
      return {
        ...state,
        status: STATUS.IDLE,
        account: action.payload.account,
        networkType: action.payload.networkType
      }
    case actions.CHECK_METAMASK:
      return {
        ...state,
        isMetamaskInstalled: action.payload
      }

    default:
      break
  }
}

export const initUser = (dispatch, data) => {
  dispatch({ type: actions.INIT_USER, payload: data })
}

export const setMetamaskStatus = (dispatch, data) => {
  dispatch({ type: actions.CHECK_METAMASK, payload: data })
}

export default contextFactory('User', initialState, reducer)
