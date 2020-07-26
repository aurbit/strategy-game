import contextFactory, { STATUS } from 'shared/context/factory'
import Web3 from 'web3'

export { STATUS }

const initialState = {
  status: STATUS.INIT,
  network: null,
  provider: null
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
        provider: action.payload.provider
      }
    }
    default:
      break
  }
}

export const setNetwork = (dispatch, network) => {
  const provider =
    network === 'development'
      ? new Web3('https://localhost:7545')
      : new Web3(
          `wss://${network}.infura.io/ws/v3/0f76dc369ae847dba3d00ac6427f0b42`
        )

  dispatch({ type: actions.SET_NETWORK, payload: { network, provider } })
}

export default contextFactory('Web3', initialState, reducer)
