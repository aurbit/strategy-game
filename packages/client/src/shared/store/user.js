import contextFactory, { STATUS } from 'shared/context/factory'

const initialState = {
  isMetaMaskInstalled: undefined,
  account: []
}

// the action constants
const actions = {
  SET_METAMASK: 'SET_METAMASK',
  SET_ACCOUNT: 'SET_ACCOUNT'
}

// the state reducer switch
export function reducer(state, action) {
  switch (action.type) {
    case actions.SET_METAMASK:
      return {
        ...state,
        status: STATUS.IDLE,
        isMetaMaskInstalled: action.payload
      }
    case actions.SET_ACCOUNT:
      return {
        ...state,
        account: action.payload
      }
    default:
      break
  }
}

export function setMetamask(dispatch, data) {
  dispatch({ type: actions.SET_METAMASK, payload: data })
}

export function setAccount(dispatch, data) {
  dispatch({ type: actions.SET_ACCOUNT, payload: data })
}

export const UserContext = contextFactory('User', initialState, reducer)
