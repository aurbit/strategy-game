import React from 'react'
import { Modal, Button, ListGroup, Image, Row, Col } from 'react-bootstrap'
import WalletContext, { setWallet, availableWallets } from '../../store/wallet'

export default props => {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <>
      <Button variant='light' size='lg' onClick={() => setModalShow(true)}>
        Start Game
      </Button>

      <WalletSelectModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  )
}

const WalletSelectModal = props => {
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
        <WalletChoices />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

const WalletChoices = props => {
  return (
    <ListGroup>
      {typeof window.ethereum !== 'undefined' ? (
        <ListGroup.Item
          action
          variant='light'
          active={false}
          style={{ height: 100 }}
        >
          <MetaMask />
        </ListGroup.Item>
      ) : null}
      <ListGroup.Item
        action
        variant='light'
        active={false}
        style={{ height: 100 }}
      >
        <WalletConnectItem />
      </ListGroup.Item>
    </ListGroup>
  )
}

const MetaMask = props => {
  const walletDispatch = WalletContext.useDispatch()
  return (
    <Row onClick={() => setWallet(walletDispatch, availableWallets.METAMASK)}>
      <Col md={2}>
        <Image width={80} height={80} src='images/metamask-logo.png' />
      </Col>
      <Col>MetaMask</Col>
    </Row>
  )
}

const WalletConnectItem = props => {
  const walletDispatch = WalletContext.useDispatch()
  return (
    <Row
      onClick={() => setWallet(walletDispatch, availableWallets.WALLET_CONNECT)}
    >
      <Col md={2}>
        <Image
          width={80}
          height={80}
          src='images/wallet-connect-logo.png'
          broder={1}
        />{' '}
      </Col>
      <Col>Wallet Connect</Col>
    </Row>
  )
}
