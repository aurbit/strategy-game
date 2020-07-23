import React from 'react'
import { useHistory } from 'react-router-dom'
import MetaMaskOnboarding from '@metamask/onboarding'
import UserContext, { initUser } from 'shared/store/user'
import { Container, Card, Button } from 'reactstrap'
import Modal from 'shared/components/Modal'

const LoginContainer = (props) => {
  const history = useHistory()
  const { isMetamaskInstalled, dispatchInitUser, account } = useUserContext()
  const onboarding = React.useRef()

  React.useEffect(() => {
    // window.ethereum
    //     .request({ method: 'eth_requestAccounts' })
    //     .then((newAccounts) => {

    //       console.log('WHAT IS THIS: ', newAccounts)

    //     })
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding()
    }
  }, [])
  React.useEffect(() => {
    if (account && account.length > 0) {
      // history.push('/map')
      console.log('REDIRECT')
    }
  }, [account])

  React.useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum.on('accountsChanged', handleNewAccounts)
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(handleNewAccounts)

      return () => {
        window.ethereum.off('accountsChanged', handleNewAccounts)
      }
    }
  }, [])
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center h-100 bg-dark"
    >
      <Card className="p-4">
        <h3 className="text-center">Aurbit</h3>
        {renderLoginBtn()}
      </Card>
      <Modal isOpen={false} title="Unlock Wallet">
        <Modal.Body>You may need to click extension</Modal.Body>
      </Modal>
    </Container>
  )

  function handleNewAccounts(newAccounts) {
    console.log('HANDLE NEW ACCOUNTS', newAccounts)
    dispatchInitUser({
      account: newAccounts,
      networkType: null
    })
  }

  function renderLoginBtn() {
    if (!isMetamaskInstalled) {
      return <Button onClick={handleOnClick}>Install Metamask!</Button>
    } else {
      return <Button onClick={handleOnClick}>Connect Metamask!</Button>
    }
  }

  function handleOnClick() {
    if (!isMetamaskInstalled) {
      onboarding.current.startOnboarding()
    } else {
      // window.ethereum
      //   .request({ method: 'eth_requestAccounts' })
      //   .then((newAccounts) => {
      //     localStorage.set("TEST", "weee")
      //     console.log('WHAT IS THIS: ', newAccounts)
      //     dispatchInitUser({
      //       account: newAccounts[0],
      //       networkType: null
      //     })
      //   })
      console.log('BLAAAH')
    }
  }
}

const useUserContext = () => {
  const dispatch = UserContext.useDispatch()
  const { account, isMetamaskInstalled } = UserContext.useState()

  const dispatchInitUser = (data) => initUser(dispatch, data)
  return {
    dispatchInitUser,
    isMetamaskInstalled,
    account
  }
}

export default LoginContainer
