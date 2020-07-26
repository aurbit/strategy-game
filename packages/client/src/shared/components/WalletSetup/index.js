import React from 'react'
import { Modal, Button, ListGroup, Image, Row, Col } from 'react-bootstrap'
import WalletContext, { setWallet, availableWallets } from '../../store/wallet'
import { ShieldCheck } from 'react-bootstrap-icons'
import { useHistory } from 'react-router-dom'

export default props => {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <div>
      <Button variant='danger' size='lg' onClick={() => setModalShow(true)}>
        Start Game
      </Button>
      <WalletSelectModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  )
}

const WalletSelectModal = props => {
  const { activeWallet } = WalletContext.useState()
  const walletDispatch = WalletContext.useDispatch()
  const history = useHistory()

  const handleContinue = () => {
    props.onHide()
    history.push('/planet')
  }

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
          {typeof window.ethereum !== 'undefined' ? (
            <ListGroup.Item
              action
              variant='no-style'
              active={activeWallet === availableWallets.METAMASK}
              style={{ height: 100 }}
            >
              <Row
                className='align-items-center'
                onClick={() =>
                  setWallet(walletDispatch, availableWallets.METAMASK)}
              >
                <Col>
                  <Image
                    width={80}
                    height={80}
                    src='images/metamask-logo.png'
                  />
                </Col>
                <Col md='auto'>MetaMask</Col>
                <Col md='auto' order='last'>
                  {activeWallet === availableWallets.METAMASK ? (
                    <ShieldCheck color='white' size={48} />
                  ) : null}
                </Col>
              </Row>
            </ListGroup.Item>
          ) : null}
          <ListGroup.Item
            action
            variant='no-style'
            active={activeWallet === availableWallets.WALLET_CONNECT}
            style={{ height: 100 }}
          >
            <Row
              className='align-items-center'
              onClick={() =>
                setWallet(walletDispatch, availableWallets.WALLET_CONNECT)}
            >
              <Col>
                <Image
                  width={80}
                  height={80}
                  src='images/wallet-connect-logo.png'
                />
              </Col>
              <Col md='auto'>Wallet Connect</Col>
              <Col md='auto' order='last'>
                {activeWallet === availableWallets.WALLET_CONNECT ? (
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
          disabled={activeWallet === null}
          onClick={handleContinue}
        >
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
