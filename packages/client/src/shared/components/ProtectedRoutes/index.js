import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// Simple Route Protection

const ProtectedRoutes = ({
  component: Component,
  accounts,
  isMetamaskInstalled,
  ...rest
}) => {
  return (
    <Route
      render={(props) => {
        console.log('PROTECTED ROUTE ACCOUNT: ', accounts)
        console.log('PROTECTED ROUTE IS META INSTALLED: ', isMetamaskInstalled)
        if (accounts === null || accounts.length < 0 || !isMetamaskInstalled) {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location }
              }}
            />
          )
        }
        return <Component {...rest} {...props} />
      }}
    />
  )
}

export default ProtectedRoutes
