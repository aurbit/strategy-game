import { TYPES as AVATAR_TYPES, ACTIONS as AVATAR_ACTIONS } from './index'
import { selectAvatarContract } from 'shared/store/chain/selectors'
import { selectAddress } from 'shared/store/wallet/selectors'
import { ACTIONS as CHAIN_ACTIONS } from 'shared/store/chain'
import { selectProvider } from 'shared/store/chain/selectors'
import { selectVendor } from 'shared/store/wallet/selectors'
import { takeLatest, select } from 'redux-saga/effects'
import { WALLETS } from 'shared/store/wallet'
import { store } from 'store'

function * callMintAvatar ({ payload }) {
  const address = yield select(selectAddress)
  const wallet = yield select(selectVendor)
  const provider = yield select(selectProvider)
  const contract = yield select(selectAvatarContract)
  const { name, dna } = payload

  const rawTrx = yield contract.methods.mintAvatar(name, dna).encodeABI()
  const value = yield provider.utils.toHex(
    provider.utils.toWei('0.01', 'ether')
  )

  // HOW TO CREATE WALLET CONNECT AND METAMASK TRANSACTIONS
  // 1. get wallet Transaction count
  const txCount = yield provider.eth.getTransactionCount(address)

  // 2. Build the transaction
  const txObject = {
    nonce: provider.utils.toHex(txCount),
    from: address,
    to: contract._address,
    value,
    gasLimit: provider.utils.toHex(6721975),
    gasPrice: provider.utils.toHex(provider.utils.toWei('20', 'gwei')),
    data: rawTrx
  }

  // 3. Sign and Send
  // for metamask
  if (wallet == WALLETS.METAMASK) {
    const payload = { method: 'eth_sendTransaction', params: [txObject] }
    yield window.ethereum.send(payload, (err, data) => {
      if (err)
        store.dispatch(AVATAR_ACTIONS.callMintAvatarFailure('Failed to Mint'))
      store.dispatch(CHAIN_ACTIONS.newTransaction(data.result))
    })
    return
  }

  // NOTE: The response is handled with an avatar Event in Chain store

  // for wallet connect
  if (wallet === WALLETS.WALLET_CONNECT) {
    const signedTx = yield window.connector.signTransaction(txObject)
    yield provider.eth
      .sendSignedTransaction(signedTx)
      .then(data => {
        store.dispatch(CHAIN_ACTIONS.newTransaction(data.transactionHash))
      })
      .catch(err => {
        store.dispatch(AVATAR_ACTIONS.callMintAvatarFailure('Failed to Mint'))
      })
  }
}

function * getAvatarsRequest () {
  const address = yield select(selectAddress)
  const contract = yield select(selectAvatarContract)

  // get the balance
  const balance = yield contract.methods.balanceOf(address).call()

  // need to make a crazy bunch of request to get the
  // avatars. TODO: Fix the avatar contract
  const list = []
  let counter = 0
  // need to wrap this into an interval
  // so not to hammer infura
  const interval = setInterval(() => {
    if (counter == Number(balance) - 1) {
      clearInterval(interval)
      return store.dispatch(AVATAR_ACTIONS.getAvatarsSuccess(list))
    }
    if (address) getTokenId(counter)
    counter++
  }, 200)

  // gets the Avatar
  const getAvatar = avatarId => {
    return contract.methods
      .avatars(avatarId)
      .call()
      .then(data => list.push(data))
      .catch(console.log)
  }

  // gets the tokenId for each avatar
  const getTokenId = index => {
    return contract.methods
      .tokenOfOwnerByIndex(address, index)
      .call()
      .then(getAvatar)
      .catch(console.log)
  }
}

export function * rootAvatarSagas () {
  yield takeLatest(AVATAR_TYPES.CALL_MINT_AVATAR_REQUEST, callMintAvatar)
  yield takeLatest(AVATAR_TYPES.GET_AVATARS_REQUEST, getAvatarsRequest)
}
