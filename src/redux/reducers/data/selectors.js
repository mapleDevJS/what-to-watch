import {createSelector} from "reselect";
import NameSpace from "../name-space.js";
import {FILTER} from "../../../consts.js";
import {getActiveFilter} from "../films/selectors.js";

export const getFilms = (state) => {
  return state[NameSpace.DATA].films;
};

export const getPromoFilm = (state) => {
  return state[NameSpace.DATA].promoFilm;
};

export const getFilteredFilms = createSelector(
    getFilms,
    getActiveFilter,
    (films, filter) => {
      if (filter === FILTER.ALL) {
        return films;
      } else {
        return films.filter((film) => film.genre === filter);
      }
    }
);

export const getActiveFilm = (state) => {
  return state[NameSpace.DATA].activeFilm;
};
