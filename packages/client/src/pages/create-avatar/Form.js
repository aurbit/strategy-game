import React from 'react'
import { Form, Button } from 'react-bootstrap'
import styles from './index.module.css'
import { ChromePicker } from 'react-color'
const SKIN_COLOR = [
  { value: '#4A2E1D', id: 1 },
  { value: '#674732', id: 2 },
  { value: '#DBA786', id: 3 },
  { value: '#C98D40', id: 4 },
  { value: '#C9A440', id: 5 }
]

const AVATARS = [
  { value: 'human_male', label: 'Male' },
  { value: 'human_female', label: 'Female' }
]

const CreateCharForm = ({
  onChangeRange,
  onChangeRadio,
  onChangeSkin,
  gender,
  skinColor,
  onSubmit
}) => {
  const [displayPicker, setDisplayPicker] = React.useState(false)
  const [color, setColor] = React.useState({
    r: '241',
    g: '112',
    b: '19',
    a: '1'
  })
  const handleClick = () => {
    setDisplayPicker(!displayPicker)
  }

  const handleClose = () => {
    setDisplayPicker(false)
  }

  const handleChange = (color) => {
    setColor(color.rgb)
  }
  return (
    <Form onSubmit={onSubmit} className={styles.formWrapper}>
      <Form.Group className="d-flex justify-content-center">
        <Form.Control
          style={{ maxWidth: 300 }}
          type="email"
          placeholder="Enter Name..."
        />
      </Form.Group>
      <Form.Group>
        <div
          style={{ fontSize: 20 }}
          key="inline-radio"
          className="mt-4 mb-3 d-flex justify-content-center"
        >
          {AVATARS.map((item, index) => {
            return (
              <Form.Check
                key={index}
                className="text-white"
                inline
                onChange={onChangeRadio}
                checked={gender === item.value}
                value={item.value}
                label={item.label}
                type="radio"
              />
            )
          })}
        </div>
      </Form.Group>
      <Form.Group className="d-flex align-items-center">
        <Form.Label className="text-white">Hair Color</Form.Label>
        <div className={styles.swatch} onClick={handleClick}>
          <div
            className={styles.color}
            style={{
              background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a} )`
            }}
          />
        </div>
        {displayPicker ? (
          <div className={styles.popOver}>
            <div className={styles.cover} onClick={handleClose} />
            <ChromePicker color={color} onChange={handleChange} />
          </div>
        ) : null}
      </Form.Group>
      <Form.Group className="d-flex align-items-center">
        <Form.Label className="text-white">Eye Color</Form.Label>
        <div className={styles.swatch} onClick={handleClick}>
          <div
            className={styles.color}
            style={{
              background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a} )`
            }}
          />
        </div>
        {displayPicker ? (
          <div className={styles.popOver}>
            <div className={styles.cover} onClick={handleClose} />
            <ChromePicker color={color} onChange={handleChange} />
          </div>
        ) : null}
      </Form.Group>
      <Form.Group>
        <Form.Label className="text-white">Skin Color</Form.Label>
        <div key="inline-check" className="mb-3">
          {SKIN_COLOR.map((item, index) => {
            return (
              <Form.Check
                inline
                key={index}
                onChange={onChangeSkin}
                value={item.value}
                checked={skinColor === item.value}
                className="text-white"
                type="checkbox"
              />
            )
          })}
        </div>
      </Form.Group>
      <div className="text-center mt-5">
        <Button type="submit" className={styles.submitBtn} variant="secondary">
          Create Character
        </Button>
      </div>
    </Form>
  )
}

export default CreateCharForm

{
  /* <Form.Control
          className="custom-range"
          step="25"
          type="range"
          id="hair"
          onChange={onChangeRange}
        /> */
}


{/* <Form.Control
          step="25"
          className="custom-range"
          type="range"
          id="skin"
          onChange={onChangeRange}
        /> */}