import React from 'react'
import SVG from 'react-inlinesvg' // We can maybe replace this with a native fetch and inner HTML - This lib does same
import { Container, Row, Col } from 'react-bootstrap'
import Navbar from 'shared/components/Layout/Navbar'

import { avatarImage, parseDataArray } from './avatar-utils'
// import Avatar from 'shared/components/PlayerAvatar'
import styles from './index.module.css'
import CreateCharForm from './Form'

const CreateCharacterContainer = () => {
  const [hairColor, setHairColor] = React.useState('#1b1464')
  const [eyeColor, setEyeColor] = React.useState('#1b1464')
  const [skinColor, setSkinColor] = React.useState('#C98D40')
  const [gender, setGender] = React.useState('human_male')
  const [avatarUrl, setAvatarUrl] = React.useState(avatarImage('human_male'))

  React.useEffect(() => {
    // Update global CSS so style change will affect SVG class
    const style = document.createElement('style')
    document.head.appendChild(style)
    style.sheet.insertRule(`.eye-color {fill: ${eyeColor}}`)
    style.sheet.insertRule(`.hair-color {fill: ${hairColor}}`)
    style.sheet.insertRule(`.skin-color {fill: ${skinColor}}`)
  }, [hairColor, eyeColor, skinColor])

  function handleOnHairChangeComplete (color) {
    setHairColor(color.hex)
  }

  function handleOnEyeChangeComplete (color) {
    setEyeColor(color.hex)
  }

  function handleOnSkinChangeComplete (color) {
    setSkinColor(color.hex)
  }

  function handleOnChangeRadio (e) {
    const avatarUrl = avatarImage(e.target.value)
    setAvatarUrl(avatarUrl)
    setGender(e.target.value)
  }

  function handleOnChangeSkin (value) {
    setSkinColor(value)
  }

  function handleOnSubmit (e) {
    e.preventDefault()
    console.log('Form Submit')
    const data = parseDataArray(hairColor, eyeColor, skinColor, gender)
    console.log('DATA: ', data)
    // Parse and Submit Gender/ Hair & Skin Color
  }
  return (
    <Container fluid style={{ backgroundColor: 'black' }}>
      <Navbar />
      <Row section='create'>
        <Col id='avatar' xs={12} md={6}>
          <div style={{ transform: 'rotateY(180deg)' }}>
            <SVG src={avatarUrl} />
          </div>
        </Col>
        <Col id='form' xs={12} md={5} className='ml-5'>
          <h1 style={{ marginTop: 50 }} className=' text-white'>
            Create your Avatar
          </h1>
          <h5 className={`${styles.raceTitle} mb-4`}>RACE: HUMAN</h5>
          <CreateCharForm
            gender={gender}
            skinColor={skinColor}
            onSubmit={handleOnSubmit}
            onChangeRadio={handleOnChangeRadio}
            onChangeSkin={handleOnChangeSkin}
            onHairChangeComplete={handleOnHairChangeComplete}
            onEyeChangeComplete={handleOnEyeChangeComplete}
            onSkinChangeComplete={handleOnSkinChangeComplete}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default CreateCharacterContainer
