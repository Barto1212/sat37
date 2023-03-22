import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './header.module.scss'
import { structure } from './structure'

const Item = ({ item }) => {
  const router = useRouter()
  return (
    <>
      <li className={router.asPath === item.link ? styles.activePage : ''}>
        <Link href={item.link}>{item.name}</Link>
      </li>
    </>
  )
}

const ExpandableItem = ({ children, item, statesubListOpen }) => {
  const [subListOpen, setsubListOpen] = statesubListOpen
  const menuName = item.link[0].link.split('/')[1]
  const { pathname } = useRouter()
  const open = menuName === subListOpen
  const isActive = pathname.includes(menuName)
  const handleClick = () => {
    setsubListOpen(open ? '' : menuName)
  }
  return (
    <li className={isActive ? styles.activePage : ''}>
      <a onClick={handleClick}>{item.name}</a>
      <ul className={open ? '' : styles.hidden}>{children}</ul>
    </li>
  )
}

const List = () => {
  const statesubListOpen = useState('')
  return (
    <ul>
      {structure.map((item) => {
        if (typeof item.link === 'object') {
          return (
            <ExpandableItem
              statesubListOpen={statesubListOpen}
              key={item.name}
              item={item}
            >
              {item.link.map((item) => (
                <Item key={item.name} item={item} />
              ))}
            </ExpandableItem>
          )
        }
        return <Item key={item.name} item={item} />
      })}
    </ul>
  )
}

export default List
