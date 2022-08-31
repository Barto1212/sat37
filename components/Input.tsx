import Image from "next/image"
import { useState } from "react"

type TypeInput = "password" | "email"

type Props = {
  stateForm: any[]
  type: TypeInput,
  name: string,
  id: string
}

const Eye: (prop: {pwdVisible: boolean, setPwdVisible: Function}) => any = ({ pwdVisible, setPwdVisible }) => {
  const handleClick = () => {
    setPwdVisible((v: boolean) => !v)
  }
  const size = 15
  const imgSrc = pwdVisible ? "/img/svg/eye-slash-regular.svg" : "/img/svg/eye-regular.svg"
  return (
    <div className="custom-field__eye">
      <Image
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
  const [pwdVisible, setPwdVisible] = useState(false)
  const value = form[id]
  const handleChange = (e: any) => {
    const newValue = e.target.value
    setForm((old: any) => ({ ...old, [id]: newValue}))
  }
  const newType = type === "password" ?
    (pwdVisible ? "text" : "password") : type

  return (
    <label className="custom-field">
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
