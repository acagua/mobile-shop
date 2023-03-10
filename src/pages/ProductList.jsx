import React, { useRef, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ItemCard } from '../components/ItemCard';
import { Search } from '../components/Search';

import styles from '../styles/ProductList.module.css';

export const ProductList = () => {
  const products = useLoaderData();

  const [query, setQuery] = useState();
  const searchRef = useRef();

  const handleOnChange = ({ target }) => {
    setQuery(target.value.toLowerCase());
    console.log(searchRef.current.value);
  };

  const filteredItems = products.filter(
    (product) =>
      product.brand.toLowerCase().includes(query) || product.model.toLowerCase().includes(query),
  );

  console.log({ filteredItems });
  const showItems = filteredItems.length ? filteredItems : products;

  return (
    <div className="fadeIn">
      <div className={styles.heading}>
        <h2 className={styles.title}> Device List </h2>
        <Search onChange={handleOnChange} ref={searchRef} />
      </div>
      {filteredItems.length === 0 && !!query && (
        <p className={styles.warning}>No devices found. Showing all catalog</p>
      )}
      <section className={styles.itemList}>
        {!!products.length &&
          showItems.map(({ id, brand, model, imgUrl, price }) => (
            <ItemCard id={id} brand={brand} model={model} imgUrl={imgUrl} price={price} key={id} />
          ))}
      </section>
    </div>
  );
};
export default ProductList;
