import React from 'react'
import { Form, Button } from 'react-bootstrap'
import styles from './index.module.css'
import { ChromePicker } from 'react-color'

import {
  DEFAULT_HAIR_COLOR,
  DEFAULT_EYE_COLOR,
  DEFAULT_SKIN_COLOR,
  AVATARS
} from './avatar-utils'

const CreateCharForm = ({
  onHairChangeComplete,
  onEyeChangeComplete,
  onSkinChangeComplete,
  onChangeRadio,
  gender,
  onSubmit
}) => {
  const [displayHairPicker, setDisplayHairPicker] = React.useState(false)
  const [displayEyePicker, setDisplayEyePicker] = React.useState(false)
  const [displaySkinPicker, setDisplaySkinPicker] = React.useState(false)

  const [tempHairColor, setTempHairColor] = React.useState(DEFAULT_HAIR_COLOR)
  const [tempEyeColor, setTempEyeColor] = React.useState(DEFAULT_EYE_COLOR)
  const [tempSkinColor, setTempSkinColor] = React.useState(DEFAULT_SKIN_COLOR)

  const handleHairPicker = () => setDisplayHairPicker(!displayHairPicker)
  const handleEyePicker = () => setDisplayEyePicker(!displayEyePicker)
  const handleSkinPicker = () => setDisplaySkinPicker(!displaySkinPicker)

  const handleChangeHair = color => setTempHairColor(color.rgb)
  const handleChangeEye = color => setTempEyeColor(color.rgb)
  const handleChangeSkin = color => setTempSkinColor(color.rgb)

  return (
    <Form onSubmit={onSubmit} className={styles.formWrapper}>
      <Form.Group className='d-flex'>
        <Form.Control
          type='text'
          id='name'
          className={styles.avatarInput}
          placeholder='AURA Name'
        />
      </Form.Group>
      <Form.Group>
        <div
          style={{ fontSize: 20 }}
          key='inline-radio'
          className='mt-4 mb-3 d-flex'
        >
          {AVATARS.map((item, index) => {
            return (
              <Form.Check
                key={index}
                className='text-white'
                inline
                onChange={onChangeRadio}
                checked={gender === item.value}
                value={item.value}
                label={item.label}
                type='radio'
              />
            )
          })}
        </div>
      </Form.Group>
      <Form.Group className='d-flex align-items-center'>
        <Form.Label className='text-white font-weight-bold'>
          Hair Color
        </Form.Label>
        <div
          className={styles.swatch}
          id='hair-swatch'
          onClick={handleHairPicker}
        >
          <div
            className={styles.color}
            style={{
              background: `rgba(${tempHairColor.r}, ${tempHairColor.g}, ${tempHairColor.b}, ${tempHairColor.a} )`
            }}
          />
        </div>
        {displayHairPicker ? (
          <div className={styles.popOver}>
            <div className={styles.cover} onClick={handleHairPicker} />
            <ChromePicker
              color={tempHairColor}
              onChange={handleChangeHair}
              onChangeComplete={onHairChangeComplete}
            />
          </div>
        ) : null}
      </Form.Group>
      <Form.Group className='d-flex align-items-center'>
        <Form.Label className='text-white font-weight-bold'>
          Eye Color
        </Form.Label>
        <div
          style={{ marginLeft: 25 }}
          className={styles.swatch}
          id='eye-swatch'
          onClick={handleEyePicker}
        >
          <div
            className={styles.color}
            style={{
              background: `rgba(${tempEyeColor.r}, ${tempEyeColor.g}, ${tempEyeColor.b}, ${tempEyeColor.a} )`
            }}
          />
        </div>
        {displayEyePicker ? (
          <div className={styles.popOver}>
            <div className={styles.cover} onClick={handleEyePicker} />
            <ChromePicker
              color={tempEyeColor}
              onChange={handleChangeEye}
              onChangeComplete={onEyeChangeComplete}
            />
          </div>
        ) : null}
      </Form.Group>
      <Form.Group className='d-flex align-items-center'>
        <Form.Label className='text-white font-weight-bold'>
          Skin Color
        </Form.Label>
        <div
          style={{ marginLeft: 25 }}
          className={styles.swatch}
          id='eye-swatch'
          onClick={handleSkinPicker}
        >
          <div
            className={styles.color}
            style={{
              background: `rgba(${tempSkinColor.r}, ${tempSkinColor.g}, ${tempSkinColor.b}, ${tempSkinColor.a} )`
            }}
          />
        </div>
        {displaySkinPicker ? (
          <div className={styles.popOver}>
            <div className={styles.cover} onClick={handleSkinPicker} />
            <ChromePicker
              color={tempSkinColor}
              onChange={handleChangeSkin}
              onChangeComplete={onSkinChangeComplete}
            />
          </div>
        ) : null}
        {/* <ColorBoxes
          defaultValue={skinColor}
          colors={SKIN_COLORS}
          onClick={onChangeSkin}
        /> */}
      </Form.Group>
      <div className='mt-5'>
        <Button type='submit' size='lg' variant='secondary'>
          Create Avatar
        </Button>
      </div>
    </Form>
  )
}

export default CreateCharForm
