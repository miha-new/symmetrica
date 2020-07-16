import categories from '@/assets/categories.json';

export const getCategories = () => new Promise((resolve) => {
  const delay = parseInt(Math.random() * 1000);
  setTimeout(() => {
    resolve(categories);
  }, delay);
});
