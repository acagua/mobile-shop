import React from 'react';
import PropTypes from 'prop-types';
import { ActionCard } from './ActionCard';
import styles from '../styles/Action.module.css';

export const Action = ({ title, configurations }) => {
  console.log({ configurations });
  return (
    <div className={styles.container}>
      <p> Available {title}:</p>
      {configurations.map((configuration) => (
        <ActionCard key={configuration.code} text={configuration.name} color={title === 'colors'} />
      ))}
    </div>
  );
};

Action.propTypes = {
  title: PropTypes.string,
  configurations: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      code: PropTypes.number,
    }),
  ),
};
