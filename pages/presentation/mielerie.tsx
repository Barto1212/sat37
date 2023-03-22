import Layout from '@layout'
import ExportedImage from 'next-image-export-optimizer'
export default function Adhesion() {
  return (
    <Layout>
      <div className="container">
        <h1>Miellerie</h1>
        <p>
          Notre miellerie est installée dans les locaux de la Maison de la
          Nature sur la commune de Veigné.
        </p>
        <p>
          Cette miellerie collective permet à tous les apiculteurs du
          département de venir extraire leur récolte de miel dans de bonnes
          conditions d'hygiène, moyennant une petite contribution sur la
          quantité récultée afin de subvenir à l'entretien du matériel .
        </p>
        <p>
          Pour profiter pleinement de cette installation (chambre chaude,
          extracteurs manuels et electriques ...) et afin de planifier la mise à
          votre disposition de tout le matériel nécessaire,{' '}
          <strong>vous devez contacter la responsable</strong> de la miellerie;
          <br />
          Elle vous indiquera les crénaux disponibles et reservera celui qui
          vous convient.
        </p>
        <div className="container">
          <div className="stack-horizontal">
            <div className="stack-vertical">
              <ExportedImage
                src="/img/corbeelsAnnickMiellerie.png"
                alt="Annick Corbeels"
                width={190}
                height={300}
              />
              <div>
                <h4>Responsable miellerie</h4>
                <h4>Annick Corbeels</h4>
                <h4>06 82 73 69 98</h4>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2707.032843060559!2d0.7410469!3d47.274612499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fcdbe1d5abd6bd%3A0x10d6a3ad7c51ad1a!2sMaison%20de%20la%20nature!5e0!3m2!1sfr!2sfr!4v1664199198464!5m2!1sfr!2sfr"
              width="800"
              height="600"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
