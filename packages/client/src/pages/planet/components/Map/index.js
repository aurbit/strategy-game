import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from 'react-bootstrap'
import { ACTIONS } from 'shared/store/map'
import { selectMapGrid } from 'shared/store/map/selectors'
import { selectTiles } from 'shared/store/planet/selectors'
import { colorizer } from 'shared/utils/colorizer'

export default ({ setMapReady, mapReady, activeTile }) => {
  const [map, setMap] = React.useState(false)

  return (
    <div>
      <Map
        mapReady={mapReady}
        setMapReady={setMapReady}
        map={map}
        setMap={setMap}
        activeTile={activeTile}
      />
    </div>
  )
}

const Map = ({ setMapReady, mapReady, map, setMap, activeTile }) => {
  const dispatch = useDispatch()
  const userTiles = useSelector(selectTiles)

  const grid = useSelector(selectMapGrid)
  const width = window.innerWidth
  const height = window.innerHeight
  const styles = useStyles(height, width)

  colorizer(mapReady, userTiles)
  const build = () => {
    let x, y
    let tileCount = 0
    const template = []

    if (grid.length) {
      x = grid[0].length
      y = grid.length

      function handleTileClick (e) {
        dispatch(ACTIONS.setActiveTile(e.target.id))
        const tile = document.getElementById(e.target.id)
        tile.style.borderLeft = '1px solid #011d4a'
        tile.style.borderBottom = ''
        tile.style.borderRight = ''
        tile.style.borderTop = '1px solid #011d4a'
      }

      function handleTileMouseOver (e) {
        const tile = document.getElementById(e.target.id)
        tile.style.border = '1px solid white'
      }

      function handleTileMouseOut (e) {
        const tile = document.getElementById(e.target.id)
        tile.style.borderLeft = '1px solid #011d4a'
        tile.style.borderBottom = ''
        tile.style.borderRight = ''
        tile.style.borderTop = '1px solid #011d4a'
      }

      for (const i in grid) {
        const rowTemplate = []

        for (const j in grid[i]) {
          rowTemplate.push(
            <div
              onClick={handleTileClick}
              onMouseOver={handleTileMouseOver}
              onMouseOut={e => handleTileMouseOut(e, activeTile)}
              className='tile'
              key={j}
              id={tileCount}
              style={grid[i][j] === '1' ? styles.land : styles.sea}
            ></div>
          )
          tileCount++
        }

        // push the row into the template
        template.push(
          <div key={i} style={styles.row}>
            {rowTemplate}
          </div>
        )
      }
      // delay to avoid messy rerender with javascript lag
      if (tileCount === x * y) {
        setTimeout(() => {
          setMapReady(true)
          return setMap(template)
        })
      }
    }
  }

  if (!map) build()

  // colorize the user owned tiles

  return !mapReady ? <Spinner animation='grow' variant='warning' /> : map
}

const useStyles = (height, width) => {
  let kw = window.innerWidth >= 1000 ? 138 : 106.5
  const styles = {
    land: {
      float: 'left',
      backgroundColor: 'green',
      height: Math.floor(height / 90),
      width: Math.floor(width / kw),
      borderLeft: '1px solid #011d4a',
      borderTop: '1px solid #011d4a'
    },
    sea: {
      float: 'left',
      backgroundColor: 'rgb(23,43,70)',
      height: Math.floor(height / 90),
      width: Math.floor(width / kw),
      borderLeft: '1px solid #011d4a',
      borderTop: '1px solid #011d4a'
    },
    row: {
      height: Math.floor(height / 90)
    }
  }
  return styles
}
