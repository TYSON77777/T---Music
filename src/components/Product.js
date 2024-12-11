import React from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import { FaMusic } from 'react-icons/fa';
import { FaHeadphones } from 'react-icons/fa';
import styles from '../styles/Product.module.css';

const Product = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    {
      id: 1, name: 'PINK TAPE', price: 50, image: '/assets/images/lil uzi.png', artist: 'Lil Uzi Vert',
      songs: [
        ' Baby Pluto',
        ' Lo Mein',
        ' Silly Watch',
        ' P2',
        ' I Just Wanna Rock',
        ' Bigger Than Life or Death',
        ' I Know',
        ' The Way Life Goes',
        ' Of Course We Ghetto Flowers',
        ' Just Wanna Rock',
        '24',
        ' Purple',
        ' Brainfreeze',
        ' Pretty Mami',
        ' Demon High'
      ]
    },
    {
      id: 2, name: 'UTOPIA SIGNED CD', price: 30, image: '/assets/images/travis.png', artist: 'Travis Scott',
      songs: ['HYAENA',
      'MELTDOWN',
      'F*** The World',
      'LOST FOREVER',
      'K-Pop',
      'THANK GOD',
      'GOLD FLAME',
      'UFO',
      'DIE FOR THE RODEO']
    },
    {
      id: 3, name: 'ASTROWORLD', price: 40, image: '/assets/images/travis astro.png', artist: 'Travis Scott',
      songs: ['ASTROWORLD',
      'CAROUSEL',
      'SKELETONS',
      'NO BYSTANDERS',
      'R.I.P. SCREW',
      'WHO? WHAT!',
      'CAN\'T SAY',
      'COFFEE BEAN']
    },
    {
      id: 4, name: 'A GREAT CHAOS', price: 20, image: '/assets/images/ken.png', artist: 'Ken Carson',
      songs: ['Green Room',
      'Jennifer\'s Body',
      'Fighting My Demons',
      'Singapore (featuring Destroy Lonely)',
      'Lose It',
      'Hardcore',
      'Me N My Kup',
      'It\'s Over',
      'Succubus',
      'Paranoid (featuring Destroy Lonely)']
    },
    {
      id: 5, name: 'WHOLE LOTTA RED', price: 55, image: '/assets/images/carti.png', artist: 'Playboi Carti',
      songs: ['Stop Breathing',
      'Molly',
      'Go2DaMoon',
      'Poke It Out',
      'R.I.P.',
      'New N****s',
      'King Vamp',
      'Teen X']
    },
    {
      id: 6, name: 'GRADUATION', price: 35, image: '/assets/images/kanye.png', artist: 'Kanye West',
      songs: ['Good Morning',
      'Stronger',
      'I Wonder',
      'Good Life',
      'Can\'t Tell Me Nothing',
      'Flashing Lights',
      'Everything I Am',
      'The Glory']
    },
    {
      id: 7, name: 'BLONDE', price: 45, image: '/assets/images/frank.png', artist: 'Frank Ocean',
      songs: ['Nikes',
      'Ivy',
      'Pink + White',
      'Be Yourself',
      'Solo',
      'Pretty Sweet',
      'Facebook Story',
      'Self Control']
    },
    {
      id: 8, name: 'HEROS & VILLAINS', price: 25, image: '/assets/images/metro.png', artist: 'Metro Boomin',
      songs: [ 'HEROES & VILLAINS',
      'SUPERHEROES',
      'METRO',
      'SAVAGE MODE',
      'WAYFARER',
      'GOT IT',
      'BIG BILLS',
      'INSIDE OUT']
    },
  ];

  const product = products.find(product => product.id.toString() === id);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className={styles.product}>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <h1>{product.name}</h1>
      <p>Artist: {product.artist}</p>
      <p>Price: ${product.price}</p>

      <div className={styles.songsList}>
        <h2><FaHeadphones className={styles.songIcon} /> Songs</h2>
        <ul>
          {product.songs.map((song, index) => (
            <li key={index}>
              <FaMusic className={styles.songIcon} /> {song}
            </li>
          ))}
        </ul>
      </div>

      <button 
        onClick={() => {
          addToCart(product);
          navigate('/cart');
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

Product.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Product;
