import MetaMaskOnboarding from '@metamask/onboarding'
import React from 'react'
import { Button } from 'react-bootstrap'

const ONBOARD_TEXT = 'Install Metamask!'
const CONNECT_TEXT = 'Connect'
const CONNECTED_TEXT = 'Connected'

const MetamaskBtn = ({ className }) => {
  const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT)
  const [isDisabled, setDisabled] = React.useState(false)
  // Push accounts into global user state
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
    const handleNewAccounts = (newAccounts) => setAccounts(newAccounts)

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
        .then((newAccounts) => setAccounts(newAccounts))
    } else {
      onboarding.current.startOnboarding()
    }
  }
  // Do not display button if connected
  if (accounts.length > 0) {
    return null
  }
  return (
    <Button className={className} disabled={isDisabled} onClick={onClick}>
      {buttonText}
    </Button>
  )
}

export default MetamaskBtn
