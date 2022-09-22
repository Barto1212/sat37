import Input from './Input'
import React, { useState, useEffect, FC } from 'react'
import { I, testInput, testAllInputs, getState } from '../../utils/models/inputs'
import { useSnackbar } from 'notistack'

type FormProps = {
  inputs: I,
  sendForm: (f: object) => void,
  submitLabel: string
}

const Form: FC<FormProps> = ({ inputs, sendForm, submitLabel }) => {
  const [valid, setValid] = useState({})
  const { enqueueSnackbar } = useSnackbar()
  const [form, setForm] = useState(getState(inputs))
  // Clean form
  useEffect(() => {
    setForm(getState(inputs))
  }, [setForm, inputs])
  
  // On change form
  const handleChange = (e: React.BaseSyntheticEvent) => {
    const { value, id } = e.target
    setForm((old) => ({ ...old, [id]: value }))
    testInput(id, value, inputs)
      .then(() => setValid(s => ({ ...s ,[id]: true })))
      .catch(() => setValid(s => ({ ...s ,[id]: false })))
  }

  // Sending function
  const send = (e) => {
    e.preventDefault()
    testAllInputs(inputs, form)
      .then(() => sendForm(form))
      .then(() => enqueueSnackbar("Votre compte vient d'être crée", { variant: "success" }))
      .catch(e => {
        // debug here e
        enqueueSnackbar(e.errors ? e.errors[0] : e, { variant: "error" })
      })
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
