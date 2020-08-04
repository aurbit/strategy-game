import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, Button, ListGroup, Image, Row, Col } from 'react-bootstrap'
import { WALLETS, ACTIONS } from 'shared/store/wallet'
import { ACTIONS as TOKEN_ACTIONS } from 'shared/store/token'
import { selectAddress, selectVendor } from 'shared/store/wallet/selectors'
import { useToken } from 'shared/services/provider'
import { selectNetwork } from 'shared/store/chain/selectors'
import { ShieldCheck } from 'react-bootstrap-icons'
import { useHistory } from 'react-router-dom'

import MetaMaskLogo from 'shared/images/metamask-logo.png'
import WalletConnectLogo from 'shared/images/wallet-connect-logo.png'

export default props => {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <div>
      <Button
        variant={props.variant || 'dark'}
        size='lg'
        onClick={() => setModalShow(true)}
      >
        {props.buttonText}
      </Button>
      <WalletSelectModal
        link={props.link}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

const WalletSelectModal = props => {
  const address = useSelector(selectAddress)
  const network = useSelector(selectNetwork)
  const vendor = useSelector(selectVendor)
  const dispatch = useDispatch()
  const history = useHistory()
  const { token } = useToken()

  // the continue button on the modal
  const handleContinue = () => {
    props.onHide()
    if (props.link) {
      history.push(props.link)
    }
  }

  // when the users switches wallet
  const handleWalletUpdate = wallet => {
    if (!window.connector.connected && wallet == WALLETS.WALLET_CONNECT) {
      window.connector.createSession()
    } else {
      dispatch(ACTIONS.setWallet({ vendor: wallet }))
    }
  }

  /// if address updates, check for aur balance
  // Should this not be a Use Effect to listen to changes to props?
  React.useEffect(() => {
    if (address && address !== 'Connect Wallet') {
      token.methods
        .balanceOf(address)
        .call()
        .then(data => {
          dispatch(TOKEN_ACTIONS.setAurBalance(data))
        })
        .catch(err => {
          dispatch(TOKEN_ACTIONS.setAurBalanceError(err))
        })
    }
  }, [address, dispatch, token])

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Connect Wallet
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          {typeof window?.ethereum !== 'undefined' ? (
            <ListGroup.Item
              action
              variant='no-style'
              active={vendor === WALLETS.METAMASK}
              style={{ height: 100 }}
            >
              <Row
                className='align-items-center'
                onClick={() => handleWalletUpdate(WALLETS.METAMASK)}
              >
                <Col xs={3}>
                  <Image width={80} height={80} src={MetaMaskLogo} />
                </Col>
                <Col xs={6} md={7}>
                  MetaMask
                </Col>
                <Col xs={3} md='auto' order='last'>
                  {window?.ethereum.selectedAddress &&
                  vendor === WALLETS.METAMASK ? (
                    <ShieldCheck color='white' size={48} />
                  ) : null}
                </Col>
              </Row>
            </ListGroup.Item>
          ) : null}
          <ListGroup.Item
            action
            variant='no-style'
            active={vendor === WALLETS.WALLET_CONNECT}
            style={{ height: 100 }}
          >
            <Row
              className='align-items-center'
              onClick={() => handleWalletUpdate(WALLETS.WALLET_CONNECT)}
            >
              <Col xs={3}>
                <Image width={80} height={80} src={WalletConnectLogo} />
              </Col>
              <Col xs={6} md={7}>
                Wallet Connect
              </Col>
              <Col xs={2} md='auto' order='last'>
                {vendor === WALLETS.WALLET_CONNECT ? (
                  <ShieldCheck color='white' size={48} />
                ) : null}
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='dark'
          disabled={vendor === null}
          onClick={handleContinue}
        >
          {network}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
