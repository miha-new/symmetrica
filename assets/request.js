import catalog from '@/assets/catalog.json';

export const getCatalog = () => new Promise((resolve) => {
  const delay = parseInt(Math.random() * 1000);
  setTimeout(() => {
    resolve(catalog);
  }, delay);
});
