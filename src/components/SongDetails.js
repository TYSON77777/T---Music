import React from 'react';
import { useParams } from 'react-router-dom';
import songs from '../components/data/songs';
import styles from '../styles/SongDetails.module.css';

const SongDetails = () => {
  const { id } = useParams();
  const song = songs.find(song => song.id === parseInt(id));

  if (!song) {
    return <div>Song not found</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.background} style={{ backgroundImage: `url(${song.artistImage})` }}>
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.details}>
          <h2>{song.name}</h2>
          <p><strong>Artist:</strong> {song.artist}</p>
          <div className={styles.audioPlayerContainer}>
            <audio controls autoPlay>
              <source src={song.audio} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <p>{song.details}</p>
        </div>
        <img src={song.image} alt={song.name} className={styles.coverImage} />
      </div>
    </div>
  );
};

export default SongDetails;
