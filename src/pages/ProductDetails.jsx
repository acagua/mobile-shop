import React, { useContext, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import styles from '../styles/ProductDetails.module.css';
import { ReactComponent as BackIcon } from '../assets/back.svg';
import { ItemDescription } from '../components/ItemDescription/ItemDescription';
import { ItemActions } from '../components/ItemActions/ItemActions';
import { postCartItem } from '../utils/api';
import { ShopContext } from '../App';

export const ProductDetails = () => {
  const details = useLoaderData();
  const { setCartItems, setCurrentProduct } = useContext(ShopContext);
  const { id, brand, model, imgUrl, options, price, ...specs } = details;

  useEffect(() => {
    setCurrentProduct(`${model}`);
  }, [model, setCurrentProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const params = {};
    for (const [name, value] of data) {
      Object.assign(params, { [name]: value });
    }
    postCartItem({
      id,
      colorCode: params.colors,
      storageCode: params.storages,
    })
      .then((response) => response.json())
      .then(({ count }) => {
        setCartItems(count);
      });
  };

  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.title}>
          {model} ({brand})
        </h2>
      </div>
      <Link to="/" className={styles.backLink}>
        <BackIcon />
      </Link>
      <section className={`${styles.container} fadeIn`}>
        <img src={imgUrl} className={styles.image} alt={model} />
        <div className={styles.productInfo}>
          <ItemActions options={options} price={price} onSubmit={handleSubmit} />
          <ItemDescription specs={specs} />
        </div>
      </section>
    </>
  );
};
export default ProductDetails;
