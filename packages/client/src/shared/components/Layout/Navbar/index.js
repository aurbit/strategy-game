import React from 'react'
import { Navbar, Col, Button } from 'react-bootstrap'
import AurLogo from 'shared/images/logo_full.svg'
import NavUserBox from 'shared/components/NavUserBox'
import PlanetIcon from 'shared/components/PlanetIcon'
import SVG from 'react-inlinesvg'
import { useHistory } from 'react-router-dom'

const styles = {
  brand: {
    marginLeft: '10%'
  }
}
const NavbarComponent = ({ network, account }) => {
  const history = useHistory()
  return (
    <Navbar className='justify-content-between align-items-center p-4'>
      <Navbar.Brand style={styles.brand}>
        <Button variant='no-style' onClick={() => history.push('/')}>
          <SVG
            style={styles.aurLogo}
            height={50}
            description='The React logo'
            loader={' ...'}
            preProcessor={code => code.replace(/fill=".*?"/g, 'fill="white"')}
            src={AurLogo}
            title='React'
            uniqueHash='a1f8d1'
            uniquifyIDs={true}
          />
        </Button>
      </Navbar.Brand>
      <Col>
        <PlanetIcon />
      </Col>
      <Col sm={6} md={5} style={{ color: 'white' }}>
        <NavUserBox />
      </Col>
    </Navbar>
  )
}

export default NavbarComponent
