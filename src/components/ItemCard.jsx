import React from 'react';

import cat from '../assets/cat.jpeg';
import styles from '../styles/ItemCard.module.css';
import { currencyFormatter } from '../utils/currency';

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
      <button className={`${styles.buyButton} bump`} onClick={handleOnClick}>
        Buy
      </button>
    </div>
  );
};
