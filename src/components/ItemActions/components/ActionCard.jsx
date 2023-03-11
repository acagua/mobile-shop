import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ActionCard.module.css';

export const ActionCard = ({ configurationName, isColor, code, text, isChecked }) => {
  const inputRef = useRef();

  const handleSelect = () => {
    inputRef.current.click();
  };
  return (
    <div className={styles.container} onClick={handleSelect}>
      {isColor && <div className={styles.color} style={{ backgroundColor: `${text}` }} />}
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

ActionCard.propTypes = {
  configurationName: PropTypes.string,
  isColor: PropTypes.bool,
  text: PropTypes.string,
  code: PropTypes.number,
  isChecked: PropTypes.bool,
};
