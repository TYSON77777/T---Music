// Cart.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Cart.module.css';

const Cart = ({ cart, onRemoveItem }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartTitle}>Shopping Cart</h1>
      <ul className={styles.cartList}>
        {cart.map((item) => (
          <li key={item.id} className={styles.cartItem}>
            <span className={styles.cartItemName}>{item.name}</span>
            <span className={styles.cartItemPrice}>${item.price}</span>
            <button 
              className={styles.removeButton} 
              onClick={() => onRemoveItem(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button className={styles.cartButton} onClick={() => navigate('/checkout')}>
        Proceed to Checkout
      </button>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};

export default Cart;
