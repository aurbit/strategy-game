import React from 'react'
import { useDispatch } from 'react-redux'
import { Container, Col, Row, Image, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import earthImage from 'shared/images/earth.svg'
import marsImage from 'shared/images/mars.svg'
import venusImage from 'shared/images/venus.svg'
import { PLANETS, ACTIONS } from 'shared/store/planet'

import './planet-select.css'

export default (props) => {
  const { EARTH, MARS, VENUS } = PLANETS
  return (
    <Container fluid style={{ backgroundColor: 'black' }}>
      {/* <div className='twinkling'> */}
      <Container>
        <Row className="mt-5"></Row>
        <Row className="mt-5"></Row>
        <Row className="mt-5">
          <h1>Choose your mission...</h1>
        </Row>
        <Row className="mt-5"></Row>

        <Row className="mt-5">
          <Col md={4}>
            <PlanetImage src={earthImage} />
            <PlayPlanetButton planet={EARTH} />
          </Col>
          <Col md={4}>
            <PlanetImage src={marsImage} />
            <PlayPlanetButton planet={MARS} />
          </Col>
          <Col md={4}>
            <PlanetImage src={venusImage} />
            <PlayPlanetButton planet={VENUS} />
          </Col>
        </Row>
      </Container>
    </Container>
    // </div>
  )
}

const PlanetImage = ({ src }) => {
  return (
    <div style={{ height: 300 }} align="center">
      <Image src={src} height={200} />
    </div>
  )
}
const PlayPlanetButton = ({ planet }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  function handleOnClick() {
    dispatch(ACTIONS.changePlanet(planet))
    history.push(`/planet/${planet.toLowerCase()}`)
  }
  return (
    <div align="center">
      <Button size="lg" variant="dark" onClick={handleOnClick}>
        {planet}
      </Button>
    </div>
  )
}
