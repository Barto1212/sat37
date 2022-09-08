import Image from "next/image"
import { useState, Dispatch, SetStateAction, BaseSyntheticEvent } from "react"
import { checkEmail } from '../utils/checkForm'

type TypeInput = "password" | "email" | "text"

type Props = {
  stateForm: [object, Dispatch<SetStateAction<object>>]
  type: TypeInput,
  name: string,
  id: string
}

const Eye: (prop: {pwdVisible: boolean, setPwdVisible: Dispatch<SetStateAction<boolean>>}) => JSX.Element = ({ pwdVisible, setPwdVisible }) => {
  const handleClick = () => {
    setPwdVisible((v: boolean) => !v)
  }
  const size = 15
  const imgSrc = `/img/svg/eye${pwdVisible ? "-slash" : ""}-regular.svg`
  const imgAlt = `${pwdVisible ? "Masquer" : "Voir"} le mot de passe`
  return (
    <div className="custom-field__eye">
      <Image
        alt={imgAlt}
        onClick={handleClick}
        src={imgSrc}
        width={size}
        height={size}
      />
    </div>
  )
}

const Input: React.FC<Props> = ({stateForm, type, name, id}) => {
  const [form, setForm] = stateForm
  const [pwdVisible, setPwdVisible] = useState<boolean>(false)
  const [success, setSuccess] = useState(true)
  const value = form[id]
  const handleChange = (e: BaseSyntheticEvent) => {
    const newValue = e.target.value
    setForm((old) => ({ ...old, [id]: newValue}))
    if (id === "email") {
      setSuccess(checkEmail(newValue))
    } else {
      setSuccess(true)
    }
  }
  const newType = type === "password" ?
    (pwdVisible ? "text" : "password") : type

  return (
    <label className={`custom-field custom-field--${success ? "success" : "error"}`}>
      <input
        type={newType}
        id={id}
        value={value}
        onChange={handleChange}
        name={name}
        placeholder="&nbsp;"
      />
      <span className="placeholder">{name}</span>
      {type === "password" && <Eye pwdVisible={pwdVisible} setPwdVisible={setPwdVisible}/>}
    </label>
  )
};

export default Input;
