import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectBalance } from 'shared/store/token/selectors'
import { addressShortener } from 'shared/utils/wallets'
import WalletSetup from 'shared/components/WalletSetup'

import { PersonCircle } from 'react-bootstrap-icons'
import { useHistory } from 'react-router-dom'

import AurLogo from 'shared/images/logo_A.svg'
import SVG from 'react-inlinesvg'

// for getting the token balance
import { selectAddress } from 'shared/store/wallet'

import './index.module.css'

export default () => {
  const history = useHistory()
  const address = useSelector(selectAddress)
  const balance = useSelector(selectBalance)

  const Avatar = () => {
    return (
      <Button variant='no-style'>
        <PersonCircle
          styles={styles.avatarIcon}
          size={40}
          color='gray'
          onClick={() => history.push('/avatar')}
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
      <Col xs={7} sm={5} className='text-right'>
        <AurBalance styles={styles.balance} />
      </Col>
      {window.innerWidth >= 700 ? (
        <Col xs={4} sm={5} className='text-right'>
          <WalletSetup
            variant='dark'
            styles={styles.wallet}
            buttonText={addressShortener(address)}
          />
        </Col>
      ) : null}
      <Col xs={3} sm={1} className='text-right'>
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
