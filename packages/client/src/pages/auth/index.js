import React from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { ACTIONS } from 'shared/store/avatar'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import WalletSetup from 'shared/components/WalletSetup'
import { selectAddress } from 'shared/store/wallet/selectors'
import { selectAvatars } from 'shared/store/avatar/selectors'

const AuthPage = () => {
  const address = useSelector(selectAddress)
  const avatars = useSelector(selectAvatars)
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (address) dispatch(ACTIONS.getAvatarsRequest())
  }, [address, dispatch])

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
        {avatars.loading ? (
          <Spinner animation='grow' variant='warning' />
        ) : avatars.list.length ? (
          <Redirect to='/avatar' />
        ) : (
          <WalletSetup buttonText='Start Game' link={'/planet'} />
        )}
      </div>
    </Container>
  )
}

export default AuthPage
