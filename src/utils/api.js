const baseUrl = 'https://itx-frontend-test.onrender.com';

export const productEndpoint = `${baseUrl}/api/product`;

const cartEndpoint = `${baseUrl}/api/cart`;

export const customFetch = async (endpoint) => {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

/** Sample body
 {  
    id: 0001,  
    colorCode: 1,  
    storageCode: 2  
   } 
 */
export const postCartItem = (data) => {
  return fetch(cartEndpoint, {
    method: 'POST',
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
