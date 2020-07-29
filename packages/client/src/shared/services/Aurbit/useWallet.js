// useWallet
// exposes all of the functionality needed for the wallets

import WalletContext, { availableWallets } from 'shared/store/wallet'

export default () => {
  const walletState = WalletContext.useState()
  // handle wallet events
  switch (walletState.activeWallet) {
    case availableWallets.METAMASK: {
      window.ethereum.on('accountsChanged', () => document.reload())
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
