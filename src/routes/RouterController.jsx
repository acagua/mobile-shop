import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import { NotFoundError } from '../pages/NotFoundError';
import { ProductDetails } from '../pages/ProductDetails';
import { ProductList } from '../pages/ProductList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <ProductList />,
      },
      {
        path: 'product/:productId',
        element: <ProductDetails />,
      },
    ],
    errorElement: <NotFoundError />,
  },
]);

export const RouterController = () => {
  return <RouterProvider router={router} />;
};
