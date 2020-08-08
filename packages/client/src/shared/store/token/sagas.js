import { store } from 'store'
import { TYPES, ACTIONS } from './index'
import { takeLatest, put, select } from 'redux-saga/effects'
import { selectTokenContract } from 'shared/store/chain/selectors'
import { selectAddress } from 'shared/store/wallet/selectors'

function * getBalanceRequest () {
  const address = yield select(selectAddress)
  const contract = yield select(selectTokenContract)

  try {
    const balance = yield contract.methods.balanceOf(address).call()
    yield put(ACTIONS.getAurBalanceSuccess(balance))
  } catch (err) {
    yield put(ACTIONS.getAurBalanceFailure(err))
  }
}

export function * rootTokenSagas () {
  yield takeLatest(TYPES.GET_AUR_BALANCE_REQUEST, getBalanceRequest)
}
