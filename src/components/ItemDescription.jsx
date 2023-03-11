import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Spec } from './Spec';
import styles from '../styles/ItemDescription.module.css';
import { ReactComponent as ArrowIcon } from '../assets/arrow.svg';

export const ItemDescription = ({ specs }) => {
  const [showSpecs, setShowSpecs] = useState(false);

  const handleClick = () => {
    setShowSpecs((prev) => !prev);
  };

  return (
    <>
      <button className={styles.container} onClick={handleClick}>
        <span>Specifications</span>
        <ArrowIcon className={showSpecs ? styles.iconExpand : styles.iconCollapsed} />
      </button>
      <div className={`${styles.specs} fadeIn ${showSpecs ? styles.show : styles.hide}`}>
        {Object.entries(specs).map(([key, value]) => (
          <Spec key={key} title={key} info={value} />
        ))}
      </div>
    </>
  );
};

ItemDescription.propTypes = {
  specs: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  ),
};
