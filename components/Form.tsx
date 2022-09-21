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

const Form = (prop: { inputs: I, sendForm: (f) => void }) => {
  const { inputs, sendForm } = prop
  const stateForm = useState(getState(inputs))
  const [form, setForm ]= stateForm
  // Clean form
  useEffect(() => {
    setForm(getState(inputs))
  }, [setForm, inputs])
  const send = (e) => {
    e.preventDefault()
    sendForm(form)
  }
  return (
    <form action="submit" onSubmit={send}>
      {inputs.map((props) => {
        if (props.type === "button") {
          return (
            <div key={props.name} className='btnContainer'>
              <button className='btn-primary' type="submit" >
                <span className='bold'>{props.label}</span>
              </button>
            </div>
          )
        }
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
    </form>
  )
}

export default Form