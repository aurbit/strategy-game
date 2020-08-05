import React from 'react'
import { Navbar, Row, Col, Button } from 'react-bootstrap'
import AurLogo from 'shared/images/logo_full.svg'
import NavUserBox from 'shared/components/NavUserBox'
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
    <Row className='justify-content-between align-items-center p-4'>
      <Col xs={4} md={2}>
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
      </Col>
      <Col xs={12} md={6} style={{ color: 'white' }}>
        <NavUserBox />
      </Col>
    </Row>
  )
}

export default NavbarComponent
