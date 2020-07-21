import React from 'react'

// To ensure Typography is the consistence throughout the app lets build this component up
// Styles not done at all yet
const Typography = ({ children }) => {
  return <>{children}</>
}

const Header = ({ children }) => {
  return <h3 className="m-0">{children}</h3>
}

Typography.Header = Header

export default Typography
