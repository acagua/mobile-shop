import { createContext, lazy, Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Breadcrumbs } from './components/Breadcrumbs';
import { Loading } from './components/Loading';

export const ShopContext = createContext();

const LazyNavBar = lazy(() => import('./components/NavBar'));

function App() {
  const [cartItems, setCartItems] = useState(0);
  const [currentProduct, setCurrentProduct] = useState('');
  return (
    <ShopContext.Provider
      value={{
        cartItems,
        setCartItems,
        currentProduct,
        setCurrentProduct,
      }}
    >
      <header>
        <Suspense fallback={<Loading />}>
          <LazyNavBar />
        </Suspense>
      </header>
      <main>
        <Breadcrumbs />
        <Outlet />
      </main>
    </ShopContext.Provider>
  );
}

export default App;
