import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/ItemActions.module.css';
import { Action } from './components/Action';
import { currency } from '../../utils/formatter';

export const ItemActions = ({ options, price }) => {
  return (
    <form className={styles.container}>
      {Object.entries(options).map(([key, value]) => (
        <Action key={key} title={key} configurations={value} />
      ))}
      <div className={styles.cta}>
        <span>{currency.format(price)}</span>
        <button className={styles.addBtn} type="submit">
          Add to Cart
        </button>
      </div>
    </form>
  );
};

ItemActions.propTypes = {
  options: PropTypes.shape(
    {
      storages: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          code: PropTypes.number,
        }),
      ),
    },
    {
      colors: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          code: PropTypes.number,
        }),
      ),
    },
  ),
  price: PropTypes.string,
};
