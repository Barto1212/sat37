import Head from 'next/head'
import Header from './navigation/header'
import Modal from '../Modal'
import { useState } from 'react'
import Footer from './footer'

export const siteTitle = "L'apiculture tourangelle"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const closeModal = (o) => setModalIsOpen(!o)
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{siteTitle}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Promouvoir l'apiculture en Touraine"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Modal open={modalIsOpen} onClose={closeModal} />
      <Header setModalIsOpen={setModalIsOpen} />
      <main className="content">{children}</main>
      <Footer />
    </>
  )
}