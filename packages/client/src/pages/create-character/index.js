import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CreateCharForm from './Form'
import Avatar from './female-avatar'
import { hairOptions, skinOptions, avatarImage } from './color-options'
const CreateCharacterContainer = () => {
  const [hairColor, setHairColor] = React.useState('#1b1464')
  const [skinColor, setSkinColor] = React.useState('#ffe0c9')
  const [gender, setGender] = React.useState('human_male')
  const [avatarUrl, setAvatarUrl] = React.useState(avatarImage('human_male'))

  function handleOnChangeRange(e) {
    const { id, value } = e.target
    if (id === 'hair') {
      setHairColor(hairOptions(value))
    } else {
      setSkinColor(skinOptions(value))
    }
  }

  function handleOnChangeRadio(e) {
    const avatarUrl = avatarImage(e.target.value)
    setAvatarUrl(avatarUrl)
    setGender(e.target.value)
  }
  return (
    <Container className="h-100" style={{ backgroundColor: 'black' }}>
      <Row section="top-row" className="mb-3">
        <h2 style={{ color: 'white', marginTop: 20, marginLeft: 40 }}>LOGO</h2>
      </Row>
      <Row section="create">
        <Col id="avatar">
          <img src={avatarUrl} alt="img" />
          {/* <Avatar  hairColor={hairColor} skinColor={skinColor} /> */}
        </Col>
        <Col id="form" className="p-5">
          <h1 className="text-center text-white">Create your character</h1>
          <h5 className="text-center mb-4" style={{ color: 'grey' }}>
            RACE: HUMAN
          </h5>
          <CreateCharForm
            gender={gender}
            onChangeRadio={handleOnChangeRadio}
            onChangeRange={handleOnChangeRange}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default CreateCharacterContainer
