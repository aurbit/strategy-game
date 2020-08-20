import React from 'react'
import PlayerAvatar from 'shared/components/PlayerAvatar'
import { Button, Container, Row, Col, Modal, Spinner } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectBalance,
  selectSendPlanetAur
} from 'shared/store/token/selectors'
import { selectPlanetContractAddress } from 'shared/store/chain/selectors'
import { selectGetAvatar } from 'shared/store/avatar/selectors'
import { ACTIONS as TOKEN_ACTIONS } from 'shared/store/token'
import { ACTIONS as AVATAR_ACTIONS } from 'shared/store/avatar'

const SendAurToAvatar = () => {
  const [amount, setAmount] = React.useState(0)
  const [avatarId, setAvatarId] = React.useState()
  const [show, setShow] = React.useState(false)

  const aurBalance = useSelector(selectBalance)
  const gotAvatar = useSelector(selectGetAvatar)
  const sendPlanetAur = useSelector(selectSendPlanetAur)
  const planetAddress = useSelector(selectPlanetContractAddress)
  const dispatch = useDispatch()

  const handleUpdateAmount = ev => {
    ev.preventDefault()
    setAmount(ev.target.value)
  }

  const handleUpdateAvatarId = ev => {
    ev.preventDefault()
    const id = ev.target.value
    dispatch(AVATAR_ACTIONS.getAvatarRequest(id))

    setAvatarId(id)
  }

  React.useEffect(() => {
    if (sendPlanetAur.result) {
      setShow(false)
    }
  }, [setShow, sendPlanetAur])

  const handleButtonClick = () => {
    if (planetAddress && amount && avatarId)
      dispatch(
        TOKEN_ACTIONS.sendPlanetAurRequest({ planetAddress, amount, avatarId })
      )
  }

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        SEND AUR
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send AUR Tokens</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className='mb-1'>
              <span>
                Your Wallet's AUR Balance: <b>{aurBalance || 0} AUR</b>
              </span>
            </Row>
            <Row>
              <hr />
            </Row>
            <Row>
              {gotAvatar ? (
                <Col>
                  <Row className='m-1'>AURA: {gotAvatar.name}</Row>
                  <Row>
                    {gotAvatar.dna ? (
                      <PlayerAvatar dna={gotAvatar.dna} id={gotAvatar.id} />
                    ) : (
                      <Spinner animation='grow' variant='warning' />
                    )}
                  </Row>
                </Col>
              ) : (
                <p>Please Select an Avatar to Send AUR</p>
              )}
            </Row>
            <Row>
              <input
                style={{ padding: 5, margin: 3 }}
                id='send-aur-avavar-id'
                placeholder='Avatar ID'
                onChange={handleUpdateAvatarId}
                value={avatarId || ''}
              />
            </Row>
            <Row>
              <input
                style={{ padding: 5, margin: 3 }}
                id='send-aur-amount'
                placeholder='AUR Amount'
                value={amount || ''}
                onChange={handleUpdateAmount}
              />
            </Row>
            {gotAvatar ? (
              <Row>
                <p>
                  Would you like to send {gotAvatar.name} {amount} AUR?
                </p>
              </Row>
            ) : null}
            <Row>
              <Button onClick={handleButtonClick}>SEND AUR</Button>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default SendAurToAvatar
