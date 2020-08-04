import {Action, Creator} from "./actions.js";
import Film from "../../../components/adapters/film.js";
import {getFilmById} from "../../../utils/utils.js";

const PATH = {
  FILMS: `films`,
  PROMO: `promo`,
  FAVORITE: `favorite`
};

const initialState = {
  isAppLoading: true,
  films: [],
  promoFilm: {},
  favoriteFilms: []
};

export const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/${PATH.FILMS}`)
      .then((response) => {
        const films = response.data.map((film) => Film.parse(film));
        dispatch(Creator.loadFilms(films));
      })
      .catch((err) => {
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

  postFavoriteFilm: (id) => (dispatch, getState, api) => {
    const film = getFilmById(id);
    const status = (film.isFavorite) ? 0 : 1;
    return api.post(`/${PATH.FAVORITE}/${film.id}/${status}`)
      .then(() => {
        film.isFavorite = !film.isFavorite;
        if (status) {
          dispatch(Creator.addFilmToMyList(film));
        } else {
          dispatch(Creator.removeFilmFromMyList(film));
        }
      })
      .catch((err) => {
        throw err;
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


    case Action.SET_IS_APP_LOADING:
      return Object.assign({}, state, {
        isAppLoading: action.payload
      });

    case Action.ADD_FILM_TO_FAVORITE:
      return Object.assign({}, state, {
        favoriteFilms: state.favoriteFilms.concat(action.payload)
      });

    case Action.REMOVE_FILM_FROM_FAVORITE:
      return Object.assign({}, state, {
        favoriteFilms: [...state.favoriteFilms
          .filter(
              (film) => film.id !== action.payload.id
          )]
      });

    default:
      return state;
  }
};
