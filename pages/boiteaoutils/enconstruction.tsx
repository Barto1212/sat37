import Layout from '../../components/layout/layout'
import ExportedImage from 'next-image-export-optimizer'
export default function Adhesion() {
  return (
    <Layout>
      <h1>Cette page est en construction</h1>
      <ExportedImage
        src="/img/construction-rayon-cire.jpg"
        alt="contruction rayon de cire"
        width={768}
        height={512}
        layout="responsive"
      />
    </Layout>
  )
}
