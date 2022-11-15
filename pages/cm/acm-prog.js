import Head from 'next/head'
import Image from 'next/image'
import styles from './Home.module.css'
import Markdoc from '@markdoc/markdoc'; 
import Background from '../../public/Ayaka.jpg'
export default function Home() {
  
  return (
    
    <div className={styles.container}>
      <Head>
        <title>AyakaMB Discord Bot</title>
        <meta name="description" content="A discord bot, made by rrryfoo#8618" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
 

        <h1 className={styles.title}>
          All commands
        </h1>
      <p className={styles.description}>
        commands for the Ayaka bot
      </p>
      <h1 className={styles.title}>
        Utilities
      </h1>
      <div className={styles.acommand}>
        <p className={styles.commandName}>/help</p>
        <p className={styles.commandDescription}>
          Sends all bot commands.
        </p>
        <p>Usage:</p>
        <p className={styles.commandUsage}>/help</p>
        <p className={styles.commandOptionalUsage}>/help commandname: [command name]</p>
      </div>
      <div className={styles.acommand}>
        <p className={styles.commandName}>/avatar</p>
        <p className={styles.commandDescription}>
          Shows a user&apos;s avatar. (Can be yours/any specified user)
        </p>
        <p>Usage:</p>
        <p className={styles.commandUsage}>/avatar</p>
        <p className={styles.commandOptionalUsage}>/avatar user: [User ID/Tag]</p>
      </div>
      <div className={styles.acommand}>
        <p className={styles.commandName}>/ban</p>
        <p className={styles.commandDescription}>
          Bans a user.
        </p>
        <p>Usage:</p>
        <p className={styles.commandOptionalUsage}>/ban user: [User ID/Tag] reason: [reason why they got banned]</p>
      </div>
      <div className={styles.acommand}>
        <p className={styles.commandName}>/info user</p>
        <p className={styles.commandDescription}>
          Sends info about a user.
        </p>
        <p>Usage:</p>
        <p className={styles.commandUsage}>/info user</p>
        <p className={styles.commandOptionalUsage}>/info user user: [User ID/Tag]</p>
      </div>
      <div className={styles.acommand}>
        <p className={styles.commandName}>/kick</p>
        <p className={styles.commandDescription}>
          Kicks a specified user from the guild.
        </p>
        <p>Usage:</p>
        <p className={styles.commandUsage}>/kick</p>
        <p className={styles.commandOptionalUsage}>/kick user: [User ID/Tag (must be in the server)] reason: [reason of kick]</p>
      </div>
      <div className={styles.acommand}>
        <p className={styles.commandName}>/ping</p>
        <p className={styles.commandDescription}>
          Replies with the bot&apos;s latency.
        </p>
        <p>Usage:</p>
        <p className={styles.commandUsage}>/ping</p>
      </div>
      <div className={styles.acommand}>
        <p className={styles.commandName}>/unban</p>
        <p className={styles.commandDescription}>
          Unbans a user.
        </p>
        <p>Usage:</p>
        <p className={styles.commandOptionalUsage}>/unban userid: [ID of banned user to be unbanned]</p>
      </div>
      <h1 className={styles.title}>
        Fun/funny commands
      </h1>
      <div className={styles.acommand}>
        <p className={styles.commandName}>/deadchat</p>
        <p className={styles.commandDescription}>
          Dead chat fr 💀
        </p>
        <p>Usage:</p>
        <p className={styles.commandUsage}>/deadchat</p>
      </div>
      <div className={styles.acommand}>
        <p className={styles.commandName}>/how emo</p>
        <p className={styles.commandDescription}>
          you so emotional 
        </p>
        <p>Usage:</p>
        <p className={styles.commandUsage}>/how emo</p>
        <p className={styles.commandOptionalUsage}>/how emo user: [User ID/Tag]</p>
      </div>
      <div className={styles.acommand}>
        <p className={styles.commandName}>/how gay</p>
        <p className={styles.commandDescription}>
          Are you gay or not...
        </p>
        <p>Usage:</p>
        <p className={styles.commandUsage}>/how gay</p>
        <p className={styles.commandOptionalUsage}>/how gay user: [User ID/Tag]</p>
      </div>
      <div className={styles.acommand}>
        <p className={styles.commandName}>/how sus</p>
        <p className={styles.commandDescription}>
          Sussy bkaka
        </p>
        <p>Usage:</p>
        <p className={styles.commandUsage}>/how sus</p>
        <p className={styles.commandOptionalUsage}>/how sus user: [User ID/Tag]</p>
      </div>
      <div className={styles.acommand}>
        <p className={styles.commandName}>/say</p>
        <p className={styles.commandDescription}>
          Sends all bot commands.
        </p>
        <p>Usage:</p>
        <p className={styles.commandOptionalUsage}>/say text: [Text to repeat]</p>
      </div>
      <div className={styles.acommand}>
        <p className={styles.commandName}>/markcurrentinfo</p>
        <p className={styles.commandDescription}>
          Puts your avatar, current user tag, when you marked it, and where you marked it.
        </p>
        <p>Usage:</p>
        <p className={styles.commandUsage}>/markcurrentinfo</p>
        <p className={styles.commandOptionalUsage}>/markcurrentinfo user: [User ID/Tag]</p>
      </div>
      <div className={styles.acommand}>
        <p className={styles.commandName}>/getmarkedkey</p>
        <p className={styles.commandDescription}>
          Gets the mark stored in a database
        </p>
        <p>Usage:</p>
        <p className={styles.commandUsage}>/getmarkedkey</p>
        <p className={styles.commandOptionalUsage}>/getmarkedkey user: [User ID/Tag]</p>
      </div>
      <div className={styles.acommand}>
        <p className={styles.commandName}>/deletemark</p>
        <p className={styles.commandDescription}>
          Delete the mark stored in a database
        </p>
        <p>Usage:</p>
        <p className={styles.commandUsage}>/deletemark</p>
      </div>
      </main>
    </div>
  )
}
