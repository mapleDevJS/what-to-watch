import {FILTER} from "../consts.js";

export const getRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const getUniqueGenres = (films) => {
  const genres = films.map((film) => film.genre);
  genres.unshift(FILTER.ALL);

  return [...new Set(genres)];
};
