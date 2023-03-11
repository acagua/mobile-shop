import React from 'react';
import PropTypes from 'prop-types';

export const ActionCard = ({ color, text }) => {
  return (
    <div>
      {color && <div> Color Indicator</div>}
      {text}
    </div>
  );
};

ActionCard.propTypes = {
  color: PropTypes.bool,
  text: PropTypes.string,
};
