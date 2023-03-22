import Layout from '@layout'
import ExportedImage from 'next-image-export-optimizer'
export default function RucherEcole() {
  return (
    <Layout>
      <div className="container">
        <h1>Rucher école</h1>
        <div className="photo photo--left">
          <ExportedImage
            src="/img/rucher-ecole/cours.jpg"
            alt="Rucher école"
            width={1063 * 0.7}
            height={797 * 0.7}
          />
        </div>
        <p>
          Bonjour à tous les futurs apiculteurs,
          <br />
          Bienvenue à l'Apiculture Tourangelle, syndicat qui a fété ses 50 ans
          d’existence.
        </p>
        <p>
          Vous avez choisi de vous lancer dans l'apiculture, de loisirs ou
          peut-être d'en faire votre métier. Nous sommes là, avec une équipe
          d'animateurs volontaires et dynamiques pour vous transmettre les bases
          et méthodes indispensables pour pratiquer l'apiculture.
        </p>
        <p>
          Nous disposons de locaux sur la commune de VEIGNE pour la théorie,
          ainsi que de deux ruchers à proximité pour la pratique. Nous avons
          également sur la commune de SORIGNY distante d' environ 4 km, un
          rucher plutôt basé sur la production de miel.
        </p>
        {/* <div className="photo photo--right">
				<ExportedImage
					src='/img/rucher-ecole/ouverture-ruche.jpg'
					alt="Ouverture d'une ruche"
					width={425}
					height={331}        
				/>
			</div> */}
        <div className="photo photo--right">
          <ExportedImage
            src="/img/rucher-ecole/marquage-des-reines.jpg"
            alt="Marquage des reines"
            width={768 * 0.5}
            height={1024 * 0.5}
          />
        </div>
        <p>
          Un rucher relais est mis à votre disposition, le temps pour vous de
          trouver un emplacement vous permettant d'avoir une ruche tout de suite
          et de mettre en application les gestes que vous aurez appris.
        </p>
        <p>
          La seule miellerie collective permettant à tous les apiculteurs du
          département de venir extraire leur récolte dans de bonne conditions
          d’hygiène, moyennant une petite contribution sur la quantité de miel
          récolté pour subvenir à l'entretien du matériel est contiguë à nos
          locaux.
        </p>
        <p>
          Nous avons aussi la chance , grâce à un partenariat avec une
          entreprise de NOTRE DAME D'OE, d'avoir une ruche instrumentalisée sur
          leur site, qui permet de suivre tous les paramètres nécessaire au
          suivi de l’évolution de la ruche(température, poids, humidité ainsi
          que la pluviométrie) que vous pourrez interroger de chez vous via le
          site internet du syndicat.
        </p>
        <p>
          Nous limitons les inscriptions à 16 personnes pour garantir dignement
          une qualité de cours. Vous vous sentez motivés? C'est le moment de
          nous rejoindre, nous vous attendons!!!!
        </p>
      </div>
    </Layout>
  )
}
