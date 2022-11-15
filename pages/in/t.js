import Head from 'next/head'
import Image from 'next/image'
import styles from '/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AyakaMB</title>
        <meta name="description" content="A discord bot, made by rrryfoo#8618" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Thank you for inviting the bot!
        </h1>

        <p className={styles.description}>
        You may now close this page.
        </p>
        <div className={styles.grid}>
          <Link href="./acm" className={styles.card}>
            <h2>Command list &rarr;</h2>
            <p>List of commands for AyakaMB</p>
          </Link>
          <Link href="/" className={styles.card}>
            <h2>Return to Main Page &rarr;</h2>
            <p>Go back home</p>
        </div>
      </main>
    </div>
  )
}
