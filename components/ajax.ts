import type { inputForm } from "../utils/models/inputForm"
// const [protocol, adress, port] = document.location.origin.split(':')
// const url = `${protocol}:${adress}`

async function signIn (form: inputForm) {
  return await window.fetch(
    "http://localhost:3000/api/signin",
    {
      method: 'POST',
      body: JSON.stringify(form),
    }
  )
}

const logIn = (form: inputForm) => {
  console.log('logIn', form)
}

export { signIn, logIn }