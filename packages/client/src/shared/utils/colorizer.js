import colors from 'shared/utils/colors2'

export const colorizer = (mapReady, userTiles, players) => {
  if (mapReady && userTiles.result?.length) {
    let i = 0

    const interval = setInterval(() => {
      if (i >= userTiles.result.length) {
        return clearInterval(interval)
      }

      const tile = userTiles.result[i]
      document.getElementById(tile[0]).style.backgroundColor = colors[tile[2]]

      i++
    }, 10)
  }
}
