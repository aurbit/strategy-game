/*
  RENDER PLAYER AVATAR BASED OFF DNA
*/

import React from 'react'
import SVG from 'react-inlinesvg'
import { avatarImage, rgbToHex } from './avatar-utils'

const PlayerAvatar = ({ dna }) => {
  const [hair, setHair] = React.useState(null)
  const [eye, setEye] = React.useState(null)
  const [skin, setSkin] = React.useState(null)
  const [avatar, setAvatar] = React.useState(null)

  React.useEffect(() => {
    parseDna()
  }, [])

  React.useEffect(() => {
    updateGlobalCSS()
  }, [hair, eye, skin])

  function parseDna() {
    // Parse Array back to values to render Avatar
    const hairArray = dna.splice(0, 3)
    const eyeArray = dna.splice(0, 3)
    const skinArray = dna.splice(0, 3)
    const avatarArray = dna.splice(5, 5)
    setHair(rgbToHex(hairArray))
    setEye(rgbToHex(eyeArray))
    setSkin(rgbToHex(skinArray))
    setAvatar(avatarImage(avatarArray[0]))
  }

  function updateGlobalCSS() {
    const style = document.createElement('style')
    document.head.appendChild(style)
    style.sheet.insertRule(`.eye-color {fill: ${eye}}`)
    style.sheet.insertRule(`.hair-color {fill: ${hair}}`)
    style.sheet.insertRule(`.skin-color {fill: ${skin}}`)
  }
  console.log('EYE: ', hair)

  return <SVG src={avatar} />
}

export default PlayerAvatar
