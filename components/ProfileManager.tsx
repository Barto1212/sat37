import Input from "./Input"

const LogIn = ({stateForm}) => (
  <div className="stack-vertical">
    <Input stateForm={stateForm} type="email" name="Adresse email" />
    <Input stateForm={stateForm} type="password" name="Mot de passe" />
  </div>
)

const SignIn = ({stateForm}) => {
  const valid = stateForm[0]["Mot de passe"] === stateForm[0]["Confirmation"]
  return (
    <>
      <div className="stack-horizontal">
        <Input stateForm={stateForm} type="text" name="Pseudonyme" />
        <Input stateForm={stateForm} type="email" name="Adresse email" />
      </div>
      <div className="stack-horizontal">
        <Input stateForm={stateForm} type="password" name="Mot de passe" />
        <Input stateForm={stateForm} valid={valid} type="password" name="Confirmation" />
      </div>
    </>
  )
}

export { LogIn, SignIn }