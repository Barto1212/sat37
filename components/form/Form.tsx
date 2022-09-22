import Input from './Input'
import React, { useState, useEffect, FC } from 'react'
import { I, testInput, testAllInputs } from '../../utils/models/inputs'
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


const Form: FC<FormProps> = ({ inputs, sendForm, submitLabel }) => {
  const [form, setForm ] = useState(getState(inputs))
  const [valid, setSuccess] = useState({})
  const { enqueueSnackbar } = useSnackbar()

  // On change form
  const handleChange = (e: React.BaseSyntheticEvent) => {
    const { value, id } = e.target
    setForm((old) => ({ ...old, [id]: value }))
    testInput(id, value, inputs)
      .then(() => setSuccess(s => ({ ...s ,[id]: true })))
      .catch(() => setSuccess(s => ({ ...s ,[id]: false })))
  }

  // Sending function
  const send = (e) => {
    e.preventDefault()
    testAllInputs(inputs, form)
      .then(() => sendForm(form))
      .then(() => enqueueSnackbar("Votre compte vient d'être crée", { variant: "success" }))
      .catch(e => enqueueSnackbar(e.errors ? e.errors[0] : e, { variant: "error" }))
    }

  // Clean form
  useEffect(() => {
    setForm(getState(inputs))
  }, [setForm, inputs])



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