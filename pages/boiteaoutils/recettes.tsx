import Layout from "../../components/layout/layout";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
export default function Recettes() {
  return (
    <Layout>
      <Worker
        workerUrl={
          "https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js"
        }
      >
        <Viewer fileUrl="/pdf/pain-epices-eva.pdf" />
      </Worker>
    </Layout>
  );
}
