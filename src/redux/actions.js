export const Action = {
  CHANGE_FILTER: `Change filter`,
  CHANGE_VIEW: `Change view`,
  RENDER_FILMS: `Render films`,
  PLAY_VIDEO: `Play video`,
  EXIT_VIDEO: `Exit video`,
  LOAD_FILMS: `Load films`,
  SET_FILTERED_FILMS: `Set filtered films`,
  LOAD_PROMO_FILM: `Load promo film`,
  SET_PROMO_FILM_LOADED: `Set promo film loaded`,
  SET_ACTIVE_FILM: `Set active film`,
  REQUIRED_AUTHORIZATION: `Required authorization`,
};

export const changeView = (film) => {
  return {
    type: Action.CHANGE_VIEW,
    payload: film
  };
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

export const setPromoFilmLoaded = () => ({
  type: Action.SET_PROMO_FILM_LOADED,
});

export const setActiveFilm = (film) => ({
  type: Action.SET_ACTIVE_FILM,
  payload: film,
});

export const setFilteredFilms = (films) => ({
  type: Action.SET_FILTERED_FILMS,
  payload: films,
});

export const requireAuthorization = (status) => ({
  type: Action.REQUIRED_AUTHORIZATION,
  payload: status,
});

