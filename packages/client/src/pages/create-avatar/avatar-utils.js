export const avatarImage = value => {
  let avatar = ''
  switch (value) {
    case 'human_male':
      avatar = 'https://xhad-team-bucket.storage.fleek.co/humanmale.svg'
      break
    case 'human_female':
      avatar = 'https://xhad-team-bucket.storage.fleek.co/humanfemale.svg'
      break
    default:
      throw new Error('Out of range')
  }
  return avatar
}
