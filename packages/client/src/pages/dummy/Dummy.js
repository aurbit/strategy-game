import React from 'react'
import { MainLayout, Typography } from 'shared/components/Layout'
import { Container, Form, Button } from 'react-bootstrap'
import { Contract } from 'shared/services/web3'
import { ABI, ADDRESS } from 'shared/contracts/mock-player'
// Temp Component To Interfact With Contracts

const DummyContainer = () => {
  const [playerName, setPlayerName] = React.useState('')
  const [PlayerContract] = React.useState(Contract(ABI, ADDRESS))

  React.useEffect(() => {
    const event = PlayerContract.NewPlayer(function (error, result) {
      if (error) {
        console.log('ERROR', error)
        return
      }
      console.log('RESULT: ', result)
      const { playerId, name, dna } = result.args
      generatePlayer(playerId, name, dna)
    })
  }, [])

  function generatePlayer(id, name, dna) {
    console.log('WE HAVE DATA: ', id)
    console.log('NAME: ', name)
    console.log('DNA: ', dna)
  }

  function handleOnChange(e) {
    setPlayerName(e.target.value)
  }

  function handleOnSubmit(e) {
    e.preventDefault()
    PlayerContract.createRandomPlayer(playerName, () => console.log('ok'))
  }
  return (
    <MainLayout>
      <Container className="mt-3">
        <Typography.Title>New Player</Typography.Title>
        <Form className="mt-3" onSubmit={handleOnSubmit}>
          <Form.Group controlId="formPlayerName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={playerName}
              type="text"
              placeholder="Enter name"
              onChange={handleOnChange}
            />
            <Form.Text className="text-muted">
              Once you name your player it name is permananet in blockl chain
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </MainLayout>
  )
}

export default DummyContainer
