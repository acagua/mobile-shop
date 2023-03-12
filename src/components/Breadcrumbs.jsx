import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShopContext } from '../App';
import styles from '../styles/Breadcrumbs.module.css';

export const Breadcrumbs = () => {
  const { currentProduct } = useContext(ShopContext);
  const { pathname } = useLocation();

  return (
    <nav className={styles.container}>
      <Link to="/" className={pathname === '/' ? styles.breadcrumbNotCurrent : ''}>
        Products
      </Link>
      {pathname.startsWith('/product/') && <span> / {currentProduct}</span>}
    </nav>
  );
};
