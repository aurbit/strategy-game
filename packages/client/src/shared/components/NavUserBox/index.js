import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { useWallet } from 'shared/services/Aurbit'
import { addressShortener } from 'shared/utils/wallets'
import WalletSetup from 'shared/components/WalletSetup'
// import PlayerAvatar from 'shared/components/PlayerAvatar'
import { PersonCircle } from 'react-bootstrap-icons'
import { useHistory } from 'react-router-dom'

import AurLogo from 'shared/images/logo_A.svg'
import SVG from 'react-inlinesvg'

export default () => {
  const { selectedAddress } = useWallet()

  const Avatar = () => {
    const history = useHistory()
    return (
      <Button styles={styles.avatarButton} variant='no-style'>
        <PersonCircle
          styles={styles.avatarIcon}
          size={40}
          onClick={() => history.push('/avatar')}
        />
      </Button>
      // <SVG
      //   height={17}
      //   description='The React logo'
      //   loader={' ...'}
      //   preProcessor={code => code.replace(/fill=".*?"/g, 'fill="white"')}
      //   src={PersonCircle}
      //   title='React'
      //   uniqueHash='a1f8ds'
      //   uniquifyIDs={true}
      // />
    )
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
      <Col className='text-right'>
        <AurBalance styles={styles.balance} />
      </Col>
      <Col className='text-right'>
        <WalletSetup
          styles={styles.wallet}
          buttonText={addressShortener(selectedAddress)}
        />
      </Col>
      <Col md={2} className='text-right'>
        <Avatar className='text-right' styles={styles.avatar} />
      </Col>
    </Row>
  )
}

const styles = {
  aurLogo: {},
  balance: {
    marginRight: '10px',
    minWidth: 300
  },
  wallet: {
    margin: 10
  },
  avatarIcon: {
    paddingBottom: 0
  },
  avatarButton: {
    paddingBottom: 0
  }
}
