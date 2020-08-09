/*
  RENDER PLAYER AVATAR BASED OFF DNA
*/

import React from 'react'
import SVG from 'react-inlinesvg'
import { avatarImage, rgbToHex } from './avatar-utils'
import { Spinner } from 'react-bootstrap'
import parseDna from 'shared/store/avatar/parse-dna'

const PlayerAvatar = ({ dna, name }) => {
  const [hair, setHair] = React.useState(null)
  const [eye, setEye] = React.useState(null)
  const [skin, setSkin] = React.useState(null)
  const [avatar, setAvatar] = React.useState(null)
  const [ready, setReady] = React.useState(false)

  const dnaArray = parseDna(dna)

  React.useEffect(() => {
    // const intel = dna[0]
    // const strength = dna[1]
    // const vitality = dna[2]
    const hairArray = [dnaArray[3], dnaArray[4], dnaArray[5]]
    const eyeArray = [dnaArray[6], dnaArray[7], dnaArray[8]]
    const skinArray = [dnaArray[9], dnaArray[10], dnaArray[11]]
    // const eyeType = dna[11]
    // const skinType = dna[12]
    // const mouth = dna[13]
    // const race = dna[15]
    setAvatar(avatarImage(dnaArray[17]))

    setHair(rgbToHex(hairArray))
    setEye(rgbToHex(eyeArray))
    setSkin(rgbToHex(skinArray))
    setReady(true)
  }, [dnaArray])

  React.useEffect(() => {
    const style = document.createElement('style')
    const avatar = document.getElementById('avatar')
    avatar.appendChild(style)
    style.sheet.insertRule(`.eye-color {fill: ${eye}}`)
    style.sheet.insertRule(`.hair-color {fill: ${hair}}`)
    style.sheet.insertRule(`.skin-color {fill: ${skin}}`)
  }, [eye, hair, skin])

  return (
    <div id={'avatar'}>
      {ready ? (
        <div>
          <SVG src={avatar} />
          [Strength: {dnaArray[0]} - Intelligence: {dnaArray[1]} - Vitality:{' '}
          {dnaArray[2]}]
        </div>
      ) : (
        <Spinner animation='grow' variant='warning' />
      )}
    </div>
  )
}

export default PlayerAvatar
