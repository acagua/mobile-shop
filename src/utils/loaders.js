import { customFetch, productEndpoint } from './api';

export async function productsLoader() {
  const products = await customFetch(productEndpoint);
  return products;
}

export async function detailsLoader({ params }) {
  const details = await customFetch(`${productEndpoint}/${params.productId}`);
  return details;
}
