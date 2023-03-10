import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/ProductDetails.module.css';
import { ReactComponent as BackIcon } from '../assets/back.svg';
import cat from '../assets/cat.jpeg';
import { ItemDescription } from '../components/ItemDescription';
import { ItemActions } from '../components/ItemActions';

export const ProductDetails = () => {
  return (
    <>
      <Link to="/" className={styles.backLink}>
        <BackIcon />
      </Link>
      <section className={`${styles.container} fadeIn`}>
        <img src={cat} className={styles.image} />
        <div>
          <ItemDescription />
          <ItemActions />
        </div>
      </section>
    </>
  );
};
