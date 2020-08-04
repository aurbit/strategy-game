import { takeLatest, put, select, call } from 'redux-saga/effects'
import { store } from 'store'
import { selectAvatarContract } from 'shared/store/chain/selectors'
import { selectAddress } from 'shared/store/wallet/selectors'
import { TYPES as AVATAR_TYPES, ACTIONS as AVATAR_ACTIONS } from './index'
import {
  TYPES as CHAIN_TYPES,
  ACTIONS as CHAIN_ACTIONS
} from 'shared/store/chain'
import { selectVendor } from 'shared/store/wallet/selectors'
import { selectProvider } from 'shared/store/chain/selectors'
import { WALLETS } from 'shared/store/wallet'

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

  // 3. handle the transaction response

  // 4. Sign and Send
  // for metamask
  if (wallet == WALLETS.METAMASK) {
    const payload = { method: 'eth_sendTransaction', params: [txObject] }
    yield window.ethereum.send(payload, (err, data) => {
      if (err) {
        store.dispatch(
          AVATAR_ACTIONS.callMintAvatarFailure(
            'Failed to Mint Avatar with Metamask'
          )
        )
      }
      store.dispatch(AVATAR_ACTIONS.callMintAvatarSuccess([]))
      store.dispatch(CHAIN_ACTIONS.addNewTransaction(data.result))
    })
  }

  // for wallet connect
  if (wallet === WALLETS.WALLET_CONNECT) {
    const signedTx = yield window.connector.signTransaction(txObject)
    const wallConTrx = yield provider.eth.sendSignedTransaction(signedTx)
    yield put(CHAIN_ACTIONS.addNewTransaction(wallConTrx.transactionHash))
  }
}

export function * rootAvatarSagas () {
  yield takeLatest(AVATAR_TYPES.CALL_MINT_AVATAR, callMintAvatar)
}
