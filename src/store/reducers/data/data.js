import {Action, Creator} from "./actions.js";

import Film from "../../../components/adapters/film.js";
import Comment from "../../../components/adapters/comment.js";

import {AppRoute} from "../../../consts.js";

import history from '../../../history.js';

const PATH = {
  FILMS: `films`,
  PROMO: `promo`,
  FAVORITE: `favorite`,
  COMMENTS: `comments`,
};

const initialState = {
  isAppLoading: true,
  isAppError: false,
  films: [],
  promoFilm: {},
  favoriteFilms: [],
  comments: [],
};

export const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/${PATH.FILMS}`)
      .then((response) => {
        const films = response.data.map((film) => Film.parse(film));
        dispatch(Creator.loadFilms(films));
      })
      .catch((err) => {
        dispatch(Creator.setAppErrorStatus(true));
        throw err;
      });
  },

  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/${PATH.FILMS}/${PATH.PROMO}`)
      .then(
          (response) => {
            const promoFilm = Film.parse(response.data);
            dispatch(Creator.loadPromoFilm(promoFilm));
          }
      )
      .catch((err) => {
        throw err;
      });
  },

  loadFavoriteFilms: () => (dispatch, getState, api) => {
    dispatch(Creator.setAppLoadingStatus(true));
    return api.get(`/${PATH.FAVORITE}`)
      .then(
          (response) => {
            const films = response.data.map((film) => Film.parse(film));
            dispatch(Creator.loadFavoriteFilms(films));
            dispatch(Creator.setAppLoadingStatus(false));
          }

      );
  },

  loadComments: (id) => (dispatch, getState, api) => {
    return api.get(`/${PATH.COMMENTS}/${id}`)
      .then((response) => {
        const comments = response.data.map((comment) => Comment.parse(comment));
        dispatch(Creator.loadComments(comments));
      })
      .catch((err) => {
        throw err;
      });
  },

  postFavoriteFilm: (film) => (dispatch, getState, api) => {
    return api.post(`/${PATH.FAVORITE}/${film.id}/${film.isFavorite ? 0 : 1}`)
      .then(() => {
        return film.isFavorite
          ? dispatch(Creator.removeFilmFromMyList(film))
          : dispatch(Creator.addFilmToMyList(film));
      })
      .catch((err) => {
        throw err;
      });
  },

  postFilmReview: (id, review) => (dispatch, getState, api) => {
    dispatch(Creator.setAppErrorStatus(false));
    dispatch(Creator.setAppLoadingStatus(true));
    return api.post(`/${PATH.COMMENTS}/${id}`, {
      rating: review.rating,
      comment: review.comment,
    })
    .then(() => {
      dispatch(Creator.setAppLoadingStatus(false));
      dispatch(Creator.setAppErrorStatus(false));
      dispatch(Operation.loadComments(id));
      history.push(`${AppRoute.FILMS}/${id}`);
    })
    .catch(() => {
      dispatch(Creator.setAppLoadingStatus(false));
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

    case Action.LOAD_FAVORITE_FILMS:
      return Object.assign({}, state, {
        favoriteFilms: action.payload
      });

    case Action.LOAD_COMMENTS:
      return Object.assign({}, state, {
        comments: action.payload
      });


    case Action.SET_APP_LOADING_STATUS:
      return Object.assign({}, state, {
        isAppLoading: action.payload
      });

    case Action.ADD_FILM_TO_FAVORITE:
      return Object.assign({}, state, {
        films: [...state.films].map((film) => {
          if (film.id !== action.payload.id) {
            return film;
          }
          return Object.assign({}, action.payload, {isFavorite: !action.payload.isFavorite});
        }),

        promoFilm: state.promoFilm.id === action.payload.id
          ? Object.assign({}, action.payload, {isFavorite: !action.payload.isFavorite})
          : state.promoFilm,

        favoriteFilms: state.favoriteFilms.concat(action.payload)
      });

    case Action.REMOVE_FILM_FROM_FAVORITE:
      return Object.assign({}, state, {
        films: [...state.films].map((film) => {
          if (film.id !== action.payload.id) {
            return film;
          }
          return Object.assign({}, action.payload, {isFavorite: !action.payload.isFavorite});
        }),

        promoFilm: state.promoFilm.id === action.payload.id
          ? Object.assign({}, action.payload, {isFavorite: !action.payload.isFavorite})
          : state.promoFilm,

        favoriteFilms: [...state.favoriteFilms
          .filter(
              (film) => film.id !== action.payload.id
          )]
      });

    default:
      return state;
  }
};
