// state selectors
export const selectNetwork = state => state.chain.network
export const selectChainInitialzed = state => {
  if (state.chain.network) {
    return true
  } else {
    return false
  }
}
