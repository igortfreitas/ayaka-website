import styles from "./Bug.module.css";
import { useState } from "react";
import axios from "axios";
import Head from 'next/head';

export default function ContactForm() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");

  const [image, setImage] = useState("");
  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }
  const handleImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    // check if image exeed 1mb
    if (base64.length > 950000) {
      alert("Image size must be less than 1 megabyte.");
      e.target.value = "";
      return;
    }
    setImage(base64);
  };

  function sendMessage() {
    axios
      .post("/api/bug", params)
      .then(() => alert("Bug report sent."))
      .catch((err) =>
        alert(
          "An error occured while trying to send the bug report. Try submitting it again.\nError: " + err
        )
      );
  }
  function confirmSend(e) {
    e.preventDefault();
    let confirmed = confirm("Are you sure you would like to send?");
    if (confirmed == true) {
      sendMessage();
    }
    if (confirmed == false) {
      alert("Canceled bug submit.");
    }
  }

  const params = {
    title: title,
    email: email,
    message: message,
    attachment: image,
  };

  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>AyakaMB - Bug Report</title>
        <meta name="description" content="Report bugs here. Can be about this website or about the bot. You can also send random stuff here..." />
        <meta name="theme-color" content="#5284d9" />
        <link rel="shortcut icon" href="../public/favicon.ico" />
      </Head>
    <div className={styles.main}>
      <form id="forms" onSubmit={confirmSend}>
        <label htmlFor="email" className={styles.typeOfInfo} type="email">
          Email Address
        </label>
        <br />
        <input
          id="email"
          type="email"
          name="email"
          className={styles.bugEmailField}
          required
          placeholder="Your email, so that you can give more information about the bug/so that we can reach out to you."
          onChange={(e) => setEmail(e.target.value)}
        />
        <p></p>
        <label htmlFor="title" className={styles.typeOfInfo}>
          Bug title
        </label>
        <br />
        <input
          id="title"
          name="title"
          className={styles.bugTitleField}
          placeholder="Title of the bug. This is required."
          onChange={(e) => setTitle(e.target.value)}
        />
        <p></p>
        <label htmlFor="text" className={styles.typeOfInfo}>
          Bug description
        </label>
        <br />
        <textarea
          id="message"
          name="message"
          className={styles.bugDescriptionField}
          required
          placeholder="Description of the bug. This is where you explain the bug."
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <br />
        <input
          type="file"
          name="image"
          id="image"
          accept="image/png, image/jpeg"
          className={styles.bugImageField}
          onChange={handleImage}
        />
        <p />
        <button type="submit" className={styles.buttonSubmit}>
          Submit bug &rarr;
        </button>
      </form>
    </div>
    </div>
  </>
  );
}
