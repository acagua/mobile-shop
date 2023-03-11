import PropTypes from 'prop-types';

export const Description = ({ info }) => {
  return Array.isArray(info) ? (
    <ul>
      {info.map((option, i) => (
        <li key={i}>{option}</li>
      ))}
    </ul>
  ) : (
    info
  );
};

Description.propTypes = {
  info: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};
