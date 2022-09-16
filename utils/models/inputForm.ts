function checkEmail(input: string): boolean {
  if (!(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(input))) {
    return false
  }
  return true
}

const checkContent = (content: string): boolean => {
  if (content == "") return false
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
  { name: "name",             label: "Pseudonyme",      type: "text",       signInField: true, logInField: false, checkValue: checkContent    },
  { name: "email",            label: "Adresse email",   type: "email",      signInField: true, logInField: true,  checkValue: checkEmail    },
  { name: "password",         label: "Mot de passe",    type: "password",   signInField: true, logInField: true,  checkValue: checkContent    },
  { name: "confirmPassword",  label: "Confirmation",    type: "password",   signInField: true, logInField: false, checkValue: checkContent    },
]

const createState = () => {
  const state = {}
  inputFormArray.forEach(field => state[field.name] = "")
  return state
}

const stateInput = createState()

const checkAllForm = (form: typeof stateInput) => {
  for (const name in form) {
    const fieldNumber = inputFormArray.findIndex(field => field.name === name)
    if (fieldNumber === -1) throw new Error(`Le champ ${name} est introuvable`)
    const controlFunc = inputFormArray[fieldNumber].checkValue
    if (!controlFunc(form[name])) {
      const nameField = inputFormArray[fieldNumber].label.toLowerCase()
      return {
        message: `Le champ ${nameField} est faux`,
        testOk: false
      }
}
  }
  return { testOk: true }
}

const getName = (label) => {
  const index = inputFormArray.findIndex((field) => field.label === label)
  if (index === -1) throw new Error(`Le champ avec l'étiquette ${label} n'existe pas`)
  return stateInput[inputFormArray[index].name]
}

const getLabel = (name) => {
  const index = inputFormArray.findIndex((field) => field.name === name)
  if (index === -1) throw new Error(`Le champ avec l'étiquette ${name} n'existe pas`)
  return inputFormArray[index].label
}

export { stateInput, inputFormArray, checkEmail, checkAllForm, getName, getLabel }
