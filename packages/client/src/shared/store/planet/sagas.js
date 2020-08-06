import { store } from 'store'
import { TYPES, ACTIONS } from './index'
import { takeLatest, put, select } from 'redux-saga/effects'
import { selectPlanetContract } from 'shared/store/chain/selectors'
import { selectProvider } from 'shared/store/chain/selectors'
import { selectAddress, selectVendor } from 'shared/store/wallet/selectors'
import { selectTileFee } from 'shared/store/planet/selectors'
import { selectAvatar } from '../avatar/selectors'
import { ACTIONS as CHAIN_ACTIONS } from '../chain'
import { ACTIONS as AVATAR_ACTIONS } from '../avatar'

import { WALLETS } from 'shared/store/wallet'

function * getTileFeeRequest () {
  const contract = yield select(selectPlanetContract)
  try {
    const result = yield contract.methods.TileBuyFee().call()
    yield put(ACTIONS.getTileFeeSuccess(result))
  } catch (err) {
    yield put(ACTIONS.getTileFeeFailure(err))
  }
}

function * buyTileRequest (action) {
  const contract = yield select(selectPlanetContract)
  const provider = yield select(selectProvider)
  const address = yield select(selectAddress)
  const avatar = yield select(selectAvatar)
  const tileFee = yield select(selectTileFee)
  // HOW TO CREATE WALLET CONNECT AND METAMASK TRANSACTIONS
  try {
    // 1. create the raw transaction
    const tileIndex = action.payload
    const rawTrx = yield contract.methods
      .buyTile(tileIndex, avatar.id)
      .encodeABI()

    const value = provider.utils.fromWei(tileFee.value, 'ether')

    // 2. get wallet Transaction count
    const txCount = yield provider.eth.getTransactionCount(address)
    // 3. Build the transaction
    const txObject = {
      nonce: provider.utils.toHex(txCount),
      from: address,
      to: contract._address,
      value: '100000000000000',
      gasLimit: provider.utils.toHex('6721975'),
      gasPrice: provider.utils.toHex(provider.utils.toWei('20', 'gwei')),
      data: rawTrx
    }

    const payload = { method: 'eth_sendTransaction', params: [txObject] }
    yield window.ethereum.send(payload, (err, data) => {
      if (err) {
        store.dispatch(ACTIONS.callBuyTileFailure(err))
      } else if (data) {
        store.dispatch(CHAIN_ACTIONS.newTransaction(data.transactionHash))
        store.dispatch(ACTIONS.callBuyTileSuccess(data))
      }
    })
  } catch (err) {
    yield put(ACTIONS.callBuyTileFailure(err))
  }
}

function * newPlayerRequest () {
  try {
    const contract = yield select(selectPlanetContract)
    const provider = yield select(selectProvider)
    const address = yield select(selectAddress)
    const avatar = yield select(selectAvatar)

    const rawTrx = yield contract.methods.createNewPlayer(avatar.id).encodeABI()
    const txCount = yield provider.eth.getTransactionCount(address)

    const txObject = {
      nonce: provider.utils.toHex(txCount),
      from: address,
      to: contract._address,
      gasLimit: provider.utils.toHex(6721975),
      gasPrice: provider.utils.toHex(provider.utils.toWei('20', 'gwei')),
      data: rawTrx
    }

    const payload = { method: 'eth_sendTransaction', params: [txObject] }
    yield window.ethereum.send(payload, (err, data) => {
      if (err) {
        store.dispatch(ACTIONS.callNewPlayerFailure(err))
      } else if (data) {
        store.dispatch(CHAIN_ACTIONS.newTransaction(data.transactionHash))
        store.dispatch(ACTIONS.callNewPlayerSuccess(data))
      }
    })
  } catch (err) {
    yield put(ACTIONS.callNewPlayerFailure(err))
  }
}

function * isPlayingRequest () {
  try {
    const contract = yield select(selectPlanetContract)
    const provider = yield select(selectProvider)
    const address = yield select(selectAddress)
    const avatar = yield select(selectAvatar)

    const rawTrx = yield contract.methods.isPlaying(avatar.id).encodeABI()
    const txCount = yield provider.eth.getTransactionCount(address)

    const txObject = {
      nonce: provider.utils.toHex(txCount),
      from: address,
      to: contract._address,
      gasLimit: provider.utils.toHex(6721975),
      gasPrice: provider.utils.toHex(provider.utils.toWei('10', 'gwei')),
      data: rawTrx
    }

    const payload = { method: 'eth_sendTransaction', params: [txObject] }
    yield window.ethereum.send(payload, (err, data) => {
      if (err) {
        store.dispatch(ACTIONS.getIsPlayingFailure(err))
      } else if (data) {
        store.dispatch(CHAIN_ACTIONS.newTransaction(data.transactionHash))
        store.dispatch(ACTIONS.getIsPlayingSuccess(data))
      }
    })
  } catch (err) {
    yield put(ACTIONS.getIsPlayingFailure(err))
  }
}

export function * rootPlanetSagas () {
  yield takeLatest(TYPES.GET_TILE_FEE_REQUEST, getTileFeeRequest)
  yield takeLatest(TYPES.CALL_BUY_TILE_REQUEST, buyTileRequest)
  yield takeLatest(TYPES.CALL_NEW_PLAYER_REQUEST, newPlayerRequest)
  yield takeLatest(TYPES.GET_IS_PLAYING_REQUEST, isPlayingRequest)
}
