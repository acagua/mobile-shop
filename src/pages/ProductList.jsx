import React, { useEffect, useRef, useState } from 'react';
import { ItemCard } from '../components/ItemCard';
import { Search } from '../components/Search';

import styles from '../styles/ProductList.module.css';
import { getAllProducts } from '../utils/api';

export const ProductList = () => {
  const [query, setQuery] = useState();

  const searchRef = useRef();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const fetchedData = await getAllProducts();
    setProducts(fetchedData);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleOnChange = ({ target }) => {
    setQuery(target.value);
    console.log(searchRef.current.value);
  };

  const filteredItems = products.filter((product) => product.brand.includes(query));

  const showItems = filteredItems.length ? filteredItems : products;

  console.log({ products, filteredItems });

  return (
    <div className="fadeIn">
      <div className={styles.heading}>
        <h2 className={styles.title}> Device List </h2>
        <Search onChange={handleOnChange} ref={searchRef} />
      </div>
      <section className={styles.itemList}>
        {!!products.length &&
          showItems.map(({ id, brand, model, imgUrl, price }) => (
            <ItemCard id={id} brand={brand} model={model} imgUrl={imgUrl} price={price} key={id} />
          ))}
      </section>
    </div>
  );
};
