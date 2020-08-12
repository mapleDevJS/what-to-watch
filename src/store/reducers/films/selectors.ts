
import NameSpace from "../name-space";

export const getActiveFilter = (state) => {
  return state[NameSpace.FILMS].activeFilter;
};

export const getShownFilms = (state) => {
  return state[NameSpace.FILMS].shownFilms;
};
