import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ColorAction.module.css';

export const ColorAction = ({ configurationName, code, text, isChecked }) => {
  const inputRef = useRef();

  const handleSelect = () => {
    inputRef.current.click();
  };
  return (
    <div className={styles.container} onClick={handleSelect}>
      <div className={styles.color} style={{ backgroundColor: `${text}` }} />
      <label htmlFor={code}>{text}</label>
      <input
        type="radio"
        id={code}
        name={configurationName}
        value={code}
        ref={inputRef}
        defaultChecked={isChecked}
      />
    </div>
  );
};

ColorAction.propTypes = {
  configurationName: PropTypes.string,
  text: PropTypes.string,
  code: PropTypes.number,
  isChecked: PropTypes.bool,
};
