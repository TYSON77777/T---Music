import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.container}>
      {/* Left Section with Contact Form */}
      <div className={styles.leftSection}>
        <div className={styles.form}>
          <h1 className={styles.formDetails}>Contact Us</h1>
          <form className={styles.contactForm} action="/submit" method="POST">
            <label htmlFor="name">
              Name:
              <input id="name" type="text" name="name" className={styles.input} required placeholder="Enter your name" />
            </label>
            <label htmlFor="email">
              Email:
              <input id="email" type="email" name="email" className={styles.input} required placeholder="Enter your email" />
            </label>
            <label htmlFor="message">
              Message:
              <textarea id="message" name="message" rows="4" className={styles.input} required placeholder="Enter your message"></textarea>
            </label>
            <button type="submit" className={`${styles.button} ${styles.btn}`}>Submit</button>
          </form>
        </div>
      </div>

     

      {/* Loader element */}
      <span className={styles.loader}></span>
    </div>
  );
};

export default Contact;
