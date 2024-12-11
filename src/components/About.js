import React from 'react';
import styles from '../styles/About.module.css';
// import videoBg from '../path/to/your/video.mp4'; // Ensure to update the path as per your project structure

const About = () => {
  return (
    <div className={styles.about}>
      <video autoPlay loop muted className={styles.videoBg}>
        {/* <source src={videoBg} type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>
        <h1>About Us</h1>
        <p>Welcome to our shopping website. We offer a wide range of products to meet your needs. Our mission is to provide the best shopping experience with high-quality products and excellent customer service.</p>
        <p>We hope you enjoy your time shopping with us!</p>
        <div className={styles.keyInfo}>
          <div>
            <h2>Our Story</h2>
            <p>Founded in 2021, we started with a small team of dedicated individuals with a passion for e-commerce and a commitment to excellence.</p>
          </div>
          <div>
            <h2>Our Values</h2>
            <p>We believe in integrity, customer satisfaction, and continuous improvement. These values drive us to deliver the best shopping experience.</p>
          </div>
          <div>
            <h2>Our Team</h2>
            <p>Our team is comprised of talented professionals from various fields, all working together to bring you the best products and services.</p>
          </div>
        </div>
      </div>
      <div className={styles.boxOfStars1}>
        <div className={styles.star + ' ' + styles.starPosition1}></div>
        <div className={styles.star + ' ' + styles.starPosition2}></div>
        <div className={styles.star + ' ' + styles.starPosition3}></div>
        <div className={styles.star + ' ' + styles.starPosition4}></div>
        <div className={styles.star + ' ' + styles.starPosition5}></div>
        <div className={styles.star + ' ' + styles.starPosition6}></div>
        <div className={styles.star + ' ' + styles.starPosition7}></div>
      </div>
      <div className={styles.boxOfStars2}>
        <div className={styles.star + ' ' + styles.starPosition1}></div>
        <div className={styles.star + ' ' + styles.starPosition2}></div>
        <div className={styles.star + ' ' + styles.starPosition3}></div>
        <div className={styles.star + ' ' + styles.starPosition4}></div>
        <div className={styles.star + ' ' + styles.starPosition5}></div>
        <div className={styles.star + ' ' + styles.starPosition6}></div>
        <div className={styles.star + ' ' + styles.starPosition7}></div>
      </div>
      <div className={styles.boxOfStars3}>
        <div className={styles.star + ' ' + styles.starPosition1}></div>
        <div className={styles.star + ' ' + styles.starPosition2}></div>
        <div className={styles.star + ' ' + styles.starPosition3}></div>
        <div className={styles.star + ' ' + styles.starPosition4}></div>
        <div className={styles.star + ' ' + styles.starPosition5}></div>
        <div className={styles.star + ' ' + styles.starPosition6}></div>
        <div className={styles.star + ' ' + styles.starPosition7}></div>
      </div>
      <div className={styles.boxOfStars4}>
        <div className={styles.star + ' ' + styles.starPosition1}></div>
        <div className={styles.star + ' ' + styles.starPosition2}></div>
        <div className={styles.star + ' ' + styles.starPosition3}></div>
        <div className={styles.star + ' ' + styles.starPosition4}></div>
        <div className={styles.star + ' ' + styles.starPosition5}></div>
        <div className={styles.star + ' ' + styles.starPosition6}></div>
        <div className={styles.star + ' ' + styles.starPosition7}></div>
      </div>
      <div className={styles.astronaut}>
        <div className={styles.head}></div>
        <div className={styles.arm + ' ' + styles.armLeft}></div>
        <div className={styles.arm + ' ' + styles.armRight}></div>
        <div className={styles.body}>
          <div className={styles.panel}></div>
        </div>
        <div className={styles.leg + ' ' + styles.legLeft}></div>
        <div className={styles.leg + ' ' + styles.legRight}></div>
        <div className={styles.schoolbag}></div>
      </div>
    </div>
  );
};

export default About;
