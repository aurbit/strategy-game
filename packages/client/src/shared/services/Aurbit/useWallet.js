// useWallet
// exposes all of the functionality needed for the wallets

import WalletContext, {
  availableWallets,
  setWallet,
  unSetWallet
} from 'shared/store/wallet'
import Web3Context, { availableNetworks, setProvider } from 'shared/store/web3'

export default () => {
  const walletState = WalletContext.useState()
  const walletDispatch = WalletContext.useDispatch()
  const web3Dispatch = Web3Context.useDispatch()

  // handle wallet events
  switch (walletState.activeWallet) {
    case availableWallets.METAMASK: {
      window.ethereum.on('accountsChanged', () => {
        setWallet(walletDispatch, availableWallets.METAMASK)
      })

      window.ethereum.on('chainChanged', chainId => {
        console.log(chainId)
        switch (chainId) {
          // case '0x3': {
          //   setProvider(web3Dispatch, availableNetworks.ROPSTEN)
          //   break
          // }

          // case '0x1': {
          //   setProvider(web3Dispatch, availableNetworks.MAINNET)
          //   break
          // }
          // case '0x2a': {
          //   setProvider(web3Dispatch, availableNetworks.KOVAN)
          //   break
          // }

          // case '0x4': {
          //   setProvider(web3Dispatch, availableNetworks.RINKEBY)
          //   break
          // }
          default: {
            setProvider(web3Dispatch, availableNetworks.DEVELOPMENT)
            break
          }
        }
      })

      window.ethereum.on('disconnect', () =>
        unSetWallet(walletDispatch, availableWallets.METAMASK)
      )
      break
    }
    default:
      break
  }

  // gets the slected wallet address
  const getAddress = () => {
    switch (walletState.activeWallet) {
      case availableWallets.METAMASK:
        return walletState.wallets[availableWallets.METAMASK].selectedAddress
      case availableWallets.WALLET_CONNECT:
        return walletState.wallets[availableWallets.WALLET_CONNECT].accounts[0]
      default:
        break
    }
  }

  return { selectedAddress: getAddress() }
}
