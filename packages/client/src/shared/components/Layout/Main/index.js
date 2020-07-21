import React from 'react'
import { Navbar } from 'shared/components/Layout'

const MainLayoutContainer = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default MainLayoutContainer
