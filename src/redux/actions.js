export const Action = {
  CHANGE_FILTER: `Change filter`,
  RENDER_FILMS: `Render films`,
  PLAY_VIDEO: `Play video`,
  EXIT_VIDEO: `Exit video`,
  LOAD_FILMS: `Load films`,
  LOAD_PROMO_FILM: `Load promo film`,
  SET_ACTIVE_FILM: `Set active film`,
  REQUIRED_AUTHORIZATION: `Required authorization`,
  ERROR_AUTHORIZATION: `Error authorization `,
  SET_USER_DATA: `Set user data`,
};

export const filterFilms = (filter) => {
  return {
    type: Action.CHANGE_FILTER,
    payload: filter
  };
};

export const renderFilms = () => {
  return {
    type: Action.RENDER_FILMS,
  };
};

export const playVideo = () => ({
  type: Action.PLAY_VIDEO
});

export const exitVideo = () => ({
  type: Action.EXIT_VIDEO
});

export const loadFilms = (films) => ({
  type: Action.LOAD_FILMS,
  payload: films,
});

export const loadPromoFilm = (film) => ({
  type: Action.LOAD_PROMO_FILM,
  payload: film,
});

export const setActiveFilm = (film) => ({
  type: Action.SET_ACTIVE_FILM,
  payload: film,
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
