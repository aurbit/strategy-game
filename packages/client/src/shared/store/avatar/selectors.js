export const selectAvatars = state => state.avatar.auras

export const selectMintAvatarSuccess = state => state.avatar.success.mint
export const selectMintAvatarError = state => state.avatar.error.mint
export const selectMintAvatarLoading = state => state.avatar.loading.mint

export const selectGetAvatarsSuccess = state => state.avatar.success.get
export const selectGetAvatarsLoading = state => state.avatar.loading.get
export const selectGetAvatarsError = state => state.avatar.error.get
