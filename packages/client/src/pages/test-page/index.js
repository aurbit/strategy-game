import React from 'react'
// import { Button } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'
// import { selectChat } from 'shared/store/chat'
// import { ACTIONS as CHAIN_ACTIONS } from 'shared/store/chain'

const TestPageContainer = () => {
  // const dispatch = useDispatch()
  // const chatProvider = useSelector(selectChat)
  // React.useEffect(() => {
  //   // BEGIN TO INIT PROVIDER
  //   dispatch(CHAIN_ACTIONS.initProvider())
  //   // START TO INIT ARTIFACTS - store/chain/sagas - check initArtifacts() function
  //   dispatch(CHAIN_ACTIONS.initArtifacts())
  //   // CREATE CONTRACT BASED ON ARTIFACTS - store/chain/sagas - check initContracts() function
  //   dispatch(CHAIN_ACTIONS.initContracts())
  // }, [dispatch])

  // function onClickConnect () {
  //   chatProvider.startNewRoom()
  // }
  // function onClickInit () {
  //   chatProvider.init()
  // }
  // function onClickSend () {
  //   chatProvider.send('Hellow orld')
  // }
  // function onClickGet () {
  //   chatProvider.getMessages()
  // }
  return (
    <div>
      {/* <Button onClick={onClickInit}>Init</Button>
      <Button onClick={onClickConnect}>Connect</Button>
      <Button onClick={onClickSend}>SEND</Button>
      <Button onClick={onClickGet}>GET</Button> */}
    </div>
  )
}

export default TestPageContainer
