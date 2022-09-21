type I = {
  name: string,
  type: "textField" | "button",
  initialValue: string,
  label: string,
  contentType: "password" | "email" | "text",
  validator: () => boolean
}[]
const inputsBase: I = [
  { name: "email",            type:"textField",  initialValue: "", label: "Adresse e-mail",  contentType: "email",      validator: () => true },
  { name: "password",         type:"textField",  initialValue: "", label: "Mot de passe",    contentType: "password",   validator: () => true },
]
const inputsLogIn: I = [
  ...inputsBase,
  { name: "button",           type:"button",      initialValue: "", label: "Connexion",       contentType: "password",   validator: () => true },
]

const inputsSignIn: I = [
  { name: "name",             type:"textField",  initialValue: "", label: "Pseudonyme",      contentType: "text",       validator: () => true },
  ...inputsBase,
  { name: "confirmPassword",  type:"textField",  initialValue: "", label: "Confirmation",    contentType: "password",   validator: () => true },
  { name: "button",           type:"button",      initialValue: "", label: "Créer un compte",       contentType: "password",   validator: () => true },
]

export { inputsLogIn, inputsSignIn }

export type { I }
