import nft from "../public/img/abeilles-entree-1920-1080.jpg"
import Image from "next/image"
import { MouseEventHandler, useState, useEffect } from 'react'
import { LogIn, SignIn } from './ProfileManager'

type Props = {
  open: boolean,
  onClose: MouseEventHandler<HTMLDivElement>
}
const inputForm = {
  "Pseudonyme": "",
  "Adresse email": "",
  "Mot de passe": "",
  "Confirmation": "",
}

const Modal:React.FC<Props> = ({ open, onClose }) => {
  const stateForm = useState(inputForm)
  const [LogInMode, setLogInMode] = useState<boolean>(true)
  
  // Clean form on open
  const setStateForm = stateForm[1]
  useEffect(() => {
    setStateForm(inputForm)
  }, [setStateForm, open])

  return (
    <div onClick={onClose} className={`overlay${open ? " overlay--visible" : " overlay--hidden"}`}>
      <div
        className={`modalContainer${open ? " modalContainer--visible" : " modalContainer--hidden"}`}
        onClick={e => e.stopPropagation()}
      >
        <Image className="bees" src={nft} alt='/' />
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            x
          </p>
          <div className='container'>
            {LogInMode ? <LogIn stateForm={stateForm} /> : <SignIn stateForm={stateForm}/>}
          </div>
          <div className='btnContainer'>
            <button className='btn-primary'>
              <span className='bold'>Connexion</span>
            </button>
            {/* <button className='btn-secondary'>
              <span className='bold'>NO</span>
            </button> */}
          </div>
          <div className="container">
            {LogInMode ? 
              <p>Pas encore de compte ? <a href="#" onClick={() => setLogInMode(o => !o)}>Cliquez ici</a> pour en créer un. </p> :
              <p>Déjà un compte ? <a href="#" onClick={() => setLogInMode(o => !o)}>Cliquez ici</a> pour vous identifier. </p>
            }
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Modal