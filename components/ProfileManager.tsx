import Form from './Form'
import { useState } from 'react'
import { inputsLogIn, inputsSignIn } from '../utils/models/inputs'
import { useSnackbar } from 'notistack'
import { signIn, logIn } from './ajax'

const ProfileManager = () => {
  const [logInMode, setLogInMode] = useState<boolean>(true)
  const { enqueueSnackbar } = useSnackbar()
  const displaySnack = (message: string, type?: "success"|"error"): void => {
    enqueueSnackbar(message, { variant: type? type : "success" })
  }
  const sendForm = (prop) => {
    logInMode ? signIn(prop) : logIn(prop)
      .then(() => displaySnack("Votre compte vient d'être crée"))
      .catch((message: string) => displaySnack(message, "error"))
  }

  return (
    <>
    <div className="stack-vertical">
      <Form inputs={logInMode ? inputsLogIn : inputsSignIn} sendForm={sendForm} />
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