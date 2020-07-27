import React from 'react'
import { Form, Button } from 'react-bootstrap'
import styles from './index.module.css'
const CreateCharForm = ({
  onChangeRange,
  onChangeRadio,
  onChangeSkin,
  gender,
  skinColor,
  onSubmit
}) => {
  return (
    <Form onSubmit={onSubmit} className={styles.formWrapper}>
      <Form.Group className="d-flex justify-content-center">
        <Form.Control
          style={{ maxWidth: 300 }}
          type="email"
          placeholder="Enter Name..."
        />
      </Form.Group>
      <Form.Group>
        <div
          style={{ fontSize: 20 }}
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
            id="q157"
          />
          <Form.Check
            inline
            onChange={onChangeRadio}
            value="human_female"
            checked={gender === 'human_female'}
            className="text-white"
            label="Female"
            type="radio"
            id="q157"
          />
        </div>
      </Form.Group>
      <Form.Group>
        <Form.Label className="text-white">Hair Color</Form.Label>
        <Form.Control
          className="custom-range"
          step="25"
          type="range"
          id="hair"
          onChange={onChangeRange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="text-white">Eye Color</Form.Label>
        <Form.Control
          step="25"
          className="custom-range"
          type="range"
          id="skin"
          onChange={onChangeRange}
        />
      </Form.Group>
      <Form.Group>
        <div style={{ fontSize: 20 }} key="inline-check" className="mt-4 mb-3">
          <Form.Check
            inline
            onChange={onChangeSkin}
            checked={skinColor === '#C9A440'}
            value="#C9A440"
            type="checkbox"
            id="check-skin-1"
          />
          <Form.Check
            inline
            onChange={onChangeSkin}
            value="#C98D40"
            checked={skinColor === '#C98D40'}
            className="text-white"
            type="checkbox"
            id="check-skin-2"
          />
          <Form.Check
            inline
            onChange={onChangeSkin}
            checked={skinColor === '#DBA786'}
            value="#DBA786"
            type="checkbox"
            id="check-skin-3"
          />
          <Form.Check
            inline
            onChange={onChangeSkin}
            value="#674732"
            checked={skinColor === '#674732'}
            className="text-white"
            type="checkbox"
            id="check-skin-4"
          />
          <Form.Check
            inline
            onChange={onChangeSkin}
            value="#4A2E1D"
            checked={skinColor === '#4A2E1D'}
            className="text-white"
            type="checkbox"
            id="check-skin-5"
          />
        </div>
      </Form.Group>
      <div className="text-center mt-5">
        <Button type="submit" className={styles.submitBtn} variant="secondary">
          Create Character
        </Button>
      </div>
    </Form>
  )
}

export default CreateCharForm
