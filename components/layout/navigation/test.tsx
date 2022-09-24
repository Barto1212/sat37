import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"
import styles from "./header.module.scss"

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

const ItemAOuvrir = ({ children, item }) => {
  const [open, setOpen] = useState(false)
  return (
    <li className={open ? styles.activePage : ""}>
      <a onClick={() => setOpen(o => !o)}>{item.name}</a>
      <ul className={open ? "" : styles.hidden}>
        {children}
      </ul>
    </li>
  )
}

const List = ({ array }) => {
  return (
    <ul>
      {array.map(item => {
        if (typeof item.link === "object") {
          return (
            <ItemAOuvrir key={item.name} item={item}>
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