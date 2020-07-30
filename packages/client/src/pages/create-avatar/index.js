import React from 'react'
import SVG from 'react-inlinesvg' // We can maybe replace this with a native fetch and inner HTML - This lib does same
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import Navbar from 'shared/components/Layout/Navbar'

import { avatarImage, parseDataArray } from './avatar-utils'
// import Avatar from 'shared/components/PlayerAvatar'
import styles from './index.module.css'
import CreateCharForm from './Form'

const CreateCharacterContainer = () => {
  const [hairColor, setHairColor] = React.useState('#402801')
  const [eyeColor, setEyeColor] = React.useState('#196e22')
  const [skinColor, setSkinColor] = React.useState('#f7d39c')
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

  const AvatarImage = ({ avatarUrl }) => {
    return (
      <SVG
        loader={<Spinner animation='grow' />}
        src={avatarUrl}
        onLoad={(src, hasCache) => {
          const male = document.getElementById(
            'f10be708-fc62-40d8-abc3-ffce71448a8b'
          )

          const female = document.getElementById(
            'e025dcff-7455-4990-87bb-413b227009ba'
          )

          if (male) {
            male.style.visibility = 'hidden'
          } else if (female) {
            female.style.visibility = 'hidden'
          }
        }}
      />
    )
  }

  return (
    <Container fluid style={{ backgroundColor: 'black' }}>
      <Navbar />
      <Row section='create'>
        <Col id='avatar' xs={12} md={6}>
          <div style={{ transform: 'rotateY(180deg)' }}>
            <AvatarImage avatarUrl={avatarUrl} />
          </div>
        </Col>
        <Col md={{ span: 3, offset: 1 }} className='mt-5' id='form'>
          <h1 style={{ marginTop: 50 }} className=' text-white'>
            Create your Avatar
          </h1>
          <h5 className={`${styles.raceTitle} mb-4`}>RACE: HUMAN</h5>
          <CreateCharForm
            gender={gender}
            onSubmit={handleOnSubmit}
            onChangeRadio={handleOnChangeRadio}
            onChangeSkin={handleOnChangeSkin}
            onHairChangeComplete={handleOnHairChangeComplete}
            onEyeChangeComplete={handleOnEyeChangeComplete}
            onSkinChangeComplete={handleOnSkinChangeComplete}
          />
          <Row>
            <p style={{ color: 'white', marginTop: 50, fontSize: 20 }}>
              Your Avatar is a NFT on Ethereum with unique DNA that cannot be
              changed. Once born, your avatar will be used to hold the AUR
              tokens mined during gameplay. If you lose the private key to your
              avatar, you will no longer have access to the AUR tokens kept on
              Planets.
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default CreateCharacterContainer
