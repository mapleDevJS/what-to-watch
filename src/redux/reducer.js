import films from "../mocks/films.js";
import PROMO_FILM from "../mocks/films.js";
import {Action} from "./actions.js";
import {View} from "../components/app/app.jsx";

const FILTER = {
  ALL: `All genres`
};

const getFilmsByFilter = (filmsToFilter = [], filter) => {
  if (filter === FILTER.ALL) {
    return filmsToFilter;
  } else {
    return filmsToFilter.filter((film) => film.genre === filter);
  }
};

const getUniqueGenres = () => {
  const genres = films.map((film) => film.genre);
  genres.unshift(FILTER.ALL);

  return [...new Set(genres)];
};

const initialState = {
  view: View.LIST,
  activeFilter: FILTER.ALL,
  activeFilm: PROMO_FILM,
  shownFilms: 8,
  films,
  filteredFilms: films,
  filters: getUniqueGenres()
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.CHANGE_FILTER:
      const filter = action.payload;

      return Object.assign({}, state, {
        activeFilter: filter,
        filteredFilms: getFilmsByFilter(state.films, filter),
        shownFilms: 8
      });

    case Action.CHANGE_VIEW:
      return Object.assign({}, state, {
        view: View.DETAILS,
        activeFilm: action.payload
      });

    case Action.RENDER_FILMS:
      return Object.assign({}, state, {
        shownFilms: state.shownFilms + 8
      });

    case Action.PLAY_VIDEO:
      return Object.assign({}, state, {
        view: View.VIDEO,
        activeFilm: action.payload
      });

    case Action.EXIT_VIDEO:
      return Object.assign({}, state, {
        view: View.LIST
      });


    default:
      return state;
  }
};

export {reducer};
