import Head from 'next/head'
import Image from 'next/image'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="A discord bot, made by rrryfoo#8618" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Thank you for inviting the bot!
        </h1>

        <p className={styles.description}>
        You may now close this page.
        </p>
        <div className={styles.grid}>
          <a href="./acm" className={styles.card}>
            <h2>Command list &rarr;</h2>
            <p>List of commands for AyakaMB</p>
          </a>
        </div>
      </main>
    </div>
  )
}
