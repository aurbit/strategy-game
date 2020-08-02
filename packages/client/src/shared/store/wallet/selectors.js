export const selectAddress = state => state.wallet.address
export const selectVendor = state => state.wallet.vendor
export const selectWalletInitalized = state => {
  if (state.wallet) {
    return true
  } else {
    return false
  }
}
