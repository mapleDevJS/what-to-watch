
import NameSpace from "../name-space.js";

export const getActiveFilter = (state) => {
  return state[NameSpace.FILMS].activeFilter;
};

export const getShownFilms = (state) => {
  return state[NameSpace.FILMS].shownFilms;
};
