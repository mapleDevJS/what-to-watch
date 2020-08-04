export const Action = {
  LOAD_FILMS: `Load films`,
  LOAD_PROMO_FILM: `Load promo films`,
  LOAD_FAVORITE_FILMS: `Load favorite films`,
  SET_FILMS_LOADING: `Set films loading status`,
  SET_PROMO_FILM_LOADING: `Set promo film loading status`,
  SET_FAVORITE_FILMS_LOADING: `Set favorite films loading status`,
  SET_IS_APP_LOADING: `Set app loading status`,
  ADD_FILM_TO_FAVORITE: `Add film to favorites`,
  REMOVE_FILM_FROM_FAVORITE: `Remove film from favorite`
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

  // setFilmsLoading: (isLoading) => ({
  //   type: Action.SET_FILMS_LOADING,
  //   payload: isLoading
  // }),

  // setPromoFilmLoading: (isLoading) => ({
  //   type: Action.SET_PROMO_FILM_LOADING,
  //   payload: isLoading
  // }),

  setFavoriteFilmsLoading: (isLoading) => ({
    type: Action.SET_FAVORITE_FILMS_LOADING,
    payload: isLoading
  }),

  setAppLoadingStatus: (isLoading) => ({
    type: Action.SET_IS_APP_LOADING,
    payload: isLoading
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
