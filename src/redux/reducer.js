
import {Action} from "./actions.js";
import {View} from "../components/app/app.jsx";

const getFilmsByFilter = (filmsToFilter = [], filter) => {
  if (filter === `All genres`) {
    return filmsToFilter;
  } else {
    return filmsToFilter.filter((film) => film.genre === filter);
  }
};

const reducer = (state, action) => {
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
        view: View.VIDEO
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
