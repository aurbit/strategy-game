import React from 'react'

// To ensure Typography is the consistence throughout the app lets build this component up
// Styles not done at all yet
const Typography = ({ children }) => {
  return <>{children}</>
}

const Header = ({ children }) => {
  return <h3 className="m-0">{children}</h3>
}

const Title = ({ children }) => {
  return <h4 className="m-0">{children}</h4>
}

const Body = ({ children }) => {
  return <p className="m-0">{children}</p>
}

Typography.Header = Header
Typography.Title = Title
Typography.Body = Body

export default Typography
