import {Rating} from "../consts.js";

export const getRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// export const getUniqueGenres = (films) => {
//   const genres = films.map((film) => film.genre);
//   genres.unshift(ALL_GENRES);

//   return [...new Set(genres)];
// };

export const getFilmById = (films, id) => {
  return films.find((film) => film.id === id);
};

export const getSimilarFilms = (films, activeFilm) => films.filter((film) => film.genre === activeFilm.genre && film.id !== activeFilm.id);

export const getLevel = (rating) => {
  switch (true) {
    case (rating < 3):
      return Rating.BAD;
    case (rating >= 3 && rating < 5):
      return Rating.NORMAL;
    case (rating >= 5 && rating < 8):
      return Rating.GOOD;
    case (rating >= 8 && rating < 10):
      return Rating.VERY_GOOD;
  }
  return Rating.AWESOME;
};
