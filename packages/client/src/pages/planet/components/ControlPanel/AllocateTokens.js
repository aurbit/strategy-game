import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'

export default ({
  handleAllocateTokensClick,
  handleDeallocateTokensClick,
  activeTile
}) => {
  const [index, setIndex] = React.useState(0)
  const [amount, setAmount] = React.useState(null)
  const [selected, setSelected] = React.useState('Allocate')

  const handleUpdateRadio = ev => {
    return selected === 'Allocate'
      ? setSelected('Deallocate')
      : setSelected('Allocate')
  }
  const handleUpdateIndex = React.useCallback(
    num => {
      setIndex(num)
    },
    [setIndex]
  )
  const handleUpdateAmount = ev => {
    ev.preventDefault()
    setAmount(ev.target.value)
  }
  const handleClick = () => {
    selected === 'Allocate'
      ? handleAllocateTokensClick({ index, amount })
      : handleDeallocateTokensClick({ index, amount })
  }

  React.useEffect(() => {
    handleUpdateIndex(activeTile)
  }, [handleUpdateIndex, activeTile])

  return (
    <Container>
      <hr />
      <p className='pl-3'>Allocate Tokens</p>
      <Row className='pl-3'>
        <Col md={12}>
          <input
            type='radio'
            id='Allocate'
            name='Allocate'
            value='Allocate'
            onChange={handleUpdateRadio}
            checked={selected === 'Allocate'}
          />
          <label className='ml-1' htmlFor='Allocate'>
            Allocate
          </label>
        </Col>
        <Col>
          <input
            type='radio'
            id='Deallocate'
            name='Deallocate'
            value='Deallocate'
            onChange={handleUpdateRadio}
            checked={selected === 'Deallocate'}
          />
          <label className='ml-1' htmlFor='Deallocate'>
            Deallocate
          </label>
        </Col>
      </Row>
      <Row className='m-3'>
        <label className='m-1' htmlFor='Deallocate'>
          Tile Number
        </label>
        <input
          type='string'
          className='m-1'
          style={{ padding: 5 }}
          id='allocate-tokens-index'
          value={index || ''}
          onChange={e => handleUpdateIndex(e.target.value)}
          placeholder='Tile Number'
        />
      </Row>
      <Row className='m-3'>
        <label className='m-1' htmlFor='deallocate'>
          AUR Amount
        </label>
        <input
          className='m-1'
          type='string'
          style={{ padding: 5 }}
          id='allocate-tokens-amount'
          value={amount || ''}
          onChange={handleUpdateAmount}
          placeholder='Amount of AUR'
        />
      </Row>
      <Row className='m-3'>
        <Button onClick={handleClick} type='submit'>
          {selected}
        </Button>
      </Row>
    </Container>
  )
}
