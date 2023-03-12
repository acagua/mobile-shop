import { customFetch, productEndpoint } from './api';
import { getLocalStorage, setLocalStorage } from './storage';

export async function productsLoader() {
  const storedProducts = getLocalStorage(productEndpoint);
  if (storedProducts) {
    return storedProducts;
  }
  const products = await customFetch(productEndpoint);
  setLocalStorage(productEndpoint, products);
  return products;
}

export async function detailsLoader({ params }) {
  const detailsEndpoint = `${productEndpoint}/${params.productId}`;
  const storedProduct = getLocalStorage(detailsEndpoint);
  if (storedProduct) {
    return storedProduct;
  }
  const details = await customFetch(detailsEndpoint);
  setLocalStorage(detailsEndpoint, details);
  return details;
}
