import React from 'react'
import WalletSetup from 'shared/components/WalletSetup'
import Navbar from 'shared/components/Layout/Navbar'
import 'shared/styles/stars.css'

const AuthPage = props => {
  return (
    <div className='stars'>
      <div className='twinkling'>
        <Navbar />

        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <WalletSetup buttonText='Start Game' link={'/planet'} />
        </div>
      </div>
    </div>
  )
}

export default AuthPage
