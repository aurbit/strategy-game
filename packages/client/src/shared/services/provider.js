import PlanetContractsDEV from 'contracts/development/Planet'
import TokenContractsDEV from 'contracts/development/AURToken'
import AvatarContractsDEV from 'contracts/development/AvatarAur'

import { availablePlanets } from 'shared/store/planet'
import { availableNetworks } from 'shared/store/web3'

import Web3 from 'web3'

export const useProvider = (network, port) => {
  const url = (network, key) => `wss://${network}.infura.io/ws/v3/${key}`
  const key = '0f76dc369ae847dba3d00ac6427f0b42'

  switch (network) {
    case availableNetworks.DEVELOPMENT: {
      const wsPro = new Web3.providers.WebsocketProvider(
        `ws://0.0.0.0:${port || 7545}`
      )
      // const wsPro = new Web3(`http://localhost:${port || 7545}`)
      return new Web3(wsPro)
    }
    case availableNetworks.MAINNET: {
      return new Web3(url(network, key))
    }
    case availableNetworks.ROPSTEN: {
      return new Web3(url(network, key))
    }
    case availableNetworks.KOVAN: {
      return new Web3(url(network, key))
    }
    case availableNetworks.RINKEBY: {
      return new Web3(url(network, key))
    }
    default: {
      return new Web3(`http://localhost:${port || 7545}`)
    }
  }
}

export const useAvatar = network => {
  const provider = useProvider(network)
  const useAvatarArtifacts = () => {
    switch (network) {
      case availableNetworks.DEVELOPMENT: {
        const { address, artifact } = AvatarContractsDEV
        return { address, artifact }
      }
      case availableNetworks.MAINNET:
      case availableNetworks.ROPSTEN:
      case availableNetworks.RINKEBY:
      default: {
        const { address, artifact } = AvatarContractsDEV
        return { address, artifact }
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

  const { avatar, address, artifact, eth } = useAvatarContract()

  avatar.events.allEvents({ fromBlock: 'latest' }, console.log)

  return { address, abi: artifact.abi, avatar, provider, eth: provider.eth }
}

export const usePlanet = (network, planetName) => {
  const provider = useProvider(network)
  const isPlanet = Object.keys(availablePlanets).includes(planetName)

  const usePlanetArtifacts = () => {
    switch (network) {
      case availableNetworks.DEVELOPMENT: {
        const { address, artifact } = PlanetContractsDEV
        return { address, artifact }
      }
      case availableNetworks.MAINNET:
      case availableNetworks.ROPSTEN:
      case availableNetworks.RINKEBY:
      default: {
        const { address, artifact } = PlanetContractsDEV
        return { address, artifact }
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
  const { address, planet, abi } = usePlanetContract()
  return { planet, address, abi, provider, eth: provider.eth }
}

export const useToken = network => {
  const provider = useProvider(network)
  const useTokenArtifacts = () => {
    switch (network) {
      case availableNetworks.DEVELOPMENT: {
        const { address, artifact } = TokenContractsDEV
        return { address, artifact }
      }
      case availableNetworks.MAINNET:
      case availableNetworks.ROPSTEN:
      case availableNetworks.RINKEBY:
      default: {
        const { address, artifact } = TokenContractsDEV
        return { address, artifact }
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
