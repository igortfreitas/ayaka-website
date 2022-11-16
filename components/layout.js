import Background from './bg'
import Footer from './footer'
import Head from 'next/head'
import SetIcon from './setfavicon'
export default function Layout({ children }) {
  return (
    <>
    <Head>
      <SetIcon />
    </Head>
      <Background />
      <main>{children}</main>
      <Footer />
    </>
  )
}