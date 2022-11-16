import Background from './bg'
import Footer from './footer'
import Head from 'next/head'
import SetIcon from './setfavicon'
export default function Layout({ children }) {
  return (
    <>
    <Head>
    <link rel="shortcut icon" href="../public/favicon.ico" />
    </Head>
      <Background />
      <main>{children}</main>
      <Footer />
    </>
  )
}