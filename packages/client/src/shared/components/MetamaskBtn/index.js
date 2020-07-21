import MetaMaskOnboarding from '@metamask/onboarding'
import React from 'react'

const ONBOARD_TEXT = 'Install Metamask!'
const CONNECT_TEXT = 'Connect'
const CONNECTED_TEXT = 'Connected'

const MetamaskBtn = () => {
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
    const handleNewAccounts = newAccounts => setAccounts(newAccounts)

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
  return (
    <button disabled={isDisabled} onClick={onClick}>
      {buttonText}
    </button>
  )
}

export default MetamaskBtn
