import { store } from 'store'
import { TYPES, ACTIONS } from './index'
import { takeLatest, put, select } from 'redux-saga/effects'
import { selectPlanetContract } from 'shared/store/chain/selectors'
import { selectProvider } from 'shared/store/chain/selectors'
import { selectAddress, selectVendor } from 'shared/store/wallet/selectors'

function * getTileFeeRequest () {
  const contract = yield select(selectPlanetContract)
  try {
    const result = yield contract.methods.TileBuyFee().call()
    yield put(ACTIONS.getTileFeeSuccess(result))
  } catch (err) {
    yield put(ACTIONS.getTileFeeFailure(err))
  }
}

function * buyTileRequest () {
  // const contract = yield select(selectPlanetContract)
  // const provider = yield select(selectProvider)
  // const wallet = yield select(selectVendor)
  // const address = yield select(selectAddress)
  // const rawTrx = yield contract.methods.mintAvatar(name, dna).encodeABI()
  // const value = yield provider.utils.toHex(
  //   provider.utils.toWei('0.01', 'ether')
  // )
  // // HOW TO CREATE WALLET CONNECT AND METAMASK TRANSACTIONS
  // // 1. get wallet Transaction count
  // const txCount = yield provider.eth.getTransactionCount(address)
  // // 2. Build the transaction
  // const txObject = {
  //   nonce: provider.utils.toHex(txCount),
  //   from: address,
  //   to: contract._address,
  //   value,
  //   gasLimit: provider.utils.toHex(6721975),
  //   gasPrice: provider.utils.toHex(provider.utils.toWei('20', 'gwei')),
  //   data: rawTrx
  // }
  // if (wallet == WALLETS.METAMASK) {
  //   const payload = { method: 'eth_sendTransaction', params: [txObject] }
  //   yield window.ethereum.send(payload, (err, data) => {
  //     if (err)
  //       store.dispatch(AVATAR_ACTIONS.callMintAvatarFailure('Failed to Mint'))
  //     store.dispatch(CHAIN_ACTIONS.newTransaction(data.result))
  //   })
  //   return
  // }
  // // for wallet connect
  // if (wallet === WALLETS.WALLET_CONNECT) {
  //   const signedTx = yield window.connector.signTransaction(txObject)
  //   yield provider.eth
  //     .sendSignedTransaction(signedTx)
  //     .then(data => {
  //       store.dispatch(CHAIN_ACTIONS.newTransaction(data.transactionHash))
  //     })
  //     .catch(err => {
  //       store.dispatch(AVATAR_ACTIONS.callMintAvatarFailure('Failed to Mint'))
  //     })
  // }
  // try {
  // } catch (err) {
  //   yield put(ACTIONS.callBuyTileFailure(err))
  // }
}
export function * rootPlanetSagas () {
  // yield takeLatest(TYPES.GET_TILE_FEE_REQUEST, getTileFeeRequest),
  yield takeLatest(TYPES.CALL_BUY_TILE_REQUEST, buyTileRequest)
}
