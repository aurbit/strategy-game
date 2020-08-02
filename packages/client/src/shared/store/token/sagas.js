import { store } from 'store'
import { TYPES, ACTIONS, WALLETS } from './index'
import { takeLatest, put } from 'redux-saga/effects'
import { useToken } from 'shared/services/provider'
import { TOKEN_ACTIONS } from 'shared/store/token'

function initTokens () {
  const { token } = useToken()

  token.methods
    .balanceOf(address)
    .call()
    .then(data => {
      dispatch(TOKEN_ACTIONS.setAurBalance(data))
    })
    .catch(err => {
      dispatch(TOKEN_ACTIONS.setAurBalanceError(err))
    })
}
