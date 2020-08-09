import React from 'react'
import { Button } from 'react-bootstrap'
import MetaMaskOnboarding from '@metamask/onboarding'
import { useHistory } from 'react-router-dom'

export default props => {
  const history = useHistory()

  const handleButtonClick = () => {
    const enabled = window?.ethereum.enable()

    if (enabled) {
      history.push('/avatar')
    }
  }

  return (
    <div>
      {window?.ethereum ? (
        <Button
          variant={props.variant || 'dark'}
          size='lg'
          onClick={handleButtonClick}
        >
          {props.buttonText}
        </Button>
      ) : (
        <OnboardingButton />
      )}
    </div>
  )
}

const ONBOARD_TEXT = 'Click here to install MetaMask!'
const CONNECT_TEXT = 'Connect'
const CONNECTED_TEXT = 'Connected'

export function OnboardingButton () {
  const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT)
  const [isDisabled, setDisabled] = React.useState(false)
  const [accounts, setAccounts] = React.useState([])
  const onboarding = React.useRef()

  React.useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding()
    }
  }, [])

  React.useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        setButtonText(CONNECTED_TEXT)
        setDisabled(true)
        onboarding.current.stopOnboarding()
      } else {
        setButtonText(CONNECT_TEXT)
        setDisabled(false)
      }
    }
  }, [accounts])

  React.useEffect(() => {
    function handleNewAccounts (newAccounts) {
      setAccounts(newAccounts)
    }
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(handleNewAccounts)
      window.ethereum.on('accountsChanged', handleNewAccounts)
      return () => {
        window.ethereum.off('accountsChanged', handleNewAccounts)
      }
    }
  }, [])

  const onClick = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(newAccounts => setAccounts(newAccounts))
    } else {
      onboarding.current.startOnboarding()
    }
  }
  return (
    <Button variant='dark' size='lg' disabled={isDisabled} onClick={onClick}>
      {buttonText}
    </Button>
  )
}
