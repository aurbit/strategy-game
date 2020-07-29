const hexToRgb = hex => {
  let c
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('')
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = '0x' + c.join('')
    return [(c >> 16) & 255, (c >> 8) & 255, c & 255]
  }
  throw new Error('Bad Hex')
}

const parseGender = gender => {
  if (gender === 'human_male') {
    return 1
  } else {
    return 2
  }
}

export const parseDataArray = (hair, eyes, skin, gender) => {
  const rgbHair = hexToRgb(hair)
  const rgbEyes = hexToRgb(eyes)
  const rgbSkin = hexToRgb(skin)
  const genderResult = parseGender(gender)
  return [...rgbHair, ...rgbEyes, ...rgbSkin, 0, 0, 0, 0, 0, genderResult]
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

export const SKIN_COLORS = [
  '#4A2E1D',
  '#674732',
  '#DBA786',
  '#C98D40',
  '#C9A440'
]

export const AVATARS = [
  { value: 'human_male', label: 'Male' },
  { value: 'human_female', label: 'Female' }
]

export const DEFAULT_COLOR = {
  r: '27',
  g: '20',
  b: '100',
  a: '1'
}

export const DEFAULT_SKIN = {
  r: '241',
  g: '112',
  b: '19',
  a: '1'
}
