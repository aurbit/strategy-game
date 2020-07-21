import React from 'react'
import Navbar from './index'
import { UserContext, setMetamask } from 'shared/store/user'

// Create a connected component for some dummy components
// Incase we need to use dummy component without any logic based on store

const ConnectedNavbar = () => {
  const { userState } = useUserStore()
  return <Navbar user={userState} />
}

function useUserStore() {
  const userState = UserContext.useState()
  return { userState }
}

export default ConnectedNavbar
