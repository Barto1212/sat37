import Input from './Input'
import React, { useState, useEffect, FC } from 'react'
import type { I } from '../../utils/models/inputs'
import { useSnackbar } from 'notistack'


const getState = (inputs: I) => {
  const state = {}
  for (const input in inputs) {
    state[inputs[input].name] = inputs[input].initialValue
  }
  return state
}


type FormProps = {
  inputs: I,
  sendForm: (f: object) => void,
  submitLabel: string
}
const testInput = async (label: string, value: string, inputs: I) => {
  const { validator } = inputs.find((obj) => obj.name === label)
  await validator(value)
}
const testAllInputs = async (inputs: I, form: object) => {
  for (const label in form) {
    await testInput(label, form[label], inputs)
  }
}

const Form: FC<FormProps> = ({ inputs, sendForm, submitLabel }) => {
  const [form, setForm ] = useState(getState(inputs))
  const [valid, setSuccess] = useState({})
  const { enqueueSnackbar } = useSnackbar()

  const handleChange = (e: React.BaseSyntheticEvent) => {
    const { value, id } = e.target
    setForm((old) => ({ ...old, [id]: value }))
    testInput(id, value, inputs)
      .then(() => setSuccess(s => ({ ...s ,[id]: true })))
      .catch(() => setSuccess(s => ({ ...s ,[id]: false })))
  }


  // Clean form
  useEffect(() => {
    setForm(getState(inputs))
  }, [setForm, inputs])
  const send = (e) => {
    e.preventDefault()
    testAllInputs(inputs, form)
      .then(() => sendForm(form))
      .catch(e => enqueueSnackbar(e.errors[0], { variant: "error" }))
  }
  return (
    <form action="submit" onSubmit={send}>
      {inputs.map((props) => {
        return (
          <Input
            handleChange={handleChange}
            value={form[props.name]}
            valid={valid[props.name]}
            type={props.contentType}
            name={props.name}
            label={props.label}
            key={props.name}
          />
        )
      })}
    <div className='btnContainer'>
      <button className='btn-primary' type="submit" >
        <span className='bold'>{submitLabel}</span>
      </button>
    </div>
    </form>
  )
}

export default Form