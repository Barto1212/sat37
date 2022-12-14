import Form from './form/Form'
import { useState } from 'react'
import { inputsLogIn, inputsSignIn } from '../utils/models/inputs'
import { signIn, logIn } from './form/ajax'

const ProfileManager = () => {
  const [logInMode, setLogInMode] = useState<boolean>(true)
  const sendForm = async (prop) => {
    const handleSend = logInMode ? logIn : signIn
    return handleSend(prop)
  }

  return (
    <>
      <Form
        inputs={logInMode ? inputsLogIn : inputsSignIn}
        sendForm={sendForm}
        submitLabel={logInMode ? "Connexion" : "Créer un compte"}
      />
    <div className="container modal__content__text--down">
      {logInMode ? 
        <p>Pas encore de compte ? <a href="#" onClick={() => setLogInMode(o => !o)}>Cliquez ici</a> pour en créer un. </p> :
        <p>Déjà un compte ? <a href="#" onClick={() => setLogInMode(o => !o)}>Cliquez ici</a> pour vous identifier. </p>
      }
    </div>
    </>
  )
}

export default ProfileManager