import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Development Build Tester</title>
        <meta name="description" content="A discord bot, made by rrryfoo#8618" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            nav
        </h1>
        <p className={styles.description}>
            <Link href="../in/t">pages/in/t.js </Link>
            <Link href="../in/acm">pages/in/acm.js </Link>
            <Link href="../404">pages/404.js </Link>
            <Link href="/">pages/index.js </Link>
            <Link href="../changelog">pages/changelog.js </Link>
            <Link href="../commands/">pages/commands/index.js </Link>
        </p>

      </main>
    </div>
  )
}
