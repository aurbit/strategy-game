import React from 'react'
import SVG from 'react-inlinesvg' // We can maybe replace this with a native fetch and inner HTML - This lib does same
import { Container, Row, Col } from 'react-bootstrap'
import { avatarImage } from './avatar-utils'

import styles from './index.module.css'
import logo from 'shared/images/logo.svg'
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

  function handleOnHairChangeComplete(color) {
    setHairColor(color.hex)
  }

  function handleOnEyeChangeComplete(color) {
    setEyeColor(color.hex)
  }

  function handleOnChangeRadio(e) {
    const avatarUrl = avatarImage(e.target.value)
    setAvatarUrl(avatarUrl)
    setGender(e.target.value)
  }

  function handleOnChangeSkin(e) {
    console.log(e.target.value)
    setSkinColor(e.target.value)
  }

  function handleOnSubmit(e) {
    e.preventDefault()
    console.log('Form Submit')
    // Parse and Submit Gender/ Hair & Skin Color
  }
  return (
    <Container fluid className="h-100" style={{ backgroundColor: 'black' }}>
      <Container>
        <Row section="top-row" className="mb-3">
          <img className={styles.logoWrapper} alt="img" src={logo} />
        </Row>
        <Row section="create">
          <Col id="avatar" xs={12} md={6}>
            <div style={{ transform: 'rotateY(180deg)' }}>
              <SVG src={avatarUrl} />
            </div>
          </Col>
          <Col id="form" className="p-5" xs={12} md={6}>
            <h1 style={{ marginTop: -50 }} className="text-center text-white">
              Create your character
            </h1>
            <h5 className={`${styles.raceTitle} text-center mb-4`}>
              RACE: HUMAN
            </h5>
            <CreateCharForm
              gender={gender}
              skinColor={skinColor}
              onSubmit={handleOnSubmit}
              onChangeRadio={handleOnChangeRadio}
              onChangeSkin={handleOnChangeSkin}
              onHairChangeComplete={handleOnHairChangeComplete}
              onEyeChangeComplete={handleOnEyeChangeComplete}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default CreateCharacterContainer
