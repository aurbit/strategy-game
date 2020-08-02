import contextFactory, { STATUS } from 'shared/context/factory'
import { utils } from 'web3'

const initialState = {
  status: STATUS.INIT,
  balance: 0
}

export { STATUS }

const actions = {
  SET_AUR_BALANCE: 'SET_AUR_BALANCE'
}

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_AUR_BALANCE: {
      return {
        ...state,
        balance: action.payload
      }
    }
    default:
      throw new Error('This token store action is not defined')
  }
}

export const setAurBalance = (dispatch, balance) => {
  dispatch({ type: actions.SET_AUR_BALANCE, payload: utils.fromWei(balance) })
}

export default contextFactory('Token', initialState, reducer)
