import React from 'react';
import PropTypes from 'prop-types';
import { Spec } from './Spec';

export const ItemDescription = ({ specs }) => {
  return (
    <>
      <div>Spececifications: </div>
      {Object.entries(specs).map(([key, value]) => (
        <Spec key={key} title={key} info={value} />
      ))}
    </>
  );
};

ItemDescription.propTypes = {
  specs: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  ),
};
