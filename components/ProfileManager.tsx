import Input from "./Input"
import { inputFormArray } from "../utils/models/inputForm"
import Form from './Form'

type I = {
  name: string,
  initialValue: string,
  label: string,
  type: "password" | "email" | "text",
  validator: () => boolean
}[]

const inputsLogIn: I = [
  { name: "email",            initialValue: "", label: "E mail",          type: "email",      validator: () => true },
  { name: "password",         initialValue: "", label: "Mot de passe",    type: "password",   validator: () => true },
]

const inputsSignIn: I = [
  { name: "name",             initialValue: "", label: "Pseudonyme",      type: "text",       validator: () => true },
  ...inputsLogIn,
  { name: "confirmPassword",  initialValue: "", label: "Confirmation",    type: "password",   validator: () => true },
]

const ProfileManager = ({ logInMode }) => {
  return (
    <div className="stack-vertical">
      <Form inputs={logInMode ? inputsLogIn : inputsSignIn} />
    </div>
  )
}

const LogIn = ({ stateForm }) => (
  <div className="stack-vertical">
    {inputFormArray.map((field) => (
      field.logInField
      && <Input
            stateForm={stateForm}
            type={field.type}
            name={field.name}
            key={field.name}
          />
    ))}
  </div>
)

const SignIn = ({ stateForm }) => {
  const valid = stateForm[0]["Mot de passe"] === stateForm[0]["Confirmation"]
  return (
    <div className="stack-vertical">
      {inputFormArray.map((field) => (
        field.signInField
        && <Input
            stateForm={stateForm}
            type={field.type}
            name={field.name}
            key={field.name}
            valid={field.name === "confirmPassword" ? valid : undefined}
          />
      ))}
    </div>
  )
  return (
    <>
      <div className="stack-horizontal">
        <Input stateForm={stateForm} type="text" name="Pseudonyme" />
        <Input stateForm={stateForm} type="email" name="Adresse email" />
      </div>
      <div className="stack-horizontal">
        <Input stateForm={stateForm} type="password" name="Mot de passe" />
        <Input stateForm={stateForm} valid={valid} type="password" name="Confirmation" />
      </div>
    </>
  )
}
export default ProfileManager

export { LogIn, SignIn }