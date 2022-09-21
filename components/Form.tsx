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

const testAllInputs = async (inputs: I, form) => {
  const result = {}
  for (const label in form) {
    console.log(label)
    const { validator } = inputs.find((obj) => obj.name === label)
    try {
      result[label] = await validator(form[label])
    } catch (error) {
      return error
    }
  }
  return result
}

const Form = (prop: { inputs: I, sendForm: (f) => void, submitName: string }) => {
  const { inputs, sendForm, submitName } = prop
  const stateForm = useState(getState(inputs))
  const [form, setForm ]= stateForm
  // Clean form
  useEffect(() => {
    setForm(getState(inputs))
  }, [setForm, inputs])
  const send = async (e) => {
    e.preventDefault()
    const res = await testAllInputs(inputs, form)
    console.log(res) 
    sendForm(form)
  }
  return (
    <form action="submit" onSubmit={send}>
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
    <div className='btnContainer'>
      <button className='btn-primary' type="submit" >
        <span className='bold'>{submitName}</span>
      </button>
    </div>
    </form>
  )
}

export default Form