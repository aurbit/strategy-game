import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// Simple Route Protection

const ProtectedRoutes = ({ component: Component, account, isMetamaskInstalled, ...rest }) => {
  return (
    <Route
      render={(props) => {
        if (account === null || !isMetamaskInstalled) {
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
