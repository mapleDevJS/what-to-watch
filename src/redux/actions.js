export const Action = {
  CHANGE_FILTER: `Change filter`,
  CHANGE_VIEW: `Change view`,
  RENDER_FILMS: `Render films`
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

