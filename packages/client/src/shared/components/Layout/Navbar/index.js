import React from 'react'
import { Navbar } from 'react-bootstrap'
import { MetamaskBtn, Avatar } from 'shared/components'
import { Typography } from 'shared/components/Layout'

const NavbarContainer = ({ user, hideMetaBtn }) => {
  return (
    <Navbar bg="dark" className="justify-content-between">
      <Navbar.Brand>
        <Typography.Header>Aurbit</Typography.Header>
      </Navbar.Brand>
      {renderAvatar()}
    </Navbar>
  )

  function renderAvatar() {
    if (user.account.length > 0) {
      return <Avatar />
    }
    // Hide meta mask button when not used with store
    if (hideMetaBtn) {
      return null
    }
    return <MetamaskBtn />
  }
}

export default NavbarContainer
