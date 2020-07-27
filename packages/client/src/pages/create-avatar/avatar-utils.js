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
      console.log('ERROR')
  }
  return hex
}

export const eyeColor = value => {
  let hex = ''
  switch (value) {
    case 0:
      hex = '#a83232'
      break
    case 25:
      hex = '#a83232'
      break
    case 50:
      hex = '#a83232'
      break
    case 75:
      hex = '#a83232'
      break
    case 100:
      hex = '#a83232'
      break
    default:
      throw new Error('Out of range')
  }
  return hex
}

export const skinOptions = value => {
  let hex = ''
  switch (parseInt(value)) {
    case 0:
      hex = '#C9A440'
      break
    case 25:
      hex = '#C98D40'
      break
    case 50:
      hex = '#DBA786'
      break
    case 75:
      hex = '#674732'
      break
    case 100:
      hex = '#4A2E1D'
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
