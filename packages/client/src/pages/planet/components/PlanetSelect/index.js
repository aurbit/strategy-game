import React from 'react'
import { Container, Col, Row, Image, Button } from 'react-bootstrap'
import Navbar from 'shared/components/Layout/Navbar'
import { useHistory } from 'react-router-dom'

import earthImage from 'shared/images/earth.svg'
import marsImage from 'shared/images/mars.svg'
import venusImage from 'shared/images/venus.svg'

import './planet-select.css'

import PlanetContext, {
  changePlanet,
  availablePlanets
} from 'shared/store/planet'
// import 'shared/styles/stars.css'

export default props => {
  const { EARTH, MARS, VENUS } = availablePlanets
  return (
    <div>
      {/* <div className='twinkling'> */}
      <Navbar />
      <Container>
        <Row className='mt-5'></Row>
        <Row className='mt-5'></Row>
        <Row className='mt-5'>
          <h1>Choose your mission...</h1>
        </Row>
        <Row className='mt-5'></Row>

        <Row className='mt-5'>
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
      //{' '}
    </div>
    // </div>
  )
}

const PlanetImage = ({ src }) => {
  return (
    <div style={{ height: 300 }} align='center'>
      <Image src={src} height={200} />
    </div>
  )
}
const PlayPlanetButton = ({ planet }) => {
  const { goToPlanet } = usePlanetLogic()

  return (
    <div align='center'>
      <Button size='lg' variant='dark' onClick={() => goToPlanet(planet)}>
        {planet}
      </Button>
    </div>
  )
}

function usePlanetLogic () {
  const planetDispatch = PlanetContext.useDispatch()
  const planetState = PlanetContext.useState()
  const history = useHistory()
  const goToPlanet = name => {
    changePlanet(planetDispatch, name)
    history.push(`/planet/${name.toLowerCase()}`)
  }

  return { planetState, goToPlanet }
}
