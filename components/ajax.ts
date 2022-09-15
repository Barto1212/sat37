import type { inputForm } from "../utils/models/inputForm"
// const [protocol, adress, port] = document.location.origin.split(':')
// const url = `${protocol}:${adress}`

async function signIn (form: inputForm) {
  const response = await fetch(
    "http://localhost:3000/api/signin",
    {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        'Content-type': "application/json; charset=UTF-8",
      }
    }
  )
  const responseJSON = await response.json()
  if (response.ok) return responseJSON
  // console.log(responseJSON)
  return Promise.reject(`erreur: ${responseJSON.message}`)
}

const logIn = (form: inputForm) => {
  console.log('logIn', form)
}

export { signIn, logIn }