import Layout from "@layout"
import Image from "next/image"
export default function Adhesion () {
	return (
		<Layout>
			<h1>Cette page est en construction</h1>
				<Image
					src="/img/construction-rayon-cire.jpg"
					alt="contruction rayon de cire"
					width={768}
					height={512}
					layout="responsive"
				/>
		</Layout>
	)
}