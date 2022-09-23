import Link from "next/link"

const ItemSimple = ({ item }) => {
  return (
    <li>
      <Link href={item.link}>
        <a>{item.name}</a>
      </Link>
    </li>
  )
}

const ItemAOuvrir = ({ children, item }) => {
  return (
    <li>
      <a>{item.name}</a>
      <ul>
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