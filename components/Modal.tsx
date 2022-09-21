import Image from "next/image"
import { MouseEventHandler, useState } from 'react'
import ProfileManager from './ProfileManager'
import { useSnackbar } from 'notistack'


type Props = {
  open: boolean,
  onClose: MouseEventHandler<HTMLDivElement>
}

const Modal:React.FC<Props> = ({ open, onClose }) => {
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
            <ProfileManager />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal