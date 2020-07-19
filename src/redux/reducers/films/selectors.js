
import NameSpace from "../name-space.js";
// import {getFilms} from "../data/selectors.js";

export const getActiveFilter = (state) => {
  return state[NameSpace.FILMS].activeFilter;
};


