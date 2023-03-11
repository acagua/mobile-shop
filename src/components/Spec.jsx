import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Spec.module.css';
import { objectKeyToText } from '../utils/formatter';

export const Spec = ({ title, info }) => {
  const Description = () => {
    return Array.isArray(info) ? (
      <ul>
        {info.map((option, i) => (
          <li key={i}>{option}</li>
        ))}
      </ul>
    ) : (
      info
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>{objectKeyToText(title)}</div>
      <div className={styles.description}>
        <Description />
      </div>
    </div>
  );
};

Spec.propTypes = {
  title: PropTypes.string,
  info: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};
