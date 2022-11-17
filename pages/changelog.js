import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
import Link from 'next/link'
import Background from '../public/Ayaka.jpg'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AyakaMB</title>
        <meta name="description" content="A discord bot, made by rrryfoo#8618" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#5284d9" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          AyakaMB Changelog
        </h1>

        <p className={styles.description}>
          Update command replies -
        </p>
        <p className={styles.description}>
           Change error reply, and change listall option reply (in /httpcat command)
        </p>
        <div className={styles.grid}>
          <Link href="/" className={styles.card}>
            <h2>Return to Main Page &larr;</h2>
            <p>Go back home</p>
          </Link>
        </div>
      </main>
    </div>
  )
}
