import Head from 'next/head'
import Header from './navigation/header'
import { useState } from 'react'
import Footer from './footer'

export const siteTitle = "L'apiculture tourangelle"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
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
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </>
  )
}