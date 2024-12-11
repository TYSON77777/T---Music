import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import About from './components/About';
import Contact from './components/Contact';
import TopTrendingSongs from './components/TopTrendingSongs';
import SongDetails from './components/SongDetails'; // Importing the SongDetails component
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './components/Firebase'; // Ensure correct path to Firebase configuration
import styles from './styles/App.module.css';

const App = () => {
  const [cart, setCart] = React.useState([]);
  const [user, setUser] = React.useState(null);

  // Listen for authentication state changes
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Function to add products to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Function to remove products from the cart
  const onRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  // Handle user sign-out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <Router>
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/about" className={styles.link}>About</Link>
        <Link to="/contact" className={styles.link}>Contact</Link>
        {user ? (
          <>
            <Link to="/cart" className={styles.link}>Cart</Link>
            <button onClick={handleSignOut} className={styles.link}>Sign Out</button>
          </>
        ) : (
          <>
            {/* Uncomment if sign-in and sign-up links are needed */}
            {/* <Link to="/signin" className={styles.link}>Sign In</Link>
            <Link to="/signup" className={styles.link}>Sign Up</Link> */}
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} onRemoveItem={onRemoveItem} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/top-trending-songs" element={<TopTrendingSongs />} />
        <Route path="/song/:id" element={<SongDetails />} /> {/* Ensure this route is handled by SongDetails component */}
      </Routes>
    </Router>
  );
};

export default App;
