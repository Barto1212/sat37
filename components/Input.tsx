type Props = {
  value: string,
  onChange: ChangeEventHandler,
  type: string
}

const Input: React.FC<Props> = ({value, onChange, type}) => {
  return (
    <label className="custom-field">
      <input type={type}  value={value} onChange={onChange} placeholder="&nbsp;"/>
      <span className="placeholder">Adresse email</span>
    </label>
  )
};

export default Input;
