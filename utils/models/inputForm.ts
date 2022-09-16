function checkEmail(input: string): boolean {
  if (!(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(input))) {
    return false
  }
  return true
}

const checkContent = (content: string): boolean => {
  if (content == "") return false
}


const inputForm = {
  "Pseudonyme": "",
  "Adresse email": "",
  "Mot de passe": "",
  "Confirmation": "",
}
type inputFormArrayType = {
  name: string,
  label: string,
  type: "password" | "email" | "text",
  signInField: boolean,
  logInField: boolean,
  checkValue: typeof checkEmail | typeof checkContent
}[]

const inputFormArray: inputFormArrayType = [
  { name: "pseudo",           label: "Pseudonyme",      type: "text",       signInField: true, logInField: false, checkValue: checkContent    },
  { name: "email",            label: "Adresse email",   type: "email",      signInField: true, logInField: true,  checkValue: checkEmail    },
  { name: "password",         label: "Mot de passe",    type: "password",   signInField: true, logInField: true,  checkValue: checkContent    },
  { name: "confirmPassword",  label: "Confirmation",    type: "password",   signInField: true, logInField: false, checkValue: checkContent    },
]

const createState = () => {
  const state = {}
  inputFormArray.forEach(field => state[field.label] = "")
  return state
}

const stateInput = createState()

export { stateInput, inputFormArray, inputForm }
