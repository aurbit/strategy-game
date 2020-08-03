import React from 'react'
import { Container, Col, Row, Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default () => {
  const history = useHistory()

  React.useEffect(() => console.log(history.location))
  return (
    <Container>
      <CardList />
    </Container>
  )
}

const CardList = () => {
  return (
    <div>
      <Card>Avatar One</Card>
      <Card>Avarar Two</Card>
    </div>
  )
}
