import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ActionCard.module.css';

export const ActionCard = ({ color, text }) => {
  return (
    <div className={styles.container}>
      {color && <div className={styles.color} style={{ backgroundColor: `${text}` }} />}
      {text}
    </div>
  );
};

ActionCard.propTypes = {
  color: PropTypes.bool,
  text: PropTypes.string,
};
