import Input from "./Input"
import { inputFormArray } from "../utils/models/inputForm"

const LogIn = ({ stateForm }) => (
  <div className="stack-vertical">
    {inputFormArray.map((field) => (
      field.logInField
      && <Input
            stateForm={stateForm}
            type={field.type}
            name={field.label}
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
            name={field.label}
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

export { LogIn, SignIn }