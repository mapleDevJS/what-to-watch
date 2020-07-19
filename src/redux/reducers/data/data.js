import {Action, loadFilms, loadPromoFilm, setActiveFilm, setFilteredFilms} from "../../actions.js";
import filmAdapter from "../../../components/adapters/film-adapter.js";
import {FILTER} from "../../../consts.js";
// import {getFilteredFilms} from "./selectors.js";

const initialState = {
  films: [],
  filteredFilms: null,
  promoFilm: {},
  activeFilm: {},
  activeFilter: FILTER.ALL,
};

export const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const films = response.data.map((film) => filmAdapter(film));
        dispatch(loadFilms(films));
        dispatch(setFilteredFilms(films));
      });
  },

  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        const promoFilm = filmAdapter(response.data);
        dispatch(loadPromoFilm(promoFilm));
        dispatch(setActiveFilm(promoFilm));
      });
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.CHANGE_FILTER:
      const filter = action.payload;

      return Object.assign({}, state, {
        activeFilter: filter,
        filteredFilms: action.payload,
        shownFilms: 8
      });

    case Action.LOAD_FILMS:
      return Object.assign({}, state, {
        films: action.payload,
      });

    case Action.LOAD_PROMO_FILM:
      return Object.assign({}, state, {
        promoFilm: action.payload
      });

    case Action.SET_ACTIVE_FILM:
      return Object.assign({}, state, {
        activeFilm: action.payload
      });

    case Action.SET_FILTERED_FILMS:
      return Object.assign({}, state, {
        filteredFilms: action.payload
      });

    default:
      return state;
  }
};
