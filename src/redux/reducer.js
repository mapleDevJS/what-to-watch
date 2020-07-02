import films from "../mocks/films.js";
import {Action} from "./actions.js";
import {View} from "../components/app/app.jsx";

const FILTER = {
  ALL: `All genres`
};

const getFilmsByFilter = (filter) => {
  if (filter === FILTER.ALL) {
    return films;
  } else {
    return films.filter((film) => film.genre === filter);
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
  activeFilm: null,
  shownFilms: 8,
  films,
  filters: getUniqueGenres()
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.CHANGE_FILTER:
      const filter = action.payload;

      return Object.assign({}, state, {
        activeFilter: filter,
        films: getFilmsByFilter(filter),
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


    default:
      return state;
  }
};

export {reducer};
