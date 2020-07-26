import React from 'react'
import { Form, Button } from 'react-bootstrap'

const CreateCharForm = ({ onChangeRange, onChangeRadio, gender }) => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Player Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Name..." />
        <div
          key="inline-radio"
          className="mt-4 mb-3 d-flex justify-content-center"
        >
          <Form.Check
            className="text-white"
            inline
            onChange={onChangeRadio}
            checked={gender === 'human_male'}
            value="human_male"
            label="Male"
            type="radio"
            id="radio-human-1"
          />
          <Form.Check
            inline
            onChange={onChangeRadio}
            value="human_female"
            checked={gender === 'human_female'}
            className="text-white"
            label="Female"
            type="radio"
            id="radio-human-2"
          />
        </div>
      </Form.Group>
      <Form.Group>
        <Form.Label className="text-white">Hair Color</Form.Label>
        <Form.Control
          step="25"
          type="range"
          id="hair"
          onChange={onChangeRange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="text-white">Skin Color</Form.Label>
        <Form.Control
          step="25"
          type="range"
          id="skin"
          onChange={onChangeRange}
        />
      </Form.Group>
      <div className="text-center mt-5">
        <Button style={{ fontSize: 22 }} variant="secondary">
          Create Character
        </Button>
      </div>
    </Form>
  )
}

export default CreateCharForm
