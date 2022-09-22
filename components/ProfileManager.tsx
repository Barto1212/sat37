import Form from './form/Form'
import { useState } from 'react'
import { inputsLogIn, inputsSignIn } from '../utils/models/inputs'
import { useSnackbar } from 'notistack'
import { signIn, logIn } from './form/ajax'

const ProfileManager = () => {
  const [logInMode, setLogInMode] = useState<boolean>(true)
  const { enqueueSnackbar } = useSnackbar()
  const sendForm = (prop) => {
    const handleSend = logInMode ? logIn : signIn
    handleSend(prop)
      .then(() => enqueueSnackbar("Votre compte vient d'être crée", { variant: "success" }))
      .catch((message: string) => enqueueSnackbar(message, { variant: "error" }))
  }

  return (
    <>
    <div className="stack-vertical">
      <Form
        inputs={logInMode ? inputsLogIn : inputsSignIn}
        sendForm={sendForm}
        submitLabel={logInMode ? "Connexion" : "Créer un compte"}
      />
    </div>
    <div className="container modal__content__text">
      {logInMode ? 
        <p>Pas encore de compte ? <a href="#" onClick={() => setLogInMode(o => !o)}>Cliquez ici</a> pour en créer un. </p> :
        <p>Déjà un compte ? <a href="#" onClick={() => setLogInMode(o => !o)}>Cliquez ici</a> pour vous identifier. </p>
      }
    </div>
    </>
  )
}

export default ProfileManager