import MetaMaskOnboarding from '@metamask/onboarding'
import React from 'react'
import { UserContext, setAccount, setMetamask } from 'shared/store/user'
import { Button } from 'react-bootstrap'

const ONBOARD_TEXT = 'Install Metamask!'
const CONNECT_TEXT = 'Connect'
const CONNECTED_TEXT = 'Connected'

const MetamaskBtn = ({ className }) => {
  const { userState, updateAccount, updateMetamask } = useUserStore()
  const { account } = userState
  const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT)
  const [isDisabled, setDisabled] = React.useState(false)

  const onboarding = React.useRef()

  React.useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding()
    }
  }, [])

  React.useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (account.length > 0) {
        updateMetamask(true)
        setButtonText(CONNECTED_TEXT)
        setDisabled(true)
        onboarding.current.stopOnboarding()
      } else {
        setButtonText(CONNECT_TEXT)
        setDisabled(false)
      }
    }
  }, [account])

  React.useEffect(() => {
    const handleNewAccounts = (newAccounts) => updateAccount(newAccounts)
    // Add logic here to stop the button from flashing before avatar shows
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
        .then((newAccounts) => updateAccount(newAccounts))
    } else {
      onboarding.current.startOnboarding()
    }
  }
  // Do not display button if connected
  if (account.length > 0) {
    return null
  }
  return (
    <Button className={className} disabled={isDisabled} onClick={onClick}>
      {buttonText}
    </Button>
  )
}

function useUserStore() {
  const userDispatch = UserContext.useDispatch()
  const userState = UserContext.useState()

  const updateMetamask = (name) => setMetamask(userDispatch, name)
  const updateAccount = (name) => setAccount(userDispatch, name)
  return { userState, updateAccount, updateMetamask }
}

export default MetamaskBtn
