import type { inputForm } from "../utils/models/inputForm"
// const [protocol, adress, port] = document.location.origin.split(':')
// const url = `${protocol}:${adress}`

const signIn = (form: inputForm) => {
  console.log(form)
  fetch(
    "http://localhost:3000/api/signin",
    {
      method: 'POST',
      body: JSON.stringify(form),
    }
    )
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

const logIn = (form: inputForm) => {
  console.log('logIn', form)
}

export { signIn, logIn }