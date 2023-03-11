import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Spec.module.css';
import { objectKeyToText } from '../utils/formatter';
import { Description } from './Description';

export const Spec = ({ title, info }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{objectKeyToText(title)}</div>
      <div className={styles.description}>
        <Description info={info} />
      </div>
    </div>
  );
};

Spec.propTypes = {
  title: PropTypes.string,
  info: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};
