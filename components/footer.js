import styles from '../styles/Home.module.css'
import Image from 'next/image'
export default function Footer() {
 return (
  <div className={styles.footer}>
    <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
          </a>
          <a 
          href="https://discord.com/users/716491639857872928"
          target="_blank"
          rel="noopener noreferrer">
            <p>Made with ❤️ by rrryfoo#8618</p>
          </a>
  </div>
 )   
}