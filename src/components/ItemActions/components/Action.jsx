import React from 'react';
import PropTypes from 'prop-types';
import { ColorAction } from './ColorAction';
import styles from '../styles/Action.module.css';
import { ListAction } from './ListAction';

export const Action = ({ title, configurations }) => {
  return (
    <div className={styles.container}>
      <h3> Available {title}:</h3>
      <div className={styles.configurations}>
        {title === 'colors' ? (
          configurations.map(({ code, name }, index) => (
            <ColorAction
              configurationName={title}
              key={code}
              code={code}
              text={name}
              isChecked={!index}
            />
          ))
        ) : (
          <ListAction configurationName={title} configurations={configurations} />
        )}
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
