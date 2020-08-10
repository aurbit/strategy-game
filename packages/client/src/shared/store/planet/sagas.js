import { store } from 'store'
import { TYPES, ACTIONS } from './index'
import { takeLatest, put, select } from 'redux-saga/effects'
import { selectPlanetContract } from 'shared/store/chain/selectors'
import { selectProvider } from 'shared/store/chain/selectors'
import { selectAddress } from 'shared/store/wallet/selectors'
import { selectTileFee, selectPlayers } from 'shared/store/planet/selectors'
import { selectAvatar, selectAvatarId } from '../avatar/selectors'
import { ACTIONS as CHAIN_ACTIONS } from '../chain'

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

  try {
    const tileIndex = action.payload
    const rawTrx = yield contract.methods
      .buyTile(tileIndex, avatar.id)
      .encodeABI()

    const txCount = yield provider.eth.getTransactionCount(address)

    const txObject = {
      nonce: provider.utils.toHex(txCount),
      from: address,
      to: contract._address,
      value: provider.utils.toHex(tileFee.value),
      // gasLimit: provider.utils.toHex(6721975),
      // gas: provider.utils.toHex(6721975),
      data: rawTrx
    }

    const payload = { method: 'eth_sendTransaction', params: [txObject] }
    yield window.ethereum.send(payload, (err, data) => {
      if (err) {
        store.dispatch(ACTIONS.callBuyTileFailure(err))
      } else if (data) {
        store.dispatch(CHAIN_ACTIONS.newTransaction(data.transactionHash))
        store.dispatch(ACTIONS.callBuyTileSuccess(data))
        document.getElementById(tileIndex).style.backgroundColor = 'blue'
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
      gasPrice: provider.utils.toHex(provider.utils.toWei('50', 'gwei')),
      data: rawTrx
    }

    const payload = { method: 'eth_sendTransaction', params: [txObject] }
    yield window.ethereum.send(payload, (err, data) => {
      if (err) {
        store.dispatch(ACTIONS.callNewPlayerFailure(err.message))
      } else if (data) {
        store.dispatch(CHAIN_ACTIONS.newTransaction(data.transactionHash))
        store.dispatch(ACTIONS.callNewPlayerSuccess(data))
      }
    })
  } catch (err) {
    yield put(ACTIONS.callNewPlayerFailure(err.message))
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
      gasPrice: provider.utils.toHex(provider.utils.toWei('50', 'gwei')),
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

function * getPlayersRequest () {
  const contract = yield select(selectPlanetContract)
  try {
    const result = yield contract.methods.getPlayers().call()
    yield put(ACTIONS.getPlayersSuccess(result))
  } catch (err) {
    yield put(ACTIONS.getPlayersFailure(err))
  }
}

function * getTilesRequest () {
  const contract = yield select(selectPlanetContract)
  try {
    const result = yield contract.methods.getTiles().call()
    yield put(ACTIONS.getTilesSuccess(result))
  } catch (err) {
    yield put(ACTIONS.getTilesFailure(err))
  }
}

function * aerialAttackRequest (action) {
  const { tile, amount } = action
  const avatarId = yield select(selectAvatarId)
  const contract = yield select(selectPlanetContract)
  try {
    const result = yield contract.methods
      .AerialAttack(tile, avatarId, amount)
      .call()
    yield put(ACTIONS.aerialAttackSuccess(result))
  } catch (err) {
    yield put(ACTIONS.aerialAttackFailure(err))
  }
}

function * getAurPlanetBalance () {
  yield put(ACTIONS.getPlanetAurBalanceRequest())
}

function * getAurRequest () {
  const avatar = yield select(selectAvatar)
  const players = yield select(selectPlayers)
  const { result } = players

  if (players.result && avatar) {
    for (let n in result) {
      if (result[n].avatarId === avatar.id) {
        yield put(ACTIONS.getPlanetAurBalanceSuccess(result[n].balance))
        return
      }
    }
  }
}

export function * rootPlanetSagas () {
  yield takeLatest(TYPES.GET_TILE_FEE_REQUEST, getTileFeeRequest)
  yield takeLatest(TYPES.CALL_BUY_TILE_REQUEST, buyTileRequest)
  yield takeLatest(TYPES.CALL_NEW_PLAYER_REQUEST, newPlayerRequest)
  // yield takeLatest(TYPES.CALL_BUY_TILE_SUCCESS, callBuyTitleSuccess)
  yield takeLatest(TYPES.GET_IS_PLAYING_REQUEST, isPlayingRequest)
  yield takeLatest(TYPES.GET_PLAYERS_REQUEST, getPlayersRequest)
  yield takeLatest(TYPES.GET_PLAYERS_SUCCESS, getAurPlanetBalance)

  yield takeLatest(TYPES.GET_TILES_REQUEST, getTilesRequest)
  yield takeLatest(TYPES.AERIAL_ATTACK_REQUEST, aerialAttackRequest)
  yield takeLatest(TYPES.GET_PLANET_AUR_BALANCE_REQUEST, getAurRequest)
}
