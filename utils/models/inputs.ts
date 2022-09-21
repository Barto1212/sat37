type I = {
  name: string,
  initialValue: string,
  label: string,
  contentType: "password" | "email" | "text",
  validator: () => boolean
}[]

const inputsLogIn: I = [
  { name: "email",            initialValue: "", label: "Adresse e-mail",  contentType: "email",      validator: () => true },
  { name: "password",         initialValue: "", label: "Mot de passe",    contentType: "password",   validator: () => true },
]

const inputsSignIn: I = [
  { name: "name",             initialValue: "", label: "Pseudonyme",      contentType: "text",       validator: () => true },
  ...inputsLogIn,
  { name: "confirmPassword",  initialValue: "", label: "Confirmation",    contentType: "password",   validator: () => true },
]

export { inputsLogIn, inputsSignIn }

export type { I }
