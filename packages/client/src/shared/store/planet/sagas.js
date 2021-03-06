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

    const txObject = {
      from: address,
      to: contract._address,
      value: provider.utils.toHex(tileFee.value),
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
    const address = yield select(selectAddress)
    const avatar = yield select(selectAvatar)
    const rawTrx = yield contract.methods.createNewPlayer(avatar.id).encodeABI()

    const txObject = {
      from: address,
      to: contract._address,
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
    const address = yield select(selectAddress)
    const avatar = yield select(selectAvatar)
    const rawTrx = yield contract.methods.isPlaying(avatar.id).encodeABI()

    const txObject = {
      from: address,
      to: contract._address,
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

function * getAvatarAurBalanceRequest () {
  try {
    const avatar = yield select(selectAvatar)
    const players = yield select(selectPlayers)
    const provider = yield select(selectProvider)

    if (players.length && avatar) {
      for (let n in players) {
        if (players[n].avatarId === avatar.id) {
          const balance = provider.utils.fromWei(players[n].balance)
          yield put(ACTIONS.getAvatarAurBalanceSuccess(balance))
          return
        }
      }
    } else {
      yield put(ACTIONS.getAvatarAurBalanceFailure('Player not found'))
    }
  } catch (err) {
    yield put(ACTIONS.getAvatarAurBalanceFailure(err))
  }
}

function * allocateTokensRequest (action) {
  try {
    const contract = yield select(selectPlanetContract)
    const address = yield select(selectAddress)
    const avatar = yield select(selectAvatar)
    const { index, amount } = action.payload

    const rawTrx = yield contract.methods
      .allocate(index, avatar.id, amount)
      .encodeABI()

    const txObject = {
      from: address,
      to: contract._address,
      data: rawTrx
    }

    const payload = { method: 'eth_sendTransaction', params: [txObject] }
    yield window.ethereum.send(payload, (err, data) => {
      if (err) {
        store.dispatch(ACTIONS.allocateTokensSuccess(data))
      } else if (data) {
        store.dispatch(ACTIONS.allocateTokensFailure(err))
      }
    })
  } catch (err) {
    yield put(ACTIONS.allocateTokensFailure(err))
  }
}

function * deallocateTokensRequest (action) {
  const contract = yield select(selectPlanetContract)
  const address = yield select(selectAddress)
  const avatar = yield select(selectAvatar)
  const { index, amount } = action.payload

  try {
    const rawTrx = yield contract.methods
      .deallocate(index, avatar.id, amount)
      .encodeABI()

    const txObject = {
      from: address,
      to: contract._address,
      data: rawTrx
    }

    const payload = { method: 'eth_sendTransaction', params: [txObject] }
    yield window.ethereum.send(payload, (err, data) => {
      if (err) {
        store.dispatch(ACTIONS.allocateTokensSuccess(data))
      } else if (data) {
        store.dispatch(ACTIONS.allocateTokensFailure(err))
      }
    })
  } catch (err) {
    yield put(ACTIONS.deallocateTokensFailure(err))
  }
}

export function * rootPlanetSagas () {
  yield takeLatest(TYPES.GET_TILE_FEE_REQUEST, getTileFeeRequest)
  yield takeLatest(TYPES.CALL_BUY_TILE_REQUEST, buyTileRequest)
  yield takeLatest(TYPES.NEW_PLAYER_REQUEST, newPlayerRequest)
  yield takeLatest(TYPES.GET_IS_PLAYING_REQUEST, isPlayingRequest)
  yield takeLatest(TYPES.GET_PLAYERS_REQUEST, getPlayersRequest)

  yield takeLatest(TYPES.GET_TILES_REQUEST, getTilesRequest)
  yield takeLatest(TYPES.AERIAL_ATTACK_REQUEST, aerialAttackRequest)
  yield takeLatest(
    TYPES.GET_AVATAR_AUR_BALANCE_REQUEST,
    getAvatarAurBalanceRequest
  )

  yield takeLatest(TYPES.ALLOCATE_TOKENS_REQUEST, allocateTokensRequest)
  yield takeLatest(TYPES.DEALLOCATE_TOKENS_REQUEST, deallocateTokensRequest)
}
