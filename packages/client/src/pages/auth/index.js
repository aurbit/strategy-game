import React from 'react'
import WalletSetup from 'shared/components/WalletSetup'
import { Container } from 'react-bootstrap'

const AuthPage = props => {
  return (
    <Container fluid style={{ backgroundColor: 'black' }}>
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <WalletSetup buttonText='Start Game' link={'/planet'} />
      </div>
    </Container>
  )
}

export default AuthPage
