import List from './List'
import styles from './header.module.scss'
import ExportedImage from "next-image-export-optimizer";
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState, useEffect } from 'react'

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (size.width > 1050 && openMenu) {
      setOpenMenu(false)
    }
  }, [size.width, openMenu])
  const menuToggleHandler = (e) => {
    console.dir(e.target.id.name)
    setOpenMenu((o) => !o)
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <ExportedImage
          src="/img/bee.svg"
          width={150}
          height={150}
          alt="abeille"
        />
        <nav
          className={`${styles.header__content__nav} ${
            openMenu && size.width < 1050 ? styles.isMenu : ''
          }`}
        >
          <List />
        </nav>
        <div className={styles.header__content__toggle}>
          {openMenu ? (
            <AiOutlineClose onClick={menuToggleHandler} />
          ) : (
            <BiMenuAltRight onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
