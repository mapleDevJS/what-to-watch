import {createSelector} from "reselect";
import NameSpace from "../name-space.js";
import {ALL_GENRES} from "../../../consts.js";
import {getActiveFilter} from "../films/selectors.js";

export const getFilms = (state) => state[NameSpace.DATA].films;

export const getPromoFilm = (state) => state[NameSpace.DATA].promoFilm;

export const getFilteredFilms = createSelector(
    getFilms,
    getActiveFilter,
    (films, filter) => {
      return (filter === ALL_GENRES)
        ? films
        : films.filter((film) => film.genre === filter);
    }
);

export const getFavoriteFilms = (state) => state[NameSpace.DATA].favoriteFilms;

export const getAppLoadingStatus = (state) => state[NameSpace.DATA].isAppLoading;

export const getAppErrorStatus = (state) => state[NameSpace.DATA].isAppError;

export const getFilters = createSelector(
    getFilms,
    (films) => {
      const genres = films.map((film) => film.genre);
      genres.unshift(ALL_GENRES);

      return [...new Set(genres)];
    }
);

export const getComments = (state) => state[NameSpace.DATA].comments;
