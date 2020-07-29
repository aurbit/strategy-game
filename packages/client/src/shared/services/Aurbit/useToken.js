// useToken
// exposes the functions needed to use the token contracts
import Web3Context, { availableNetworks } from 'shared/store/web3'
import TokenContractsDEV from 'contracts/development/Planet'

export default () => {
  const { web3, network } = Web3Context.useState()

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

  const { address, abi } = useTokenArtifacts()
  const token = new web3.eth.Contract(abi, address)

  return { token, abi, address }
}
