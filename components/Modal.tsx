import Image from "next/image"
import { MouseEventHandler } from 'react'
import ProfileManager from './ProfileManager'


type Props = {
  open: boolean,
  onClose: MouseEventHandler<HTMLDivElement>
}

const Modal:React.FC<Props> = ({ open, onClose }) => (
  <div onClick={onClose} className={`overlay${open ? " overlay--visible" : " overlay--hidden"}`}>
    <div
      className={`modal${open ? " modal--visible" : " modal--hidden"}`}
      onClick={e => e.stopPropagation()}
    >
      <Image
          src="/img/abeille-chardon-3850-3450.jpg"
          alt='Abeille sur un chardon'
          width={3850*0.18}
          height={3450*0.18}
        />
      <div className='modal__content'>
        <span className='close-btn close-btn--dark' onClick={onClose}>
          x
        </span>
          <ProfileManager />
      </div>
    </div>
  </div>
)
export default Modal