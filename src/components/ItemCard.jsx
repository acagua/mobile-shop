import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/ItemCard.module.css';
import { currency } from '../utils/formatter';
import { Link } from 'react-router-dom';

export const ItemCard = ({ id, brand, model, imgUrl, price }) => {
  const handleOnClick = () => {
    //
  };

  return (
    <article className={styles.container}>
      <img src={imgUrl} alt={model} />
      <div className={styles.title}>
        <h3>{model}</h3>
        <h4>{brand}</h4>
      </div>
      <p className={styles.price}>{currency.format(price)}</p>
      <Link to={`product/${id}`} className={styles.link}>
        <button className={`bump`} onClick={handleOnClick}>
          Buy
        </button>
      </Link>
    </article>
  );
};

ItemCard.propTypes = {
  brand: PropTypes.string,
  model: PropTypes.string,
  imgUrl: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string,
};
