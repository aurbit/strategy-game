import PlanetContext, { availablePlanets } from 'shared/store/planet'
import PlanetContractsDEV from 'contracts/development/Planet'
import Web3Context, { availableNetworks } from 'shared/store/web3'

export default () => {
  const planetState = PlanetContext.useState()
  const { web3, network } = Web3Context.useState()

  const isPlanet = Object.keys(availablePlanets).includes(planetState.onPlanet)

  const usePlanetArtifacts = () => {
    switch (network) {
      case availableNetworks.DEVELOPMENT: {
        const { address, artifact } = PlanetContractsDEV
        return { address, abi: artifact.abi }
      }
      case availableNetworks.MAINNET:
      case availableNetworks.ROPSTEN:
      case availableNetworks.RINKEBY:
      default: {
        const { address, abi } = PlanetContractsDEV
        return { address, abi }
      }
    }
  }
  // allows passing in a new address to override the
  // default planet that was created
  const usePlanetContract = addressOverride => {
    const { address, abi } = usePlanetArtifacts()
    const useAddy = addressOverride ? addressOverride : address
    const planet = new web3.eth.Contract(abi, useAddy)
    return { planet, address: useAddy, abi }
  }

  if (!isPlanet) {
    throw new Error('Invalid Planet being called from useAurbit')
  }

  // const { planet } = usePlanetContract()
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

  // const setPlanet = planetName() => {}

  const { address, planet, abi } = usePlanetContract()

  return { planet, address, abi, getMap, planetName: planetState.onPlanet }
}
