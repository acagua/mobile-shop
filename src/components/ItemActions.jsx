import React from 'react';
import PropTypes from 'prop-types';

export const ItemActions = ({ options }) => {
  return <div>{JSON.stringify(options)}</div>;
};

ItemActions.propTypes = {
  options: PropTypes.shape(
    {
      storages: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          code: PropTypes.number,
        }),
      ),
    },
    {
      colors: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          code: PropTypes.number,
        }),
      ),
    },
  ),
};
