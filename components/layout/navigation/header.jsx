import List from './List'
import styles from './header.module.scss'
import Image from 'next/image';
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from 'react';

const itemsList = [
  { name: "Actualités", link: "/" },
  { name: "Info", link: [
      { name: "Fiscalité", link: "info/fiscalite" },
      { name: "Rucher école", link: "info/rucherecole" },
      { name: "Mielerie", link: "info/mielerie" },
    ]
  },
  { name: "Info 2", link: [
    { name: "Fiscalité", link: "info2/fiscalite" },
    { name: "Rucher école", link: "info2/rucherecole" },
    { name: "Mielerie", link: "info2/mielerie" },
  ]
},
  { name: "Présentation", link: "/presentation" },
  { name: "Adhésion", link: "/adhesion" },
  // {name: "Fiscalité", link: "/fiscalite"},
  // {name: "Mielerie", link: "/mielerie"},
]

const Header = ({ setModalIsOpen }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const [size, setSize] = useState({
    width: undefined,
    height: undefined
  })
  const handleUserClick = () => {
    setModalIsOpen(o => !o)
    setOpenMenu(o => !o)
  }
  useEffect(() => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
  }, []);
  
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    };
  }, []);

  useEffect(() => {
    if (size.width > 1050 && openMenu) {
      setOpenMenu(false)
    }
  }, [size.width, openMenu])
  const menuToggleHandler = (e) => {
    console.dir(e.target.id.name);
    setOpenMenu(o => !o)
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Image
          src="/img/bee.svg"
          width={150}
          height={150}
          alt="abeille"
        />
        <nav
        className={`${styles.header__content__nav} ${
          openMenu && size.width < 1050 ? styles.isMenu : ""
        }`}
        >
          <List array={itemsList} />
          <button className='btn-svg' onClick={handleUserClick}>
            <Image alt="user" src="/img/svg/user-regular.svg" width={25} height={25} />  
          </button>
        </nav>
        <div className={styles.header__content__toggle}>
          {openMenu ? <AiOutlineClose onClick={menuToggleHandler} /> : <BiMenuAltRight onClick={menuToggleHandler} />}
        </div>
      </div>
    </header>
  )
}

export default Header