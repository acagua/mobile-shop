import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import styles from '../styles/ProductDetails.module.css';
import { ReactComponent as BackIcon } from '../assets/back.svg';
import { ItemDescription } from '../components/ItemDescription';
import { ItemActions } from '../components/ItemActions';
import { currency } from '../utils/formatter';

export const ProductDetails = () => {
  const details = useLoaderData();
  const { brand, model, imgUrl, options, price, ...specs } = details;
  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.title}>
          {brand} - {model}
        </h2>
        <span className={styles.price}>{currency.format(price)}</span>
      </div>
      <Link to="/" className={styles.backLink}>
        <BackIcon />
      </Link>
      <section className={`${styles.container} fadeIn`}>
        <img src={imgUrl} className={styles.image} alt={model} />
        <div>
          <ItemActions options={options} />
          <ItemDescription specs={specs} />
        </div>
      </section>
    </>
  );
};
