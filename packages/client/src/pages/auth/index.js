import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import WalletSetup from 'shared/components/WalletSetup'
import { Container, Button } from 'react-bootstrap'
import { selectAddress } from 'shared/store/wallet'

const AuthPage = (props) => {
  const history = useHistory()
  const address = useSelector(selectAddress)
  function onBtnClick() {
    history.push('/planet')
  }
  function renderButton() {
    if (address) {
      return <Button onClick={onBtnClick}>Hello</Button>
    }
    return <WalletSetup buttonText="Start Game" link={'/planet'} />
  }
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
        {renderButton()}
      </div>
    </Container>
  )
}

export default AuthPage
