import React from 'react'
import { utils } from 'web3'
import SVG from 'react-inlinesvg'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Redirect } from 'react-router-dom'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { selectMintAvatar } from 'shared/store/avatar/selectors'
import { avatarImage, parseDataArray } from './avatar-utils'
import { ACTIONS } from 'shared/store/avatar'
import styles from './index.module.css'
import CreateAvatarForm from './Form'

const CreateAvatarContainer = () => {
  const [hairColor, setHairColor] = React.useState('#402801')
  const [eyeColor, setEyeColor] = React.useState('#196e22')
  const [skinColor, setSkinColor] = React.useState('#f7d39c')
  const [gender, setGender] = React.useState('human_male')
  const [avatarUrl, setAvatarUrl] = React.useState(avatarImage('human_male'))
  const history = useHistory()
  const dispatch = useDispatch()
  const mintAvatar = useSelector(selectMintAvatar)

  React.useEffect(() => {
    // Update global CSS so style change will affect SVG class
    const style = document.createElement('style')
    document.head.appendChild(style)
    style.sheet.insertRule(`.eye-color {fill: ${eyeColor}}`)
    style.sheet.insertRule(`.hair-color {fill: ${hairColor}}`)
    style.sheet.insertRule(`.skin-color {fill: ${skinColor}}`)
  }, [hairColor, eyeColor, skinColor])

  React.useEffect(() => {
    if (mintAvatar.result) {
      history.push('/avatar')
    }
  }, [mintAvatar])

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

  async function handleOnSubmit (e) {
    e.preventDefault()
    const name = e.target['name'].value
    const data = parseDataArray(hairColor, eyeColor, skinColor, gender)
    const dna = await utils.hexToNumberString(utils.bytesToHex(data))
    dispatch(ACTIONS.callMintAvatarRequest({ name, dna }))
  }

  const AvatarImage = ({ avatarUrl }) => {
    return <SVG loader={<Spinner animation='grow' />} src={avatarUrl} />
  }

  return (
    <Container style={{ backgroundColor: 'black', paddingTop: 100 }}>
      <Row section='create'>
        <Col id='avatar' xs={12} md={7}>
          <div style={{ transform: 'rotateY(180deg)' }}>
            <AvatarImage avatarUrl={avatarUrl} />
          </div>
        </Col>
        <Col md={{ span: 4, offset: 1 }} className='mt-5' id='form'>
          <h1 className=' text-white'>Create an AURA</h1>
          <h5 className={`${styles.raceTitle} mb-4`}>RACE: HUMAN</h5>
          <CreateAvatarForm
            gender={gender}
            onSubmit={handleOnSubmit}
            onChangeRadio={handleOnChangeRadio}
            onChangeSkin={handleOnChangeSkin}
            onHairChangeComplete={handleOnHairChangeComplete}
            onEyeChangeComplete={handleOnEyeChangeComplete}
            onSkinChangeComplete={handleOnSkinChangeComplete}
          />
        </Col>
      </Row>
      <Row section='create'>
        <p style={{ color: 'white', marginTop: 50, fontSize: 20 }}>
          Your AURA is a NFT on Ethereum with unique DNA that cannot be changed.
          Once born, your avatar will be used to hold the AUR tokens mined
          during gameplay. If you lose the private key to your avatar, you will
          no longer have access to the AUR tokens kept on Planets.{' '}
          <a href='https://github.com/aurbit/strategy-game/blob/master/docs/Avatars.md'>
            Read More
          </a>
        </p>
      </Row>
    </Container>
  )
}

export default CreateAvatarContainer
