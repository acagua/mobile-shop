import React from 'react';
import PropTypes from 'prop-types';
import { ActionCard } from './ActionCard';
import styles from '../styles/Action.module.css';

export const Action = ({ title, configurations }) => {
  return (
    <div className={styles.container}>
      <h3> Available {title}:</h3>
      <div className={styles.configurations}>
        {configurations.map(({ code, name }, index) => (
          <ActionCard
            configurationName={title}
            key={code}
            code={code}
            text={name}
            isColor={title === 'colors'}
            isChecked={!index}
          />
        ))}
      </div>
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
