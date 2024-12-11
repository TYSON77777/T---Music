import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/TopTrendingSongs.module.css';
import songs from '../components/data/songs';

const TopTrendingSongs = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.play();
    }
  }, [currentSong]);

  const handleSongClick = (song) => {
    setCurrentSong(song);
    navigate(`/song/${song.id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <div className={styles.musicContainer}>
          <div className={styles.plate}>
            <div className={styles.black}>
              <div className={styles.border}>
                <div className={styles.white}>
                  <div className={styles.center}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.player}>
            <div className={styles.rect}></div>
            <div className={styles.circ}></div>
          </div>
        </div>
        <h2 className={styles.heading}>Top Trending Songs📈</h2>
      </div>
      <ul className={styles.songList}>
        {songs.map(song => (
          <li 
            key={song.id} 
            className={styles.songItem} 
            onClick={() => handleSongClick(song)}
          >
            <img src={song.image} alt={song.name} className={styles.songImage} />
            <div className={styles.songInfo}>
              <h3>{song.name}</h3>
              <p>{song.artist}</p>
              <p className={styles.duration}>{song.duration}</p> 
            </div>
          </li>
        ))}
      </ul>
      <audio ref={audioRef} src={currentSong ? currentSong.audio : ''} />
    </div>
  );
};

export default TopTrendingSongs;
