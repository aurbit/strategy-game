export const avatarImage = value => {
  let avatar = ''
  switch (parseInt(value)) {
    case 1:
      avatar = 'https://xhad-team-bucket.storage.fleek.co/humanmale.svg'
      break
    case 2:
      avatar = 'https://xhad-team-bucket.storage.fleek.co/humanfemale.svg'
      break
    default:
      avatar = 'https://xhad-team-bucket.storage.fleek.co/humanfemale.svg'
      break
  }
  return avatar
}

export const rgbToHex = rgbArray => {
  return (
    '#' +
    ((1 << 24) + (rgbArray[0] << 16) + (rgbArray[1] << 8) + rgbArray[2])
      .toString(16)
      .slice(1)
  )
}
