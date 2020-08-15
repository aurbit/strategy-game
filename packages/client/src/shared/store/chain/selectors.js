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
  const aaR = state.chain.avatarArtifacts
  const taR = state.chain.tokenArtifacts
  const paR = state.chain.planetArtifacts
  const acR = state.chain.avatarContract
  const tcR = state.chain.tokenContract
  const pcR = state.chain.planetContract
  const providersReady = aaR && taR && paR && acR && tcR && pcR
  if (state.chain.network && providersReady) {
    return true
  } else {
    return false
  }
}
export const selectPlanetContractAddress = state =>
  state.chain.planetContract._address
