import Head from 'next/head'
import Header from './header.jsx'
import styles from './layout.module.scss'
import Modal from './Modal'
import { useState } from 'react'

export const siteTitle = "Syndicat de l'apiculture tourangelle"



export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const [modalIsOpen, setIsOpen] = useState(false)
  const closeModal = (o) => setIsOpen(!o)
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
      <Header setIsOpen={setIsOpen} />
      <main className={styles.container}>{children}</main>
    </>
  )
}