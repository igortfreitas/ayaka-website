import Head from 'next/head'
import Image from 'next/image'
import styles from './Home.module.css'
import Markdoc from '@markdoc/markdoc'; 

export default function Home() {
  
  return (
    
    <div className={styles.container}>
      <Head>
        <title>AyakaMB DIscord Bot</title>
        <meta name="description" content="A discord bot, made by rrryfoo#8618" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          All commands
        </h1>
      <p className={styles.description}>
        commands for the Ayaka bot
      </p>
      <div className={styles.acommand}>
        <p className={styles.commandName}>/help</p>
        <p className={styles.commandDescription}>
          Sends all bot commands.
        </p>
        <p className={styles.commandUsage}>/help</p>
        <p className={styles.commandOptionalUsage}>/help commandname: [command name]</p>
      </div>
      </main>
    </div>
  )
}
