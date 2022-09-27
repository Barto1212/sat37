import Layout from "../../components/layout/layout"
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
export default function Adhesion () {
	return (
		<Layout>
			<Worker workerUrl={"https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js"}>
				<Viewer fileUrl="/pdf/plantes-attractives-abeilles.pdf" />
			</Worker>
		</Layout>
	)
}