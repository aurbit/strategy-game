import React from 'react'
import { Navbar } from 'react-bootstrap'
import { MetamaskBtn, Avatar } from 'shared/components'
import { Typography } from 'shared/components/Layout'
const NavbarContainer = () => {
  return (
    <Navbar bg="dark" className="justify-content-between">
      <Navbar.Brand>
        <Typography.Header>Aurbit</Typography.Header>
      </Navbar.Brand>
      <MetamaskBtn />
      <Avatar />
    </Navbar>
  )
}

export default NavbarContainer
