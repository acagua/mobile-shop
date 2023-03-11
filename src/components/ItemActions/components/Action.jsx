import React from 'react';
import PropTypes from 'prop-types';
import { ActionCard } from './ActionCard';
import styles from '../styles/Action.module.css';

export const Action = ({ title, configurations }) => {
  console.log({ configurations });
  return (
    <div className={styles.container}>
      <h3> Available {title}:</h3>
      {configurations.map((configuration) => (
        <ActionCard
          configurationName={title}
          key={configuration.code}
          code={configuration.code}
          text={configuration.name}
          isColor={title === 'colors'}
        />
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
