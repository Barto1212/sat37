import Layout from '@layout'
import moment from 'moment'
import { getSortedPostsData } from '../utils/posts'
moment.locale('fr')

interface Article {
  id: string
  date: string
  title: string
  content?: string
}
interface Articles {
  articles: Article[]
}

export async function getStaticProps() {
  const articles = getSortedPostsData()
  return {
    props: {
      articles,
    },
  }
}

const News: React.FC<Articles> = ({ articles }) => {
  return (
    <Layout>
      <div className="container">
        <ul className="article-list">
          {articles.map(({ id, date, title, content }) => (
            <li className="article-list__item" key={id}>
              <h2 className="article-list__item__title">{title}</h2>
              <div className="article-list__item__date">{date}</div>
              <div
                dangerouslySetInnerHTML={{
                  __html: content,
                }}
                className="article-list__item__body"
              ></div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default News
