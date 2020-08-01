import contextFactory, { STATUS } from 'shared/context/factory'
import Web3 from 'web3'

export { STATUS }

export const availableNetworks = {
  DEVELOPMENT: 'development',
  MAINNET: 'mainnet',
  ROPSTEN: 'ropsten',
  RINKEBY: 'rinkeby',
  KOVAN: 'kovan'
}

const initialState = {
  status: STATUS.INIT,
  network: null,
  web3: null
}

const actions = {
  SET_NETWORK: 'SET_NETWORK'
}

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_NETWORK: {
      return {
        ...state,
        status: STATUS.IDLE,
        network: action.payload.network,
        web3: action.payload.web3
      }
    }
    default:
      break
  }
}

export default contextFactory('Web3', initialState, reducer)

export const setNetwork = (dispatch, network) => {
  dispatch({ type: actions.SET_NETWORK, payload: network })
}
