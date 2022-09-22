import { string } from 'yup'

type I = {
  name: string,
  type: "textField" | "button",
  initialValue: string,
  label: string,
  contentType: "password" | "email" | "text",
  validator: (value: string) => Promise<string>
}[]

const getState = (inputs: I) => {
  const state = {}
  for (const input in inputs) {
    state[inputs[input].name] = inputs[input].initialValue
  }
  return state
}


const emailValidator = async (value: string) => {
  const message = "Il faut une addresse e-mail valide"
  const valid = await string()
    .required(message)
    .email(message)
    .validate(value) 
  return valid
}

function generateStringValidator (label: string) {
  return async (value: string) => {
    const valid = await string()
      .required(`Le champ ${label} est requis`)
      .validate(value)
    return valid
  }
}
const inputsLogIn: I = [
  { name: "email",            type:"textField",  initialValue: "", label: "Adresse e-mail",  contentType: "email",      validator: emailValidator },
  { name: "password",         type:"textField",  initialValue: "", label: "Mot de passe",    contentType: "password",   validator: generateStringValidator("mot de passe") },
]

const inputsSignIn: I = [
  { name: "name",             type:"textField",  initialValue: "", label: "Pseudonyme",      contentType: "text",       validator: generateStringValidator("pseudonyme") },
  ...inputsLogIn,
  { name: "confirmPassword",  type:"textField",  initialValue: "", label: "Confirmation",    contentType: "password",   validator: generateStringValidator("confirmation") },
]
// type F = {
//   name?: string,
//   password: string,
//   email: string,
//   confirmPassword?: string
// }

const testInput = async (label: string, value: string, inputs: I) => {
  const { validator } = inputs.find((obj) => obj.name === label)
  await validator(value)
}
const testAllInputs = async (inputs: I, form) => {
  for (const label in form) {
    await testInput(label, form[label], inputs)
  }
  if (form.hasOwnProperty('confirmPassword') && form.hasOwnProperty('password')) {
    
    if (form.confirmPassword !== form.password) {
      return Promise.reject("Les mots de passe sont différents")
    }
  }
}

export { inputsLogIn, inputsSignIn, testInput, testAllInputs, getState }

export type { I }
