import React, { useEffect } from 'react'
import WalletSetup from '../../shared/components/WalletSetup'
import WalletContext, { setWalletVendor } from '../../shared/store/wallet'
import { withRouter, useHistory } from 'react-router-dom'

import './style.css'

const AuthPage = props => {
  const { walletConnected } = useAuthLogic(props.location)

  return (
    <div className='stars'>
      <div className='twinkling'>
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <WalletSetup connected={walletConnected} />
        </div>
      </div>
    </div>
  )
}

const useAuthLogic = location => {
  const walletState = WalletContext.useState()
  const walletDispatch = WalletContext.useDispatch()

  const history = useHistory()
  const walletConnected = [!walletState.vendor].includes(false)

  // console.log(walletState.vendor)
  // console.log(walletConnected)
  useEffect(() => {
    if (walletConnected) {
      history.push('/planet')
    }
  })

  return { walletConnected }
}

export default AuthPage

// import React from 'react'
// import { useHistory } from 'react-router-dom'
// import MetaMaskOnboarding from '@metamask/onboarding'
// import Web3Context, { updateAccount } from 'shared/store/web3'
// import { Container, Card, Button } from 'react-bootstrap'
// import Toast from 'shared/components/Toast'

// const ONBOARD_TEXT = 'Click here to install MetaMask!'
// const CONNECT_TEXT = 'Connect Wallet to Aurbit!'
// const CONNECTED_TEXT = 'Wallet already connected!'

// const LoginContainer = (props) => {
//   const history = useHistory()
//   const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT)
//   const [disabled, setDisabled] = React.useState(false)
//   const onboarding = React.useRef()
//   const { dispatchUpdateAcct, account } = useWeb3()
//   const isMetamaskInstalled = MetaMaskOnboarding.isMetaMaskInstalled()

//   React.useEffect(() => {
//     if (!onboarding.current) {
//       onboarding.current = new MetaMaskOnboarding()
//     }
//     if (!isMetamaskInstalled) {
//       setButtonText(ONBOARD_TEXT)
//     }
//   }, [])

//   React.useEffect(() => {
//     if (account.length !== 0 && isMetamaskInstalled) {
//       setButtonText(CONNECTED_TEXT)
//       setDisabled(true)
//     }
//   }, [account])

//   // function handleNewAccounts(accounts) {
//   //   if (accounts.length > 0) {
//   //     onboarding.current.stopOnboarding()
//   //     history.push('/map')
//   //   }
//   // }

//   // React.useEffect(() => {
//   //   window.ethereum && window.ethereum.on('accountsChanged', handleNewAccounts)
//   //   return () => {
//   //     window.ethereum &&
//   //       window.ethereum.off('accountsChanged', handleNewAccounts)
//   //   }
//   // }, [])

//   React.useEffect(() => {
//     if (isMetamaskInstalled) {
//       setButtonText(CONNECT_TEXT)
//     }
//   }, [isMetamaskInstalled])

//   React.useEffect(() => {
//     if (isMetamaskInstalled) {
//       window.ethereum
//         .request({ method: 'eth_requestAccounts' })
//         .then((accounts) => {
//           // This triggers if there is no pending request on Metamask on page load
//           // The call back will have the users account
//           dispatchUpdateAcct(accounts)
//           history.push('/map')
//         })
//         .catch(() => {
//           setDisabled(true)
//           // Error when refreshing multiple times
//         })
//     }
//   }, [])

//   const onClick = () => {
//     if (isMetamaskInstalled) {
//       // This triggers - If there are no pending requests and user clicks connect
//       window.ethereum
//         .request({ method: 'eth_requestAccounts' })
//         .then((accounts) => {
//           dispatchUpdateAcct(accounts)
//           history.push('/map')
//         })
//         .catch(() => {
//           setDisabled(true)
//           // Error when clicking multiple times
//         })
//     } else {
//       onboarding.current.startOnboarding()
//     }
//   }
//   return (
//     <Container
//       fluid
//       className="d-flex justify-content-center align-items-center h-100 bg-dark"
//     >
//       <Card className="p-4">
//         <h3 className="text-center">Aurbit</h3>
//         <Button disabled={disabled} variant="secondary" onClick={onClick}>
//           {buttonText}
//         </Button>
//       </Card>
//       <Toast
//         isOpen={isMetamaskInstalled && account.length === 0}
//         title="Ooops!"
//         text="You may need to open the extension in the browser"
//       />
//     </Container>
//   )
// }

// const useWeb3 = () => {
//   const dispatch = Web3Context.useDispatch()
//   const { account } = Web3Context.useState()
//   const dispatchUpdateAcct = (data) => updateAccount(dispatch, data)
//   return {
//     account,
//     dispatchUpdateAcct
//   }
// }

// export default LoginContainer
