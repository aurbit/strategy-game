// this takes a byte array map and converts
// it into array of 1 or 0 tiles for land

export default map => {
  const pullbit = (b, pos) => {
    return (b & (1 << pos)) >> pos
  }

  const isLand = index => {
    const loc = Math.floor(index / 8)
    const bitpos = 7 - (index % 8)
    return pullbit(map[loc], bitpos)
  }

  const newl = 112
  const mapArray = []
  let out = ''
  for (const i in [...Array(112 * 64).keys()]) {
    out = out + isLand(i)
    if (i % newl === 0) {
      if (i > 0) {
        let row = out.split('')
        mapArray.push(row)
      }
      out = ''
    }
  }
  return mapArray
}
