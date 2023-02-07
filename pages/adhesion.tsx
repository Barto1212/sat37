import Layout from "@layout";
import Revues from "@text/cotisation/Revues";
import EcoEmballages from "@text/cotisation/EcoEmballages";
import Assurance from "@text/cotisation/Assurance";
import RucherEcole from "@text/cotisation/RucherEcole";
import Image from "next/image";

interface articleProp {
  children: JSX.Element;
  title: string | JSX.Element;
}

const ArticleLi: React.FC<articleProp> = ({ children, title }) => {
  return (
    <li className="grid__item">
      <h2 className="grid__item__title">{title}</h2>
      <div className="grid__item__body">{children}</div>
    </li>
  );
};

export default function Adhesion() {
  return (
    <Layout>
      <div className="container">
        <h1 className="title">Votre cotisation 2022</h1>
        <ul className="grid">
          <ArticleLi title="Revues">
            <Revues />
          </ArticleLi>
          <ArticleLi
            title={
              <Image
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
			<Image
				src="/img/abeilles-entree-1920-1080.jpg"
				width={800}
				height={450}
				alt="Abeilles entrée ruche"
			/> */}
    </Layout>
  );
}
