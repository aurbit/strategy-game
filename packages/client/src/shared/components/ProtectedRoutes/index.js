import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// Simple Route Protection

const ProtectedRoutes = ({
  component: Component,
  walletConnected,
  ...rest
}) => {
  return (
    <Route
      render={props => {
        if (walletConnected) {
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

// const ProtectedRoutes = ({
//   component: Component,
//   accounts,
//   walletConnected,
//   ...rest
// }) => {
//   return (
//     <Route
//       render={props => {
//         console.log('PROTECTED ROUTE ACCOUNT: ', accounts)
//         if (accounts === null || accounts.length === 0 || !walletConnected) {
//           return (
//             <Redirect
//               to={{
//                 pathname: '/',
//                 state: { from: props.location }
//               }}
//             />
//           )
//         }
//         return <Component {...rest} {...props} />
//       }}
//     />
//   )
// }

// export default ProtectedRoutes
