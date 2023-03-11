import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ItemActions.module.css';
import { Action } from './Action';

export const ItemActions = ({ options }) => {
  console.log(options);
  return (
    <div className={styles.container}>
      {Object.entries(options).map(([key, value]) => {
        console.log({ key, value });
        return <Action key={key} title={key} configurations={value} />;
      })}
    </div>
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
