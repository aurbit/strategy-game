import React from 'react'
import { Navbar } from 'react-bootstrap'
import logo from 'shared/images/logo_full.svg'

const styles = {
  brand: {
    marginLeft: '10%'
  }
}
const NavbarComponent = ({ network, account }) => {
  return (
    <Navbar className='justify-content-between align-items-center p-4'>
      <Navbar.Brand style={styles.brand}>
        <img alt='' src={logo} width='100' height='30' />
      </Navbar.Brand>
      <div style={{ color: 'white' }}>
        {network} & {account}
      </div>
    </Navbar>
  )
}

export default NavbarComponent
