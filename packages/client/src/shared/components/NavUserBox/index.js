import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectBalance } from 'shared/store/token/index'
import { selectAddress } from 'shared/store/wallet/index'

import { addressShortener } from 'shared/utils/wallets'
import WalletSetup from 'shared/components/WalletSetup'

import { PersonCircle } from 'react-bootstrap-icons'
import { useHistory } from 'react-router-dom'

import AurLogo from 'shared/images/logo_A.svg'
import SVG from 'react-inlinesvg'

import './index.module.css'

export default () => {
  const history = useHistory()
  const balance = useSelector(selectBalance)
  const address = useSelector(selectAddress)

  const Avatar = () => {
    return (
      <Button variant='no-style'>
        <PersonCircle
          styles={styles.avatarIcon}
          size={40}
          color='gray'
          onClick={() => history.push('/create-avatar')}
        />
      </Button>
    )
  }

  const AurBalance = () => {
    return (
      <Button variant='dark' size='lg'>
        {balance}
        <SVG
          style={styles.aurLogo}
          height={23}
          description='Aurbit logo'
          loader={' ...'}
          preProcessor={code => code.replace(/fill=".*?"/g, 'fill="white"')}
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
      <Col md={3} className='text-right'>
        <WalletSetup
          variant='dark'
          styles={styles.wallet}
          buttonText={addressShortener(address)}
        />
      </Col>
      <Col md={1} className='text-right'>
        <Avatar className='text-right' styles={styles.avatar} />
      </Col>
    </Row>
  )
}

const styles = {
  aurLogo: {
    marginLeft: 8,
    marginBottom: 5
  },
  balance: {
    marginRight: '10px',
    minWidth: 300
  },
  wallet: {
    margin: 10
  },
  avatarIcon: {
    paddingBottom: 10,
    cursor: 'pointer'
  },
  avatarButton: {
    paddingBottom: 0
  }
}
