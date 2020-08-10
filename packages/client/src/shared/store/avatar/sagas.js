import { TYPES as AVATAR_TYPES, ACTIONS as AVATAR_ACTIONS } from './index'
import { selectAvatarContract } from 'shared/store/chain/selectors'
import { selectAddress } from 'shared/store/wallet/selectors'
import { ACTIONS as CHAIN_ACTIONS } from 'shared/store/chain'
import { selectProvider } from 'shared/store/chain/selectors'
import { takeLatest, select, put } from 'redux-saga/effects'
import { store } from 'store'
import { AVATARS } from 'pages/avatar/create-avatar/avatar-utils'

function * callMintAvatar ({ payload }) {
  const address = yield select(selectAddress)
  const provider = yield select(selectProvider)
  const contract = yield select(selectAvatarContract)
  const { name, dna } = payload

  const rawTrx = yield contract.methods.mintAvatar(name, dna).encodeABI()
  const value = yield provider.utils.toHex(
    provider.utils.toWei('0.01', 'ether')
  )

  const txCount = yield provider.eth.getTransactionCount(address)
  const txObject = {
    nonce: provider.utils.toHex(txCount),
    from: address,
    to: contract._address,
    value,
    gasLimit: provider.utils.toHex(6721975),
    gas: provider.utils.toHex(6721975),
    data: rawTrx
  }

  const trx = { method: 'eth_sendTransaction', params: [txObject] }
  return window.ethereum.send(trx, (err, data) => {
    if (err) {
      store.dispatch(AVATAR_ACTIONS.callMintAvatarFailure('Failed to Mint'))
    } else {
      store.dispatch(CHAIN_ACTIONS.newTransaction(data.result))
    }
  })
}

function * getAvatarsRequest () {
  const address = yield select(selectAddress)
  const contract = yield select(selectAvatarContract)

  try {
    // get the balance
    const balance = yield contract.methods.balanceOf(address).call()
    // gets the Avatar
    if (Number(balance) === 0) {
      return yield put(
        AVATAR_ACTIONS.getAvatarsFailure('User does not have an Avatar')
      )
    }
    // get the token ID
    const id = Number(balance) - 1
    const tokenId = yield contract.methods
      .tokenOfOwnerByIndex(address, id)
      .call()

    // get the avatar
    const avatar = yield contract.methods.avatars(tokenId - 1).call()
    yield put(
      AVATAR_ACTIONS.getAvatarsSuccess([
        { dna: avatar.dna, name: avatar.name, id: tokenId }
      ])
    )
  } catch (err) {
    yield put(AVATAR_ACTIONS.getAvatarsFailure(err))
  }
}

function * getAvatarsSuccess () {
  yield put(AVATAR_ACTIONS.setActiveIndex(0))
}

function * callMintAvatarSuccess () {
  yield put(AVATAR_ACTIONS.getAvatarsRequest())
}

function * getDnaRequest (action) {
  const contract = yield select(selectAvatarContract)

  try {
    const result = yield contract.methods.getDNA(action.payload)
    yield put(AVATAR_ACTIONS.getAvatarDnaSuccess(result))
  } catch (err) {
    yield put(AVATAR_ACTIONS.getAvatarDnaFailure(err))
  }
}

function * getAvatarRequest (action) {
  const contract = yield select(selectAvatarContract)

  try {
    const avatarId = action.payload

    console.log('get avatar is', avatarId)
    const result = yield contract.methods.avatars(avatarId).call()
    yield put(AVATAR_ACTIONS.getAvatarSuccess({ ...result, avatarId }))
  } catch (err) {
    yield put(AVATAR_ACTIONS.getAvatarFailure(err))
  }
}

export function * rootAvatarSagas () {
  yield takeLatest(AVATAR_TYPES.CALL_MINT_AVATAR_REQUEST, callMintAvatar)
  yield takeLatest(AVATAR_TYPES.CALL_MINT_AVATAR_SUCCESS, callMintAvatarSuccess)
  yield takeLatest(AVATAR_TYPES.GET_AVATARS_SUCCESS, getAvatarsSuccess)
  yield takeLatest(AVATAR_TYPES.GET_AVATARS_REQUEST, getAvatarsRequest)
  yield takeLatest(AVATAR_TYPES.GET_AVATAR_DNA_REQUEST, getDnaRequest)
  yield takeLatest(AVATAR_TYPES.GET_AVATAR_REQUEST, getAvatarRequest)
}
