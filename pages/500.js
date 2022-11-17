import styles from './Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
export default function Custom404() {
  function refresh(){
    window.location.reload("Refresh")
  }
    return (

        <div className={styles.container}>
      <Head>
        <title>AyakaMB</title>
        <meta name="description" content="A discord bot, made by rrryfoo#8618" />
        <meta name="theme-color" content="#5284d9" />
        <link rel="shortcut icon" href="../public/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          500 - Internal Server Error
        </h1>

        <p className={styles.description}>
          The server has encountered an error.
        </p>
        <div className={styles.grid}>
          <a onClick={refresh} className={styles.card}>
            <h2>Refresh ↻</h2>
            <p>Refreshing the page might fix this error.</p>
          </a>
        </div>
      </main>
    </div>
    )
  }