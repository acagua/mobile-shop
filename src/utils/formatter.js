export const currency = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
});

export const objectKeyToText = (key) => {
  return key.replace(/[A-Z]/g, ' $&');
};
