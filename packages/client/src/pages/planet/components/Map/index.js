import React, { useEffect, useLayoutEffect, useState } from 'react'
import PlanetContext from 'shared/store/planet'
import MapContext, { getMap, STATUS } from 'shared/store/map'
import './map.css'

export default props => {
  const { grid = [] } = useMapLogic()
  const [width, height] = useWindowSize()

  return (
    <div className='wrapper'>
      <BuildMapGrid grid={grid} height={height} width={width} />
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

  return { grid, mapStatus }
}

const BuildMapGrid = ({ grid, height, width }) => {
  const styles = useStyles(height, width)
  const template = []

  if (grid.length) {
    let count = 0
    for (let i in grid) {
      let rowTemplate = []

      for (let j in grid[i]) {
        rowTemplate.push(
          <div
            className='tile'
            key={j}
            id={count}
            style={grid[i][j] === '1' ? styles.land : styles.sea}
          ></div>
        )
        count++
      }

      template.push(
        <div key={i} style={styles.row}>
          {rowTemplate}
        </div>
      )
    }
  }

  return <div>{template}</div>
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
