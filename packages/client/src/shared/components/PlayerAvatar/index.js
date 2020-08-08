/*
  RENDER PLAYER AVATAR BASED OFF DNA
*/

import React from 'react'
import SVG from 'react-inlinesvg'
import { avatarImage, rgbToHex } from './avatar-utils'
import { Spinner } from 'react-bootstrap'

const PlayerAvatar = ({ dna, name }) => {
  const [hair, setHair] = React.useState(null)
  const [eye, setEye] = React.useState(null)
  const [skin, setSkin] = React.useState(null)
  const [avatar, setAvatar] = React.useState(null)
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    function parseDna () {
      // const intel = dna[0]
      // const strength = dna[1]
      // const vitality = dna[2]
      const hairArray = [dna[3], dna[4], dna[5]]
      const eyeArray = [dna[6], dna[7], dna[8]]
      const skinArray = [dna[9], dna[10], dna[11]]
      // const eyeType = dna[11]
      // const skinType = dna[12]
      // const mouth = dna[13]
      const gender = dna[17]
      // const race = dna[15]

      setHair(rgbToHex(hairArray))
      setEye(rgbToHex(eyeArray))
      setSkin(rgbToHex(skinArray))
      setAvatar(avatarImage(gender))
      setReady(true)
    }
    parseDna()
  }, [dna])

  React.useEffect(() => {
    function updateGlobalCSS () {
      const style = document.createElement('style')
      document.head.appendChild(style)
      style.sheet.insertRule(`.eye-color {fill: ${eye}}`)
      style.sheet.insertRule(`.hair-color {fill: ${hair}}`)
      style.sheet.insertRule(`.skin-color {fill: ${skin}}`)
    }
    updateGlobalCSS()
  }, [eye, hair, skin])

  return (
    <>
      {ready ? (
        <SVG src={avatar} />
      ) : (
        <Spinner animation='grow' variant='warning' />
      )}
    </>
  )
}

export default PlayerAvatar
