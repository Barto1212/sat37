import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"
import styles from "./header.module.scss"
import { structure } from "./structure"

const ItemSimple = ({ item }) => {
  const router = useRouter()
  return (
    <li className={router.asPath === item.link ? styles.activePage : ""}>
      <Link href={item.link}>
        <a>{item.name}</a>
      </Link>
    </li>
  )
}

const ItemAOuvrir = ({ children, item, statesubListOpen }) => {
  const [subListOpen, setsubListOpen] = statesubListOpen
  const menuName = item.link[0].link.split("/")[1]
  const { pathname } = useRouter()
  const open = menuName === subListOpen
  const isActive = pathname.includes(menuName)
  const handleClick = () => {
    setsubListOpen(open ? "" : menuName)
  }
  return (
    <li className={isActive ? styles.activePage : ""}>
      <a onClick={handleClick}>{item.name}</a>
      <ul className={open ? "" : styles.hidden}>
        {children}
      </ul>
    </li>
  )
}

const List = () => {
  const statesubListOpen = useState("")
  return (
    <ul>
      {structure.map(item => {
        if (typeof item.link === "object") {
          return (
            <ItemAOuvrir statesubListOpen={statesubListOpen} key={item.name} item={item}>
              {item.link.map((item) => <ItemSimple key={item.name} item={item} />)}
            </ItemAOuvrir>
          )
        }
        return (<ItemSimple key={item.name} item={item} />)
      })}
    </ul>
  )
} 



export default List