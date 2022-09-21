import Image from "next/image"
import { MouseEventHandler, useState } from 'react'
import ProfileManager from './ProfileManager'
// import { signIn, logIn } from './ajax'
import { useSnackbar } from 'notistack'


type Props = {
  open: boolean,
  onClose: MouseEventHandler<HTMLDivElement>
}

const Modal:React.FC<Props> = ({ open, onClose }) => {
  const [logInMode, setLogInMode] = useState<boolean>(true)
  const { enqueueSnackbar } = useSnackbar()
  
  const displaySnack = (message: string, type?: "success"|"error"): void => {
    enqueueSnackbar(message, { variant: type? type : "success" })
  }

  const send = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // signIn(form: {})
    // .then(() => displaySnack("Votre compte vient d'être crée"))
    // .catch((message: string) => displaySnack(message, "error"))
  } 

  return (
    <div onClick={onClose} className={`overlay${open ? " overlay--visible" : " overlay--hidden"}`}>
      <div
        className={`modal${open ? " modal--visible" : " modal--hidden"}`}
        onClick={e => e.stopPropagation()}
      >

        <Image
            src="/img/abeille-chardon-3850-3450.jpg"
            alt='Abeille sur un chardon'
            width={3850*0.15}
            height={3450*0.15}
          />
        <div className='modal__content'>
          <span className='close-btn close-btn--dark' onClick={onClose}>
            x
          </span>
          <div className='container'>
            <ProfileManager logInMode={logInMode} />
          </div>
          <div className='btnContainer'>
            <button className='btn-primary' onClick={send} >
              <span className='bold'>{logInMode ? "Connexion" : "Inscription"}</span>
            </button>
          </div>
          <div className="container modal__content__text">
            {logInMode ? 
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