import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AyakaMB</title>
        <meta name="description" content="A discord bot, made by rrryfoo#8618" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          AyakaMB Discord Bot
        </h1>

        <p className={styles.description}>
        A bot made by <a href="https://discord.com/users/716491639857872928">rrryfoo#8618</a>
        </p>

        <div className={styles.grid}>
          <Link href="https://discord.com/oauth2/authorize?client_id=1024548642750726144&permissions=380104927238&redirect_uri=https%3A%2F%2Fdiscord.ayakads.cf%2Fin%2Ft&response_type=code&scope=email%20bot%20guilds%20applications.commands%20messages.read" className={styles.card}>
            <h2>Invite &rarr;</h2>
            <p>Invite the discord bot here</p>
          </Link>

          <Link href="./in/acm" className={styles.card}>
            <h2>Commands list &rarr;</h2>
            <p>A list of all commands</p>
          </Link>
        </div>
      </main>
    </div>
  )
}
