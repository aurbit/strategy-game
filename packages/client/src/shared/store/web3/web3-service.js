import Web3 from 'web3'
import { NETWORKS } from 'shared/store/chain'

export class Web3Service {
  web3Instance

  // Initialze Network
  init = async (network) => {
    if (!network) {
      throw new Error('Network is missing')
    }
    const port = process.env.REACT_APP_NETWORK_PORT || 7545
    const key = '0f76dc369ae847dba3d00ac6427f0b42'
    const url = (network, key) => `wss://${network}.infura.io/ws/v3/${key}`

    switch (network) {
      case NETWORKS.DEVELOPMENT: {
        const wsPro = new Web3.providers.WebsocketProvider(
          `ws://localhost:${port}`
        )
        return new Web3(wsPro)
      }
      case NETWORKS.MAINNET: {
        return new Web3(url(network, key))
      }
      case NETWORKS.ROPSTEN: {
        return new Web3(url(network, key))
      }
      case NETWORKS.KOVAN: {
        return new Web3(url(network, key))
      }
      case NETWORKS.RINKEBY: {
        return new Web3(url(network, key))
      }
      default: {
        const wsPro = new Web3.providers.WebsocketProvider(
          `ws://localhost:${port}`
        )
        return new Web3(wsPro)
      }
    }
  }
}
