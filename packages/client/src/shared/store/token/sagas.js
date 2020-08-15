import { TYPES, ACTIONS } from './index'
import { takeLatest, put, select } from 'redux-saga/effects'
import {
  selectPlanetContract,
  selectTokenContract,
  selectProvider
} from 'shared/store/chain/selectors'
import { selectAddress } from 'shared/store/wallet/selectors'
import { store } from 'store'

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

function * sendPlanetAurRequest (action) {
  const { amount, avatarId } = action.payload
  const provider = yield select(selectProvider)
  const contract = yield select(selectTokenContract)
  const amountInWei = provider.utils.toWei(amount, 'ether')

  const address = yield select(selectAddress)
  const planet = yield select(selectPlanetContract)
  const hexId = yield provider.utils.toHex(avatarId)
  const rawTrx = yield contract.methods
    .send(planet._address, amountInWei, hexId)
    .encodeABI()

  const txObject = {
    from: address,
    to: contract._address,
    data: rawTrx
  }

  const trx = { method: 'eth_sendTransaction', params: [txObject] }
  yield window.ethereum.send(trx, (err, data) => {
    if (err) {
      store.dispatch(ACTIONS.sendPlanetAurFailure(err))
    } else {
      store.dispatch(ACTIONS.sendPlanetAurSuccess(data))
    }
  })
}

export function * rootTokenSagas () {
  yield takeLatest(TYPES.GET_AUR_BALANCE_REQUEST, getBalanceRequest)
  yield takeLatest(TYPES.SEND_PLANET_AUR_REQUEST, sendPlanetAurRequest)
}
