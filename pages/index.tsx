import Layout from '../components/layout'
import moment from 'moment'
import { getSortedPostsData } from '../utils/posts';
moment.locale('fr')

interface Article {
  id: string;
  date: string;
  title: string;
  content?: string
}
interface Articles {
  articles: Article[]
}

export async function getStaticProps() {
  const articles = getSortedPostsData();
  return {
    props: {
      articles,
    },
  };
}



const News: React.FC<Articles> = ({ articles }) => {
  return (
    <Layout>
      <section>
        <ul className="grid">
          {articles.map(({ id, date, title, content }) => (
            <li className="grid__item" key={id}>
              <h2 className="grid__item__title">
                {title}
              </h2>
              <div className="grid__item__date">
                {date}
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: content
                }}
                className="grid__item__body">
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default News
