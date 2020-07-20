import React from 'react'
import { render } from '@testing-library/react'

import map from '../map.js'

test('render the map', () => {
  const pullbit = (b, pos) => {
    return (b & (1 << pos)) >> pos
  }

  const isLand = index => {
    const loc = (index / 8).toFixed(0)
    let bitpos = 7 - (index % 8)
    return pullbit(map[loc], bitpos)
  }

  const main = () => {
    const newl = 112
    let out = ''
    for (let i in [...Array(112 * 64).keys()]) {
      out = out + isLand(i)
      if (i % newl === 0) {
        console.log(out)
        out = ''
      }
    }
  }

  main()
})
