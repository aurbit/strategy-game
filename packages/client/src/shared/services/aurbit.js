import PlanetContext, { availablePlanets } from 'shared/store/planet'
import Web3Context, { availableNetworks } from 'shared/store/web3'
import WalletContext, { availableWallets } from 'shared/store/wallet'

import PlanetDevelopment from 'contracts/development/Planet'
import AvatarDevelopment from 'contracts/development/AvatarAur'
import TokenDevelopment from 'contracts/development/AURToken'

// This aurbit service is an internal api that
// wraps web3 and the wallets to
// use network calls to the deployed contracts
// on the various networks

// AvatarAUR.sol
// mint a new avatar
// get the avatar(s) for the connected wallets
// get the DNA of the avatars

// AURToken.sol
// get the balance of AUR tokens for the wallet

// PLANET.sol
// get the map from Planet.sol

const useAurbit = () => {
  // need to handle metamask or wallet connect
  const { web3, network } = Web3Context.useState()
  const { onPlanet } = PlanetContext.useState()
  const { activeWallet, wallets } = WalletContext.useState()

  // toss errors if it's not used correctly
  // if (!web3State) {
  //   throw new Error(
  //     'You must provide the web3 context state object [web3State]'
  //   )
  // }

  // set the contracts artifacts according to the network
  const usePlanetArtifacts = () => {
    switch (network) {
      case availableNetworks.DEVELOPMENT: {
        const { address, artifact } = PlanetDevelopment
        return { address, abi: artifact.abi }
      }
      case availableNetworks.MAINNET:
      case availableNetworks.ROPSTEN:
      case availableNetworks.RINKEBY:
      default: {
        const { address, abi } = PlanetDevelopment
        return { address, abi }
      }
    }
  }

  const useAvatarArtifacts = () => {
    switch (network) {
      case availableNetworks.DEVELOPMENT: {
        const { address, abi } = AvatarDevelopment
        return { address, abi }
      }
      case availableNetworks.MAINNET:
      case availableNetworks.ROPSTEN:
      case availableNetworks.RINKEBY:
      default: {
        const { address, abi } = AvatarDevelopment
        return { address, abi }
      }
    }
  }

  const useTokenArtifacts = () => {
    switch (network) {
      case availableNetworks.DEVELOPMENT: {
        const { address, abi } = TokenDevelopment
        return { address, abi }
      }
      case availableNetworks.MAINNET:
      case availableNetworks.ROPSTEN:
      case availableNetworks.RINKEBY:
      default: {
        const { address, abi } = TokenDevelopment
        return { address, abi }
      }
    }
  }

  // build the new Contract Objects
  // https://web3js.readthedocs.io/en/v1.2.7/web3-eth-contract.html

  const useAvatarContract = () => {
    const { address, abi } = useAvatarArtifacts()
    const avatar = new web3.eth.Contract(abi, address)
    return { avatar, address, abi }
  }

  const useTokenContract = () => {
    const { address, abi } = useTokenArtifacts()
    const token = new web3.eth.Contract(abi, address)
    return { token, address, abi }
  }

  // allows passing in a new address to override the
  // default planet that was created
  const usePlanetContract = addressOverride => {
    const { address, abi } = usePlanetArtifacts()
    const useAddy = addressOverride ? addressOverride : address
    const planet = new web3.eth.Contract(abi, useAddy)
    return { planet, address: useAddy, abi }
  }
  // use web3 provider for public network calls

  // should return all of the methods for the Planet contracts
  const usePlanet = () => {
    const isPlanet = Object.keys(availablePlanets).includes(onPlanet)

    if (!isPlanet) {
      throw new Error('Invalid Planet being called from useAurbit')
    }

    const { planet } = usePlanetContract()
    // need to handle swtiching different planets
    // store the map arrays in Fleek to make it easier
    const getMap = async planetName => {
      switch (planetName) {
        case availablePlanets.EARTH: {
          const result = await fetch(
            'https://xhad-team-bucket.storage.fleek.co/earth-map.json'
          )

          if (!result.status === 200) {
            throw new Error(
              'Failed to get the map of earth from Fleek in useAurbit'
            )
          }

          const map = await result.json()
          return map
        }

        default: {
          throw new Error('Cannot get that planet.')
        }
      }
    }

    return { getMap, planet }
  }

  const useWallet = () => {
    // handle wallet events
    switch (activeWallet) {
      case availableWallets.METAMASK: {
        window.ethereum.on('accountsChanged', () => document.reload())
      }
    }
    const getAddress = () => {
      switch (activeWallet) {
        case availableWallets.METAMASK:
          return wallets[availableWallets.METAMASK].selectedAddress
        case availableWallets.WALLET_CONNECT:
          return wallets[availableWallets.WALLET_CONNECT].accounts[0]
      }
    }

    return { getAddress }
  }

  return { usePlanet, useWallet }
}

export default useAurbit
