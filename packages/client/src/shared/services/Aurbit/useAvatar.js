// userAvatar

// exposes all of the functionality needed for the
// avatar contracts

import Web3Context, { availableNetworks } from 'shared/store/web3'

export default () => {
  const { web3, network } = Web3Context.useState()

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

  // build the new Contract Objects with Web3
  // https://web3js.readthedocs.io/en/v1.2.7/web3-eth-contract.html
  const useAvatarContract = () => {
    const { address, abi } = useAvatarArtifacts()
    const avatar = new web3.eth.Contract(abi, address)
    return { avatar, address, abi }
  }

  return { address, abi, avatar }
}
