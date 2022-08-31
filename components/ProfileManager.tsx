import Input from "./Input"

const LogIn = ({stateForm}) => {
  return (
    <div className="stack-vertical">
      <Input stateForm={stateForm} type="email" id="email" name="Adresse email" />
      <Input stateForm={stateForm} type="password" id="pwd" name="Mot de passe" />
    </div>
  )
}

const SignIn = ({stateForm}) => {
  return (
    <>
      <div className="stack-horizontal">
        <Input stateForm={stateForm} type="text" id="prenom" name="Prénom" />
        <Input stateForm={stateForm} type="text" id="nom" name="Nom" />
      </div>

      <Input stateForm={stateForm} type="email" id="email" name="Adresse email" />
      <Input stateForm={stateForm} type="password" id="pwd" name="Mot de passe" />
      <Input stateForm={stateForm} type="password" id="confirmPwd" name="Confirmez votre mot de passe" />
    </>
  )
}

export { LogIn, SignIn }