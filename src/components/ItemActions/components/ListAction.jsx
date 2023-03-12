import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ListAction.module.css';

export const ListAction = ({ configurationName, configurations }) => {
  return (
    <>
      <select className={styles.container} name={configurationName}>
        {configurations.map(({ code, name }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </>
  );
};

ListAction.propTypes = {
  configurationName: PropTypes.string,
  configurations: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      code: PropTypes.number,
    }),
  ),
};
