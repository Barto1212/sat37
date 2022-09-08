import Input from "./Input"

const LogIn = ({stateForm}) => (
  <div className="stack-vertical">
    <Input stateForm={stateForm} type="email" id="email" name="Adresse email" />
    <Input stateForm={stateForm} type="password" id="pwd" name="Mot de passe" />
  </div>
)

const SignIn = ({stateForm}) => (
  <>
    <div className="stack-horizontal">
      <Input stateForm={stateForm} type="text" id="pseudo" name="Pseudonyme" />
      <Input stateForm={stateForm} type="email" id="email" name="Adresse email" />
    </div>
    <div className="stack-horizontal">
      <Input stateForm={stateForm} type="password" id="pwd" name="Mot de passe" />
      <Input stateForm={stateForm} type="password" id="confirmPwd" name="Confirmation" />
    </div>
  </>
)

export { LogIn, SignIn }