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

export { inputsLogIn, inputsSignIn }

export type { I }
