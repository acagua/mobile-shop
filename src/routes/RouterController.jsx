import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import { Loading } from '../components/Loading';
import { NotFoundError } from '../pages/NotFoundError';
import { detailsLoader, productsLoader } from '../utils/loaders';

const LazyProductList = lazy(() => import('../pages/ProductList'));

const LazyProductDetails = lazy(() => import('../pages/ProductDetails'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        loader: productsLoader,
        element: (
          <Suspense fallback={<Loading />}>
            <LazyProductList />
          </Suspense>
        ),
      },
      {
        path: 'product/:productId',
        loader: detailsLoader,
        element: (
          <Suspense fallback={<Loading />}>
            <LazyProductDetails />
          </Suspense>
        ),
      },
    ],
    errorElement: <NotFoundError />,
  },
]);

export const RouterController = () => {
  return <RouterProvider router={router} />;
};
