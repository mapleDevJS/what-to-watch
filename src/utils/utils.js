export const getRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9);
};
