import Input from './Input'
import { useState } from 'react'

type P = {
  name: string,
  initialValue: string,
  label: string,
  type: "password" | "email" | "text",
  validator: (arg: string) => boolean
}[]

// const getState = () =>

const Form = (prop: { inputs: P }) => {
  const { inputs } = prop
  const stateForm = useState({ email: "" })
  return (
    <>
    {inputs.map((props) => {
      return (
        <Input
          stateForm={stateForm}
          type={props.type}
          name={props.name}
          key={props.name}
        />
      )
    })}
    </>
  )
}

export default Form