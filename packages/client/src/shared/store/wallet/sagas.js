import { store } from 'store'
import { TYPES, ACTIONS } from './index'
import { takeLatest, put } from 'redux-saga/effects'

import { ethereumEventListeners } from './window-listeners'

function * initWalletRequest () {
  if (window.ethereum) {
    const { ethereum } = window
    yield put(
      ACTIONS.initWalletSuccess({
        address: ethereum.selectedAddress,
        network: ethereum.networkVersion
      })
    )
    yield ethereumEventListeners()
  }
}

export function * rootWalletSagas () {
  yield takeLatest(TYPES.INIT_WALLET_REQUEST, initWalletRequest)
}
