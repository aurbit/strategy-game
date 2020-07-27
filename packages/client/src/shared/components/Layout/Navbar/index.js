import React from 'react'
import { Navbar } from 'react-bootstrap'
import logo from '../../../images/logo_full.svg'

const NavbarComponent = ({ network, account }) => {
  return (
    <Navbar className='justify-content-between align-items-center'>
      <Navbar.Brand>
        <img alt='' src={logo} width='100' height='30' />
      </Navbar.Brand>
      <div style={{ color: 'white' }}>
        {network} & {account}
      </div>
    </Navbar>
  )
}

export default NavbarComponent
