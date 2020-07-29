import contextFactory, { STATUS } from 'shared/context/factory'
import Web3 from 'web3'

export { STATUS }

const initialState = {
  status: STATUS.INIT,
  network: null,
  web3: null
}

export const availableNetworks = {
  DEVELOPMENT: 'development',
  MAINNET: 'mainnet',
  ROPSTEN: 'ropsten',
  RINKEBY: 'rinkeby',
  KOVAN: 'kovan'
}

const actions = {
  SET_WEB3_PROVIDER: 'SET_WEB3_PROVIDER'
}

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_WEB3_PROVIDER: {
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

export const setProvider = (dispatch, network) => {
  const url = (network, key) => `wss://${network}.infura.io/ws/v3/${key}`
  const key = '0f76dc369ae847dba3d00ac6427f0b42'

  const dispatchHelper = () => {
    const web3 = new Web3(url(network, key))
    dispatch({
      type: actions.SET_WEB3_PROVIDER,
      payload: { network, web3 }
    })
  }

  switch (network) {
    case availableNetworks.DEVELOPMENT: {
      const web3 = new Web3('http://localhost:7545')
      dispatch({
        type: actions.SET_WEB3_PROVIDER,
        payload: { network, web3 }
      })
      break
    }
    case availableNetworks.MAINNET: {
      dispatchHelper()
      break
    }
    case availableNetworks.ROPSTEN: {
      dispatchHelper()
      break
    }
    case availableNetworks.RINKEBY: {
      dispatchHelper()
      break
    }
    default: {
      const web3 = new Web3(url('mainnet', key))
      dispatch({
        type: actions.SET_WEB3_PROVIDER,
        payload: { network, web3 }
      })
      break
    }
  }
}

export default contextFactory('Web3', initialState, reducer)
