import styles from './Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
export default function Custom404() {
    return (

        <div className={styles.container}>
      <Head>
        <title>AyakaMB</title>
        <meta name="description" content="A discord bot, made by rrryfoo#8618" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            404 - Page not Found
        </h1>

        <p className={styles.description}>
            We could not find that page.
            Check for typos in the URL you typed in.
        </p>
        <p className={styles.et}>
            You look a little lost, Traveler..
        </p>
        <div className={styles.grid}>
          <Link href="/" className={styles.card}>
            <h2>Return to Main Page &larr;</h2>
            <p>Let&apos;s go home.</p>
          </Link>
        </div>
      </main>
    </div>
    )
  }
