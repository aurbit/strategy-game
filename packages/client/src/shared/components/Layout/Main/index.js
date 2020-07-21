import React from 'react'
import { ConnectedNavbar } from 'shared/components/Layout'

const MainLayoutContainer = ({ children }) => {
  return (
    <div>
      <ConnectedNavbar />
      {children}
    </div>
  )
}

export default MainLayoutContainer
