export const hairOptions = value => {
  let hex = ''
  switch (parseInt(value, 10)) {
    case 0:
      hex = '#FF2D00'
      break
    case 25:
      hex = '#FFF700'
      break
    case 50:
      hex = '#00FF0A'
      break
    case 75:
      hex = '#00E3FF'
      break
    case 100:
      hex = '#5A00FF'
      break
    default:
      throw new Error('Out of range')
  }
  return hex
}

export const eyeOptions = (value) => {
  let hex = ''
  switch (parseInt(value, 10)) {
    case 0:
      hex = '#FF2D00'
      break
    case 25:
      hex = '#FFF700'
      break
    case 50:
      hex = '#00FF0A'
      break
    case 75:
      hex = '#00E3FF'
      break
    case 100:
      hex = '#5A00FF'
      break
    default:
      throw new Error('Out of range')
  }
  return hex
}

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
