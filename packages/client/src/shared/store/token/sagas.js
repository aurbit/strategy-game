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
  if (!amount || !avatarId) {
    throw Error('Invalid AvatarId or AUR amount provided to request')
  }
  const address = yield select(selectAddress)
  const token = yield select(selectTokenContract)
  const planet = yield select(selectPlanetContract)

  const provider = yield select(selectProvider)

  const { utils, eth } = provider

  const amountInWei = utils.toWei(amount, 'ether')
  const txCount = yield eth.getTransactionCount(address)

  const nonce = utils.toHex(txCount)
  const hexId = utils.toHex(avatarId)
  const gas = utils.toHex('6721975')
  const gasLimit = utils.toHex('6721975')
  const to = utils.toChecksumAddress(planet._address)
  const from = utils.toChecksumAddress(address)

  const data = token.methods
    .send(planet._address, amountInWei, hexId)
    .encodeABI()

  const txObject = {
    nonce,
    from,
    to,
    gasLimit,
    gas,
    data
  }

  const trx = { method: 'eth_sendTransaction', params: [txObject] }
  return window.ethereum.send(trx, (err, data) => {
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
