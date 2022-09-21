import Form from './Form'
import { inputsLogIn, inputsSignIn } from '../utils/models/inputs'

const ProfileManager = ({ logInMode }) => {
  return (
    <div className="stack-vertical">
      <Form inputs={logInMode ? inputsLogIn : inputsSignIn} />
    </div>
  )
}

export default ProfileManager