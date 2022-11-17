import Link from 'next/link'
import { useForm, ValidationError } from "@formspree/react";
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import styles from './Bug.module.css'
import { useState } from "react"
import axios from 'axios'

export default function ContactForm() {
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [state, handleSubmit] = useForm("forms");
      const reqwebhook = "https://ptb.discord.com/api/webhooks/1042678742960582696/sdkHjmH99z7GgQ5ScgjKewrUMPnxPUHDRXzK2MMrJcfuJomST_wqu7KY3bSaqQ-2kDqo"
      function sendMessage() {
        const reqwebhook = "https://ptb.discord.com/api/webhooks/1042678742960582696/sdkHjmH99z7GgQ5ScgjKewrUMPnxPUHDRXzK2MMrJcfuJomST_wqu7KY3bSaqQ-2kDqo"
axios.post(reqwebhook, params).then(() => alert("Bug report sent.")).catch((err) => alert("An error occured while trying to send the bug report. Try submitting it again.")
)
    }
    function confirmSend(e) {
        e.preventDefault()
            let confirmed = confirm('Are you sure you would like to send?')
            if (confirmed == true) {
                sendMessage()
            }
            if (confirmed == false) {
              alert('Canceled bug submit.')
            }
          }
        const params = {
            username: "Ayaka - Bug submits",
            avatar_url: "https://discord.ayakads.cf/Ayaka.jpg",
            content: 'Message was sent\nSent at: <t:' + Date.now().toString().slice(0, -3) + ':R>\n\n\n**Title of bug**\n' + title + '\n**Bug description/message**\n' + message + '\n**Bug sender email**\n' + email + image
        }
    return (
        <>

        <form id="forms">
      <label htmlFor="email" className={styles.typeOfInfo} type="email">Email Address</label><p></p>
      <input id="email" type="email" name="email" className={styles.bugEmailField} required="required" pattern="(?![^@]{65})[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*" placeholder="Your email, so that you can give more information about the bug." onChange={((e) => setEmail(e.target.value))}/>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
        <p></p>
        <label htmlFor="title" className={styles.typeOfInfo}>Bug title</label>
        <p></p><textarea id="title" name="title" className={styles.bugTitleField} placeholder="Title of the bug. This is optional, and you can skip to the description." onChange={((e) => setTitle(e.target.value))}/>
        <p></p>
        <label htmlFor="text" className={styles.typeOfInfo}>Bug description</label>
        <p></p><textarea id="message" name="message" className={styles.bugDescriptionField} required placeholder="Description of the bug. This is where you explain the bug." onChange={((e) => setMessage(e.target.value))}></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
     
      <ValidationError errors={state.errors} />
      <button type="submit" onClick={confirmSend} className={styles.buttonSubmit}>
        Submit bug &rarr;
      </button>
    </form>
   </>
    );
  }