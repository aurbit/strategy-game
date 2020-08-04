import Web3 from 'web3'
import { TYPES, ACTIONS } from './index'
import { NETWORKS } from 'shared/store/chain'
import PlanetContractsDEV from 'contracts/development/Planet'
import TokenContractsDEV from 'contracts/development/AURToken'
import AvatarContractsDEV from 'contracts/development/AvatarAUR'
import { selectAddress } from 'shared/store/wallet/selectors'
import { takeLatest, put, select, call } from 'redux-saga/effects'
import {
  selectNetwork,
  selectProvider,
  selectAvatarArtifacts,
  selectPlanetArtifacts,
  selectTokenArtifacts,
  selectAvatarContract
} from 'shared/store/chain/selectors'

/*
FLOW
1- Use actions preprended with INIT to trigger a SAGA
2 - Do required logic within Saga
3 - Use SET atctions to then push this data into state

*/

function * initProvider () {
  // Example of getting State from Store in a Saga
  const network = yield select(selectNetwork)
  if (!network) {
    throw new Error('Network is missing')
  }
  const port = process.env.REACT_APP_NETWORK_PORT || 7545
  const key = '0f76dc369ae847dba3d00ac6427f0b42'
  const url = (network, key) => `wss://${network}.infura.io/ws/v3/${key}`

  let web3 = null
  switch (network) {
    case NETWORKS.DEVELOPMENT: {
      const wsPro = new Web3.providers.WebsocketProvider(
        `ws://localhost:${port}`
      )
      web3 = new Web3(wsPro)
      break
    }
    case NETWORKS.MAINNET: {
      web3 = new Web3(url(network, key))
      break
    }
    case NETWORKS.ROPSTEN: {
      web3 = new Web3(url(network, key))
      break
    }
    case NETWORKS.KOVAN: {
      web3 = new Web3(url(network, key))
      break
    }
    case NETWORKS.RINKEBY: {
      web3 = new Web3(url(network, key))
      break
    }
    default: {
      const wsPro = new Web3.providers.WebsocketProvider(
        `ws://localhost:${port}`
      )
      web3 = new Web3(wsPro)
    }
  }
  yield put(ACTIONS.setProvider({ provider: web3 }))
}

// Can maybe do this a bit better - But it works for now
function * initArtifacts () {
  let planet = null
  let avatar = null
  let token = null
  const network = yield select(selectNetwork)
  switch (network) {
    case NETWORKS.DEVELOPMENT: {
      const { address: a1, artifact: a2 } = AvatarContractsDEV
      const { address: t1, artifact: t2 } = TokenContractsDEV
      const { address: p1, artifact: p2 } = PlanetContractsDEV
      avatar = { address: a1, artifact: a2 }
      token = { address: t1, artifact: t2 }
      planet = { address: p1, artifact: p2 }
      break
    }
    case NETWORKS.MAINNET:
    case NETWORKS.ROPSTEN:
    case NETWORKS.RINKEBY:
    default: {
      throw new Error('Network Currently Unsupported')
    }
  }
  yield put(ACTIONS.setArtifacts({ avatar, token, planet }))
}

function * initContracts () {
  // Could probably do this in the same function of initArtifact saga - But not sure if it needs to be kept seperate
  const provider = yield select(selectProvider)
  const { address: a1, artifact: a2 } = yield select(selectAvatarArtifacts)
  const { address: p1, artifact: p2 } = yield select(selectPlanetArtifacts)
  const { address: t1, artifact: t2 } = yield select(selectTokenArtifacts)
  const avatar = new provider.eth.Contract(a2.abi, a1)
  const planet = new provider.eth.Contract(p2.abi, p1)
  const token = new provider.eth.Contract(t2.abi, t1)

  yield put(ACTIONS.setContracts({ avatar, planet, token }))
}

function * callMintAvatar ({ payload }) {
  const metaAddress = yield select(selectAddress)
  const provider = yield select(selectProvider)
  const contract = yield select(selectAvatarContract)
  const { name, dna } = payload

  const rawTrx = yield contract.methods.mintAvatar(name, dna).encodeABI()
  const value = provider.utils.toHex(provider.utils.toWei('0.01', 'ether'))

  const txObject = {
    from: metaAddress,
    to: contract._address,
    value,
    gasLimit: provider.utils.toHex(21000),
    gasPrice: provider.utils.toHex(provider.utils.toWei('10', 'gwei')),
    data: rawTrx
  }

  window.ethereum.send(
    {
      method: 'eth_sendTransaction',
      params: [txObject]
    },
    (err, data) => console.log(err, data)
  )

  // const value = provider.utils.toWei('0.01', 'ether')
  // console.log('PAYLOAD: ', value)

  // contract.methods
  //   .mintAvatar(payload.name, payload.dna, {
  //     from: '0xfb27CDdcC85EeDa47Db0cAC81B32A694AC498F0B',
  //     value
  //   })
  //   .call()

  // console.log(contract.events)
  // const rawTrx = yield contract.methods.mintAvatar(name, dna).encodeABI()

  // yield provider.eth
  //   .sendTransaction({
  //     to: contract._address,
  //     from: '0xfb27CDdcC85EeDa47Db0cAC81B32A694AC498F0B',
  //     data: rawTrx
  //   })
  //   .once('transactionHash', function (hash) {
  //     console.log('HASH: ', hash)
  //   })
  //   .once('receipt', function (receipt) {
  //     console.log('receipt: ', receipt)
  //   })
  //   .on('confirmation', function (confNumber, receipt) {
  //     console.log('confNumber: ', confNumber)
  //   })
  //   .on('error', function (error) {
  //     console.log('error: ', error)
  //   })
  //   .on('data', function (x) {
  //     console.log('DATA: ', x)
  //   })
  //   .then(function (receipt) {
  //     console.log('receipt: ', receipt)
  //   })
}

export function * rootChainSagas () {
  yield takeLatest(TYPES.INIT_PROVIDER, initProvider)
  yield takeLatest(TYPES.INIT_ARTIFACTS, initArtifacts)
  yield takeLatest(TYPES.INIT_CONTRACTS, initContracts)
  yield takeLatest(TYPES.CALL_MINT_AVATAR, callMintAvatar)
}

// const web3 = new Web3(Web3.givenProvider || 'http://localhost:8080')
// const network = await web3.eth.net.getNetworkType();
// console.log(network) // should give you main if you're connected to the main network via metamask...
// const accounts = await web3.eth.getAccounts()
// this.setState({account: accounts[0]})

// function onClick() {
//   const dna = [165, 228, 239, 117, 68, 239, 5, 4, 239, 153, 5, 2, 9, 3, 85]
//   // dispatch(ACTIONS.callMintAvatar({ name: 'Nate', dna }))
// const value = provider.utils.toWei('0.01', 'ether')
// const from = '0xfb27CDdcC85EeDa47Db0cAC81B32A694AC498F0B'
// const txObject = {
//   from,
//   to: avatarContract.address,
//   value: provider.utils.toHex(provider.utils.toWei(value, 'ether')),
//   gasLimit: provider.utils.toHex(21000),
//   gasPrice: provider.utils.toHex(provider.utils.toWei('10', 'gwei'))
// }

//   console.log('PAYLOAD: ', value)
//   // const contract = yield select(selectAvatarContract)
//   avatarContract.methods.mintAvatar('Nate', dna).call(txObject)
// }
