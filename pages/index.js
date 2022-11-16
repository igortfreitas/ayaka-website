import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Background from '../public/Ayaka.jpg'
import { motion } from "framer-motion"
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
          AyakaMB/MB
        </h1>

        <p className={styles.description}>
          A bot based on miHoYo/HoYoverse&apos;s Genshin Impact character &apos;Kamisato Ayaka&apos;.
        </p>
        <p className={styles.description}>(actually had no name before...)</p>
        <div className={styles.grid}>
          <Link href="https://discord.com/oauth2/authorize?client_id=1024548642750726144&permissions=380104927238&redirect_uri=https%3A%2F%2Fdiscord.ayakads.cf%2Fin%2Ft&response_type=code&scope=email%20bot%20guilds%20applications.commands%20messages.read" className={styles.card}>
          <div className={styles.cardText}> 
            <h2>Invite &rarr;</h2>
            <p>Invite the discord bot here</p>
          </div>
          </Link>

          <Link href="../commands" className={styles.card}>
           <div className={styles.cardText}> 
            <h2>Commands list &rarr;</h2>
            <p>A list of all commands</p>
           </div>
          </Link>
        </div>
      </main>
    </div>
  )
}
