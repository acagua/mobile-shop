import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Breadcrumbs.module.css';

export const Breadcrumbs = () => {
  const { pathname } = useLocation();

  return (
    <nav className={styles.container}>
      <Link to="/" className={pathname === '/' ? styles.breadcrumbNotCurrent : ''}>
        Products
      </Link>
      {pathname.startsWith('/product/') && (
        <>
          <span className="breadcrumb-arrow"> / </span>
          <Link to="/products/:productsId" className={styles.breadcrumbNotCurrent}>
            Product 1
          </Link>
        </>
      )}
    </nav>
  );
};
