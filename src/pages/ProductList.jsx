import React from 'react';
import { ItemCard } from '../components/ItemCard';

import styles from '../styles/ProductList.module.css';

export const ProductList = () => {
  return (
    <>
      <h2 className={styles.title}> Device List </h2>
      <div className={styles.itemList}>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </>
  );
};
