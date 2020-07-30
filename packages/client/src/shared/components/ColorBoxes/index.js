import React from 'react'
import styles from './index.module.css'

const ColorBoxContainer = ({ defaultValue, colors, onClick }) => {
  const [selected, setSelected] = React.useState(null)
  // Find matching color in array and set state
  const colorIndex = React.useCallback(() => colors.findIndex(findColorIndex))
  setSelected(colorIndex)

  return <div className='d-flex flex-row'>{renderColors()}</div>

  function renderColors () {
    return colors.map((color, index) => {
      return (
        <div
          key={index}
          id={index}
          onClick={handleOnClick}
          className={styles.colors}
          value={color}
          style={{
            backgroundColor: color,
            border: parseInt(selected) === index ? '1px solid red' : null
          }}
        ></div>
      )
    })
  }

  function handleOnClick (e) {
    const { id } = e.target
    setSelected(id)
    onClick(colors[id])
  }

  function findColorIndex (color) {
    return color === defaultValue
  }
}

export default ColorBoxContainer
