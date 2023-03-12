import React, { useContext } from 'react';
import { ReactComponent as LogoIcon } from '../assets/logo.svg';
import { ReactComponent as CartIcon } from '../assets/cart.svg';
import styles from '../styles/NavBar.module.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../App';

export const NavBar = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <nav className={styles.container}>
      <Link className={styles.logo} to="/">
        <LogoIcon />
        <h1>The Mobile Vault</h1>
      </Link>
      <div>
        <CartIcon className={styles.cart} value={3} />
        <span className={styles.badge}>{cartItems}</span>
      </div>
    </nav>
  );
};

export default NavBar;
