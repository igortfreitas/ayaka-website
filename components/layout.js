import Background from './bg'
import Footer from './footer'
import Head from 'next/head'
export default function Layout({ children }) {
  return (
    <>
    <Head>
    <link rel="shortcut icon" href="./favicon.ico" />
    </Head>
      <Background />
      <main>{children}</main>
      <Footer />
    </>
  )
}