import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ActionCard.module.css';

export const ActionCard = ({ configurationName, isColor, code, text }) => {
  return (
    <div className={styles.container}>
      <input type="radio" id={code} name={configurationName} value={code} />
      <label htmlFor={code}>{text}</label>
      {isColor && <div className={styles.color} style={{ backgroundColor: `${text}` }} />}
    </div>
  );
};

ActionCard.propTypes = {
  configurationName: PropTypes.string,
  isColor: PropTypes.bool,
  text: PropTypes.string,
  code: PropTypes.number,
};
