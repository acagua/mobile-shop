import React, { useContext } from 'react';
import { ReactComponent as LogoIcon } from '../assets/logo.svg';
import { ReactComponent as CartIcon } from '../assets/cart.svg';
import styles from '../styles/NavBar.module.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../App';

export const NavBar = () => {
  const { cartItems } = useContext(ShopContext);

  console.log({ cartItems });
  return (
    <nav className={styles.container}>
      <Link to="/">
        <div className={styles.logo}>
          <LogoIcon />
          <h1> The Mobile Vault</h1>
        </div>
      </Link>
      <div>
        <CartIcon className={styles.cart} value={3} />
        <span className={styles.badge}>{cartItems}</span>
      </div>
    </nav>
  );
};
