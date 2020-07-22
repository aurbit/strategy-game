import React from 'react'
import UserContext, { initUser, setMetamaskStatus } from 'shared/store/user'
import { Container, Row, Col } from 'react-bootstap'

const LoginContainer = () => {
  const { isMetamaskInstalled } = useUserContext()
  return <Container>HJeloo</Container>
}

const useUserContext = () => {
  const dispatch = UserContext.useDispatch()
  const { account, isMetamaskInstalled } = UserContext.useState()

  // const dispatchInitUser = (name) => initUser(dispatch, name)
  // const dispatchCheckMetamask = (status) => setMetamaskStatus(dispatch, status)
  return {
    isMetamaskInstalled
  }
}

export default LoginContainer
