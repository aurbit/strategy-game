import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { useWallet } from 'shared/services/Aurbit'
import { addressShortener } from 'shared/utils/wallets'
import WalletSetup from 'shared/components/WalletSetup'

import AurLogo from 'shared/images/logo_A.svg'
import SVG from 'react-inlinesvg'

export default () => {
  const { selectedAddress } = useWallet()

  const Avatar = () => {
    return <></>
  }

  const AurBalance = () => {
    return (
      <Button variant='light' size='lg'>
        10000000.000
        <SVG
          style={styles.aurLogo}
          height={17}
          description='The React logo'
          loader={' ...'}
          preProcessor={code => code.replace(/fill=".*?"/g, 'fill="black"')}
          src={AurLogo}
          title='React'
          uniqueHash='a1f8d1'
          uniquifyIDs={true}
        />
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
        <WalletSetup buttonText={addressShortener(selectedAddress)} />
      </Col>
    </Row>
  )
}

const styles = {
  aurLogo: {
    marginBottom: 4,
    marginLeft: 5
  }
}
