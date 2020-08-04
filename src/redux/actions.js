export const Action = {
  CHANGE_FILTER: `Change filter`,
  SHOW_MORE: `Show more films`,
  LOAD_FILMS: `Load films`,
  LOAD_PROMO_FILM: `Load promo film`,
  LOAD_FAVORITE_FILMS: `Load favorite films`,
  SET_FAVORITE_FILMS: `Set favorite films`,
  REQUIRED_AUTHORIZATION: `Required authorization`,
  ERROR_AUTHORIZATION: `Error authorization `,
  SET_USER_DATA: `Set user data`,
  SET_APP_LOADING_STATUS: `Set app loading status`
};

export const filterFilms = (filter) => {
  return {
    type: Action.CHANGE_FILTER,
    payload: filter
  };
};

export const showMore = () => {
  return {
    type: Action.SHOW_MORE,
  };
};

export const loadFilms = (films) => ({
  type: Action.LOAD_FILMS,
  payload: films,
});

export const loadPromoFilm = (film) => ({
  type: Action.LOAD_PROMO_FILM,
  payload: film,
});

export const loadFavoriteFilms = (films) => ({
  type: Action.LOAD_FAVORITE_FILMS,
  payload: films,
});

export const requireAuthorization = (status) => ({
  type: Action.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const errorAuthorization = (code) => ({
  type: Action.ERROR_AUTHORIZATION,
  payload: code,
});

export const setUserData = (userData) => ({
  type: Action.SET_USER_DATA,
  payload: userData,
});

export const setAppLoadingStatus = (isLoading) => ({
  type: Action.SET_APP_LOADING_STATUS,
  payload: isLoading
});
