export const inputForm = {
  "Pseudonyme": "",
  "Adresse email": "",
  "Mot de passe": "",
  "Confirmation": "",
}
export type inputForm = {
  "Pseudonyme": string,
  "Adresse email": string,
  "Mot de passe": string,
  "Confirmation": string,
}
type inputFormArrayType = {
  name: string,
  label: string,
  type: "password" | "email" | "text",
  signInField: boolean,
  logInField: boolean
}[]
export const inputFormArray: inputFormArrayType = [
  { name: "pseudo",           label: "Pseudonyme",      type: "text",       signInField: true, logInField: false  },
  { name: "email",            label: "Adresse email",   type: "email",      signInField: true, logInField: true   },
  { name: "password",         label: "Mot de passe",    type: "password",   signInField: true, logInField: true   },
  { name: "confirmPassword",  label: "Confirmation",    type: "password",   signInField: true, logInField: false  },
]

const createState = () => {
  const state = {}
  inputFormArray.forEach(field => state[field.label] = "")
  return state
}

export const stateInput = createState()
