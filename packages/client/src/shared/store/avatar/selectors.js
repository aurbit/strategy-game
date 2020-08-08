export const selectAvatars = state => state.avatar.avatars
export const selectActiveIndex = state => state.avatar.activeIndex
export const selectMintAvatar = state => state.avatar.mintAvatar
export const selectAvatar = state => state.avatar.avatars.list[0]
export const selectAvatarList = state => state.avatar.avatars.list
export const selectAvatarId = state =>
  state.avatar.avatars.list[state.avatar.avatars.list.length - 1].id
