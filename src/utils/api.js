const baseUrl = 'https://itx-frontend-test.onrender.com';

const productEndpoint = `${baseUrl}/api/product`;

const cartEndpoint = `${baseUrl}/api/cart`;

const customFetch = async (endpoint) => {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

export const getAllProducts = () => {
  return customFetch(productEndpoint);
};

export const getProductDetails = (id) => {
  return customFetch(`${productEndpoint}/${id}`);
};

/** Sample body
 {  
    id: 0001,  
    colorCode: 1,  
    storageCode: 2  
   } 
 */
export const postCartItem = (data) => {
  fetch(cartEndpoint, { method: 'POST', body: JSON.stringify(data) });
};
