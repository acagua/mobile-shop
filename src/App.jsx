import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Breadcrumbs } from './components/Breadcrumbs';
import { NavBar } from './components/NavBar';

export const ShopContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState(0);
  const [currentProduct, setCurrentProduct] = useState('');
  console.log(cartItems);
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
        <NavBar />
      </header>
      <main>
        <Breadcrumbs />
        <Outlet />
      </main>
    </ShopContext.Provider>
  );
}

export default App;
