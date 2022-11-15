import Head from 'next/head'
import Image from 'next/image'
import styles from './Home.module.css'
import Link from 'next/link'
export default function Custom404() {
  return (
    <div className={styles.container}>
      <Head>
        <title>404 - Page not found</title>
        <meta name="description" content="A discord bot, made by rrryfoo#8618" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            404
        </h1>

        <p className={styles.description}>
        We could not find that page. Check the URL for typos.
        </p>
        <div className={styles.grid}>
          <Link href="/index" className={styles.card}>
            <h2>Return to Main Page &rarr;</h2>
            <p>Go back home</p>
          </Link>
        </div>
      </main>
    </div>
  )
}
