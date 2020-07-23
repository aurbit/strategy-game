import React from 'react'
import { useHistory } from 'react-router-dom'
import MetaMaskOnboarding from '@metamask/onboarding'
import UserContext, { initUser } from 'shared/store/user'
import { Container, Card, Button } from 'reactstrap'
import Modal from 'shared/components/Modal'
import Toast from 'shared/components/Toast'

const ONBOARD_TEXT = 'Click here to install MetaMask!'
const CONNECT_TEXT = 'Connect'
const CONNECTED_TEXT = 'Connected'

const LoginContainer = (props) => {
  const history = useHistory()
  const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT)
  const [isDisabled, setDisabled] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const onboarding = React.useRef()
  const { dispatchInitUser, accounts } = useUserContext()

  React.useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding()
    }
    if (MetaMaskOnboarding.isMetaMaskInstalled() && !accounts) {
      setButtonText(CONNECT_TEXT)
    }
  }, [])

  React.useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum.request({ method: 'eth_requestAccounts' }).then((x) => {
        dispatchInitUser({
          account: x,
          networkType: null
        })
        history.push('/map')
      })
    }
  }, [])

  const onClick = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((newAccounts) => {
          dispatchInitUser({
            account: newAccounts,
            networkType: null
          })
          history.push('/map')
        })
        .catch((err) => {
          setIsOpen(true)
          console.log('ERROR : ', err)
        })
    } else {
      console.log('START ON BOARDFING')
      onboarding.current.startOnboarding()
      setIsOpen(true)
    }
  }
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center h-100 bg-dark"
    >
      <Card className="p-4">
        <h3 className="text-center">Aurbit</h3>
        <Button disabled={isDisabled} onClick={onClick}>
          {buttonText}
        </Button>
      </Card>
      {/* <Modal isOpen={isOpen} title="Unlock Wallet">
        <Modal.Body>You may need to click extension</Modal.Body>
      </Modal> */}
      <Toast
        isOpen={isOpen}
        title="Ooops!"
        text="You may need to open the extension in the browser"
      />
    </Container>
  )
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
