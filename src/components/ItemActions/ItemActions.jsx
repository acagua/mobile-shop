import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/ItemActions.module.css';
import { Action } from './components/Action';

export const ItemActions = ({ options }) => {
  console.log(options);
  return (
    <form className={styles.container}>
      {Object.entries(options).map(([key, value]) => {
        console.log({ key, value });
        return <Action key={key} title={key} configurations={value} />;
      })}
      <button className={styles.addBtn} type="submit">
        Add to Cart
      </button>
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
};
