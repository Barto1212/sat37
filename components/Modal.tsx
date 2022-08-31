import nft from "../public/img/abeilles-entree-1920-1080.jpg"
import Image from "next/image"
import { MouseEventHandler, useState } from 'react'
import { LogIn, SignIn } from './ProfileManager'

type Props = {
  open: boolean,
  onClose: MouseEventHandler<HTMLDivElement>
}

const Modal:React.FC<Props> = ({ open, onClose }) => {
  const stateForm = useState({email: "", pwd: ""})
  const [LogInMode, setLogInMode] = useState(true)

  return (
    <div onClick={onClose} className={`overlay${open ? " overlay--visible" : " overlay--hidden"}`}>
      <div
        className={`modalContainer${open ? " modalContainer--visible" : " modalContainer--hidden"}`}
        onClick={e => e.stopPropagation()}
      >
        <Image className="bees" src={nft} alt='/' />
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='stack stack--vertical'>
            {LogInMode ? <LogIn stateForm={stateForm} /> : <SignIn stateForm={stateForm}/>}
          </div>
          <button onClick={() => setLogInMode(o => !o)} className='btn-primary'>
              <span className='bold'>Créer un compte</span>
            </button>
          <div className='btnContainer'>
            <button className='btn-primary'>
              <span className='bold'>Connection</span>
            </button>
            {/* <button className='btn-secondary'>
              <span className='bold'>NO</span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal