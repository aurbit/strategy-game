import { TYPES, ACTIONS } from './index'
import { takeLatest, put } from 'redux-saga/effects'
import { ACTIONS as CHAIN_ACTIONS, NETWORKS } from 'shared/store/chain'
import { store } from 'store'
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

    switch (window.ethereum.chanId) {
      case '0x03': {
        store.dispatch(CHAIN_ACTIONS.setNetwork(NETWORKS.ROPSTEN))
        break
      }

      case '0xNaN': {
        store.dispatch(CHAIN_ACTIONS.setNetwork(NETWORKS.DEVELOPMENT))
        break
      }

      default:
        break
    }
  }
}

export function * rootWalletSagas () {
  yield takeLatest(TYPES.INIT_WALLET_REQUEST, initWalletRequest)
}
