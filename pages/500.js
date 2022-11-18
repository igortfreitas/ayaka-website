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
          Go to the <Link href="./submit-bug">bug reports page if the problem persists.</Link> Or, if you can&apos;t access the bug reports page, Check the website on <a href="https://downforeveryoneorjustme.com/discord.ayakads.cf">"Down for everyone or just me"</a>
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
