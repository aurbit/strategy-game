import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import PlanetContext from 'shared/store/planet'
import MapContext, { getMap, setActiveTile, STATUS } from 'shared/store/map'

export default ({ setMapReady, mapReady }) => {
  const [map, setMap] = useState(false)
  return (
    <div>
      <Map
        mapReady={mapReady}
        setMapReady={setMapReady}
        map={map}
        setMap={setMap}
      />
    </div>
  )
}

const useMapLogic = () => {
  const { onPlanet } = PlanetContext.useState()
  const mapState = MapContext.useState()
  const mapDispatch = MapContext.useDispatch()
  const { grid, status: mapStatus } = mapState.map

  useEffect(() => {
    if (mapStatus === STATUS.INIT) {
      getMap(mapDispatch, onPlanet)
    }
  })

  const handleTileClick = ev => {
    setActiveTile(mapDispatch, ev.target.id)
  }

  const handleTileMouseOver = ev => {
    const tile = document.getElementById(ev.target.id)
    tile.style.border = '1px solid white'
  }

  const handleTileMouseOut = ev => {
    const tile = document.getElementById(ev.target.id)
    tile.style.borderLeft = '1px solid #011d4a'
    tile.style.borderBottom = ''
    tile.style.borderRight = ''
    tile.style.borderTop = '1px solid #011d4a'
  }

  return {
    grid,
    mapStatus,
    handleTileClick,
    handleTileMouseOver,
    handleTileMouseOut
  }
}

const Map = ({ setMapReady, mapReady, map, setMap }) => {
  const {
    grid = [],
    handleTileClick,
    handleTileMouseOver,
    handleTileMouseOut
  } = useMapLogic()

  const [width, height] = useWindowSize()
  const styles = useStyles(height, width)

  const build = () => {
    let x, y
    let tileCount = 0
    const template = []

    if (grid.length) {
      x = grid[0].length
      y = grid.length

      // loop over rows and items in the grid array
      for (let i in grid) {
        let rowTemplate = []

        for (let j in grid[i]) {
          rowTemplate.push(
            <div
              onClick={handleTileClick}
              onMouseOver={handleTileMouseOver}
              onMouseOut={handleTileMouseOut}
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
          setMap(template)
        }, 10)
      }
    }
  }

  if (!map) {
    build()
  }

  return mapReady ? map : <Spinner animation='grow' />
}

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0])
  useLayoutEffect(() => {
    function updateSize () {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return size
}

const useStyles = (height, width) => {
  const styles = {
    land: {
      float: 'left',
      backgroundColor: 'green',
      height: Math.floor(height / 90),
      width: Math.floor(width / 138),
      borderLeft: '1px solid #011d4a',
      borderTop: '1px solid #011d4a'
    },
    sea: {
      float: 'left',
      backgroundColor: 'rgb(23,43,70)',
      height: Math.floor(height / 90),
      width: Math.floor(width / 138),
      borderLeft: '1px solid #011d4a',
      borderTop: '1px solid #011d4a'
    },
    row: {
      height: Math.floor(height / 90)
    }
  }
  return styles
}
