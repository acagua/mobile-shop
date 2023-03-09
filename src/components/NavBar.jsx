import React from 'react';
import { ReactComponent as LogoIcon } from '../assets/logo.svg';
import { ReactComponent as CartIcon } from '../assets/cart.svg';
import styles from '../styles/NavBar.module.css';

export const NavBar = () => {
  return (
    <nav className={`${styles.container} fade-in`}>
      <div className={styles.logo}>
        <LogoIcon />
        <h1> The Mobile Vault</h1>
      </div>
      <CartIcon className={styles.cart} />
    </nav>
  );
};
