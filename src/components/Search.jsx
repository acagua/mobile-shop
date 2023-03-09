import React, { useState } from 'react';

import styles from '../styles/Search.module.css';

export const Search = () => {
  const [query, setQuery] = useState('');
  return (
    <input
      className={styles.container}
      placeholder="Search"
      onChange={(e) => {
        setQuery(e.target.value);
      }}
      type="search"
      value={query}
    />
  );
};
