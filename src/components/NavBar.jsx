import React from 'react';
import { ReactComponent as LogoIcon } from '../assets/logo.svg';
import { ReactComponent as CartIcon } from '../assets/cart.svg';
import styles from '../styles/NavBar.module.css';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className={`${styles.container} fade-in`}>
      <Link to="/">
        <div className={styles.logo}>
          <LogoIcon />
          <h1> The Mobile Vault</h1>
        </div>
      </Link>
      <CartIcon className={styles.cart} />
    </nav>
  );
};
