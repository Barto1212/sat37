import Form from './Form'
import { useState } from 'react'
import { inputsLogIn, inputsSignIn } from '../utils/models/inputs'

const ProfileManager = () => {
  const [logInMode, setLogInMode] = useState<boolean>(true)

  return (
    <>
    <div className="stack-vertical">
      <Form inputs={logInMode ? inputsLogIn : inputsSignIn} />
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