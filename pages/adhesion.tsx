import Layout from '@layout'
import Revues from '@text/cotisation/Revues'
import EcoEmballages from '@text/cotisation/EcoEmballages'
import Assurance from '@text/cotisation/Assurance'
import RucherEcole from '@text/cotisation/RucherEcole'
import ExportedImage from 'next-image-export-optimizer'

interface articleProp {
  children: JSX.Element
  title: string | JSX.Element
  subtitle?: string | JSX.Element
}

const ArticleLi: React.FC<articleProp> = ({ children, title, subtitle }) => {
  return (
    <li className="article-list__item">
      <h2 className="article-list__item__title">{title}</h2>
      {subtitle && (
        <div className="article-list__item__subtitle">{subtitle}</div>
      )}
      <div className="article-list__item__body">{children}</div>
    </li>
  )
}

export default function Adhesion() {
  return (
    <Layout>
      <div className="container">
        <h1 className="title">Cotisation base 2023: 25€</h1>
        <ul className="article-list">
          <ArticleLi title="Revues">
            <Revues />
          </ArticleLi>
          <ArticleLi
            title={
              <ExportedImage
                src="/img/eco-emballages.png"
                alt="Eco emballages"
                width={200}
                height={50}
              />
            }
          >
            <EcoEmballages />
          </ArticleLi>
          <ArticleLi title="Rucher école">
            <RucherEcole />
          </ArticleLi>
          <ArticleLi title="Assurance">
            <Assurance />
          </ArticleLi>
        </ul>
      </div>
      {/* 			
			<ExportedImage
				src="/img/abeilles-entree-1920-1080.jpg"
				width={800}
				height={450}
				alt="Abeilles entrée ruche"
			/> */}
    </Layout>
  )
}
