import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.css";
import TopTrendingSongs from "./TopTrendingSongs";
import WaveyFooter from "./WaveyFooter";

const Home = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "PINK TAPE",
      artist: "Lil Uzi Vert",
      price: 50,
      image: "/assets/images/lil uzi.png",
    },
    {
      id: 2,
      name: "UTOPIA SIGNED CD",
      artist: "Travis Scott",
      price: 30,
      image: "/assets/images/travis.png",
    },
    {
      id: 3,
      name: "ASTROWORLD",
      artist: "Travis Scott",
      price: 40,
      image: "/assets/images/travis astro.png",
    },
    {
      id: 4,
      name: "A GREAT CHAOS",
      artist: "Ken Carson",
      price: 20,
      image: "/assets/images/ken.png",
    },
    {
      id: 5,
      name: "WHOLE LOTTA RED",
      artist: "Playboi Carti",
      price: 55,
      image: "/assets/images/carti.png",
    },
    {
      id: 6,
      name: "GRADUATION",
      artist: "Kanye West",
      price: 35,
      image: "/assets/images/kanye.png",
    },
    {
      id: 7,
      name: "BLONDE",
      artist: "Frank Ocean",
      price: 45,
      image: "/assets/images/frank.png",
    },
    {
      id: 8,
      name: "HEROS&VILLAINS",
      artist: "Metro Boomin",
      price: 25,
      image: "/assets/images/metro.png",
    },
  ];

  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <img
          src="\assets\Images\t music.png"
          alt="Logo"
          className={styles.logo}
        />
      </div>

      <div className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productItem}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.productImage}
            />
            <div className={styles.productInfo}>
              <h3>{product.name}</h3>
              <p>{product.artist}</p>
              <p>${product.price}</p>
              <button onClick={() => navigate(`/product/${product.id}`)}>
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.navigationButtons}>
        <button className={styles.navButton}>Prev</button>
        <button className={styles.navButton}>Next</button>
      </div>

      <TopTrendingSongs />

      <WaveyFooter />
    </div>
  );
};

export default Home;
