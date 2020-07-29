import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import AurLogo from 'shared/images/logo_A.svg'
import SVG from 'react-inlinesvg'
const styles = {}

export default () => {
  const Address = () => {
    return <div>'0x0000...00000'</div>
  }

  const Avatar = () => {
    return <></>
  }

  const AurBalance = () => {
    logo.style.fill = 'black'
    return (
      <Button variant='light'>
        0.000
        <SVG
          description='The React logo'
          loader={<span>Loading...</span>}
          onError={error => console.log(error.message)}
          onLoad={(src, hasCache) => {}}
          preProcessor={code => code.replace(/fill=".*?"/g, 'fill="black"')}
          src={AurLogo}
          title='React'
          uniqueHash='a1f8d1'
          uniquifyIDs={true}
        />{' '}
      </Button>
    )
  }
  return (
    <Row>
      <Col>
        <AurBalance />
      </Col>
      <Col>
        <Avatar />
        <Address />
      </Col>
    </Row>
  )
}
