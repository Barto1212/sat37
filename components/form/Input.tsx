import Image from "next/image"
import React, { useState, Dispatch, SetStateAction } from "react"

type TypeInput = "password" | "email" | "text"

type Props = {
  value: string,
  handleChange: (e: React.BaseSyntheticEvent) => void
  type: TypeInput,
  label: string,
  name: string,
  valid?: boolean,
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

const Input: React.FC<Props> = ({ value, handleChange, type, name, label, valid = true }) => {
  const [pwdVisible, setPwdVisible] = useState<boolean>(false)

  const newType = type === "password" ?
  (pwdVisible ? "text" : "password") : type

  return (
    <label className={`custom-field custom-field--${(valid) ? "success" : "error"}`}>
      <input
        type={newType}
        id={name}
        value={value}
        onChange={handleChange}
        name={name}
        placeholder="&nbsp;"
      />
      <span className="placeholder">{label}</span>
      {type === "password" && <Eye pwdVisible={pwdVisible} setPwdVisible={setPwdVisible}/>}
    </label>
  )
};

export default Input;
