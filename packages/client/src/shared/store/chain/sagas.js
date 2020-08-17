import Web3 from 'web3'
import { store } from 'store'

import { ACTIONS as AVATAR_ACTIONS, AVATAR_EVENTS } from 'shared/store/avatar'
import { PLANET_EVENTS, ACTIONS as PLANET_ACTIONS } from 'shared/store/planet'
import { ACTIONS as TOKEN_ACTIONS, TOKEN_EVENTS } from 'shared/store/token'
import { TYPES, ACTIONS, NETWORKS } from 'shared/store/chain'

import PlanetContractsDEV from 'contracts/development/Planet'
import TokenContractsDEV from 'contracts/development/AURToken'
import AvatarContractsDEV from 'contracts/development/AvatarAUR'
import PlanetContractsROPSTEN from 'contracts/ropsten/Planet'
import TokenContractsROPSTEN from 'contracts/ropsten/AURToken'
import AvatarContractsROPSTEN from 'contracts/ropsten/AvatarAUR'
import { takeLatest, put, select } from 'redux-saga/effects'
import { selectAddress } from 'shared/store/wallet/selectors'
import {
  selectNetwork,
  selectProvider,
  selectAvatarArtifacts,
  selectPlanetArtifacts,
  selectTokenArtifacts
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

  const port = process.env.REACT_APP_NETWORK_PORT || 7545
  const key =
    process.env.REACT_APP_INFURA_KEY || '0f76dc369ae847dba3d00ac6427f0b42'
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
    case NETWORKS.ROPSTEN: {
      web3 = new Web3(url(network, key))
      break
    }
    case NETWORKS.MAINNET: {
      alert('We have not deployed contracts to this network, yet.')
      break
    }
    case NETWORKS.KOVAN: {
      alert('We have not deployed contracts to this network, yet.')
      break
    }
    case NETWORKS.RINKEBY: {
      alert('We have not deployed contracts to this network, yet.')
      break
    }
    default: {
      const wsPro = new Web3.providers.WebsocketProvider(
        `ws://localhost:${port}`
      )
      web3 = new Web3(wsPro)
      break
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
    case NETWORKS.ROPSTEN: {
      const { address: a1, artifact: a2 } = AvatarContractsROPSTEN
      const { address: t1, artifact: t2 } = TokenContractsROPSTEN
      const { address: p1, artifact: p2 } = PlanetContractsROPSTEN
      avatar = { address: a1, artifact: a2 }
      token = { address: t1, artifact: t2 }
      planet = { address: p1, artifact: p2 }
      break
    }
    case NETWORKS.MAINNET: {
      alert('Sorry, we do not support this network, yet.')
      break
    }
    case NETWORKS.RINKEBY: {
      alert('Sorry, we do not support this network, yet.')
      break
    }
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

  // if a contract emits an event, dispatch that event
  // add sit to the store
  const avatarListener = avatar.events.allEvents()
  avatarListener.on('data', data => store.dispatch(ACTIONS.avatarEvent(data)))
  // todo
  const planetListener = planet.events.allEvents()
  planetListener.on('data', data => store.dispatch(ACTIONS.planetEvent(data)))

  const tokenListener = token.events.allEvents()
  tokenListener.on('data', data => store.dispatch(ACTIONS.tokenEvent(data)))
}

function * avatarContractEvent (action) {
  const address = yield select(selectAddress)
  const {
    payload: {
      event,
      returnValues: { sender, dna, avatarId, name }
    }
  } = action

  // check for user Minted Avatar Event
  switch (event) {
    case AVATAR_EVENTS.Minted: {
      if (sender.toUpperCase() === address.toUpperCase())
        store.dispatch(
          AVATAR_ACTIONS.callMintAvatarSuccess({ name, dna, avatarId })
        )
      break
    }

    case PLANET_EVENTS.TileChanged: {
      yield put(PLANET_ACTIONS.getTilesRequest())
      break
    }
    default:
      break
  }
}

function * planetContractEvent (action) {
  const {
    payload: { event }
  } = action

  switch (event) {
    case PLANET_EVENTS.TileChanged: {
      yield put(PLANET_ACTIONS.getTilesRequest())
      break
    }
  }
}

function * tokenContractEvent (action) {
  const {
    payload: { event }
  } = action

  switch (event) {
    case TOKEN_EVENTS.Transfer: {
      yield put(TOKEN_ACTIONS.getAurBalanceRequest())
    }
    default:
      break
  }
}

export function * rootChainSagas () {
  yield takeLatest(TYPES.INIT_PROVIDER, initProvider)
  yield takeLatest(TYPES.INIT_ARTIFACTS, initArtifacts)
  yield takeLatest(TYPES.INIT_CONTRACTS, initContracts)
  yield takeLatest(TYPES.AVATAR_CONTRACT_EVENT, avatarContractEvent)
  yield takeLatest(TYPES.PLANET_CONTRACT_EVENT, planetContractEvent)
  yield takeLatest(TYPES.TOKEN_CONTRACT_EVENT, tokenContractEvent)
}
