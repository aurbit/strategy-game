import React from 'react'
import SVG from 'react-inlinesvg' // We can maybe replace this with a native fetch and inner HTML - This lib does same
import { Container, Row, Col } from 'react-bootstrap'
import { hairOptions, skinOptions, avatarImage } from './avatar-utils'

import styles from './index.module.css'
import logo from 'shared/images/logo_A.svg'
import CreateCharForm from './Form'

const CreateAvatar = () => {
  const [hairColor, setHairColor] = React.useState('#1b1464')
  const [skinColor, setSkinColor] = React.useState('#ffe0c9')
  const [gender, setGender] = React.useState('human_male')
  const [avatarUrl, setAvatarUrl] = React.useState(avatarImage('human_male'))

  React.useEffect(() => {
    // Update global CSS so style change will affect SVG class
    const style = document.createElement('style')
    document.head.appendChild(style)
    style.sheet.insertRule(`.hair-color {fill: ${hairColor}}`)
    style.sheet.insertRule(`.skin-color {fill: ${skinColor}}`)
  }, [hairColor, skinColor])

  function handleOnChangeRange (e) {
    const { id, value } = e.target
    if (id === 'hair') {
      setHairColor(hairOptions(value))
    } else {
      setSkinColor(skinOptions(value))
    }
  }

  function handleOnChangeRadio (e) {
    const avatarUrl = avatarImage(e.target.value)
    setAvatarUrl(avatarUrl)
    setGender(e.target.value)
  }

  function handleOnSubmit (e) {
    e.preventDefault()
    console.log('Form Submit')
    // Parse and Submit Gender/ Hair & Skin Color
  }
  return (
    <Container fluid className='h-100' style={{ backgroundColor: 'black' }}>
      <Container>
        <Row section='top-row' className='mb-3'>
          <img className={styles.logoWrapper} alt='img' src={logo} />
        </Row>
        <Row section='create'>
          <Col id='avatar' xs={12} md={6}>
            <SVG src={avatarUrl} />
          </Col>
          <Col id='form' className='p-5' xs={12} md={6}>
            <h1 style={{ marginTop: -50 }} className='text-center text-white'>
              Create your character
            </h1>
            <h5 className={`${styles.raceTitle} text-center mb-4`}>
              RACE: HUMAN
            </h5>
            <CreateCharForm
              gender={gender}
              onSubmit={handleOnSubmit}
              onChangeRadio={handleOnChangeRadio}
              onChangeRange={handleOnChangeRange}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default CreateAvatar
