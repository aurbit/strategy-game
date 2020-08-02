import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { ACTIONS, selectChat } from 'shared/store/chat'

const TestPageContainer = () => {
  const dispatch = useDispatch()
  const chatProvider = useSelector(selectChat)
  React.useEffect(() => {
    dispatch(ACTIONS.initChat())
  }, [])

  function onClickConnect() {
    chatProvider.startNewRoom()
  }
  function onClickInit() {
    chatProvider.init()
  }
  function onClickSend() {
    chatProvider.send('Hellow orld')
  }
  function onClickGet() {
    chatProvider.getMessages()
  }
  return (
    <div>
      <Button onClick={onClickInit}>Init</Button>
      <Button onClick={onClickConnect}>Connect</Button>
      <Button onClick={onClickSend}>SEND</Button>
      <Button onClick={onClickGet}>GET</Button>
    </div>
  )
}

export default TestPageContainer
