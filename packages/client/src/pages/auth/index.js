import React from 'react'
import WalletSetup from '../../shared/components/WalletSetup'

import './style.css'

const AuthPage = props => {
  return (
    <div className='stars'>
      <div className='twinkling'>
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <WalletSetup buttonText='Start Game' />
        </div>
      </div>
    </div>
  )
}

export default AuthPage
