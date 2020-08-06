import React, { useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from 'react-bootstrap'
import { ACTIONS } from 'shared/store/map'
import { selectMapApiStatus, selectMapGrid } from 'shared/store/map/selectors'
import { selectCurrentPlanet } from 'shared/store/planet/index'

export default ({ setMapReady, activeTile }) => {
  const dispatch = useDispatch()
  // Loading is the Map API status - but loading seems to be coming from somewhere else
  const loading = useSelector(selectMapApiStatus)
  const planet = useSelector(selectCurrentPlanet)

  const [map, setMap] = useState(false)

  React.useEffect(() => {
    setMapReady(false)
    dispatch(ACTIONS.getMap({ planet }))
  }, [dispatch, planet])

  return loading ? (
    <Spinner animation='grow' variant='warning' />
  ) : (
    <Map
      setMapReady={setMapReady}
      map={map}
      setMap={setMap}
      activeTile={activeTile}
    />
  )
}

const Map = ({ setMapReady, map, setMap, activeTile }) => {
  const dispatch = useDispatch()
  const grid = useSelector(selectMapGrid)
  const [width, height] = useWindowSize()
  const styles = useStyles(height, width)

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

  const build = () => {
    let x, y
    let tileCount = 0
    const template = []

    if (grid.length) {
      x = grid[0].length
      y = grid.length

      // loop over rows and items in the grid array
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
          setMap(template)
          setMapReady(true)
        })
      }
    }
  }

  if (!map) build()

  // return mapReady ? <Spinner animation='grow' variant='warning' /> : map
  return map
}

const useWindowSize = () => {
  return [window.innerWidth, window.innerHeight]
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
