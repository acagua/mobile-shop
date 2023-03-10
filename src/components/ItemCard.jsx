import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/ItemCard.module.css';
import { currencyFormatter } from '../utils/currency';
import { Link } from 'react-router-dom';

export const ItemCard = ({ id, brand, model, imgUrl, price }) => {
  const handleOnClick = () => {
    //
  };

  return (
    <div className={styles.container}>
      <img src={imgUrl} alt={model} />
      <p className={styles.specs}>
        {model} by <strong>{brand}</strong>
      </p>
      <p className={styles.price}>{currencyFormatter.format(price)}</p>
      <Link to={`product/${id}`}>
        <button className={`${styles.buyButton} bump`} onClick={handleOnClick}>
          Buy
        </button>
      </Link>
    </div>
  );
};

ItemCard.propTypes = {
  brand: PropTypes.string,
  model: PropTypes.string,
  imgUrl: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string,
};
