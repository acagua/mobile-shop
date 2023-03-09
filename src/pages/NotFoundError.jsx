import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/NotFoundError.module.css';

export const NotFoundError = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    return navigate('/');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}> Sorry :( </h2>
      <p className={styles.description}>We could not find what you were looking for</p>
      <button className={`${styles.button} bump`} onClick={handleClick}>
        Go to homepage
      </button>
    </div>
  );
};
