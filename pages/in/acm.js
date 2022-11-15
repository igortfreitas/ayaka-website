import Head from 'next/head'
import Image from 'next/image'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AyakaMB DIscord Bot</title>
        <meta name="description" content="A discord bot, made by rrryfoo#8618" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This page is still in development...
        </h1>

      </main>
    </div>
  )
}
