// state selectors
export const selectNetwork = state => state.chain.network
export const selectProvider = state => state.chain.provider
export const selectTokenArtifacts = state => state.chain.tokenArtifacts
export const selectPlanetArtifacts = state => state.chain.planetArtifacts
export const selectAvatarArtifacts = state => state.chain.avatarArtifacts
export const selectTokenContract = state => state.chain.tokenContract
export const selectPlanetContract = state => state.chain.planetContract
export const selectAvatarContract = state => state.chain.avatarContract
export const selectChainInitialzed = state => {
  if (state.chain.network) {
    return true
  } else {
    return false
  }
}
