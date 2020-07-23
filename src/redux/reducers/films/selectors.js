// import {createSelector} from "reselect";
import NameSpace from "../name-space.js";
// import {getUniqueGenres} from "../../../utils/utils.js";
// import {getFilms} from "../data/selectors.js";

// export const getFilters = createSelector(
//     getFilms,
//     (films) => getUniqueGenres(films)
// );

export const getActiveFilter = (state) => {
  return state[NameSpace.FILMS].activeFilter;
};

export const getShownFilms = (state) => {
  return state[NameSpace.FILMS].shownFilms;
};

export const getView = (state) => {
  return state[NameSpace.FILMS].view;
};
