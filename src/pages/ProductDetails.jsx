import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import styles from '../styles/ProductDetails.module.css';
import { ReactComponent as BackIcon } from '../assets/back.svg';
import { ItemDescription } from '../components/ItemDescription';
import { ItemActions } from '../components/ItemActions';

export const ProductDetails = () => {
  const details = useLoaderData();
  const { imgUrl, options, ...specs } = details;
  return (
    <>
      <Link to="/" className={styles.backLink}>
        <BackIcon />
      </Link>
      <section className={`${styles.container} fadeIn`}>
        <img src={imgUrl} className={styles.image} />
        <div>
          <ItemDescription specs={specs} />
          <ItemActions options={options} />
        </div>
      </section>
    </>
  );
};
