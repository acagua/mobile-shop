import React from 'react';

import cat from '../assets/cat.jpeg';
import styles from '../styles/ItemCard.module.css';
import { currencyFormatter } from '../utils/currency';
import { Link } from 'react-router-dom';
export const ItemCard = () => {
  const handleOnClick = () => {
    //
  };

  return (
    <div className={styles.container}>
      <img src={cat} />
      <p className={styles.specs}>
        iPhone by <strong>Apple</strong>
      </p>
      <p className={styles.price}>{currencyFormatter.format(500)}</p>
      <Link to={`product/${1}`}>
        <button className={`${styles.buyButton} bump`} onClick={handleOnClick}>
          Buy
        </button>
      </Link>
    </div>
  );
};
