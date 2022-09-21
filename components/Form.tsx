import Input from './Input'
import { useState } from 'react'
import type { I } from '../utils/models/inputs'

// const getState = () =>

const Form = (prop: { inputs: I }) => {
  const { inputs } = prop
  const stateForm = useState({ email: "" })
  return (
    <>
    {inputs.map((props) => {
      return (
        <Input
          stateForm={stateForm}
          type={props.contentType}
          name={props.name}
          key={props.name}
        />
      )
    })}
    </>
  )
}

export default Form