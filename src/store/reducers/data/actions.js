export const Action = {
  LOAD_FILMS: `Load films`,
  LOAD_PROMO_FILM: `Load promo films`,
  LOAD_FAVORITE_FILMS: `Load favorite films`,
  LOAD_COMMENTS: `Load comments`,
  UPDATE_FILM: `Update film`,
  SET_APP_LOADING_STATUS: `Set app loading status`,
  SET_APP_ERROR_STATUS: `Set app error status`,
  ADD_FILM_TO_FAVORITE: `Add film to favorites`,
  REMOVE_FILM_FROM_FAVORITE: `Remove film from favorite`,
};

export const Creator = {
  loadFilms: (films) => ({
    type: Action.LOAD_FILMS,
    payload: films
  }),

  loadPromoFilm: (film) => ({
    type: Action.LOAD_PROMO_FILM,
    payload: film
  }),

  loadFavoriteFilms: (films) => ({
    type: Action.LOAD_FAVORITE_FILMS,
    payload: films
  }),

  loadComments: (comments) => ({
    type: Action.LOAD_COMMENTS,
    payload: comments
  }),

  updateFilm: (film) => ({
    type: Action.UPDATE_FILM,
    payload: film
  }),

  setAppLoadingStatus: (isLoading) => ({
    type: Action.SET_APP_LOADING_STATUS,
    payload: isLoading
  }),

  setAppErrorStatus: (isError) => ({
    type: Action.SET_APP_ERROR_STATUS,
    payload: isError
  }),

  addFilmToMyList: (film) => ({
    type: Action.ADD_FILM_TO_FAVORITE,
    payload: film
  }),

  removeFilmFromMyList: (film) => ({
    type: Action.REMOVE_FILM_FROM_FAVORITE,
    payload: film
  }),
};
