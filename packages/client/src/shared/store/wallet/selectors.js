export const selectAddress = state => state.wallet.address
export const selectNetwork = state => state.wallet.network
export const selectWalletInitalized = state => {
  if (state.wallet) {
    return true
  } else {
    return false
  }
}
