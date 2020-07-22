import React from 'react'
import { render } from '@testing-library/react'

import map from '../constants/map.js'

test('render the map', () => {
  const pullbit = (b, pos) => {
    return (b & (1 << pos)) >> pos
  }

  const isLand = index => {
    const loc = Math.floor(index / 8)
    const bitpos = 7 - (index % 8)
    return pullbit(map[loc], bitpos)
  }

  const main = () => {
    const newl = 112
    let out = ''
    for (const i in [...Array(112 * 64).keys()]) {
      out = out + isLand(i)
      if (i % newl === 0) {
        console.log(out)

        out = ''
      }
    }
  }

  main()
})
