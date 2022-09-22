import { string } from 'yup'

type I = {
  name: string,
  type: "textField" | "button",
  initialValue: string,
  label: string,
  contentType: "password" | "email" | "text",
  validator: (value: string) => Promise<string>
}[]

const emailValidator = async (value: string) => {
  const valid = await string()
    .required("ce champ est requis")
    .email("il faut une addresse email valide")
    .validate(value) 
  return valid
}
const stringValidator = async (value: string) => {
  const valid = await string()
    .required("ce champ est requis")
    .validate(value)
  return valid
}
const inputsLogIn: I = [
  { name: "email",            type:"textField",  initialValue: "", label: "Adresse e-mail",  contentType: "email",      validator: emailValidator },
  { name: "password",         type:"textField",  initialValue: "", label: "Mot de passe",    contentType: "password",   validator: stringValidator },
]

const inputsSignIn: I = [
  { name: "name",             type:"textField",  initialValue: "", label: "Pseudonyme",      contentType: "text",       validator: stringValidator },
  ...inputsLogIn,
  { name: "confirmPassword",  type:"textField",  initialValue: "", label: "Confirmation",    contentType: "password",   validator: stringValidator },
]

const testInput = async (label: string, value: string, inputs: I) => {
  const { validator } = inputs.find((obj) => obj.name === label)
  await validator(value)
}
const testAllInputs = async (inputs: I, form: object) => {
  for (const label in form) {
    await testInput(label, form[label], inputs)
  }
}

export { inputsLogIn, inputsSignIn, testInput, testAllInputs }

export type { I }
