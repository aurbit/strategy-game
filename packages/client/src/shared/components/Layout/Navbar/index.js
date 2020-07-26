import React from 'react'
import { Navbar } from 'react-bootstrap'
import logo from './logo.svg'

const NavbarComponent = ({ network, account }) => {
  return (
    <Navbar
      bg='dark'
      variant='dark'
      className='justify-content-between align-items-center'
    >
      <Navbar.Brand href='#home'>
        <img
          alt=''
          src={logo}
          width='30'
          height='30'
          className='d-inline-block align-top'
        />{' '}
        Aurbit
      </Navbar.Brand>
      <div style={{ color: 'white' }}>
        {network} & {account}
      </div>
    </Navbar>
  )
}

export default NavbarComponent
