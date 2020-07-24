import contextFactory, { STATUS } from 'shared/context/factory'
import Web3 from 'web3'

const initialState = {
  status: STATUS.INIT,
  web3: null,
  account: [],
  network: null,
  networkId: null,
  isMetamaskInstalled: null
}

const actions = {
  INIT_WEB3: 'INIT_WEB3',
  INIT_WEB3_REQUEST: 'INIT_WEB3_REQUEST',
  INIT_WEB3_SUCCESS: 'INIT_WEB3_SUCCESS',
  INIT_WEB3_FAILURE: 'INIT_WEB3_FAILURE',
  UPDATE_NETWORK: 'UPDATE_NETWORK',
  UPDATE_ACCOUNT: 'UPDATE_ACCOUNT'
}

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.INIT_WEB3:
      return {
        ...state,
        web3: action.payload.web3,
        account: action.payload.account,
        network: action.payload.network,
        isMetamaskInstalled: action.payload.isMetamaskInstalled
      }
    case actions.UPDATE_ACCOUNT:
      return {
        ...state,
        account: action.payload
      }
    case actions.UPDATE_NETWORK:
      return {
        ...state,
        networkId: action.payload.id,
        network: action.payload.network
      }
    default:
      break
  }
}

export const initWeb3 = (dispatch, data) => {
  dispatch({ type: actions.INIT_WEB3, payload: data })
}

export const updateAccount = (dispatch, data) => {
  dispatch({ type: actions.UPDATE_ACCOUNT, payload: data })
}

export const updateNetwork = (dispatch, data) => {
  dispatch({ type: actions.UPDATE_NETWORK, payload: data })
}

export default contextFactory('Web3', initialState, reducer)
