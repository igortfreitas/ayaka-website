import Background from './bg'
import Footer from './footer'
export default function Layout({ children }) {
  return (
    <>
      <Background />
      <main>{children}</main>
      <Footer />
    </>
  )
}