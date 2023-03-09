import React from 'react';
import { ItemCard } from '../components/ItemCard';
import { Search } from '../components/Search';

import styles from '../styles/ProductList.module.css';

export const ProductList = () => {
  return (
    <>
      <div className={styles.heading}>
        <h2 className={styles.title}> Device List </h2>
        <Search />
      </div>
      <section className={styles.itemList}>
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
      </section>
    </>
  );
};
