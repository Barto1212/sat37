import Input from './Input'
import { useState, useEffect } from 'react'
import type { I } from '../utils/models/inputs'

const getState = (inputs: I) => {
  const state = {}
  for (const input in inputs) {
    state[inputs[input].name] = inputs[input].initialValue
  }
  return state
}

const Form = (prop: { inputs: I, send?: () => void }) => {
  const { inputs } = prop
  const stateForm = useState(getState(inputs))
  const setStateForm = stateForm[1]
  // Clean form
  useEffect(() => {
    setStateForm(getState(inputs))
  }, [setStateForm, inputs])
  return (
    <>
    {inputs.map((props) => {
      return (
        <Input
          stateForm={stateForm}
          type={props.contentType}
          name={props.name}
          label={props.label}
          key={props.name}
        />
      )
    })}
    </>
  )
}

export default Form