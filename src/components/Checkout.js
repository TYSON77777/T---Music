import React from 'react';
import styles from '../styles/Checkout.module.css'; // Adjust the path as necessary

const Checkout = () => {
  return (
    <div className={styles.checkoutContainer}>
      <h1 className={styles.checkoutTitle}>Checkout Page</h1>
      <p className={styles.checkoutMessage}>Thank you for your purchase!</p>
    </div>
  );
};

export default Checkout;
