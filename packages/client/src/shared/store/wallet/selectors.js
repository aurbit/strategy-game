export const selectAddress = state => state.wallet.address || null
export const selectWallet = state => state.wallet.activeWallet
export const selectWalletInitalized = state => {
  if (state.wallet) {
    return true
  } else {
    return false
  }
}
