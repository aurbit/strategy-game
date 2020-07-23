import contextFactory, { STATUS } from 'shared/context/factory'
import Web3 from 'web3'

const initialState = {
  status: STATUS.INIT,
  web3: null
}

const actions = {
  INIT_WEB3: 'INIT_WEB3'
}

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.INIT_WEB3:
      return {
        ...state,
        web3: action.payload
      }
    default:
      break
  }
}

export const initWeb3 = (dispatch) => {
  const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
  dispatch({ type: actions.INIT_WEB3, payload: web3 })
}

export default contextFactory('Web3', initialState, reducer)
