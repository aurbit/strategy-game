import PlanetContractsDEV from 'contracts/development/Planet'
import TokenContractsDEV from 'contracts/development/AURToken'
import AvatarContractsDEV from 'contracts/development/AvatarAUR'

import { PLANETS } from 'shared/store/planet'
import { NETWORKS } from 'shared/store/chain'

import { useSelector } from 'react-redux'
import { selectNetwork } from 'shared/store/chain/selectors'
import { selectCurrentPlanet } from 'shared/store/planet'

import Web3 from 'web3'

export const useProvider = () => {
  const network = useSelector(selectNetwork)

  if (!network) throw new Error('You must pass the current network in')
  const port = process.env.NETWORK_PORT || 7545
  const url = (network, key) => `wss://${network}.infura.io/ws/v3/${key}`
  const key = '0f76dc369ae847dba3d00ac6427f0b42'

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

export const useAvatar = () => {
  const provider = useProvider()
  const network = useSelector(selectNetwork)

  const useAvatarArtifacts = () => {
    switch (network) {
      case NETWORKS.DEVELOPMENT: {
        const { address, artifact } = AvatarContractsDEV
        return { address, artifact }
      }
      case NETWORKS.MAINNET:
      case NETWORKS.ROPSTEN:
      case NETWORKS.RINKEBY:
      default: {
        throw new Error('Network Currently Unsupported')
      }
    }
  }

  // build the new Contract Objects with Web3
  // https://web3js.readthedocs.io/en/v1.2.7/web3-eth-contract.html
  const useAvatarContract = () => {
    const { address, artifact } = useAvatarArtifacts()
    const avatar = new provider.eth.Contract(artifact.abi, address)
    return { avatar, address, artifact }
  }
  const { avatar, address, artifact } = useAvatarContract()
  return { address, abi: artifact.abi, avatar, provider, eth: provider.eth }
}

// usePlanet exports the Planet contract provider, abi,
// artifacts and address
export const usePlanet = addressOverride => {
  const currentPlanet = useSelector(selectCurrentPlanet)
  const provider = useProvider()
  const network = useSelector(selectNetwork)

  const isPlanet = Object.keys(PLANETS).includes(currentPlanet)

  const usePlanetArtifacts = () => {
    switch (network) {
      case NETWORKS.DEVELOPMENT: {
        const { address, artifact } = PlanetContractsDEV
        return { address, artifact }
      }
      case NETWORKS.MAINNET:
      case NETWORKS.ROPSTEN:
      case NETWORKS.RINKEBY:
      default: {
        throw new Error('Network Currently Unsupported')
      }
    }
  }
  // allows passing in a new address to override the
  // default planet that was created
  const usePlanetContract = addressOverride => {
    const { address, artifact } = usePlanetArtifacts()
    const useAddy = addressOverride ? addressOverride : address
    const planet = new provider.eth.Contract(artifact.abi, useAddy)
    return {
      planet,
      address: useAddy,
      abi: artifact.abi
    }
  }

  if (!isPlanet) {
    throw new Error('Invalid Planet being called from useAurbit')
  }
  const { address, planet, abi } = usePlanetContract(addressOverride)
  return { planet, address, abi, provider, eth: provider.eth }
}

// useToken exports the Token contract provider, abi,
// artifacts and address
export const useToken = () => {
  const provider = useProvider()
  const network = useSelector(selectNetwork)

  const useTokenArtifacts = () => {
    switch (network) {
      case NETWORKS.DEVELOPMENT: {
        const { address, artifact } = TokenContractsDEV
        return { address, artifact }
      }
      case NETWORKS.MAINNET:
      case NETWORKS.ROPSTEN:
      case NETWORKS.RINKEBY:
      default: {
        throw new Error('Network Currently Unsupported')
      }
    }
  }

  const useTokenContract = () => {
    const { address, artifact } = useTokenArtifacts()
    const token = new provider.eth.Contract(artifact.abi, address)
    return { token, address, abi: artifact.abi }
  }
  const { token, address, abi } = useTokenContract()
  return { token, abi, address, provider, eth: provider.eth }
}
