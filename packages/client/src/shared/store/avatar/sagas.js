import { TYPES as AVATAR_TYPES, ACTIONS as AVATAR_ACTIONS } from './index'
import { selectAvatarContract } from 'shared/store/chain/selectors'
import { selectMintFee } from 'shared/store/avatar/selectors'
import { selectAddress } from 'shared/store/wallet/selectors'
import { ACTIONS as CHAIN_ACTIONS } from 'shared/store/chain'
import { selectProvider } from 'shared/store/chain/selectors'
import { takeLatest, select, put } from 'redux-saga/effects'
import { store } from 'store'

function * callMintAvatar ({ payload }) {
  const address = yield select(selectAddress)
  const provider = yield select(selectProvider)
  const contract = yield select(selectAvatarContract)
  const mintFee = yield select(selectMintFee)

  const { name, dna } = payload

  const rawTrx = yield contract.methods.mintAvatar(name, dna).encodeABI()
  const value = yield provider.utils.toHex(mintFee)

  const txCount = yield provider.eth.getTransactionCount(address)
  const txObject = {
    nonce: provider.utils.toHex(txCount),
    from: address,
    to: contract._address,
    value,
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

// gets a single avatar with avatar ID param
function * getAvatarRequest (action) {
  const contract = yield select(selectAvatarContract)
  const { utils } = yield select(selectProvider)

  try {
    const avatarId = utils.toHex(action?.payload)

    console.log('AVATAR ID', avatarId)
    const result = yield contract.methods.avatars(avatarId - 1).call()
    yield put(
      AVATAR_ACTIONS.getAvatarSuccess({ ...result, avatarId: action.payload })
    )
  } catch (err) {
    yield put(AVATAR_ACTIONS.getAvatarFailure(err))
  }
}

function * getMintFeeRequest () {
  const contract = yield select(selectAvatarContract)
  if (contract.methods?.createAvatarFee) {
    const result = yield contract.methods?.createAvatarFee().call()
    yield put(AVATAR_ACTIONS.getMintFeeSuccess(result))
  } else {
    yield put(AVATAR_ACTIONS.getMintFeeSuccess('10000000000000000'))
  }
  try {
  } catch (err) {
    yield put(AVATAR_ACTIONS.getMintFeeFailure(err))
  }
}

export function * rootAvatarSagas () {
  yield takeLatest(AVATAR_TYPES.MINT_AVATAR_REQUEST, callMintAvatar)
  yield takeLatest(AVATAR_TYPES.MINT_AVATAR_SUCCESS, callMintAvatarSuccess)
  yield takeLatest(AVATAR_TYPES.GET_AVATARS_SUCCESS, getAvatarsSuccess)
  yield takeLatest(AVATAR_TYPES.GET_AVATARS_REQUEST, getAvatarsRequest)
  yield takeLatest(AVATAR_TYPES.GET_AVATAR_DNA_REQUEST, getDnaRequest)
  yield takeLatest(AVATAR_TYPES.GET_AVATAR_REQUEST, getAvatarRequest)
  yield takeLatest(AVATAR_TYPES.GET_MINT_FEE_REQUEST, getMintFeeRequest)
}
