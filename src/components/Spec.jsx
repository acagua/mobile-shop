import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Spec.module.css';
import { objectKeyToText } from '../utils/formatter';
import { Description } from './Description';

export const Spec = ({ title, info }) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{objectKeyToText(title)}: </span>
      <span className={styles.description}>
        <Description info={info} />
      </span>
    </div>
  );
};

Spec.propTypes = {
  title: PropTypes.string,
  info: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};
