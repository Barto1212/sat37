import Input from './Input'
import { useState, useEffect, FC } from 'react'
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
const testAllInputs = async (inputs: I, form: object) => {
  for (const label in form) {
    const { validator } = inputs.find((obj) => obj.name === label)
    await validator(form[label])
  }
}



const Form: FC<FormProps> = ({ inputs, sendForm, submitLabel }) => {
  const stateForm = useState(getState(inputs))
  const [form, setForm ]= stateForm
  const { enqueueSnackbar } = useSnackbar()

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
        <span className='bold'>{submitLabel}</span>
      </button>
    </div>
    </form>
  )
}

export default Form