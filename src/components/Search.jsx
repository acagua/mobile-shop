import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import styles from '../styles/Search.module.css';

export const Search = React.forwardRef((props, ref) => {
  const { onChange } = props;

  const debouncedOnChange = debounce((event) => {
    onChange(event);
  }, 1000);

  return (
    <input
      className={styles.container}
      placeholder="Search"
      onChange={debouncedOnChange}
      type="search"
      ref={ref}
      // value={query}
    />
  );
});

Search.displayName = 'Search';

Search.propTypes = {
  onChange: PropTypes.func,
};
