import type { inputForm } from './models/inputForm'

function checkEmail(input: string): boolean {
  if (!(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(input))) {
    return false
  }
  return true
}

const checkContent = (content: string): boolean => {
  if (content == "") return false
}

const checkForm = (inputForm: inputForm): object => {
  let message = "Ok"
  if (!checkEmail(inputForm["Adresse email"])) message = "adresse e-mail non valide"
  if (!checkContent(inputForm["Pseudonyme"])) message = "adresse e-mail non valide"
  if (!checkContent(inputForm["Mot de passe"])) message = "adresse e-mail non valide"
  if (inputForm["Mot de passe"] !== inputForm["Confirmation"]) message = "adresse e-mail non valide"
  if (message === "Ok") {
    return { message, value: true }
  }
  return { message, value: false }
}

export { checkEmail, checkForm }