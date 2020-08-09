import { TYPES, ACTIONS } from './index'
import { takeLatest, put } from 'redux-saga/effects'
import { ACTIONS as CHAIN_ACTIONS, NETWORKS } from 'shared/store/chain'
import { ethereumEventListeners } from './window-listeners'

function * initWalletRequest () {
  if (window.ethereum) {
    const { ethereum } = window
    yield ethereumEventListeners()
    const network = ethereum.chainId

    console.log('laskjdfl;aksjdf;lakjsdf', network)

    switch (network) {
      case '0x3': {
        yield put(CHAIN_ACTIONS.setNetwork(NETWORKS.ROPSTEN))
        break
      }

      case '0xNaN': {
        yield put(CHAIN_ACTIONS.setNetwork(NETWORKS.DEVELOPMENT))
        break
      }

      default:
        alert('Network unsupported')
        break
    }
    yield put(
      ACTIONS.initWalletSuccess({
        address: ethereum.selectedAddress,
        network: ethereum.networkVersion
      })
    )
  }
}

export function * rootWalletSagas () {
  yield takeLatest(TYPES.INIT_WALLET_REQUEST, initWalletRequest)
}
