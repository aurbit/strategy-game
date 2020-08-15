/*
  RENDER PLAYER AVATAR BASED OFF DNA
*/

import React from 'react'
import SVG from 'react-inlinesvg'
import { avatarImage, rgbToHex } from './avatar-utils'
import { Spinner, Container, Col, Row } from 'react-bootstrap'
import parseDna from 'shared/store/avatar/parse-dna'

const PlayerAvatar = ({ dna, name }) => {
  const [hairColor, setHairColor] = React.useState(null)
  const [eyeColor, setEyeColor] = React.useState(null)
  const [skinColor, setSkinColor] = React.useState(null)
  const [eyeType, setEyeType] = React.useState(null)
  const [hairType, setHairType] = React.useState(null)
  const [skinType, setSkinType] = React.useState(null)
  const [gender, setGender] = React.useState(null)
  const [mouth, setMouth] = React.useState(null)
  const [race, setRace] = React.useState(null)
  const [avatar, setAvatar] = React.useState(null)
  const [ready, setReady] = React.useState(false)
  const [intel, setIntel] = React.useState()
  const [strength, setStrength] = React.useState()
  const [vitality, setVitality] = React.useState()

  const dnaArray = parseDna(dna)

  React.useEffect(() => {
    const _intel = dnaArray[0]
    const _strength = dnaArray[1]
    const _vitality = dnaArray[2]
    const _hairArray = [dnaArray[3], dnaArray[4], dnaArray[5]]
    const _eyeArray = [dnaArray[6], dnaArray[7], dnaArray[8]]
    const _skinArray = [dnaArray[9], dnaArray[10], dnaArray[11]]
    const _eyeType = dnaArray[12]
    const _hairType = dnaArray[13]
    const _skinType = dnaArray[14]
    const _mouth = dnaArray[15]
    const _race = dnaArray[16]
    const _gender = dnaArray[17]

    setAvatar(avatarImage(_gender))
    setHairColor(rgbToHex(_hairArray))
    setEyeColor(rgbToHex(_eyeArray))
    setSkinColor(rgbToHex(_skinArray))
    setHairType(_hairType)
    setEyeType(_eyeType)
    setSkinType(_skinType)
    setStrength(_strength)
    setMouth(_mouth)
    setRace(_race)
    setGender(_gender)
    setIntel(_intel)
    setVitality(_vitality)
    setReady(true)
    console.log(dnaArray)
  }, [
    dnaArray,
    setAvatar,
    setHairColor,
    setSkinColor,
    setStrength,
    setVitality,
    setIntel,
    setReady
  ])

  React.useEffect(() => {
    const style = document.createElement('style')
    const avatar = document.getElementById('avatar')
    avatar.appendChild(style)
    style.sheet.insertRule(`.eye-color {fill: ${eyeColor}}`)
    style.sheet.insertRule(`.hair-color {fill: ${hairColor}}`)
    style.sheet.insertRule(`.skin-color {fill: ${skinColor}}`)
  }, [eyeColor, hairColor, skinColor])

  return (
    <div id={'avatar'} style={{ backgroundColor: '#e3e3e3e' }} className='pt-5'>
      {ready ? (
        <Container fluid>
          <Row>
            <Col>
              <h3>{name}</h3>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col>{dna}</Col>
          </Row>
          <SVG src={avatar} />
          <Row>
            <Col>
              <b>Strength:</b> {strength}
            </Col>
            <Col>
              <b>Intelligence:</b> {intel}
            </Col>
            <Col>
              <b>Vitality:</b> {vitality}
            </Col>
          </Row>
          <Row>
            <Col>
              <b>Hair Color:</b> {hairColor}
            </Col>
            <Col>
              <b>Eye Color:</b> {eyeColor}
            </Col>
            <Col>
              <b>Skin Color:</b> {skinColor}
            </Col>
          </Row>
          <Row>
            <Col>
              <b>Hair Type:</b> {hairType}
            </Col>
            <Col>
              <b>Eye Type:</b> {eyeType}
            </Col>
            <Col>
              <b>Skin Type:</b> {skinType}
            </Col>
          </Row>
          <Row>
            <Col>
              <b>Mouth:</b> {mouth}
            </Col>
            <Col>
              <b>Race:</b> {race}
            </Col>
            <Col>
              <b>Gender:</b> {gender}
            </Col>
          </Row>
        </Container>
      ) : (
        <Spinner animation='grow' variant='warning' />
      )}
    </div>
  )
}

export default PlayerAvatar
