import styles from './header.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router'

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from 'react';

const itemsList = [
  { name: "Actualités", link: "/" },
  { name: "Info", link: [
    { name: "Fiscalité", link: "info/fiscalite" },
    { name: "Mielerie", link: "info/mielerie" },
    { name: "Rucher école", link: "info/rucherecole" },
  ]
  },
  { name: "Présentation", link: "/presentation" },
  { name: "Adhésion", link: "/adhesion" },
  // {name: "Fiscalité", link: "/fiscalite"},
  // {name: "Mielerie", link: "/mielerie"},
]

const Item = ({ item, menuToggleHandler, subListVisible }) => {
 
  
  return (
    <li className={liClassName}>
      <Link href={item.link}>
        <a className={styles.link} onClick={menuToggleHandler}>{item.name}</a>
      </Link>
    </li>
  )
}

const Header = ({ setModalIsOpen }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const router = useRouter()

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
          <ul className={styles.list}>
            {itemsList.map(item => {
              const subListVisible = true
              const isSubMenu = typeof item.link === "object"
              const liClassName = router.asPath === item.link ? styles.activePage : styles.item
              if (isSubMenu) {
                return (
                  <li key={item.name} className={liClassName}>
                    <a className={styles.link} id={item} onClick={menuToggleHandler}>{item.name}</a>
                    <ul className={subListVisible? styles.subList : styles.subList_hidden}>
                      {item.link.map(item => {
                        return (
                          <li key={item.name} className={liClassName}>
                            <Link href={item.link}>
                              <a className={styles.link} onClick={menuToggleHandler}>{item.name}</a>
                            </Link>
                          </li>
                        )
                        }
                      )}
                    </ul>
                  </li>
                )
              }
              return (
                <li key={item.name} className={liClassName}>
                  <Link href={item.link}>
                    <a className={styles.link} onClick={menuToggleHandler}>{item.name}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
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