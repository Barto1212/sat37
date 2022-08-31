import nft from "../public/img/abeilles-entree-1920-1080.jpg"
import Image from "next/image"
import Input from './Input'
import { MouseEventHandler, useState } from 'react'

type Props = {
  open: boolean,
  onClose: MouseEventHandler<HTMLDivElement>
}

const Modal:React.FC<Props> = ({ open, onClose }) => {
  const stateFrom = useState({email: "", pwd: ""})

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
          <div className='content'>
            <Input stateForm={stateFrom} type="email" id="email" name="Adresse email" />
            <Input stateForm={stateFrom} type="password" id="pwd" name="Mot de passe" />
          </div>
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