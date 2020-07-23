import {Action, loadFilms, loadPromoFilm, setActiveFilm} from "../../actions.js";
import filmAdapter from "../../../components/adapters/film-adapter.js";

const emptyFilm = {
  color: ``,
  backgroundImg: ``,
  description: ``,
  director: ``,
  genre: ``,
  id: 0,
  isFavourite: false,
  name: `Promo film is loading...`,
  poster: ``,
  previewImg: ``,
  previewVideo: ``,
  rating: 0,
  released: 0,
  runtime: 0,
  scoresCount: 0,
  starring: [],
  video: ``,
};

const initialState = {
  films: [],
  promoFilm: emptyFilm,
  activeFilm: emptyFilm,
};

export const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const films = response.data.map((film) => filmAdapter(film));
        dispatch(loadFilms(films));
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

    default:
      return state;
  }
};
